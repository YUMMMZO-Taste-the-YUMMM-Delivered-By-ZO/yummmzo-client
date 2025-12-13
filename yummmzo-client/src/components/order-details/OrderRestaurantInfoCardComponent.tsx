import { motion } from "framer-motion";

interface OrderRestaurantInfoCardComponentProps {
    restaurantImage: string;
    restaurantName: string;
    orderId: string;
    date: string;
}

export const OrderRestaurantInfoCardComponent = ({
    restaurantImage,
    restaurantName,
    orderId,
    date
}: OrderRestaurantInfoCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <div className="flex gap-4">
                <img
                    src={restaurantImage}
                    alt={restaurantName}
                    className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                    <h3 className="font-semibold text-primary">{restaurantName}</h3>
                    <p className="text-sm text-muted-foreground">Order #{orderId}</p>
                    <p className="text-sm text-muted-foreground">{date}</p>
                </div>
            </div>
        </motion.div>
    );
};