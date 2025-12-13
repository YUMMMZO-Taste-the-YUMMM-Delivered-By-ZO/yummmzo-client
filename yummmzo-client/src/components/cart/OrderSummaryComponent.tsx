import { motion } from "framer-motion";

interface OrderSummaryComponentProps {
    subtotal: number;
    deliveryFee: number;
    discount: number;
    grandTotal: number;
}

export const OrderSummaryComponent = ({
    subtotal,
    deliveryFee,
    discount,
    grandTotal
}: OrderSummaryComponentProps) => {
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
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-success">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                    </div>
                )}
                <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    );
};