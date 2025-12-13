import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { OrderProgressBarComponent } from "./OrderProgressBarComponent";
import { OrderTrackingInfoComponent } from "./OrderTrackingInfoComponent";
import type { ActiveOrderCardComponentProps } from "@/types/activeOrdersTypes";

export const ActiveOrderCardComponent = ({ order, index }: ActiveOrderCardComponentProps) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "preparing":
                return "bg-warning/20 text-warning border-warning/30";
            case "on_the_way":
                return "bg-info/20 text-info border-info/30";
            default:
                return "bg-muted/20 text-muted-foreground";
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "preparing":
                return "Preparing";
            case "on_the_way":
                return "On the way";
            default:
                return status;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <Link to={`/order/${order.id}`}>
                <div className="bg-card rounded-2xl border border-border p-4 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-4">
                        <img
                            src={order.restaurantImage}
                            alt={order.restaurantName}
                            className="w-16 h-16 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground">
                                    Order #{order.id}
                                </span>
                                <Badge className={getStatusColor(order.status)}>
                                    {getStatusText(order.status)}
                                </Badge>
                            </div>
                            <h3 className="font-semibold text-primary truncate">
                                {order.restaurantName}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {order.items.length} items • ${order.total.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <OrderProgressBarComponent status={order.status} />

                    <OrderTrackingInfoComponent estimatedTime={order.estimatedTime} />
                </div>
            </Link>
        </motion.div>
    );
};