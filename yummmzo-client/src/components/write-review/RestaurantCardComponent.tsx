import { motion } from "framer-motion";

interface Restaurant {
    image: string;
    name: string;
    cuisine: string;
    address: string;
}

interface RestaurantCardComponentProps {
    restaurant: Restaurant;
}

export const RestaurantCardComponent = ({ restaurant }: RestaurantCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <div className="flex gap-4">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                    <h3 className="font-semibold text-primary">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                    <p className="text-sm text-muted-foreground">{restaurant.address}</p>
                </div>
            </div>
        </motion.div>
    );
};