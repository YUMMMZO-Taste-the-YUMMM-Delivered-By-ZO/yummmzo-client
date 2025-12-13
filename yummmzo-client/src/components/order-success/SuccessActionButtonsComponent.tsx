import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SuccessActionButtonsComponent = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/home" className="flex-1">
                <Button variant="outline" className="w-full" size="lg">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                </Button>
            </Link>
            <Link to="/home" className="flex-1">
                <Button className="w-full" size="lg">
                    Track Order
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
};