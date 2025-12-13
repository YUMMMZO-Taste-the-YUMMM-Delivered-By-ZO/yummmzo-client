import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationButtonComponent } from "./LocationButtonComponent";
import { TopBarActionsComponent } from "./TopBarActionsComponent";

interface TopBarComponentProps {
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
}

export const TopBarComponent = ({ showSearch, setShowSearch }: TopBarComponentProps) => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>

                    {/* Logo for desktop */}
                    <Link to="/" className="hidden md:block">
                        <img 
                            src="/logo.svg" 
                            alt="YUMMMZO - Taste the Yummm, Delivered By Zo" 
                            className="hidden md:block h-12 w-auto"
                        />
                    </Link>

                    <LocationButtonComponent />

                    <TopBarActionsComponent
                        showSearch={showSearch}
                        setShowSearch={setShowSearch}
                    />
                </div>
            </div>
        </header>
    );
};