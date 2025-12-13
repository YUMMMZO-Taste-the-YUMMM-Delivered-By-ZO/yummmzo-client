import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const SuccessIconComponent = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mb-8"
        >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto animate-pulse-scale">
                <CheckCircle className="h-12 w-12 text-primary" />
            </div>
        </motion.div>
    );
};