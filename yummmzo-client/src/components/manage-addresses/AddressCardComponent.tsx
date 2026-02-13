import { motion } from "framer-motion";
import { Home, Briefcase, MapPin, Edit2, Trash2, Check, Phone, Star, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { AddressCardComponentProps } from "@/types/manageAddressTypes";

export const AddressCardComponent = ({ address, index, onDelete, onEdit, onMakeDefault }: AddressCardComponentProps) => {
    const getTypeIcon = (type: string): LucideIcon => {
        switch (type.toLowerCase()) {
            case "home": return Home;
            case "work": return Briefcase;
            default: return MapPin;
        }
    };

    const Icon = getTypeIcon(address.type);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.3, ease: "easeOut" }}
            className={`
                glass-card rounded-2xl p-5 transition-all duration-200 hover-lift
                ${address.isDefault
                    ? "border-primary/40 shadow-[0_0_0_1px_hsl(var(--primary)/0.2),var(--shadow-card)]"
                    : "border-border"
                }
            `}
        >
            <div className="flex items-start gap-4">
                <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center shrink-0
                    ${address.isDefault ? "bg-primary/15" : "bg-muted"}
                `}>
                    <Icon className={`h-5 w-5 ${address.isDefault ? "text-primary" : "text-muted-foreground"}`} />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge variant="outline" className="capitalize text-xs font-medium">
                            {address.type}
                        </Badge>
                        {address.isDefault && (
                            <Badge className="bg-primary/15 text-primary border-primary/30 text-xs font-medium">
                                <Check className="h-3 w-3 mr-1" />
                                Default
                            </Badge>
                        )}
                    </div>

                    <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-sm font-semibold">{address.name}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {address.phone}
                        </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {address.address}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        {address.city}, {address.state} &mdash; {address.pincode}
                    </p>

                    {/* Make Default Button — only show if not already default */}
                    {!address.isDefault && (
                        <button
                            onClick={() => onMakeDefault(address.id)}
                            className="mt-3 text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors duration-200"
                        >
                            <Star className="h-3 w-3" />
                            Set as default
                        </button>
                    )}
                </div>

                <div className="flex flex-col gap-1 shrink-0">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:text-primary hover:bg-primary/10 rounded-lg"
                        onClick={() => onEdit(address)}
                    >
                        <Edit2 className="h-3.5 w-3.5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-lg"
                        onClick={() => onDelete(address.id)}
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};