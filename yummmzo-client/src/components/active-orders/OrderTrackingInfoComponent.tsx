import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderTrackingInfoComponentProps {
    estimatedTime?: string;
}

export const OrderTrackingInfoComponent = ({ estimatedTime }: OrderTrackingInfoComponentProps) => {
    return (
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Est. {estimatedTime || "25-30 min"}</span>
            </div>
            <Button size="sm" variant="outline">
                Track Order
            </Button>
        </div>
    );
};