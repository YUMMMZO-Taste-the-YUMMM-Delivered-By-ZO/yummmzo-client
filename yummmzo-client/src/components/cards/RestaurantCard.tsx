import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RestaurantCard({ restaurant, index = 0 }: { restaurant: any, index?: number }) {
    
    // Formating Price
    const formattedPrice = restaurant.priceForTwo ? `₹${restaurant.priceForTwo} for two` : null;

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
                    
                    {/* Image Section */}
                    <div className="relative aspect-square overflow-hidden">
                        {restaurant.image && (
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        )}
                        
                        {/* Status Check */}
                        {restaurant.status !== "OPEN" && (
                            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    Closed
                                </span>
                            </div>
                        )}

                        {/* Rating Badge */}
                        {restaurant.rating > 0 && (
                            <div className="absolute top-3 right-3">
                                <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border/50">
                                    <Star className="h-3.5 w-3.5 text-rating fill-rating" />
                                    <span className="text-xs font-bold">{restaurant.rating}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                        <h3 className="font-bold text-foreground text-lg mb-1 truncate group-hover:text-primary transition-colors">
                            {restaurant.name}
                        </h3>
                        
                        {/* Location as a fallback for cuisine */}
                        <p className="text-xs text-muted-foreground mb-4 truncate italic">
                            {restaurant.location || "Nearby"}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-[11px] font-medium text-muted-foreground uppercase tracking-tight">
                                {restaurant.deliveryTime && (
                                    <span className="flex items-center gap-1 bg-muted/50 px-2 py-0.5 rounded">
                                        <Clock className="h-3 w-3" />
                                        {restaurant.deliveryTime}
                                    </span>
                                )}
                                {formattedPrice && (
                                    <span className="bg-muted/50 px-2 py-0.5 rounded">
                                        {formattedPrice}
                                    </span>
                                )}
                            </div>
                            
                            <Button size="sm" className="h-8 w-8 p-0 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}