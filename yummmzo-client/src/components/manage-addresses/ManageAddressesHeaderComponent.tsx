import { Link } from "react-router-dom";
import { ArrowLeft, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ManageAddressesHeaderComponent = ({showForm , handleShowForm}) => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/profile">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <h1 className="font-semibold">My Addresses</h1>
                    <Button
                        onClick={handleShowForm}
                        variant="ghost"
                        size="icon"
                    >
                        {
                            showForm ? 
                                <X className="h-5 w-5" /> 
                                : 
                                <Plus className="h-5 w-5" />
                        }
                    </Button>
                </div>
            </div>
        </header>
    );
};