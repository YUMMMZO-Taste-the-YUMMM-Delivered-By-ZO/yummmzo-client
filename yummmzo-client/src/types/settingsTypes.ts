import type { LucideIcon } from "lucide-react";

export interface SettingItem {
    icon: LucideIcon;
    label: string;
    type: "toggle" | "link";
    defaultValue?: boolean;
    value?: boolean | string;
    onChange?: () => void;
};

export interface SettingGroupComponentProps {
    title: string;
    items: SettingItem[];
    groupIndex: number;
};

export interface SettingItem {
    icon: LucideIcon;
    label: string;
    type: "toggle" | "link";
    defaultValue?: boolean;
    value?: boolean | string;
    onChange?: () => void;
};

export interface SettingItemComponentProps {
    item: SettingItem;
    index: number;
    isLast: boolean;
};