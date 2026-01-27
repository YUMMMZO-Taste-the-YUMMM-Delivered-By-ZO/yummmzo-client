import { useState } from "react";
import { CartHeaderComponent } from "@/components/cart/CartHeaderComponent";
import { CartItemCardComponent } from "@/components/cart/CartItemCardComponent";
import { CheckoutButtonComponent } from "@/components/cart/CheckoutButtonComponent";
import { CouponSectionComponent } from "@/components/cart/CouponSectionComponent";
import { EmptyCartComponent } from "@/components/cart/EmptyCartComponent";
import { OrderSummaryComponent } from "@/components/cart/OrderSummaryComponent";
import { AvailableCouponsComponent } from "@/components/cart/AvailableCouponsComponent";
import { BottomNav } from "@/components/layout/BottomNav";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
    const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
    const [isCouponSelectionOpen, setIsCouponSelectionOpen] = useState(false);

    const deliveryFee = 2.99;
    const discount = 0;
    const grandTotal = total + deliveryFee - discount;

    const handleSelectCoupon = (code: string) => {
        console.log("Applying coupon:", code);
        setIsCouponSelectionOpen(false);
        // JS logic would go here to update the discount state
    };

    return (
        <div className="min-h-screen bg-background pb-40 md:pb-24">
            <CartHeaderComponent
                itemsCount={items.length}
                onClearCart={clearCart}
            />

            <main className="container mx-auto px-4 py-6">
                {items.length === 0 ? (
                    <EmptyCartComponent />
                ) : (
                    <>
                        {/* Cart Items */}
                        <div className="space-y-4 mb-8">
                            {items.map((item, index) => (
                                <CartItemCardComponent
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    onUpdateQuantity={updateQuantity}
                                    onRemove={removeFromCart}
                                />
                            ))}
                        </div>

                        <CouponSectionComponent onOpenSelection={() => setIsCouponSelectionOpen(true)} />

                        <OrderSummaryComponent
                            subtotal={total}
                            deliveryFee={deliveryFee}
                            discount={discount}
                            grandTotal={grandTotal}
                        />
                    </>
                )}
            </main>

            {items.length > 0 && (
                <CheckoutButtonComponent grandTotal={grandTotal} />
            )}

            <AvailableCouponsComponent 
                isOpen={isCouponSelectionOpen} 
                onClose={() => setIsCouponSelectionOpen(false)}
                onSelect={handleSelectCoupon}
            />

            <BottomNav />
        </div>
    );
}