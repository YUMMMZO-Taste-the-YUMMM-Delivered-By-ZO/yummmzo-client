import { motion } from "framer-motion";

interface SuccessMessageComponentProps {
    orderId?: string;
}

export const SuccessMessageComponent = ({ orderId }: SuccessMessageComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
            <p className="text-muted-foreground mb-2">Order ID: {orderId}</p>
            <p className="text-muted-foreground mb-8">
                Your order will be delivered in 25-30 minutes
            </p>
        </motion.div>
    );
};