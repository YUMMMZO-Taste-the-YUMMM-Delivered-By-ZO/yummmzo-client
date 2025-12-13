import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { OrderHistoryCardComponentProps } from "@/types/orderHistoryTypes";

export const OrderHistoryCardComponent = ({ order, index }: OrderHistoryCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-card rounded-2xl border border-border p-4 hover:border-primary/30 transition-all"
        >
            <div className="flex items-start gap-4">
                <img
                    src={order.restaurantImage}
                    alt={order.restaurantName}
                    className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">
                            {order.date}
                        </span>
                        <Badge className="bg-success/20 text-success border-success/30">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Delivered
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

            <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reorder
                </Button>
                <Link to={`/restaurant/${order.items[0]?.restaurantId || "1"}/review`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                        <Star className="h-4 w-4 mr-2" />
                        Write Review
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};