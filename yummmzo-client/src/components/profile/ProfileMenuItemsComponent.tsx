import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    History,
    Heart,
    MapPin,
    Settings,
    HelpCircle,
    ChevronRight,
} from "lucide-react";
import type { MenuItem, ProfileMenuItemsComponentProps } from "@/types/profileTypes";

export const ProfileMenuItemsComponent = ({ addressesCount }: ProfileMenuItemsComponentProps) => {
    const menuItems: MenuItem[] = [
        { icon: History, label: "Order History", href: "/orders/history" },
        { icon: Heart, label: "Favorites", href: "/favorites" },
        { icon: MapPin, label: "Manage Addresses", href: "/profile/addresses", badge: addressesCount },
        { icon: Settings, label: "Settings", href: "/settings" },
        { icon: HelpCircle, label: "Help & Support", href: "/help" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
        >
            {menuItems.map((item, index) => (
                <Link key={item.label} to={item.href}>
                    <div
                        className={`flex items-center justify-between p-4 hover:bg-muted/10 transition-colors ${index !== menuItems.length - 1 ? "border-b border-border" : ""
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-medium">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {item.badge && (
                                <span className="text-sm text-muted-foreground">
                                    {item.badge}
                                </span>
                            )}
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                    </div>
                </Link>
            ))}
        </motion.div>
    );
};