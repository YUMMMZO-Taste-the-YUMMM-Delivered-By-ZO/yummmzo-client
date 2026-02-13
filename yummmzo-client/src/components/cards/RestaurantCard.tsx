import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RestaurantCard({ restaurant, index = 0 }: { restaurant: any, index?: number }) {
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group w-full"
        >
            <Link to={`/restaurant/${restaurant.id}`}>
            
                {/* FIXED: Removed white border. Using primary-tinted (greenish) thin border */}
                <div className="bg-card/40 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/10 transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:shadow-glow">
                    
                    {/* Image Section: 16:10 Ratio for better horizontal density */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                        {restaurant.image && (
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                        
                        {/* Rating Badge: Matching the primary-tinted UI */}
                        {restaurant.rating > 0 && (
                            <div className="absolute top-2 right-2">
                                <div className="flex items-center gap-1 bg-background/60 backdrop-blur-md px-2 py-0.5 rounded-lg border border-primary/20 shadow-lg">
                                    <Star className="h-3 w-3 text-rating fill-rating" />
                                    <span className="text-[11px] font-bold text-foreground">{restaurant.rating}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-3">
                        <h3 className="font-bold text-foreground text-[14px] mb-0.5 truncate group-hover:text-primary transition-colors">
                            {restaurant.name}
                        </h3>
                        
                        <p className="text-[11px] text-muted-foreground mb-3 truncate font-medium">
                            {restaurant.location?.split(',')[0] || "Nearby"} • {restaurant.cuisine?.split(',')[0] || "Fast Food"}
                        </p>

                        <div className="flex items-center justify-between">
                            {/* Info Section: Clean & Minimalistic */}
                            <div className="flex items-center gap-2">
                                {restaurant.deliveryTime && (
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3 text-primary/70" />
                                        <span className="text-[10px] font-bold text-foreground/70 uppercase">
                                            {restaurant.deliveryTime.split(' ')[0]} min
                                        </span>
                                    </div>
                                )}
                                <span className="text-white/5 text-[10px]">|</span>
                                {restaurant.priceForTwo && (
                                    <span className="text-[10px] font-bold text-foreground/70 uppercase tracking-tight">
                                        ₹{restaurant.priceForTwo} FOR TWO
                                    </span>
                                )}
                            </div>
                            
                            {/* Primary Button for Adding */}
                            <Button size="icon" className="h-7 w-7 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-black transition-all">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}