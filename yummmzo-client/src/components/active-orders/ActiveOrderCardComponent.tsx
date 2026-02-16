import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { OrderProgressBarComponent } from "./OrderProgressBarComponent";
import type { ActiveOrderCardComponentProps } from "@/types/activeOrdersTypes";

const getStatusColor = (status: string) => {
    switch (status) {
        case "PENDING":       return "bg-muted/20 text-muted-foreground";
        case "CONFIRMED":     return "bg-blue-500/20 text-blue-400 border-blue-500/30";
        case "PREPARING":     return "bg-warning/20 text-warning border-warning/30";
        case "READY":         return "bg-purple-500/20 text-purple-400 border-purple-500/30";
        case "OUT_FOR_DELIVERY": return "bg-primary/20 text-primary border-primary/30";
        default:              return "bg-muted/20 text-muted-foreground";
    }
};

const getStatusText = (status: string) => {
    switch (status) {
        case "PENDING":          return "Pending";
        case "CONFIRMED":        return "Confirmed";
        case "PREPARING":        return "Preparing";
        case "READY":            return "Ready for Pickup";
        case "OUT_FOR_DELIVERY": return "On the Way";
        default:                 return status;
    }
};

export const ActiveOrderCardComponent = ({ order, index }: ActiveOrderCardComponentProps) => {
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
                            src={order.restaurant?.image}
                            alt={order.restaurant?.name}
                            className="w-16 h-16 rounded-xl object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground">
                                    Order #{order.id}
                                </span>
                                <Badge className={getStatusColor(order.orderStatus)}>
                                    {getStatusText(order.orderStatus)}
                                </Badge>
                            </div>
                            <h3 className="font-semibold text-primary truncate">
                                {order.restaurant?.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {order.items?.length} items • ₹{Number(order.total).toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <OrderProgressBarComponent status={order.orderStatus} />

                    <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Est. {order.restaurant?.deliveryTime || '30-40 min'}</span>
                        <span className="ml-auto text-primary text-xs font-medium">Track Order →</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};