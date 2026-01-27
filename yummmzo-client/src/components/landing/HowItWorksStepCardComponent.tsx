import type { HowItWorksStepCardComponentProps } from "@/types/landingTypes";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const HowItWorksStepCardComponent = ({
    step,
    index,
    isLast
}: HowItWorksStepCardComponentProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            className="relative group"
        >
            {/* Background Glow Effect on Hover */}
            <div className="absolute -inset-2 bg-gradient-to-b from-primary/20 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 h-full glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 flex flex-col items-center text-center transition-all duration-500 group-hover:translate-y-[-8px] group-hover:border-primary/20">
                
                {/* Step Indicator with Pulse */}
                <div className="absolute top-6 right-8">
                    <span className="relative flex h-8 w-8">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/20 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-8 w-8 bg-background border border-primary/50 items-center justify-center text-primary font-black text-xs">
                            0{index + 1}
                        </span>
                    </span>
                </div>

                {/* Icon Container with Animated Gradient Background */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-card to-background border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-primary/50 transition-colors">
                        <step.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                        
                        {/* Tiny Sparkle Decoration */}
                        <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {step.title}
                </h3>
                <p className="text-body-sm text-muted-foreground leading-relaxed max-w-[240px]">
                    {step.description}
                </p>

                {/* Bottom Branding Accent */}
                <div className="mt-8 w-12 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Connecting Arrow for Desktop */}
            {!isLast && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-card border border-white/10 text-primary animate-pulse-scale">
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </div>
            )}
        </motion.div>
    );
};