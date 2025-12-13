import type { DeliveryAddressCardComponentProps } from "@/types/trackOrderTypes";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const DeliveryAddressCardComponent = ({ deliveryAddress }: DeliveryAddressCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                    <h3 className="font-semibold">Delivery Address</h3>
                    <p className="text-sm text-muted-foreground">
                        {deliveryAddress}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};