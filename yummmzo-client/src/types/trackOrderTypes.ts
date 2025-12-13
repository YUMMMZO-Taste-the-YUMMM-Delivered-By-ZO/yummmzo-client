export interface TrackOrderHeaderComponentProps {
    orderId?: string;
};

export interface Driver {
    name: string;
    phone: string;
    rating: number;
    deliveries: number;
    image: string;
};

export interface DriverInfoCardComponentProps {
    driver: Driver;
};

export interface Order {
    id: string;
    restaurantName: string;
    items: any[];
    total: number;
};

export interface OrderDetailsCardComponentProps {
    order: Order;
};

export interface DeliveryAddressCardComponentProps {
    deliveryAddress: string;
};