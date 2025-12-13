import { motion } from "framer-motion";
import {
    CheckCircle,
    Clock,
    Package,
    Truck,
    Home,
    LucideIcon,
} from "lucide-react";

interface TimelineItem {
    step: string;
    time: string;
    completed: boolean;
    icon: LucideIcon;
}

interface OrderStatusTimelineComponentProps {
    orderStatus: string;
}

export const OrderStatusTimelineComponent = ({ orderStatus }: OrderStatusTimelineComponentProps) => {
    const timeline: TimelineItem[] = [
        { step: "Order Placed", time: "10:30 AM", completed: true, icon: CheckCircle },
        { step: "Confirmed", time: "10:32 AM", completed: true, icon: CheckCircle },
        { step: "Preparing", time: "10:35 AM", completed: orderStatus !== "preparing", icon: Package },
        { step: "Ready for Pickup", time: "10:50 AM", completed: orderStatus === "on_the_way" || orderStatus === "delivered", icon: Clock },
        { step: "Picked Up", time: "10:55 AM", completed: orderStatus === "on_the_way" || orderStatus === "delivered", icon: Truck },
        { step: "Delivered", time: "11:15 AM", completed: orderStatus === "delivered", icon: Home },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6"
        >
            <h2 className="font-semibold mb-6">Order Status</h2>
            <div className="space-y-4">
                {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${item.completed
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted/30 text-muted-foreground"
                                    }`}
                            >
                                <item.icon className="h-4 w-4" />
                            </div>
                            {index < timeline.length - 1 && (
                                <div
                                    className={`w-0.5 h-8 ${item.completed ? "bg-primary" : "bg-muted/30"
                                        }`}
                                />
                            )}
                        </div>
                        <div className="flex-1 pb-4">
                            <p
                                className={`font-medium ${item.completed ? "text-foreground" : "text-muted-foreground"
                                    }`}
                            >
                                {item.step}
                            </p>
                            <p className="text-sm text-muted-foreground">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};