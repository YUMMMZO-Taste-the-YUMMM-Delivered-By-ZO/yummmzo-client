import type { CheckoutOrderSummaryComponentProps } from "@/types/checkoutTypes";
import { motion } from "framer-motion";

export const CheckoutOrderSummaryComponent = ({ items, bill }: CheckoutOrderSummaryComponentProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="bg-card rounded-2xl p-4 border border-border space-y-3">
                {items.map((item: any) => (
                    <div key={item.menuItemId} className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                            {item.name} <span className="text-muted-foreground font-normal">x{item.quantity}</span>
                        </span>
                        <span className="font-medium text-sm">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}

                <div className="border-t border-border pt-3 space-y-1.5 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                        <span>Item Total</span>
                        <span>₹{bill?.itemTotal?.toFixed(2) ?? "0.00"}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>GST (5%)</span>
                        <span>₹{bill?.gst?.toFixed(2) ?? "0.00"}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Delivery Fee</span>
                        <span>₹{bill?.deliveryFee?.toFixed(2) ?? "0.00"}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Packaging Fee</span>
                        <span>₹{bill?.packagingFee?.toFixed(2) ?? "0.00"}</span>
                    </div>
                    {bill?.discount > 0 && (
                        <div className="flex justify-between text-green-500">
                            <span>Discount</span>
                            <span>- ₹{bill.discount.toFixed(2)}</span>
                        </div>
                    )}
                    <div className="flex justify-between font-semibold text-base pt-1 border-t border-border">
                        <span>Total</span>
                        <span>₹{bill?.total?.toFixed(2) ?? "0.00"}</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};