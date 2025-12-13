import { MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { EmptyAddressesComponentProps } from "@/types/manageAddressTypes";

export const EmptyAddressesComponent = ({ onAddClick }: EmptyAddressesComponentProps) => {
    return (
        <div className="text-center py-12">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No addresses saved yet.</p>
            <Button className="mt-4" onClick={onAddClick}>
                <Plus className="h-4 w-4 mr-2" />
                Add Address
            </Button>
        </div>
    );
};