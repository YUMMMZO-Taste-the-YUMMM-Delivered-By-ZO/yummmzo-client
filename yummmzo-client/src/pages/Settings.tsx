import { BottomNav } from "@/components/layout/BottomNav";
import { AppInfoComponent } from "@/components/settings/AppInfoComponent";
import { DangerZoneComponent } from "@/components/settings/DangerZoneComponent";
import { SettingGroupComponent } from "@/components/settings/SettingGroupComponent";
import { SettingsHeaderComponent } from "@/components/settings/SettingsHeaderComponent";
import { useTheme } from "@/contexts/ThemeContext";
import {
    Bell,
    Globe,
    Lock,
    CreditCard,
    Smartphone,
    Mail,
    Moon,
    Sun,
    Shield,
} from "lucide-react";

export default function Settings() {
    const { theme, toggleTheme } = useTheme();

    const settingGroups = [
        {
            title: "Notifications",
            items: [
                {
                    icon: Bell,
                    label: "Push Notifications",
                    type: "toggle" as const,
                    defaultValue: true,
                },
                {
                    icon: Mail,
                    label: "Email Notifications",
                    type: "toggle" as const,
                    defaultValue: true,
                },
                {
                    icon: Smartphone,
                    label: "SMS Notifications",
                    type: "toggle" as const,
                    defaultValue: false,
                },
            ],
        },
        {
            title: "Preferences",
            items: [
                {
                    icon: theme === "dark" ? Moon : Sun,
                    label: "Dark Mode",
                    type: "toggle" as const,
                    value: theme === "dark",
                    onChange: toggleTheme,
                },
                {
                    icon: Globe,
                    label: "Language",
                    type: "link" as const,
                    value: "English",
                },
            ],
        },
        {
            title: "Payment",
            items: [
                {
                    icon: CreditCard,
                    label: "Payment Methods",
                    type: "link" as const,
                },
            ],
        },
        {
            title: "Security",
            items: [
                {
                    icon: Lock,
                    label: "Change Password",
                    type: "link" as const,
                },
                {
                    icon: Shield,
                    label: "Two-Factor Authentication",
                    type: "toggle" as const,
                    defaultValue: false,
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <SettingsHeaderComponent />

            <main className="container mx-auto px-4 py-6 space-y-6">
                {settingGroups.map((group, groupIndex) => (
                    <SettingGroupComponent
                        key={group.title}
                        title={group.title}
                        items={group.items}
                        groupIndex={groupIndex}
                    />
                ))}

                <DangerZoneComponent />

                <AppInfoComponent />
            </main>

            <BottomNav />
        </div>
    );
}