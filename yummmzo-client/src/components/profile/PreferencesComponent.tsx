import { motion } from "framer-motion";
import { Bell, Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/contexts/ThemeContext";

export const PreferencesComponent = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl border border-border p-4 space-y-4"
        >
            <h3 className="font-semibold">Preferences</h3>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <span>Push Notifications</span>
                </div>
                <Switch defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <span>Language</span>
                </div>
                <span className="text-sm text-muted-foreground">English</span>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-lg">🌙</span>
                    <span>Dark Mode</span>
                </div>
                <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
            </div>
        </motion.div>
    );
};