import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useOrder } from "@/hooks/useOrder";
import { getAllAddressesService } from "@/services/address.services";
import { useQuery } from "@tanstack/react-query";
import { EmptyCheckoutComponent } from "@/components/checkout/EmptyCheckoutComponent";
import { CheckoutHeaderComponent } from "@/components/checkout/CheckoutHeaderComponent";
import { DeliveryAddressComponent } from "@/components/checkout/DeliveryAddressComponent";
import { CheckoutOrderSummaryComponent } from "@/components/checkout/CheckoutOrderSummaryComponent";
import { DeliveryInstructionsComponent } from "@/components/checkout/DeliveryInstructionsComponent";
import { PaymentMethodComponent } from "@/components/checkout/PaymentMethodComponent";
import { PlaceOrderButtonComponent } from "@/components/checkout/PlaceOrderButtonComponent";
import { toast } from "@/hooks/use-toast";

export default function Checkout() {
    const navigate = useNavigate();
    const { cartData, isCartLoading } = useCart();
    const { createOrder, isCreatingOrder } = useOrder();

    const [selectedPayment, setSelectedPayment] = useState<"COD" | "MOCK_ONLINE">("COD");
    const [deliveryInstruction, setDeliveryInstruction] = useState("");

    const { data: addresses, isLoading: isAddressLoading } = useQuery({
        queryKey: ["addresses"],
        queryFn: getAllAddressesService
    });

    const defaultAddress = addresses?.find((a: any) => a.isDefault) ?? addresses?.[0] ?? null;
    const [selectedAddress, setSelectedAddress] = useState<any>(null);
    const activeAddress = selectedAddress ?? defaultAddress;

    const items = cartData?.items ?? [];
    const bill = cartData?.bill;

    const handlePlaceOrder = async () => {
        // 1. GUARD — address select hai?
        if(!activeAddress){
            toast({
                variant: 'destructive',
                title: "No Address Selected",
                description: "Please select a delivery address."
            });
            return;
        };

        // 2. CREATE ORDER
        const order = await createOrder({
            addressId: activeAddress.id,
            paymentMethod: selectedPayment,
            deliveryInstruction: deliveryInstruction || undefined
        });

        // 3. NAVIGATE TO ORDER TRACKING
        navigate(`/order/success/${order.id}`);
    };

    if(!isCartLoading && items.length === 0){
        return <EmptyCheckoutComponent />;
    };

    return (
        <div className="min-h-screen bg-background pb-32">
            <CheckoutHeaderComponent />
            <main className="container mx-auto px-4 py-6 space-y-6">
                <DeliveryAddressComponent
                    address={activeAddress}
                    addresses={addresses ?? []}
                    isLoading={isAddressLoading}
                    onSelectAddress={setSelectedAddress}
                />
                <CheckoutOrderSummaryComponent items={items} bill={bill} />
                <DeliveryInstructionsComponent
                    instruction={deliveryInstruction}
                    setInstruction={setDeliveryInstruction}
                />
                <PaymentMethodComponent
                    selectedPayment={selectedPayment}
                    setSelectedPayment={setSelectedPayment}
                />
            </main>
            <PlaceOrderButtonComponent
                grandTotal={bill?.total ?? 0}
                isLoading={isCreatingOrder}
                onPlaceOrder={handlePlaceOrder}
            />
        </div>
    );
};