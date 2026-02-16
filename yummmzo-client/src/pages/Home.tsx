import { useEffect, useRef, useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { TopBarComponent } from "@/components/home/TopBarComponent";
import { SearchBarComponent } from "@/components/home/SearchBarComponent";
import { PromoCarouselComponent } from "@/components/home/PromoCarouselComponent";
import { AllRestaurantsSectionComponent } from "@/components/home/AllRestaurantsSectionComponent";
import { FilterSortComponent } from "@/components/home/FilterSortComponent";
import { SlidersHorizontal } from "lucide-react";
import { convertCoordinatesToAddress } from "@/services/currentLocation.services";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { setUserAddressDisplayName } from "@/store/slices/userLocationSlice";
import { useQuery } from "@tanstack/react-query";
import { getAllCuisinesService, getAllRestaurantsService, getTopPicksService } from "@/services/restaurant.services";
import { TopPicksSectionComponent } from "@/components/home/TopPicksSectionComponent";
import { CuisinePillsComponent } from "@/components/home/CuisinePillsComponent";
import { useSearchParams } from "react-router-dom";
import { getFavouriteIdsService } from "@/services/favourites.services";

export default function Home() {
    // useSearchParams
    const [searchParams, setSearchParams] = useSearchParams();

    // useSelector
    const { latitude, longitude } = useSelector((state: RootState) => state.userCurrentLocation);
    const isRehydrated = useSelector((state: RootState) => state._persist?.rehydrated);

    // useDispatch
    const dispatch = useDispatch();

    // State Variables
    const [showSearch, setShowSearch]     = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        search:       searchParams.get("search")                              || "",
        cuisine:      searchParams.get("cuisine")?.split(",").filter(Boolean) || [],
        rating:       searchParams.get("rating")                              || "",
        priceRange:   searchParams.get("priceRange")                          || "",
        maxTime:      searchParams.get("maxTime")                             || "",
        freeDelivery: searchParams.get("freeDelivery") === "true",
        sort:         searchParams.get("sort")                                || "DISTANCE",
        page:         Number(searchParams.get("page"))                        || 1,
        limit:        12,
    });
    const [accumulatedRestaurants, setAccumulatedRestaurants] = useState<any[]>([]);

    // useRef
    const prevFilterSig = useRef<string>("");

    // useEffect
    useEffect(() => {
    const params: Record<string, string> = {};

    if (filters.search) {
        params.search = filters.search;
    }
    if (filters.cuisine.length) {
        params.cuisine = filters.cuisine.join(",");
    }
    if (filters.rating) {
        params.rating = filters.rating;
    }
    if (filters.priceRange) {
        params.priceRange = filters.priceRange;
    }
    if (filters.maxTime) {
        params.maxTime = filters.maxTime;
    }
    if (filters.freeDelivery) {
        params.freeDelivery = "true";
    }
    if (filters.sort !== "DISTANCE") {
        params.sort = filters.sort;
    }
    if (filters.page > 1) {
        params.page = String(filters.page);
    }

    setSearchParams(params);
}, [
    filters.search,
    filters.cuisine,
    filters.rating,
    filters.priceRange,
    filters.maxTime,
    filters.freeDelivery,
    filters.sort,
    filters.page,
    filters.limit
]);

    useEffect(() => {
        const getUserAddress = async () => {
            if (!latitude || !longitude) return;
            try {
                const response = await convertCoordinatesToAddress(latitude, longitude);
                dispatch(setUserAddressDisplayName(response.display_name));
            }
            catch (error) {
                console.error("Geocoding Error:", error);
            }
        };

        getUserAddress();
    }, [latitude, longitude, dispatch]);

    const handleCuisineToggle = (cuisineName: string) => {
        setFilters((prev) => {
            const alreadySelected = prev.cuisine.includes(cuisineName);
            return {
                ...prev,
                page:    1,
                cuisine: alreadySelected
                    ? prev.cuisine.filter((c) => c !== cuisineName)
                    : [...prev.cuisine, cuisineName],
            };
        });
    };

    const handleApplyFilters = (updated: Partial<typeof filters>) => {
        setFilters((prev) => ({ ...prev, ...updated, page: 1 }));
    };

    const handleClearFilters = () => {
        setFilters((prev) => ({
            ...prev,
            search:       "",
            cuisine:      [],
            rating:       "",
            priceRange:   "",
            maxTime:      "",
            freeDelivery: false,
            sort:         "DISTANCE",
            page:         1,
        }));
    };

    const handleLoadMore = () => {
        setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
    };

    // useQuery
    const { data: cuisinesData, isLoading: isCuisinesLoading } = useQuery({
        queryKey:  ["cuisines"],
        queryFn:   () => getAllCuisinesService(),
        staleTime: 1000 * 60 * 5,
    });

    const { data: topPicksData, isLoading: isTopPicksLoading } = useQuery({
        queryKey:  ["topPicks", latitude, longitude],
        queryFn:   () => getTopPicksService(latitude!, longitude!),
        enabled:   !!(isRehydrated && latitude && longitude),
        staleTime: 1000 * 60 * 5,
    });

    const { data: restaurantsData, isLoading: isRestaurantsLoading, isFetching: isRestaurantsFetching } = useQuery({
        queryKey:  ["restaurants", filters, latitude, longitude],
        queryFn:   () => getAllRestaurantsService({ ...filters, lat: latitude, lng: longitude }),
        enabled:   !!(isRehydrated && latitude && longitude),
        staleTime: 1000 * 60 * 5,
    });

    const { data: favouriteIds } = useQuery({
        queryKey: ["favouriteIds"],
        queryFn:  () => getFavouriteIdsService(),
    });

    useEffect(() => {
        const newRestaurants = Array.isArray(restaurantsData?.restaurants)
            ? restaurantsData.restaurants
            : [];

        if (newRestaurants.length === 0) return;

        const sig = JSON.stringify({
            search:       filters.search,
            cuisine:      filters.cuisine,
            rating:       filters.rating,
            priceRange:   filters.priceRange,
            maxTime:      filters.maxTime,
            freeDelivery: filters.freeDelivery,
            sort:         filters.sort,
        });

        if (sig !== prevFilterSig.current) {
            prevFilterSig.current = sig;
            setAccumulatedRestaurants(newRestaurants);
        }
        else {
            setAccumulatedRestaurants((prev) => {
                const existingIds = new Set(prev.map((r) => r.id));
                const fresh = newRestaurants.filter((r: any) => !existingIds.has(r.id));
                return [...prev, ...fresh];
            });
        }
    }, [restaurantsData]);

    // Normalize
    const cuisines   = Array.isArray(cuisinesData?.cuisines)   ? cuisinesData.cuisines   : [];
    const topPicks   = Array.isArray(topPicksData?.topPicks)   ? topPicksData.topPicks   : [];
    const pagination = restaurantsData?.pagination || null;

    // isLoading = first page fetch, isLoadingMore = subsequent page fetch
    const isInitialLoad = isRestaurantsLoading && filters.page === 1;
    const isLoadingMore = isRestaurantsFetching && filters.page > 1;

    // Active filter count for badge
    const activeFilterCount = [
        filters.cuisine.length > 0,
        filters.rating !== "",
        filters.priceRange !== "",
        filters.maxTime !== "",
        filters.freeDelivery,
    ].filter(Boolean).length;

    return (
        <div className="min-h-screen bg-background pb-24 md:pb-0">
            <TopBarComponent showSearch={showSearch} setShowSearch={setShowSearch} />

            <div className="container mx-auto px-4 mt-4">
                <SearchBarComponent />
            </div>

            <main className="container mx-auto px-4 py-6">
                <PromoCarouselComponent />

                <div className="space-y-4 mb-8">
                    {/* Cuisine Pills */}
                    {isCuisinesLoading ? (
                        <div className="flex gap-3 overflow-x-auto pb-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-10 w-24 bg-card animate-pulse rounded-full shrink-0" />
                            ))}
                        </div>
                    ) : (
                        <CuisinePillsComponent
                            cuisines={cuisines}
                            selectedCuisines={filters.cuisine}
                            onToggle={handleCuisineToggle}
                        />
                    )}

                    {/* Filters & Sort Button */}
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 text-foreground transition-all group shadow-sm hover-lift active:scale-95"
                    >
                        <SlidersHorizontal className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                        <span className="font-bold text-body-sm">Filters & Sort</span>
                        {activeFilterCount > 0 && (
                            <span className="ml-1 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
                                {activeFilterCount}
                            </span>
                        )}
                    </button>
                </div>

                <TopPicksSectionComponent
                    topPicks={topPicks}
                    isTopPicksLoading={isTopPicksLoading}
                />

                <AllRestaurantsSectionComponent
                    favouriteIds={favouriteIds}
                    filteredRestaurants={accumulatedRestaurants}
                    isLoading={isInitialLoad}
                    isLoadingMore={isLoadingMore}
                    totalCount={pagination?.total || 0}
                    hasMore={pagination?.hasMore || false}
                    onLoadMore={handleLoadMore}
                    onClearFilters={handleClearFilters}
                />
            </main>

            <FilterSortComponent
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                filters={{
                    sort:         filters.sort,
                    rating:       filters.rating,
                    priceRange:   filters.priceRange,
                    maxTime:      filters.maxTime,
                    freeDelivery: filters.freeDelivery,
                }}
                onApply={handleApplyFilters}
            />

            <BottomNav />
        </div>
    );
}