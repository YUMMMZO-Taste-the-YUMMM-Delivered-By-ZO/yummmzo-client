import { motion } from "framer-motion";
import { Store, Users, ShoppingBag, type LucideIcon, } from "lucide-react";

interface Stat {
    icon: LucideIcon;
    value: string;
    label: string;
}

export const StatsGridComponent = () => {
    const stats: Stat[] = [
        { icon: Store, value: "5,000+", label: "Restaurants" },
        { icon: Users, value: "2M+", label: "Happy Users" },
        { icon: ShoppingBag, value: "10M+", label: "Orders Delivered" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-4"
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center"
                >
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl md:text-3xl font-bold text-primary">
                        {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};