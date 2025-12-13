export interface OrderHistorySearchComponentProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export interface Order {
    id: string;
    restaurantImage: string;
    restaurantName: string;
    date: string;
    items: any[];
    total: number;
};

export interface OrderHistoryCardComponentProps {
    order: Order;
    index: number;
};