import { Link } from "react-router-dom";
import { ArrowLeft, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ManageAddressesHeaderComponentProps {
    showForm: boolean;
    setShowForm: (show: boolean) => void;
}

export const ManageAddressesHeaderComponent = ({
    showForm,
    setShowForm
}: ManageAddressesHeaderComponentProps) => {
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
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </Button>
                </div>
            </div>
        </header>
    );
};