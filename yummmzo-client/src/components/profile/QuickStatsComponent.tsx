import { motion } from "framer-motion";

export const QuickStatsComponent = () => {
    const stats = [
        { value: "24", label: "Orders" },
        { value: "8", label: "Favorites" },
        { value: "$320", label: "Saved" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
        >
            {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl border border-border p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
            ))}
        </motion.div>
    );
};