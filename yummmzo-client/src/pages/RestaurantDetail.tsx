import { BottomNav } from "@/components/layout/BottomNav";
import { RestaurantDetailHeaderComponent } from "@/components/restaurant-detail/RestaurantDetailHeaderComponent";
import { RestaurantHeroImageComponent } from "@/components/restaurant-detail/RestaurantHeroImageComponent";
import { RestaurantInfoCardComponent } from "@/components/restaurant-detail/RestaurantInfoCardComponent";
import { MenuTabsComponent } from "@/components/restaurant-detail/MenuTabsComponent";
import { MenuGridComponent } from "@/components/restaurant-detail/MenuGridComponent";
import { FloatingCartButtonComponent } from "@/components/restaurant-detail/FloatingCartButtonComponent";
import { MenuFilterComponent } from "@/components/restaurant-detail/MenuFilterComponent";
import { RestaurantReviewsComponent } from "@/components/restaurant-detail/RestaurantReviewsComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRestaurantDetailsService, getRestaurantMenuService } from "@/services/restaurant.services";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export default function RestaurantDetail() {
    // useSelector
    const { latitude , longitude } = useSelector((state: RootState) => state.userCurrentLocation);

    // State Variables
    const [activeTab , setActiveTab] = useState(null);
    const [searchQuery , setSearchQuery] = useState("");
    const [showSearch , setShowSearch] = useState(false);
    const [isFilterOpen , setIsFilterOpen] = useState(false);
    const [filters , setFilters] = useState({
        search: "",
        sort: "RECOMMENDED",
        isVeg: false,
        isBestseller: false,
        spiceLevel: "NORMAL"
    });

    // useParams
    const { id: restaurantId } = useParams();

    // useQuery
    const { data: restaurantData , isLoading: isRestaurantDataLoading } = useQuery({
        queryKey: ["restaurantDetails" , restaurantId],
        queryFn: () => getRestaurantDetailsService(Number(restaurantId) , latitude! , longitude!),
        enabled: !!restaurantId && !!latitude && !!longitude
    });
    console.log(restaurantData);

    const { data: restaurantMenu , isLoading: isRestaurantMenuLoading } = useQuery({
        queryKey: ["restaurantMenu" , restaurantId],
        queryFn: () => getRestaurantMenuService(Number(restaurantId)! , filters!),
        enabled: !!restaurantId && !!latitude && !!longitude
    });
    console.log(restaurantMenu);

    // Handler Functions
    const handleShowSearch = () => {
        setShowSearch(!showSearch);
        console.log(showSearch)
    };

    const handleShowItems = (categoryId: any) => {
        console.log(categoryId);
        setActiveTab(categoryId);
    };

    // useEffect
    useEffect(() => {
        if (restaurantMenu && restaurantMenu.length > 0) {
            setActiveTab(restaurantMenu[0].id);
        }
    }, [restaurantMenu]);

    // TODO: Add useCart hook for itemCount and total
    return (
        <div className="min-h-screen bg-background pb-24">
            <RestaurantDetailHeaderComponent handleShowSearch={handleShowSearch} showSearch={showSearch} restaurantData={restaurantData}/>

            <RestaurantHeroImageComponent restaurantData={restaurantData}/>

            <RestaurantInfoCardComponent restaurantData={restaurantData}/>

            <div className="container mx-auto px-4">
                <MenuTabsComponent restaurantMenu={restaurantMenu} handleShowItems={handleShowItems} activeTab={activeTab}/>

                <MenuGridComponent restaurantMenu={restaurantMenu} activeTab={activeTab}/>

                <div className="mt-16 pt-16 border-t border-border/50">
                    <RestaurantReviewsComponent />
                </div>
            </div>

            {
                isFilterOpen
                &&
                <MenuFilterComponent />
            }

            <FloatingCartButtonComponent />

            <BottomNav />
        </div>
    );
}