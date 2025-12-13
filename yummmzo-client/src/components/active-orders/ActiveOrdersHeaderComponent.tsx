import { Link } from "react-router-dom";
import { ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ActiveOrdersHeaderComponent = () => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/home">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <h1 className="font-semibold">Active Orders</h1>
                    <Button variant="ghost" size="icon">
                        <Filter className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
};