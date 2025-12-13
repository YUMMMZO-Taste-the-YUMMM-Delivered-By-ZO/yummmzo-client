import type { LucideIcon } from "lucide-react";

export interface HelpSearchComponentProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export interface ContactOption {
    icon: LucideIcon;
    title: string;
    description: string;
    action: string;
    color: string;
    isOnline?: boolean;
};

export interface FAQCategoriesComponentProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
};

export interface FAQ {
    question: string;
    answer: string;
    category: string;
};

export interface FAQAccordionComponentProps {
    faqs: FAQ[];
};