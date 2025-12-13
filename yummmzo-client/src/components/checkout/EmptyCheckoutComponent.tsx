import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const EmptyCheckoutComponent = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
                <Link to="/home">
                    <Button>Browse Restaurants</Button>
                </Link>
            </div>
        </div>
    );
};