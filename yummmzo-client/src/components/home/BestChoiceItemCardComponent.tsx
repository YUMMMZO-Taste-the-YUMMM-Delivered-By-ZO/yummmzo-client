import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface MenuItem {
    id: number;
    name: string;
    price: number;
    image: string;
    restaurantId: number;
    rating: number;
    calories?: number;
}

interface BestChoiceItemCardComponentProps {
    item: MenuItem;
    index: number;
}

export const BestChoiceItemCardComponent = ({ item, index }: BestChoiceItemCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex-shrink-0 w-48"
        >
            <Link to={`/restaurant/${item.restaurantId}`}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-square overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-3">
                        <h3 className="font-medium text-sm text-primary truncate">
                            {item.name}
                        </h3>
                        <div className="flex items-center justify-between mt-2">
                            <span className="font-bold">${item.price.toFixed(2)}</span>
                            <div className="flex items-center gap-1">
                                <Star className="h-3.5 w-3.5 text-rating fill-rating" />
                                <span className="text-xs">{item.rating}</span>
                            </div>
                        </div>
                        {item.calories && (
                            <p className="text-[10px] text-muted-foreground mt-1">
                                {item.calories} cal
                            </p>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};