import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const ETACardComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-primary rounded-2xl p-6 text-center"
        >
            <p className="text-primary-foreground/80 text-sm mb-1">
                Estimated Arrival
            </p>
            <p className="text-3xl font-bold text-primary-foreground">12-15 min</p>
            <div className="flex items-center justify-center gap-2 mt-2 text-primary-foreground/80">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Arriving by 11:30 AM</span>
            </div>
        </motion.div>
    );
};