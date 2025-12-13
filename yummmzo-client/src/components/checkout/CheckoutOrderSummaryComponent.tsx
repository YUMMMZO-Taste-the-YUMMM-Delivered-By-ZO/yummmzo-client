import { motion } from "framer-motion";

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface CheckoutOrderSummaryComponentProps {
    items: CartItem[];
    total: number;
}

export const CheckoutOrderSummaryComponent = ({ items, total }: CheckoutOrderSummaryComponentProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="bg-card rounded-2xl p-4 border border-border space-y-3">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                        </div>
                        <span className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                ))}
                <div className="border-t border-border pt-3">
                    <p className="text-sm text-muted-foreground">
                        {items.length} items • ${total.toFixed(2)}
                    </p>
                </div>
            </div>
        </motion.section>
    );
};