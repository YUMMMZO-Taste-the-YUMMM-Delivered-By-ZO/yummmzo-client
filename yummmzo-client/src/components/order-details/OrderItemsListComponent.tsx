import { motion } from "framer-motion";

interface OrderItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface OrderItemsListComponentProps {
    items: OrderItem[];
}

export const OrderItemsListComponent = ({ items }: OrderItemsListComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <h2 className="font-semibold mb-4">Order Items</h2>
            <div className="space-y-3">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                                Qty: {item.quantity}
                            </p>
                        </div>
                        <span className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};