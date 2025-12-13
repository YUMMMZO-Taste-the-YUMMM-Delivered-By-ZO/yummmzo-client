import { Link } from "react-router-dom";
import { Navigation, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { OrderActionButtonsComponentProps } from "@/types/orderDetailsTypes";

export const OrderActionButtonsComponent = ({ orderId, orderStatus }: OrderActionButtonsComponentProps) => {
    return (
        <div className="flex gap-3">
            {orderStatus !== "delivered" ? (
                <Link to={`/track/${orderId}`} className="flex-1">
                    <Button className="w-full">
                        <Navigation className="h-4 w-4 mr-2" />
                        Track Live
                    </Button>
                </Link>
            ) : (
                <>
                    <Button variant="outline" className="flex-1">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reorder
                    </Button>
                    <Link to={`/restaurant/1/review`} className="flex-1">
                        <Button className="w-full">
                            <Star className="h-4 w-4 mr-2" />
                            Write Review
                        </Button>
                    </Link>
                </>
            )}
        </div>
    );
};