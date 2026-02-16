import type { OrderDetailsCardComponentProps } from "@/types/trackOrderTypes";
import { motion } from "framer-motion";

export const OrderDetailsCardComponent = ({ order }: OrderDetailsCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <h3 className="font-semibold mb-3">Order Details</h3>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Order ID</span>
                    <span>#{order.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Restaurant</span>
                    <span>{order.restaurantName}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Items</span>
                    <span>{order.items.length} items</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                    <span>Total</span>
                    <span className="text-primary">₹{order.total.toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    );
};