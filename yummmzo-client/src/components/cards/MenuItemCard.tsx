import { motion } from "framer-motion";
import { Star, Plus, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: Add cart logic - addToCart, updateQuantity, quantity

export function MenuItemCard({ item, index = 0 }: { item: any; index?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-4 bg-card rounded-2xl border border-border p-3 hover:border-primary/30 hover:shadow-card transition-all duration-200"
        >
            {/* Image - Left */}
            <div className="relative flex-shrink-0 w-28 h-24 rounded-xl overflow-hidden">
                <img
                    src={item.image ?? "https://placehold.co/200x160"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />

                {/* Veg / Non-Veg dot indicator */}
                <div className={`absolute top-1.5 left-1.5 w-4 h-4 rounded-sm border-2 flex items-center justify-center ${item.isVeg ? "border-success bg-success/20" : "border-destructive bg-destructive/20"}`}>
                    <div className={`w-2 h-2 rounded-full ${item.isVeg ? "bg-success" : "bg-destructive"}`} />
                </div>
            </div>

            {/* Content - Right */}
            <div className="flex-1 min-w-0">
                {/* Name + Bestseller */}
                <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                    {item.isBestseller && (
                        <span className="flex-shrink-0 flex items-center gap-0.5 text-[10px] font-bold text-warning">
                            <Flame className="h-3 w-3" />
                            Best
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {item.description}
                </p>

                {/* Price + Rating + Add */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">₹{item.price}</span>
                        <div className="flex items-center gap-0.5">
                            <Star className="h-3 w-3 text-rating fill-rating" />
                            <span className="text-xs text-muted-foreground">{item.rating}</span>
                        </div>
                    </div>

                    {!item.inStock ? (
                        <span className="text-[10px] text-destructive font-semibold px-2 py-1 rounded-full bg-destructive/10">
                            Out of Stock
                        </span>
                    ) : (
                        /* TODO: Replace with quantity toggle when cart logic is added */
                        <Button size="sm" className="h-8 rounded-xl text-xs px-3">
                            <Plus className="h-3.5 w-3.5 mr-1" />
                            Add
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}