import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleFavouriteService } from "@/services/favourites.services";
import { toast } from "@/hooks/use-toast";

export function RestaurantCard({ favouriteIds , restaurant, index = 0 }: { favouriteIds: any , restaurant: any, index?: number }) {
    // useQueryClient
    const queryClient = useQueryClient();

    // isFavourite Check
    const isFavourite = Array.isArray(favouriteIds?.data) && favouriteIds.data.includes(restaurant.id);

    // useMutation
    const toggleFavouriteMutation = useMutation({
        mutationFn: toggleFavouriteService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["favourites"] });
            queryClient.invalidateQueries({ queryKey: ["favouriteIds"] });
            toast({
                variant: 'default',
                title: isFavourite ? "Removed from Favourites!" : "Added to Favourites!",
                description: isFavourite ? "Restaurant removed from your favourites." : "Restaurant added to your favourites list."
            });
        },
        onError: (error) => {
            toast({
                variant: 'destructive',
                title: "Error!",
                description: `Error toggling Favourite : ${error}`
            });
        }
    });

    // Handler Functions
    const handleFavouriteToggle = (restaurantId: number) => {
        toggleFavouriteMutation.mutate(restaurantId);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group w-full"
        >
            <Link to={`/restaurant/${restaurant.id}`}>
                <div className="bg-card/40 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/10 transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover:shadow-glow">
                    
                    {/* Image Section */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                        {restaurant.image && (
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                        
                        {/* Heart Button - Top Left */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleFavouriteToggle(restaurant.id);
                            }}
                            className="absolute top-2 left-2 w-7 h-7 flex items-center justify-center rounded-full bg-background/60 backdrop-blur-md border border-primary/20 hover:bg-background/80 transition-all"
                        >
                            <Heart className={`h-3.5 w-3.5 transition-colors ${
                                isFavourite
                                    ? "text-destructive fill-destructive"
                                    : "text-muted-foreground hover:text-destructive"
                            }`} />
                        </button>

                        {/* Rating Badge - Top Right */}
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