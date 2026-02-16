import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

interface Props {
    orderStatus: string;
    restaurantDeliveryTime?: string;
};

const ETA_MESSAGES: Record<string, { label: string; sub: string }> = {
    PENDING:          { label: "Waiting for confirmation", sub: "Order just placed" },
    CONFIRMED:        { label: "Order Confirmed!",         sub: "Restaurant is getting ready" },
    PREPARING:        { label: "Being Prepared",           sub: "Chef is cooking your order" },
    READY:            { label: "Ready for Pickup",         sub: "Waiting for delivery partner" },
    OUT_FOR_DELIVERY: { label: "On the Way!",              sub: "Your order is nearby" },
    DELIVERED:        { label: "Delivered!",               sub: "Enjoy your meal 🎉" },
    CANCELLED:        { label: "Order Cancelled",          sub: "We hope to see you again" },
};

export const ETACardComponent = ({ orderStatus, restaurantDeliveryTime }: Props) => {
    const eta = ETA_MESSAGES[orderStatus] ?? { label: "Processing", sub: "Please wait..." };
    const isDelivered = orderStatus === 'DELIVERED';
    const isCancelled = orderStatus === 'CANCELLED';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`rounded-2xl p-6 text-center ${
                isCancelled ? "bg-destructive" : "bg-primary"
            }`}
        >
            {isDelivered ? (
                <CheckCircle className="h-10 w-10 text-primary-foreground mx-auto mb-2" />
            ) : null}

            <p className="text-primary-foreground/80 text-sm mb-1">
                {isDelivered ? "Status" : "Estimated Arrival"}
            </p>

            <p className="text-2xl font-bold text-primary-foreground">
                {!isDelivered && !isCancelled && restaurantDeliveryTime
                    ? restaurantDeliveryTime
                    : eta.label
                }
            </p>

            <div className="flex items-center justify-center gap-2 mt-2 text-primary-foreground/80">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{eta.sub}</span>
            </div>
        </motion.div>
    );
};