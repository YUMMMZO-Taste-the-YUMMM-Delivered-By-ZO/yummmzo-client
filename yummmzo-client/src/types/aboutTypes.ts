import type { LucideIcon } from "lucide-react";

export interface Stat {
    icon: LucideIcon;
    value: string;
    label: string;
};

export interface Value {
    icon: LucideIcon;
    title: string;
    description: string;
};

export interface TeamMember {
    name: string;
    role: string;
    image: string;
};