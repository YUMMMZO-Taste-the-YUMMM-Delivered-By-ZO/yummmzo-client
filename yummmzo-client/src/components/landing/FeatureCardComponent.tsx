import type { FeatureCardComponentProps } from "@/types/landingTypes";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const FeatureCardComponent = ({ feature }: FeatureCardComponentProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            className="relative group h-full"
        >
            {/* Ambient Background Glow - Becomes visible on hover */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-transparent to-primary/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 h-full glass-card rounded-[2rem] p-8 border border-white/5 flex flex-col transition-all duration-500 group-hover:translate-y-[-10px] group-hover:border-primary/20 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                
                {/* Decorative Icon Background Glow */}
                <div className="absolute top-10 left-10 w-12 h-12 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon Container with Glass Effect */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:border-primary/40 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Subtle Sparkle on Hover */}
                    <Sparkle className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                </div>

                {/* Text Content */}
                <div className="mt-auto">
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                        {feature.title}
                    </h3>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                    </p>
                </div>

                {/* Bottom Interactive Line Accent */}
                <div className="mt-8 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-primary to-transparent transition-all duration-700 ease-in-out opacity-40" />
            </div>
        </motion.div>
    );
};