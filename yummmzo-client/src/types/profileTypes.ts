import type { LucideIcon } from "lucide-react";

export interface User {
    name: string;
    email: string;
    phone: string;
};

export interface ProfileCardComponentProps {
    user: User;
};

export interface MenuItem {
    icon: LucideIcon;
    label: string;
    href: string;
    badge?: number;
};

export interface ProfileMenuItemsComponentProps {
    addressesCount: number;
};