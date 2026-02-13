import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: Add props: itemCount, total (from useCart)
// TODO: Hide component when itemCount === 0

export const FloatingCartButtonComponent = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-20 md:bottom-8 left-4 right-4 z-50"
        >
            <Link to="/cart">
                <Button className="w-full max-w-lg mx-auto h-14 rounded-2xl shadow-glow flex items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                            <ShoppingBag className="h-4 w-4" />
                        </div>
                        <span className="font-semibold">0 items</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">₹0.00</span>
                        <span>View Cart</span>
                    </div>
                </Button>
            </Link>
        </motion.div>
    );
};