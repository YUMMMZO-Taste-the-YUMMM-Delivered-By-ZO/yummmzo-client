import { motion } from "framer-motion";

interface OrderSummaryProps {
    itemTotal: number;
    gst: number;
    deliveryFee: number;
    packagingFee: number;
    discount: number;
    total: number;
}

export const OrderSummaryComponent = ({ 
    itemTotal, 
    gst, 
    deliveryFee, 
    packagingFee, 
    discount,
    total 
}: OrderSummaryProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-6 border border-border"
        >
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Item Total</span>
                    <span>₹{itemTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">GST (5%)</span>
                    <span>₹{gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Packaging Fee</span>
                    <span>₹{packagingFee.toFixed(2)}</span>
                </div>

                {/* Discount Row — sirf tab dikhao jab discount > 0 */}
                {discount > 0 && (
                    <div className="flex justify-between text-primary font-semibold">
                        <span>Discount</span>
                        <span>- ₹{discount.toFixed(2)}</span>
                    </div>
                )}

                <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    );
};