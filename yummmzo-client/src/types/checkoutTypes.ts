import type { LucideIcon } from "lucide-react";

export interface Address {
    type: string;
    isDefault: boolean;
    address: string;
    city: string;
    state: string;
    pincode: string;
};

export interface DeliveryAddressComponentProps {
    address?: Address;
};

export interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
};

export interface CheckoutOrderSummaryComponentProps {
    items: CartItem[];
    total: number;
};

export interface PaymentMethod {
    id: string;
    name: string;
    icon: LucideIcon;
};

export interface PaymentMethodComponentProps {
    selectedPayment: string;
    setSelectedPayment: (id: string) => void;
};

export interface PlaceOrderButtonComponentProps {
    grandTotal: number;
    isLoading: boolean;
    onPlaceOrder: () => void;
};