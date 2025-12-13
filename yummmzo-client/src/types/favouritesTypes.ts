export interface FavoritesSearchComponentProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    image: string;
    deliveryFee: number;
};

export interface FavoritesGridComponentProps {
    favorites: Restaurant[];
};