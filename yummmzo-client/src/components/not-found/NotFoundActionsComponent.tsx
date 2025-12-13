import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NotFoundActionsComponent = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
                <Button variant="outline" size="lg">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                </Button>
            </Link>
            <Link to="/home">
                <Button size="lg">
                    <Search className="mr-2 h-4 w-4" />
                    Browse Food
                </Button>
            </Link>
        </div>
    );
};