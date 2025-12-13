import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DeliveryAddressComponentProps } from "@/types/checkoutTypes";

export const DeliveryAddressComponent = ({ address }: DeliveryAddressComponentProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <h2 className="font-semibold mb-4">Delivery Address</h2>
            <div className="bg-card rounded-2xl p-4 border border-border">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium capitalize">{address?.type}</span>
                            {address?.isDefault && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                                    Default
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {address?.address}, {address?.city}, {address?.state} {address?.pincode}
                        </p>
                    </div>
                    <Link to="/profile/addresses">
                        <Button variant="ghost" size="sm">
                            Change
                            <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};