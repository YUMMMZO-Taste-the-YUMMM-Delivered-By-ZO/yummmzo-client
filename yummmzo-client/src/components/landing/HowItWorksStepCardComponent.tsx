import { motion } from "framer-motion";
import { ChevronRight, type LucideIcon } from "lucide-react";

interface HowItWorksStepCardComponentProps {
    step: {
        icon: LucideIcon;
        title: string;
        description: string;
    };
    index: number;
    isLast: boolean;
}

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export const HowItWorksStepCardComponent = ({
    step,
    index,
    isLast
}: HowItWorksStepCardComponentProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            className="relative"
        >
            <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-3 left-8 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
            </div>
            {!isLast && (
                <ChevronRight className="hidden md:block absolute top-1/2 -right-6 w-8 h-8 text-muted-foreground/30" />
            )}
        </motion.div>
    );
};