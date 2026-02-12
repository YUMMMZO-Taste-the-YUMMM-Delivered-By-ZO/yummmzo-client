import { useEffect, useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { restaurants, categories, menuItems } from "@/data/mockData";
import { TopBarComponent } from "@/components/home/TopBarComponent";
import { SearchBarComponent } from "@/components/home/SearchBarComponent";
import { PromoCarouselComponent } from "@/components/home/PromoCarouselComponent"; 
import { CategoryPillsComponent } from "@/components/home/CategoryPillsComponent";
import { BestChoiceSectionComponent } from "@/components/home/BestChoiceSectionComponent";
import { AllRestaurantsSectionComponent } from "@/components/home/AllRestaurantsSectionComponent";
import { FilterSortComponent } from "@/components/home/FilterSortComponent";
import { SlidersHorizontal } from "lucide-react";
import { convertCoordinatesToAddress } from "@/services/currentLocation.services";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { setUserAddressDisplayName } from "@/store/slices/userLocationSlice";

export default function Home() {
    // useSelector
    const { latitude, longitude } = useSelector((state: RootState) => state.userCurrentLocation);

    // useDispatch
    const dispatch = useDispatch();

    // State Variables
    const [activeCategory, setActiveCategory] = useState("All Type");
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filter Logic
    const filteredRestaurants = restaurants.filter((r) => {
        const matchesCategory = activeCategory === "All Type" || r.cuisine.toLowerCase().includes(activeCategory.toLowerCase());
        const matchesSearch = !searchQuery || r.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // useEffect
    useEffect(() => {
        const getUserAddress = async () => {
            if (!latitude || !longitude) {
                return;
            };

            try {
                const response = await convertCoordinatesToAddress(latitude, longitude);
                dispatch(setUserAddressDisplayName(response.display_name));
            } 
            catch (error) {
                console.error("Geocoding Error:", error);
            };
        };

        getUserAddress();
    }, [latitude, longitude, dispatch]);

    return (
        <div className="min-h-screen bg-background pb-24 md:pb-0">
            <TopBarComponent showSearch={showSearch} setShowSearch={setShowSearch} />
            <div className="container mx-auto px-4 mt-4">
                <SearchBarComponent 
                    showSearch={showSearch} 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                />
            </div>
            <main className="container mx-auto px-4 py-6">
                <PromoCarouselComponent />
                <div className="space-y-4 mb-8">
                    <CategoryPillsComponent 
                        categories={categories} 
                        activeCategory={activeCategory} 
                        setActiveCategory={setActiveCategory} 
                    />
                    <button onClick={() => setIsFilterOpen(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 text-foreground transition-all group shadow-sm hover-lift active:scale-95">
                        <SlidersHorizontal className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                        <span className="font-bold text-body-sm">Filters & Sort</span>
                    </button>
                </div>
                <BestChoiceSectionComponent bestChoiceItems={menuItems.slice(0, 6)} />
                <AllRestaurantsSectionComponent 
                    filteredRestaurants={filteredRestaurants} 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    setActiveCategory={setActiveCategory} 
                />
            </main>
            <FilterSortComponent isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
            <BottomNav />
        </div>
    );
}