import type { LucideIcon } from "lucide-react";

export interface TimelineItem {
    step: string;
    time: string;
    completed: boolean;
    icon: LucideIcon;
};

export interface OrderStatusTimelineComponentProps {
    orderStatus: string;
};

export interface OrderRestaurantInfoCardComponentProps {
    restaurantImage: string;
    restaurantName: string;
    orderId: string;
    date: string;
};

export interface OrderItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
};

export interface OrderItemsListComponentProps {
    items: OrderItem[];
};

export interface DeliveryDetailsCardComponentProps {
    deliveryAddress: string;
};

export interface BillSummaryComponentProps {
    total: number;
};

export interface OrderActionButtonsComponentProps {
    orderId: string;
    orderStatus: string;
};