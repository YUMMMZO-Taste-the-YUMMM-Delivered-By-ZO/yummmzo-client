import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export const DeliveryDetailsCardComponent = ({ deliveryAddress }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <h2 className="font-semibold mb-4">Delivery Details</h2>
            <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                        <p className="font-medium">{deliveryAddress?.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {deliveryAddress?.address}, {deliveryAddress?.city}, {deliveryAddress?.state} {deliveryAddress?.pincode}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                        <p className="font-medium">Contact</p>
                        <p className="text-sm text-muted-foreground">{deliveryAddress?.phone}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};