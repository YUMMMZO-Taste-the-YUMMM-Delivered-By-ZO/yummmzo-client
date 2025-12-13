import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, Flame, ChevronDown } from "lucide-react";
import type { RestaurantInfoCardComponentProps } from "@/types/restaurantDetailTypes";

export const RestaurantInfoCardComponent = ({ restaurant }: RestaurantInfoCardComponentProps) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <div className="container mx-auto px-4 -mt-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl border border-border p-6 shadow-card"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {restaurant.name}
                </h1>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{restaurant.address}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-rating fill-rating" />
                        <span className="font-semibold">{restaurant.rating}</span>
                        <span className="text-muted-foreground text-sm">(500+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Flame className="h-4 w-4" />
                        <span className="text-sm">200-400 cal</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm">
                    {showFullDescription
                        ? restaurant.description
                        : `${restaurant.description?.slice(0, 100)}...`}
                </p>
                <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-primary text-sm font-medium mt-2 flex items-center gap-1"
                >
                    {showFullDescription ? "Show less" : "Show more"}
                    <ChevronDown
                        className={`h-4 w-4 transition-transform ${showFullDescription ? "rotate-180" : ""
                            }`}
                    />
                </button>
            </motion.div>
        </div>
    );
};