import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, ShoppingBag, Store, User } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Search, label: "Explore", path: "/search" },
    { icon: ShoppingBag, label: "Basket", path: "/cart" },
    { icon: Store, label: "Grocery", path: "/favorites" },
    { icon: User, label: "Account", path: "/profile" },
];

export function BottomNav() {
    const location = useLocation();
    const { cartData } = useCart();
    const itemCount = cartData?.items?.reduce((acc: number, item: any) => acc + item.quantity, 0) ?? 0;

    return (
        <motion.nav
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-border"
        >
            <div className="flex items-center justify-around h-16 px-2">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    const isCart = item.path === "/cart";

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="flex flex-col items-center justify-center gap-1 flex-1 py-2"
                        >
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className={`relative p-2 rounded-xl transition-colors ${isActive ? "bg-primary/10" : ""}`}
                            >
                                <item.icon
                                    className={`h-5 w-5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
                                />
                                {/* Cart Badge */}
                                {isCart && itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] font-bold bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                                        {itemCount}
                                    </span>
                                )}
                            </motion.div>
                            <span className={`text-[10px] font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}