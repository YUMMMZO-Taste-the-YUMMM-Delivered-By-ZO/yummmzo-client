import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Restaurant } from "@/data/mockData";

interface RestaurantCardProps {
    restaurant: Restaurant;
    index?: number;
}

export function RestaurantCard({ restaurant, index = 0 }: RestaurantCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="group"
        >
            <Link to={`/restaurant/${restaurant.id}`}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card transition-all duration-300 group-hover:shadow-elevated group-hover:border-primary/30">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                        <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {!restaurant.isOpen && (
                            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Currently Closed
                                </span>
                            </div>
                        )}
                        <div className="absolute top-3 right-3">
                            <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                <Star className="h-3.5 w-3.5 text-rating fill-rating" />
                                <span className="text-xs font-semibold">{restaurant.rating}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <h3 className="font-semibold text-primary text-lg mb-1 truncate">
                            {restaurant.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                            {restaurant.cuisine}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5" />
                                    {restaurant.deliveryTime}
                                </span>
                                <span>{restaurant.priceRange}</span>
                            </div>
                            <Button size="sm" className="h-8 w-8 p-0 rounded-full">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}