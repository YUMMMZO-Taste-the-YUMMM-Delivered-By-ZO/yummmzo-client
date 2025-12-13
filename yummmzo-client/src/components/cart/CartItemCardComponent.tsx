import { motion } from "framer-motion";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CartItemCardComponentProps } from "@/types/cartTypes";

export const CartItemCardComponent = ({
    item,
    index,
    onUpdateQuantity,
    onRemove
}: CartItemCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex gap-4 bg-card rounded-2xl p-4 border border-border"
        >
            <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
                <h3 className="font-semibold text-primary">{item.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">
                    {item.description.slice(0, 50)}...
                </p>
                <div className="flex items-center justify-between">
                    <span className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <div className="flex items-center gap-2 bg-muted rounded-full p-1">
                        <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0 rounded-full"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold text-sm w-6 text-center">
                            {item.quantity}
                        </span>
                        <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 w-7 p-0 rounded-full"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive h-8 w-8"
                onClick={() => onRemove(item.id)}
            >
                <Trash2 className="h-4 w-4" />
            </Button>
        </motion.div>
    );
};