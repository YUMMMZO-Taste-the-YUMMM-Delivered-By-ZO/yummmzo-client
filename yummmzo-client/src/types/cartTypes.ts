export interface CartHeaderComponentProps {
    itemsCount: number;
    onClearCart: () => void;
};

export interface CartItem {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
};

export interface CartItemCardComponentProps {
    item: CartItem;
    index: number;
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
};

export interface OrderSummaryComponentProps {
    subtotal: number;
    deliveryFee: number;
    discount: number;
    grandTotal: number;
};

export interface CheckoutButtonComponentProps {
    grandTotal: number;
};