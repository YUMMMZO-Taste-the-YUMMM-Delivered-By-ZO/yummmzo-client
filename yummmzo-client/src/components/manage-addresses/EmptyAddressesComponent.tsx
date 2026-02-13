import { MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { EmptyAddressesComponentProps } from "@/types/manageAddressTypes";

export const EmptyAddressesComponent = ({ onAddClick }: EmptyAddressesComponentProps) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in">
            {/* Glow Ring */}
            <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
                <div className="relative w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center animate-pulse-glow">
                    <MapPin className="h-10 w-10 text-primary" />
                </div>
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold mb-2 text-center">No Saved Addresses</h3>
            <p className="text-sm text-muted-foreground text-center max-w-xs leading-relaxed mb-8">
                Add your home, work, or other delivery addresses for a faster checkout experience.
            </p>

            {/* CTA Button */}
            {/* TODO: onAddClick triggers showForm = true — wire up when logic is ready */}
            <Button
                onClick={onAddClick}
                className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-6 h-11 rounded-xl shadow-button group"
            >
                <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
                Add Your First Address
            </Button>
        </div>
    );
};