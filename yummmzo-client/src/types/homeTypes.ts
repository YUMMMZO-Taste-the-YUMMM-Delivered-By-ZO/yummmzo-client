export interface TopBarComponentProps {
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
};

export interface TopBarActionsComponentProps {
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
};

export interface SearchBarComponentProps {
    showSearch: boolean;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export interface CuisinePillsComponentProps {
    cuisines: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
};

export interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    image: string;
    deliveryFee: number;
}

export interface AllRestaurantsSectionComponentProps {
    filteredRestaurants: Restaurant[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setActiveCategory: (category: string) => void;
};

export interface RestaurantCardProps {
    restaurant: Restaurant;
    index?: number;
};