import { motion } from "framer-motion";

export const EmptyOrderHistoryComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
        >
            <p className="text-muted-foreground">No orders found.</p>
        </motion.div>
    );
};