import { Link } from "react-router-dom";
import { ArrowLeft, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProfileHeaderComponent = () => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/home">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <h1 className="font-semibold">Profile</h1>
                    <Link to="/settings">
                        <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};