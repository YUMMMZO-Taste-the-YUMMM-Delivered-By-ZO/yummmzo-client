import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface Props {
    itemTotal: number;
    gst: number;
    deliveryFee: number;
    packagingFee: number;
    discount: number;
    total: number;
};

export const BillSummaryComponent = ({ itemTotal, gst, deliveryFee, packagingFee, discount, total }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <h2 className="font-semibold mb-4">Bill Summary</h2>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Item Total</span>
                    <span>₹{itemTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">GST (5%)</span>
                    <span>₹{gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Packaging Fee</span>
                    <span>₹{packagingFee.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Discount</span>
                        <span className="text-green-500">- ₹{discount.toFixed(2)}</span>
                    </div>
                )}
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">₹{total.toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    );
};