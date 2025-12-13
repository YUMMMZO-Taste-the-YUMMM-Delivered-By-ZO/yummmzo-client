import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Driver {
    name: string;
    phone: string;
    rating: number;
    deliveries: number;
    image: string;
}

interface DriverInfoCardComponentProps {
    driver: Driver;
}

export const DriverInfoCardComponent = ({ driver }: DriverInfoCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <div className="flex items-center gap-4">
                <img
                    src={driver.image}
                    alt={driver.name}
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                    <h3 className="font-semibold">{driver.name}</h3>
                    <p className="text-sm text-muted-foreground">
                        ⭐ {driver.rating} • {driver.deliveries} deliveries
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                        <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <MessageCircle className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};