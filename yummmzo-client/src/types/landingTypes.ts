import type { LucideIcon } from "lucide-react";

export interface HowItWorksStepCardComponentProps {
    step: {
        icon: LucideIcon;
        title: string;
        description: string;
    };
    index: number;
    isLast: boolean;
};

export interface FeatureCardComponentProps {
    feature: {
        icon: LucideIcon;
        title: string;
        description: string;
    };
};