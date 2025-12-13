export interface Order {
    id: string;
    restaurantImage: string;
    restaurantName: string;
    status: string;
    items: any[];
    total: number;
    estimatedTime?: string;
};

export interface ActiveOrderCardComponentProps {
    order: Order;
    index: number;
};