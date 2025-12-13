import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface BillSummaryComponentProps {
    total: number;
}

export const BillSummaryComponent = ({ total }: BillSummaryComponentProps) => {
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
                    <span>${(total - 5.99).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>$3.99</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxes</span>
                    <span>$2.00</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                </div>
            </div>
        </motion.div>
    );
};