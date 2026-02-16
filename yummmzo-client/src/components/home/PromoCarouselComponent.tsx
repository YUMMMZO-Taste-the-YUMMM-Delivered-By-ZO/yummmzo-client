import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Ticket, Sparkles, Zap, Flame, Gift, Star, Coffee, Pizza, Soup, Salad, IceCream } from "lucide-react";

const BANNERS = [
    {
        id: 1,
        title: "Get 50% Off",
        highlight: "YOUR FIRST ORDER",
        code: "FIRST50",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
        icon: Sparkles,
        gradient: "from-primary via-[#7EFF00] to-primary",
        textColor: "text-black"
    },
    {
        id: 2,
        title: "Free Delivery",
        highlight: "ALL JAPANESE FOOD",
        code: "FREESHIP",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800",
        icon: Zap,
        gradient: "from-blue-600 via-blue-400 to-blue-600",
        textColor: "text-white"
    },
    {
        id: 3,
        title: "Weekend Feast",
        highlight: "BUY 1 GET 1 FREE",
        code: "BOGOPIZZA",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
        icon: Flame,
        gradient: "from-orange-600 via-rose-500 to-orange-600",
        textColor: "text-white"
    },
    {
        id: 4,
        title: "Flat ₹100 Off",
        highlight: "BIRYANI BONANZA",
        code: "BIRYANI100",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800",
        icon: Gift,
        gradient: "from-amber-700 via-yellow-600 to-amber-700",
        textColor: "text-white"
    },
    {
        id: 5,
        title: "5-Star Meals",
        highlight: "TOP RATED PICKS",
        code: "STAR5",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
        icon: Star,
        gradient: "from-violet-700 via-purple-500 to-violet-700",
        textColor: "text-white"
    },
    {
        id: 6,
        title: "Morning Deal",
        highlight: "BREAKFAST & BRUNCH",
        code: "MORNING30",
        image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=800",
        icon: Coffee,
        gradient: "from-stone-700 via-amber-800 to-stone-700",
        textColor: "text-white"
    },
    {
        id: 7,
        title: "Pizza Mania",
        highlight: "2 PIZZAS FOR ₹499",
        code: "PIZZA499",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800",
        icon: Pizza,
        gradient: "from-red-700 via-rose-600 to-red-700",
        textColor: "text-white"
    },
    {
        id: 8,
        title: "Soup Season",
        highlight: "WARM UP WITH 30% OFF",
        code: "SOUP30",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800",
        icon: Soup,
        gradient: "from-teal-700 via-cyan-600 to-teal-700",
        textColor: "text-white"
    },
    {
        id: 9,
        title: "Go Green",
        highlight: "HEALTHY & FRESH",
        code: "HEALTHY20",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
        icon: Salad,
        gradient: "from-green-700 via-emerald-500 to-green-700",
        textColor: "text-white"
    },
    {
        id: 10,
        title: "Sweet Treats",
        highlight: "DESSERTS AT 40% OFF",
        code: "SWEET40",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800",
        icon: IceCream,
        gradient: "from-pink-600 via-fuchsia-500 to-pink-600",
        textColor: "text-white"
    }
];

export const PromoCarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
    }, []);

    const slidePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(slideNext, 6000);
        return () => clearInterval(timer);
    }, [slideNext]);

    const variants = {
        enter:  (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit:   (direction: number) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 })
    };

    const currentBanner = BANNERS[currentIndex];

    return (
        <div className="relative group mb-10 h-56 md:h-72 overflow-hidden rounded-[2.5rem] shadow-glow-lg border border-white/5">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                    className={`absolute inset-0 flex items-center bg-gradient-to-r ${currentBanner.gradient}`}
                >
                    {/* Abstract Geometric Decorations */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 rounded-full bg-white blur-3xl" />
                        <div className="absolute bottom-[-20%] right-[20%] w-96 h-96 rounded-full bg-black blur-3xl" />
                    </div>

                    <div className="relative z-10 w-full grid grid-cols-12 items-center px-8 md:px-16">
                        {/* Text Side */}
                        <div className="col-span-8 md:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 border border-black/10 ${currentBanner.textColor} mb-4`}
                            >
                                <currentBanner.icon className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{currentBanner.highlight}</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-3xl md:text-5xl font-black ${currentBanner.textColor} leading-none mb-4 italic uppercase tracking-tighter`}
                            >
                                {currentBanner.title}
                            </motion.h2>

                            <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                    <span className={`text-[10px] font-bold uppercase opacity-60 ${currentBanner.textColor}`}>Use Promo Code</span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="px-4 py-2 bg-black/90 rounded-xl flex items-center gap-2 border border-white/10 shadow-elevated group/code cursor-pointer active:scale-95 transition-transform">
                                            <Ticket className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-black text-white tracking-widest">{currentBanner.code}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="col-span-4 md:col-span-5 relative flex justify-center items-center h-full">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
                                animate={{ scale: 1, opacity: 1, rotate: -5 }}
                                transition={{ type: "spring", delay: 0.2 }}
                                className="relative w-40 h-40 md:w-56 md:h-56 z-20"
                            >
                                <div className="absolute inset-0 bg-black/20 blur-2xl rounded-full translate-y-6 scale-90" />
                                <img
                                    src={currentBanner.image}
                                    alt={currentBanner.title}
                                    className="w-full h-full object-cover rounded-3xl border-4 border-white/20 shadow-2xl"
                                />
                            </motion.div>

                            {/* Decorative Floating Circle */}
                            <div className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-white/10 rounded-full animate-pulse-scale pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
                <button
                    onClick={slidePrev}
                    className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-black hover:border-primary shadow-glow active:scale-90"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={slideNext}
                    className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-black hover:border-primary shadow-glow active:scale-90"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Indicator Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/5">
                {BANNERS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`h-1 rounded-full transition-all duration-500 ${
                            index === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-white/20"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};