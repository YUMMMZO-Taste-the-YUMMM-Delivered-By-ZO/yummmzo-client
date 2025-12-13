import type { Value } from "@/types/aboutTypes";
import { motion } from "framer-motion";
import { Zap, Heart, Shield, Clock } from "lucide-react";

export const ValuesGridComponent = () => {
    const values: Value[] = [
        {
            icon: Zap,
            title: "Fast Delivery",
            description: "Average delivery time under 30 minutes",
        },
        {
            icon: Heart,
            title: "Customer First",
            description: "Your satisfaction is our top priority",
        },
        {
            icon: Shield,
            title: "Safe & Secure",
            description: "100% secure payments and data protection",
        },
        {
            icon: Clock,
            title: "24/7 Support",
            description: "Round-the-clock customer support",
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                    <motion.div
                        key={value.title}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="bg-card rounded-2xl border border-border p-6 flex gap-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <value.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">{value.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {value.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};