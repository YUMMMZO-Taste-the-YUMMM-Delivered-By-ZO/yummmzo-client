import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CartItemCardComponent = ({ item, index, updateItem }: { item: any, index: number, updateItem: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex gap-4 bg-card rounded-2xl p-4 border border-border"
        >
            <img
                src={item.image ?? "https://placehold.co/200x160"}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
                <h3 className="font-semibold text-primary">{item.name}</h3>
                <div className="flex items-center justify-between mt-2">
                    <span className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</span>
                    <div className="flex items-center gap-2 bg-muted rounded-full p-1">
                        <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0 rounded-full"
                            onClick={() => updateItem({ cartItemId: item.menuItemId, quantity: item.quantity - 1 })}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold text-sm w-6 text-center">{item.quantity}</span>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0 rounded-full"
                            onClick={() => updateItem({ cartItemId: item.menuItemId, quantity: item.quantity + 1 })}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};