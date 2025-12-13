import { MapPin, ChevronDown } from "lucide-react";

export const LocationButtonComponent = () => {
    return (
        <button className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-card transition-colors">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Naperville, Illinois</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
    );
};