import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { restaurants, categories, menuItems } from "@/data/mockData";
import { TopBarComponent } from "@/components/home/TopBarComponent";
import { SearchBarComponent } from "@/components/home/SearchBarComponent";
import { PromoBannerComponent } from "@/components/home/PromoBannerComponent";
import { CategoryPillsComponent } from "@/components/home/CategoryPillsComponent";
import { BestChoiceSectionComponent } from "@/components/home/BestChoiceSectionComponent";
import { AllRestaurantsSectionComponent } from "@/components/home/AllRestaurantsSectionComponent";

export default function Home() {
    const [activeCategory, setActiveCategory] = useState("All Type");
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const filteredRestaurants = restaurants.filter((r) => {
        const matchesCategory =
            activeCategory === "All Type" ||
            r.cuisine.toLowerCase().includes(activeCategory.toLowerCase()) ||
            activeCategory.toLowerCase().includes(r.cuisine.toLowerCase());
        const matchesSearch =
            !searchQuery ||
            r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const bestChoiceItems = menuItems.slice(0, 6);

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-0">
            <TopBarComponent
                showSearch={showSearch}
                setShowSearch={setShowSearch}
            />

            <div className="container mx-auto px-4">
                <SearchBarComponent
                    showSearch={showSearch}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>

            <main className="container mx-auto px-4 py-6">
                <PromoBannerComponent />

                <CategoryPillsComponent
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <BestChoiceSectionComponent bestChoiceItems={bestChoiceItems} />

                <AllRestaurantsSectionComponent
                    filteredRestaurants={filteredRestaurants}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setActiveCategory={setActiveCategory}
                />
            </main>

            <BottomNav />
        </div>
    );
}