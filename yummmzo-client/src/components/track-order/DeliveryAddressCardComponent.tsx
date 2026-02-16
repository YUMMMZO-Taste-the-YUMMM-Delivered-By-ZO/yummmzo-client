import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const DeliveryAddressCardComponent = ({ deliveryAddress }: any) => {
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
                        {deliveryAddress?.address}, {deliveryAddress?.city}, {deliveryAddress?.state} {deliveryAddress?.pincode}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        {deliveryAddress?.name} · {deliveryAddress?.phone}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};