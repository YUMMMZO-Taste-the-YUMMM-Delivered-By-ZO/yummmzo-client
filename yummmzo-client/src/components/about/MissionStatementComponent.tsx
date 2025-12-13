import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const MissionStatementComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl border border-border p-8 text-center"
        >
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                At YUMMMZO, we believe everyone deserves access to great food. Our
                mission is to connect hungry customers with the best local
                restaurants, providing a seamless ordering experience and lightning-
                fast delivery that brings joy to every meal.
            </p>
        </motion.div>
    );
};