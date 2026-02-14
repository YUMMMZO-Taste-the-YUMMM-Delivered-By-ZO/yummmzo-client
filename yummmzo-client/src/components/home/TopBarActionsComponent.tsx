import { Search, Bell, Sun, Moon, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { ProfileDropdownComponent } from "./ProfileDropdownComponent";
import type { TopBarActionsComponentProps } from "@/types/homeTypes";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";

export const TopBarActionsComponent = ({showSearch,setShowSearch}: TopBarActionsComponentProps) => {
    // useTheme
    const { theme, toggleTheme } = useTheme();

    // useCart
    const { cartData } = useCart();
    const itemCount = cartData?.items?.reduce((acc: number, item: any) => acc + item.quantity, 0) ?? 0;

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
                <Link to="/cart">
                <Button variant="ghost" size="icon" className="rounded-full relative">
                    <ShoppingCart className="h-5 w-5" />
                    {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] font-bold bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                            {itemCount}
                        </span>
                    )}
                </Button>
            </Link>

            

            <ProfileDropdownComponent />
        </div>
    );
};