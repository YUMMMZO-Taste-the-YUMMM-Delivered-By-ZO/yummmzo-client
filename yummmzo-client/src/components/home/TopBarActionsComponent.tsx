import { Search, Bell, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { ProfileDropdownComponent } from "./ProfileDropdownComponent";
import type { TopBarActionsComponentProps } from "@/types/homeTypes";

export const TopBarActionsComponent = ({
    showSearch,
    setShowSearch
}: TopBarActionsComponentProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(!showSearch)}
                className="rounded-full"
            >
                <Search className="h-5 w-5" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
            >
                {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )}
            </Button>
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>

            <ProfileDropdownComponent />
        </div>
    );
};