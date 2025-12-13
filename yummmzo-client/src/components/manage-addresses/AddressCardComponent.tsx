import { motion } from "framer-motion";
import { Home, Briefcase, MapPin, Edit2, Trash2, Check, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Address {
    id: string;
    type: "home" | "work" | "other";
    address: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
}

interface AddressCardComponentProps {
    address: Address;
    index: number;
    onDelete: (id: string) => void;
}

export const AddressCardComponent = ({ address, index, onDelete }: AddressCardComponentProps) => {
    const getTypeIcon = (type: string): LucideIcon => {
        switch (type) {
            case "home":
                return Home;
            case "work":
                return Briefcase;
            default:
                return MapPin;
        }
    };

    const Icon = getTypeIcon(address.type);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="capitalize">
                            {address.type}
                        </Badge>
                        {address.isDefault && (
                            <Badge className="bg-success/20 text-success border-success/30">
                                <Check className="h-3 w-3 mr-1" />
                                Default
                            </Badge>
                        )}
                    </div>
                    <p className="text-sm">{address.address}</p>
                    <p className="text-sm text-muted-foreground">
                        {address.city}, {address.state} - {address.pincode}
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                        <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => onDelete(address.id)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};