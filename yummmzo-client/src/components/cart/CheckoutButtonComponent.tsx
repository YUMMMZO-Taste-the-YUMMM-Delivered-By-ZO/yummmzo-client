import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CheckoutButtonComponent = ({ total = 0 }: { total: number }) => {
    return (
        <div className="fixed bottom-20 md:bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <Link to="/checkout">
                <Button className="w-full h-14 rounded-2xl text-base" size="lg">
                    Proceed to Checkout — ₹{total.toFixed(2)}
                </Button>
            </Link>
        </div>
    );
};