import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureCardComponentProps {
    feature: {
        icon: LucideIcon;
        title: string;
        description: string;
    };
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export const FeatureCardComponent = ({ feature }: FeatureCardComponentProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
        </motion.div>
    );
};