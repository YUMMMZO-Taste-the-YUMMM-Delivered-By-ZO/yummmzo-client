import { useState } from "react";
import { useParams } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { restaurants, menuItems } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { RestaurantDetailHeaderComponent } from "@/components/restaurant-detail/RestaurantDetailHeaderComponent";
import { RestaurantDetailSearchBarComponent } from "@/components/restaurant-detail/RestaurantDetailSearchBarComponent";
import { RestaurantHeroImageComponent } from "@/components/restaurant-detail/RestaurantHeroImageComponent";
import { RestaurantInfoCardComponent } from "@/components/restaurant-detail/RestaurantInfoCardComponent";
import { MenuTabsComponent } from "@/components/restaurant-detail/MenuTabsComponent";
import { MenuGridComponent } from "@/components/restaurant-detail/MenuGridComponent";
import { FloatingCartButtonComponent } from "@/components/restaurant-detail/FloatingCartButtonComponent";
import { MenuFilterComponent } from "@/components/restaurant-detail/MenuFilterComponent";
import { RestaurantReviewsComponent } from "@/components/restaurant-detail/RestaurantReviewsComponent";

export default function RestaurantDetail() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { items, total } = useCart();

    const restaurant = restaurants.find((r) => r.id === id) || restaurants[0];
    const restaurantMenuItems = menuItems.filter(
        (item) => item.restaurantId === id
    );

    const menuCategories = ["All", ...new Set(restaurantMenuItems.map((item) => item.category))];

    const filteredItems = restaurantMenuItems.filter((item) => {
        const matchesCategory = activeTab === "All" || item.category === activeTab;
        const matchesSearch =
            !searchQuery ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen bg-background pb-24">
            <RestaurantDetailHeaderComponent
                restaurantName={restaurant.name}
                showSearch={showSearch}
                setShowSearch={setShowSearch}
            />

            <RestaurantDetailSearchBarComponent
                showSearch={showSearch}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <RestaurantHeroImageComponent
                image={restaurant.image}
                name={restaurant.name}
            />

            <RestaurantInfoCardComponent restaurant={restaurant} />

            <div className="container mx-auto px-4">
                <MenuTabsComponent
                    menuCategories={menuCategories}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    onFilterClick={() => setIsFilterOpen(true)}
                />

                <MenuGridComponent
                    filteredItems={filteredItems}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setActiveTab={setActiveTab}
                />

                {/* Highly requested Review Section */}
                <div className="mt-16 pt-16 border-t border-border/50">
                    <RestaurantReviewsComponent />
                </div>
            </div>

            <MenuFilterComponent 
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
            />

            <FloatingCartButtonComponent
                itemCount={itemCount}
                total={total}
            />

            <BottomNav />
        </div>
    );
}