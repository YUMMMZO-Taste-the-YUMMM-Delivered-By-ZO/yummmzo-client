import { motion } from "framer-motion";
import { CheckCircle, Clock, Package, Truck, Home, XCircle } from "lucide-react";

interface StatusHistoryItem {
    status: string;
    createdAt: string;
};

interface Props {
    orderStatus: string;
    statusHistory: StatusHistoryItem[];
};

const TIMELINE_STEPS = [
    { step: "Order Placed",       status: "PENDING",          icon: CheckCircle },
    { step: "Confirmed",          status: "CONFIRMED",         icon: CheckCircle },
    { step: "Preparing",          status: "PREPARING",         icon: Package },
    { step: "Ready for Pickup",   status: "READY",             icon: Clock },
    { step: "Out for Delivery",   status: "OUT_FOR_DELIVERY",  icon: Truck },
    { step: "Delivered",          status: "DELIVERED",         icon: Home },
];

const ORDER_SEQUENCE = ["PENDING", "CONFIRMED", "PREPARING", "READY", "OUT_FOR_DELIVERY", "DELIVERED"];

const formatTime = (isoString: string): string => {
    return new Date(isoString).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
};

export const OrderStatusTimelineComponent = ({ orderStatus, statusHistory }: Props) => {
    const currentIndex = ORDER_SEQUENCE.indexOf(orderStatus);
    const isCancelled = orderStatus === 'CANCELLED';

    const getHistoryTime = (status: string): string | null => {
        const entry = statusHistory?.find((h) => h.status === status);
        return entry ? formatTime(entry.createdAt) : null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6"
        >
            <h2 className="font-semibold mb-6">Order Status</h2>

            {isCancelled ? (
                <div className="flex items-center gap-3 text-destructive">
                    <XCircle className="h-5 w-5" />
                    <p className="font-medium">Order Cancelled</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {TIMELINE_STEPS.map((item, index) => {
                        const stepIndex = ORDER_SEQUENCE.indexOf(item.status);
                        const completed = stepIndex <= currentIndex;
                        const time = getHistoryTime(item.status);

                        return (
                            <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        completed
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted/30 text-muted-foreground"
                                    }`}>
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    {index < TIMELINE_STEPS.length - 1 && (
                                        <div className={`w-0.5 h-8 ${completed ? "bg-primary" : "bg-muted/30"}`} />
                                    )}
                                </div>
                                <div className="flex-1 pb-4">
                                    <p className={`font-medium ${completed ? "text-foreground" : "text-muted-foreground"}`}>
                                        {item.step}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {time ?? (completed ? "—" : "Pending")}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </motion.div>
    );
};