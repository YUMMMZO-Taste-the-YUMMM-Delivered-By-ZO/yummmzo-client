import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

export const FloatingCartButtonComponent = () => {
    // 1. useCart hook se cartData lo
    const { cartData } = useCart();

    // 2. itemCount calculate karo — cartData?.items reduce karo quantity sum ke liye, default 0
    const itemCount = cartData?.items?.reduce((acc: number, item: any) => acc + item.quantity, 0) ?? 0;

    // 3. total lo — cartData?.bill?.total, default 0
    const total = cartData?.bill?.total || 0;

    // 4. agar itemCount === 0 toh return null — component hide ho jayega
    if(itemCount === 0){
        return null;
    };

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
                        {/* 5. "0 items" ki jagah itemCount dikhao */}
                        <span className="font-semibold">{itemCount} items</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* 6. "₹0.00" ki jagah total dikhao */}
                        <span className="font-bold">₹{total}</span>
                        <span>View Cart</span>
                    </div>
                </Button>
            </Link>
        </motion.div>
    );
};