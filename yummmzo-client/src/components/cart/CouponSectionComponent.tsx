import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CouponSectionComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
        >
            <div className="flex gap-3">
                <Input placeholder="Enter Discount Code" className="flex-1" />
                <Button variant="outline">Apply</Button>
            </div>
        </motion.div>
    );
};