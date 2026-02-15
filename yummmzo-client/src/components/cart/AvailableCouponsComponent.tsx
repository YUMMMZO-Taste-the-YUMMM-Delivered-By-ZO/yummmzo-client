import { motion, AnimatePresence } from "framer-motion";
import { X, Ticket, Check, Gift, Timer } from "lucide-react";
import { useEffect, useState } from "react";

interface Coupon {
    id: number;
    code: string;
    description: string;
    discountType: "FLAT" | "PERCENTAGE";
    discountValue: number;
    maxDiscount?: number;
    minOrderValue: number;
    validTill: string;
}

interface AvailableCouponsProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (code: string) => void;
    coupons: Coupon[];
    cartTotal: number;
    isLoading: boolean;
    appliedCouponCode?: string | null;
}

const formatDiscount = (coupon: Coupon): string => {
    if (coupon.discountType === "FLAT") return `₹${coupon.discountValue} off`;
    return `${coupon.discountValue}% off${coupon.maxDiscount ? ` upto ₹${coupon.maxDiscount}` : ""}`;
};

const formatExpiry = (validTill: string): string => {
    const diff = new Date(validTill).getTime() - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (days > 1) return `Ends in ${days} days`;
    if (hours > 0) return `Ends in ${hours} hours`;
    return "Ends soon";
};

export const AvailableCouponsComponent = ({ 
    isOpen, 
    onClose, 
    onSelect,
    coupons,
    cartTotal,
    isLoading,
    appliedCouponCode
}: AvailableCouponsProps) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const variants = {
        initial: isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 },
        animate: { y: 0, x: 0 },
        exit: isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                    />

                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                        className={`fixed right-0 z-[101] bg-card/95 backdrop-blur-2xl border-border shadow-glow-lg flex flex-col
                            ${isMobile 
                                ? "bottom-0 left-0 w-full h-[70vh] rounded-t-[2.5rem] border-t" 
                                : "top-0 h-screen w-[420px] rounded-l-[2.5rem] border-l"
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 md:p-8 border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-xl">
                                    <Ticket className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-heading-sm font-bold">Available Coupons</h2>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-all">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-4 scrollbar-hide">
                            {isLoading && (
                                [...Array(3)].map((_, i) => (
                                    <div key={i} className="h-24 rounded-2xl bg-muted/30 animate-pulse" />
                                ))
                            )}

                            {!isLoading && coupons.length === 0 && (
                                <div className="text-center text-muted-foreground text-body-sm py-10">
                                    No coupons available.
                                </div>
                            )}

                            {!isLoading && coupons.map((coupon) => {
                                const isEligible = cartTotal >= coupon.minOrderValue;
                                const isApplied = appliedCouponCode === coupon.code;
                                const shortfall = coupon.minOrderValue - cartTotal;

                                return (
                                    <div
                                        key={coupon.id}
                                        className={`relative group p-5 rounded-2xl border transition-all ${
                                            isApplied
                                            ? "bg-primary/10 border-primary cursor-pointer"
                                            : isEligible
                                            ? "bg-background/40 border-border hover:border-primary/50 cursor-pointer"
                                            : "bg-muted/20 border-dashed border-border opacity-60 grayscale"
                                        }`}
                                        onClick={() => isEligible && onSelect(coupon.code)}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-black tracking-wider border border-primary/20">
                                                {coupon.code}
                                            </div>
                                            {isApplied ? (
                                                <div className="text-primary font-bold text-body-sm flex items-center gap-1">
                                                    Applied <Check className="w-4 h-4" />
                                                </div>
                                            ) : isEligible ? (
                                                <div className="text-primary font-bold text-body-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                    Apply <Check className="w-4 h-4" />
                                                </div>
                                            ) : null}
                                        </div>

                                        <h4 className="text-body-md font-bold text-foreground mb-1">{coupon.description}</h4>
                                        <div className="flex items-center gap-3 text-caption text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Gift className="w-3 h-3" /> {formatDiscount(coupon)}
                                            </span>
                                            <span className="flex items-center gap-1 text-warning">
                                                <Timer className="w-3 h-3" /> {formatExpiry(coupon.validTill)}
                                            </span>
                                        </div>

                                        {!isEligible && (
                                            <p className="text-caption text-warning mt-2">
                                                Add ₹{shortfall} more to use this coupon
                                            </p>
                                        )}

                                        <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-card border-r border-border -translate-y-1/2" />
                                        <div className="absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-card border-l border-border -translate-y-1/2" />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="p-6 md:p-8 border-t border-border/50 bg-background/50">
                            <p className="text-caption text-center text-muted-foreground">
                                Select a coupon to maximize your yummm savings!
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};