import { CartHeaderComponent } from "@/components/cart/CartHeaderComponent";
import { CartItemCardComponent } from "@/components/cart/CartItemCardComponent";
import { CheckoutButtonComponent } from "@/components/cart/CheckoutButtonComponent";
import { CouponSectionComponent } from "@/components/cart/CouponSectionComponent";
import { EmptyCartComponent } from "@/components/cart/EmptyCartComponent";
import { OrderSummaryComponent } from "@/components/cart/OrderSummaryComponent";
import { AvailableCouponsComponent } from "@/components/cart/AvailableCouponsComponent";
import { BottomNav } from "@/components/layout/BottomNav";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export default function Cart() {
    // useCart
    const { cartData, isCartLoading, clearCart, updateItem } = useCart();
    const items = cartData?.items ?? [];
    const bill = cartData?.bill;

    // State Variables
    const [isCouponSelectionOpen, setIsCouponSelectionOpen] = useState(false);

    // Handler Functions
    const handleSelectCoupon = () => {
        setIsCouponSelectionOpen(false);
    };

    return (
        <div className="min-h-screen bg-background pb-40 md:pb-24">
            {/* CartHeaderComponent — itemsCount aur onClearCart pass karo */}
            <CartHeaderComponent itemsCount={items.length} onClearCart={clearCart} />

            <main className="container mx-auto px-4 py-6">
                {
                    (items.length === 0) ? 
                        (
                            <EmptyCartComponent />
                        ) 
                        : 
                        (
                            <>
                                <div className="space-y-4 mb-8">
                                    {
                                        items.map((item: any, index: number) => (
                                            <CartItemCardComponent
                                                key={item.menuItemId}
                                                item={item}
                                                index={index}
                                                updateItem={updateItem}
                                            />
                                        ))
                                    }
                                </div>

                                <CouponSectionComponent onOpenSelection={() => setIsCouponSelectionOpen(true)} />

                                <OrderSummaryComponent
                                    itemTotal={bill?.itemTotal ?? 0}
                                    gst={bill?.gst ?? 0}
                                    deliveryFee={bill?.deliveryFee ?? 0}
                                    packagingFee={bill?.packagingFee ?? 0}
                                    total={bill?.total ?? 0}
                                />
                            </>
                        )
                }
            </main>

            {
                (items.length > 0) 
                && 
                <CheckoutButtonComponent total={bill?.total ?? 0} />
            }

            <AvailableCouponsComponent
                isOpen={isCouponSelectionOpen}
                onClose={() => setIsCouponSelectionOpen(false)}
                onSelect={handleSelectCoupon}
            />

            <BottomNav />
        </div>
    );
}