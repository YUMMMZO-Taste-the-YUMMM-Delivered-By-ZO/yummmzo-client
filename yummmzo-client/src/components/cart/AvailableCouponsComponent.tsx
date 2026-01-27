import { motion, AnimatePresence } from "framer-motion";
import { X, Ticket, Check, Gift, Timer } from "lucide-react";
import { useEffect, useState } from "react";

interface Coupon {
    code: string;
    description: string;
    discount: string;
    expiry: string;
    isAvailable: boolean;
}

const MOCK_COUPONS: Coupon[] = [
    { code: "FIRST50", description: "50% off on your first order", discount: "50%", expiry: "Ends in 2 days", isAvailable: true },
    { code: "YUMMM20", description: "Get $20 off on orders above $50", discount: "$20", expiry: "Ends in 5 hours", isAvailable: true },
    { code: "FREEDEL", description: "Free delivery on all Japanese cuisine", discount: "Free Delivery", expiry: "Limited time", isAvailable: false },
];

export const AvailableCouponsComponent = ({ isOpen, onClose, onSelect }: { isOpen: boolean; onClose: () => void; onSelect: (code: string) => void }) => {
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
                            {MOCK_COUPONS.map((coupon) => (
                                <div 
                                    key={coupon.code}
                                    className={`relative group p-5 rounded-2xl border transition-all ${
                                        coupon.isAvailable 
                                        ? "bg-background/40 border-border hover:border-primary/50 cursor-pointer" 
                                        : "bg-muted/20 border-dashed border-border opacity-60 grayscale"
                                    }`}
                                    onClick={() => coupon.isAvailable && onSelect(coupon.code)}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-black tracking-wider border border-primary/20">
                                            {coupon.code}
                                        </div>
                                        {coupon.isAvailable && (
                                            <div className="text-primary font-bold text-body-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                Apply <Check className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>
                                    
                                    <h4 className="text-body-md font-bold text-foreground mb-1">{coupon.description}</h4>
                                    <div className="flex items-center gap-3 text-caption text-muted-foreground">
                                        <span className="flex items-center gap-1"><Gift className="w-3 h-3" /> {coupon.discount}</span>
                                        <span className="flex items-center gap-1 text-warning"><Timer className="w-3 h-3" /> {coupon.expiry}</span>
                                    </div>

                                    {/* Perforation design for that "ticket" look */}
                                    <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-card border-r border-border -translate-y-1/2" />
                                    <div className="absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-card border-l border-border -translate-y-1/2" />
                                </div>
                            ))}
                        </div>

                        <div className="p-6 md:p-8 border-t border-border/50 bg-background/50">
                            <p className="text-caption text-center text-muted-foreground">Select a coupon to maximize your yummm savings!</p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};