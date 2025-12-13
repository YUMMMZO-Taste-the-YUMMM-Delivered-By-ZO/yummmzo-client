import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { sampleAddresses } from "@/data/mockData";
import { EmptyCheckoutComponent } from "@/components/checkout/EmptyCheckoutComponent";
import { CheckoutHeaderComponent } from "@/components/checkout/CheckoutHeaderComponent";
import { DeliveryAddressComponent } from "@/components/checkout/DeliveryAddressComponent";
import { CheckoutOrderSummaryComponent } from "@/components/checkout/CheckoutOrderSummaryComponent";
import { DeliveryInstructionsComponent } from "@/components/checkout/DeliveryInstructionsComponent";
import { PaymentMethodComponent } from "@/components/checkout/PaymentMethodComponent";
import { PlaceOrderButtonComponent } from "@/components/checkout/PlaceOrderButtonComponent";

export default function Checkout() {
    const navigate = useNavigate();
    const { items, total, clearCart } = useCart();
    const [selectedPayment, setSelectedPayment] = useState("card");
    const [isLoading, setIsLoading] = useState(false);

    const deliveryFee = 2.99;
    const grandTotal = total + deliveryFee;
    const defaultAddress = sampleAddresses.find((a) => a.isDefault);

    const handlePlaceOrder = () => {
        setIsLoading(true);
        setTimeout(() => {
            clearCart();
            navigate("/order/success/ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase());
        }, 1500);
    };

    if (items.length === 0) {
        return <EmptyCheckoutComponent />;
    }

    return (
        <div className="min-h-screen bg-background pb-32">
            <CheckoutHeaderComponent />

            <main className="container mx-auto px-4 py-6 space-y-6">
                <DeliveryAddressComponent address={defaultAddress} />

                <CheckoutOrderSummaryComponent
                    items={items}
                    total={total}
                />

                <DeliveryInstructionsComponent />

                <PaymentMethodComponent
                    selectedPayment={selectedPayment}
                    setSelectedPayment={setSelectedPayment}
                />
            </main>

            <PlaceOrderButtonComponent
                grandTotal={grandTotal}
                isLoading={isLoading}
                onPlaceOrder={handlePlaceOrder}
            />
        </div>
    );
}