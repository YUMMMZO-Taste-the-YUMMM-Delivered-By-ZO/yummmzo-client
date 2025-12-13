import { motion } from "framer-motion";
import { Star, Plus, Minus, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { MenuItem } from "@/data/mockData";

interface MenuItemCardProps {
    item: MenuItem;
    index?: number;
}

export function MenuItemCard({ item, index = 0 }: MenuItemCardProps) {
    const { items, addToCart, updateQuantity } = useCart();
    const cartItem = items.find((i) => i.id === item.id);
    const quantity = cartItem?.quantity || 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-2xl overflow-hidden border border-border shadow-card transition-all duration-300 hover:shadow-elevated hover:border-primary/30"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
                {item.isVeg && (
                    <div className="absolute top-3 left-3">
                        <div className="flex items-center gap-1 bg-success/90 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Leaf className="h-3 w-3 text-white" />
                            <span className="text-[10px] font-medium text-white">Veg</span>
                        </div>
                    </div>
                )}
                <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="h-3.5 w-3.5 text-rating fill-rating" />
                        <span className="text-xs font-semibold">{item.rating}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-semibold text-primary text-base mb-1 truncate">
                    {item.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {item.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                        {item.calories && (
                            <span className="text-[10px] text-muted-foreground">
                                {item.calories} cal
                            </span>
                        )}
                    </div>

                    {quantity > 0 ? (
                        <div className="flex items-center gap-2 bg-primary/10 rounded-full p-1">
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 w-7 p-0 rounded-full hover:bg-primary/20"
                                onClick={() => updateQuantity(item.id, quantity - 1)}
                            >
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-semibold text-sm w-6 text-center">
                                {quantity}
                            </span>
                            <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 w-7 p-0 rounded-full hover:bg-primary/20"
                                onClick={() => addToCart(item)}
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    ) : (
                        <Button
                            size="sm"
                            onClick={() => addToCart(item)}
                            className="rounded-full"
                        >
                            <Plus className="h-4 w-4 mr-1" />
                            Add
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}