import { motion } from "framer-motion";

export const HeroStatsComponent = () => {
    const stats = [
        { value: "500+", label: "Restaurants" },
        { value: "100K+", label: "Happy Customers" },
        { value: "1M+", label: "Orders Delivered" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                        {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
            ))}
        </motion.div>
    );
};