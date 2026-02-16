import { BottomNav } from "@/components/layout/BottomNav";
import { RestaurantDetailHeaderComponent } from "@/components/restaurant-detail/RestaurantDetailHeaderComponent";
import { RestaurantHeroImageComponent } from "@/components/restaurant-detail/RestaurantHeroImageComponent";
import { RestaurantInfoCardComponent } from "@/components/restaurant-detail/RestaurantInfoCardComponent";
import { MenuTabsComponent, ALL_TAB_ID } from "@/components/restaurant-detail/MenuTabsComponent";
import { MenuGridComponent } from "@/components/restaurant-detail/MenuGridComponent";
import { FloatingCartButtonComponent } from "@/components/restaurant-detail/FloatingCartButtonComponent";
import { MenuFilterComponent } from "@/components/restaurant-detail/MenuFilterComponent";
import { RestaurantReviewsComponent } from "@/components/restaurant-detail/RestaurantReviewsComponent";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRestaurantDetailsService, getRestaurantMenuService } from "@/services/restaurant.services";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export default function RestaurantDetail() {
    // useSelector
    const { latitude, longitude } = useSelector((state: RootState) => state.userCurrentLocation);

    // useParams
    const { id: restaurantId } = useParams();

    // UI state
    const [showSearch,   setShowSearch]   = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Active category tab — starts as ALL
    const [activeTab, setActiveTab] = useState<string | null>(ALL_TAB_ID);

    // Search — local input state with debounce → filters.search
    const [searchInput, setSearchInput] = useState("");

    // Backend-driven filters — queryKey includes these so any change triggers refetch
    const [filters, setFilters] = useState({
        search:       "",
        sort:         "RECOMMENDED",
        isVeg:        false,
        isBestseller: false,
        spiceLevel:   "",
    });

    // Debounce searchInput → filters.search (400ms)
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setFilters((prev) => ({ ...prev, search: searchInput }));
        }, 400);
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [searchInput]);

    // Handler: tab change
    const handleShowItems = (tabId: string) => {
        setActiveTab(tabId);
    };

    // Handler: apply menu filters from MenuFilterComponent
    const handleApplyMenuFilters = (updated: typeof filters) => {
        setFilters((prev) => ({ ...prev, ...updated }));
        // Reset to ALL tab so user sees full filtered result
        setActiveTab(ALL_TAB_ID);
    };

    // Handler: clear all menu filters + search
    const handleClearFilters = () => {
        setSearchInput("");
        setFilters({ search: "", sort: "RECOMMENDED", isVeg: false, isBestseller: false, spiceLevel: "" });
        setActiveTab(ALL_TAB_ID);
    };

    // Handler: toggle search bar
    const handleShowSearch = () => {
        setShowSearch((prev) => !prev);
        // Clear search when closing
        if (showSearch) {
            setSearchInput("");
        }
    };

    // useQuery — restaurant details
    const { data: restaurantData, isLoading: isRestaurantDataLoading } = useQuery({
        queryKey: ["restaurantDetails", restaurantId],
        queryFn:  () => getRestaurantDetailsService(Number(restaurantId), latitude!, longitude!),
        enabled:  !!restaurantId && !!latitude && !!longitude,
    });

    // useQuery — restaurant menu (refetches when filters change via queryKey)
    const { data: restaurantMenu, isLoading: isRestaurantMenuLoading } = useQuery({
        queryKey: ["restaurantMenu", restaurantId, filters],
        queryFn:  () => getRestaurantMenuService(Number(restaurantId), filters),
        enabled:  !!restaurantId,  // restaurantData ka wait mat karo
    });

    // Count active non-default menu filters for filter button badge
    const activeMenuFilterCount = [
        filters.isVeg,
        filters.isBestseller,
        filters.spiceLevel !== "",
    ].filter(Boolean).length;

    return (
        <div className="min-h-screen bg-background pb-24">
            <RestaurantDetailHeaderComponent
                handleShowSearch={handleShowSearch}
                showSearch={showSearch}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                restaurantData={restaurantData}
            />

            <RestaurantHeroImageComponent restaurantData={restaurantData} />

            <RestaurantInfoCardComponent restaurantData={restaurantData} />

            <div className="container mx-auto px-4">
                <MenuTabsComponent
                    restaurantMenu={restaurantMenu || []}
                    activeTab={activeTab}
                    handleShowItems={handleShowItems}
                    onFilterClick={() => setIsFilterOpen(true)}
                />

                <MenuGridComponent
                    restaurantMenu={restaurantMenu || []}
                    activeTab={activeTab}
                    restaurantId={restaurantData?.id}
                    searchQuery={filters.search}
                    onClearFilters={handleClearFilters}
                />

            </div>

            {/* Menu filter panel */}
            <MenuFilterComponent
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                filters={{
                    sort:         filters.sort,
                    isVeg:        filters.isVeg,
                    isBestseller: filters.isBestseller,
                    spiceLevel:   filters.spiceLevel,
                }}
                onApply={handleApplyMenuFilters}
            />

            <FloatingCartButtonComponent />

            <BottomNav />
        </div>
    );
}