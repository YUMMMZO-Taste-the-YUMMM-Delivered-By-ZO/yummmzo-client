import { Link } from "react-router-dom";
import { ArrowLeft, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RestaurantDetailHeaderComponentProps {
    restaurantName: string;
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
}

export const RestaurantDetailHeaderComponent = ({
    restaurantName,
    showSearch,
    setShowSearch
}: RestaurantDetailHeaderComponentProps) => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/home">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <h1 className="font-semibold truncate max-w-[200px]">
                        {restaurantName}
                    </h1>
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowSearch(!showSearch)}
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};