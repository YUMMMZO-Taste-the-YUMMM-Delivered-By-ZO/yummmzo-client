import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    orderId: string | undefined;
};

export const SuccessActionButtonsComponent = ({ orderId }: Props) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/home" className="flex-1">
                <Button variant="outline" className="w-full" size="lg">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                </Button>
            </Link>
            <Link to={`/track/${orderId}`} className="flex-1">
                <Button className="w-full" size="lg" disabled={!orderId}>
                    Track Order
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
};