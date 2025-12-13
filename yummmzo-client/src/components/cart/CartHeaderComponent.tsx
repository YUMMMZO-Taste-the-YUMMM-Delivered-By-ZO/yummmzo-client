import { Link } from "react-router-dom";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartHeaderComponentProps {
    itemsCount: number;
    onClearCart: () => void;
}

export const CartHeaderComponent = ({ itemsCount, onClearCart }: CartHeaderComponentProps) => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/home">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <h1 className="font-semibold">My Cart</h1>
                    {itemsCount > 0 && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClearCart}
                            className="text-destructive hover:text-destructive"
                        >
                            <Trash2 className="h-5 w-5" />
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
};