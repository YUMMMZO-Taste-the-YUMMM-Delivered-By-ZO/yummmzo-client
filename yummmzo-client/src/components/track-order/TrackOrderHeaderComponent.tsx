import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrackOrderHeaderComponentProps {
    orderId?: string;
}

export const TrackOrderHeaderComponent = ({ orderId }: TrackOrderHeaderComponentProps) => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to={`/order/${orderId}`}>
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <h1 className="font-semibold">Track Order</h1>
                    <div className="w-10" />
                </div>
            </div>
        </header>
    );
};