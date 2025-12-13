export interface RestaurantDetailHeaderComponentProps {
    restaurantName: string;
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
};

export interface RestaurantDetailSearchBarComponentProps {
    showSearch: boolean;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export interface Restaurant {
    name: string;
    address: string;
    rating: number;
    deliveryTime: string;
    description: string;
};

export interface RestaurantInfoCardComponentProps {
    restaurant: Restaurant;
};

export interface MenuTabsComponentProps {
    menuCategories: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    restaurantId: number;
    rating: number;
    calories?: number;
}

export interface MenuGridComponentProps {
    filteredItems: MenuItem[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setActiveTab: (tab: string) => void;
};

export interface FloatingCartButtonComponentProps {
    itemCount: number;
    total: number;
};