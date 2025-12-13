import { motion } from "framer-motion";

export const HeroBadgeComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                🍕 #1 Food Delivery App
            </span>
        </motion.div>
    );
};