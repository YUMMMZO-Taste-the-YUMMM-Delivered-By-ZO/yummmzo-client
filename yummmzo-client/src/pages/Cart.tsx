import { CartHeaderComponent } from "@/components/cart/CartHeaderComponent";
import { CartItemCardComponent } from "@/components/cart/CartItemCardComponent";
import { CheckoutButtonComponent } from "@/components/cart/CheckoutButtonComponent";
import { CouponSectionComponent } from "@/components/cart/CouponSectionComponent";
import { EmptyCartComponent } from "@/components/cart/EmptyCartComponent";
import { OrderSummaryComponent } from "@/components/cart/OrderSummaryComponent";
import { BottomNav } from "@/components/layout/BottomNav";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
    const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

    const deliveryFee = 2.99;
    const discount = 0;
    const grandTotal = total + deliveryFee - discount;

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

                        <CouponSectionComponent />

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

            <BottomNav />
        </div>
    );
}