import { CartHeaderComponent } from "@/components/cart/CartHeaderComponent";
import { CartItemCardComponent } from "@/components/cart/CartItemCardComponent";
import { CheckoutButtonComponent } from "@/components/cart/CheckoutButtonComponent";
import { EmptyCartComponent } from "@/components/cart/EmptyCartComponent";
import { OrderSummaryComponent } from "@/components/cart/OrderSummaryComponent";
import { AvailableCouponsComponent } from "@/components/cart/AvailableCouponsComponent";
import { BottomNav } from "@/components/layout/BottomNav";
import { useCart } from "@/hooks/useCart";
import { useCoupon } from "@/hooks/useCoupon";
import { useState } from "react";
import { CouponSectionComponent } from '@/components/cart/CouponSectionComponent';

export default function Cart() {
    // useCart
    const { cartData, isCartLoading, clearCart, updateItem } = useCart();
    const items = cartData?.items ?? [];
    const bill = cartData?.bill;
    const restaurantId = cartData?.restaurantId;
    const cartTotal = bill?.itemTotal ?? 0;

    // useCoupon
    const { couponsData, isCouponsLoading, applyCoupon, removeCoupon, isApplying, couponCode, setCouponCode } = useCoupon(restaurantId);

    // State Variables
    const [isCouponSelectionOpen, setIsCouponSelectionOpen] = useState(false);

    // Handler Functions
    const handleSelectCoupon = (code: string) => {
        if (cartData?.coupon?.code === code) {
            removeCoupon();
        } 
        else {
            applyCoupon(code, {
                onSuccess: () => setIsCouponSelectionOpen(false)
            });
        }
    };

    return (
        <div className="min-h-screen bg-background pb-40 md:pb-24">
            <CartHeaderComponent itemsCount={items.length} onClearCart={clearCart} />

            <main className="container mx-auto px-4 py-6">
                {items.length === 0 ? (
                    <EmptyCartComponent />
                ) : (
                    <>
                        <div className="space-y-4 mb-8">
                            {items.map((item: any, index: number) => (
                                <CartItemCardComponent
                                    key={item.menuItemId}
                                    item={item}
                                    index={index}
                                    updateItem={updateItem}
                                />
                            ))}
                        </div>

                        <CouponSectionComponent
                            onOpenSelection={() => setIsCouponSelectionOpen(true)}
                            appliedCoupon={cartData?.coupon ?? null}
                            onRemoveCoupon={removeCoupon}
                            couponCode={couponCode}
                            setCouponCode={setCouponCode}
                            onApplyManual={applyCoupon}
                            isApplying={isApplying}
                        />

                        <OrderSummaryComponent
                            itemTotal={bill?.itemTotal ?? 0}
                            gst={bill?.gst ?? 0}
                            deliveryFee={bill?.deliveryFee ?? 0}
                            packagingFee={bill?.packagingFee ?? 0}
                            discount={bill?.discount ?? 0}
                            total={bill?.total ?? 0}
                        />
                    </>
                )}
            </main>

            {items.length > 0 && (
                <CheckoutButtonComponent total={bill?.total ?? 0} />
            )}

            <AvailableCouponsComponent
                isOpen={isCouponSelectionOpen}
                onClose={() => setIsCouponSelectionOpen(false)}
                onSelect={handleSelectCoupon}
                coupons={couponsData ?? []}
                cartTotal={cartTotal}
                isLoading={isCouponsLoading}
                appliedCouponCode={cartData?.coupon?.code ?? null}
            />

            <BottomNav />
        </div>
    );
}