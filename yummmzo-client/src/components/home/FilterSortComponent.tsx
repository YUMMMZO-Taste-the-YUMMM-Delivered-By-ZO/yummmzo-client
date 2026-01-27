import { motion, AnimatePresence } from "framer-motion";
import { X, SlidersHorizontal, Check, Star, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const FilterSortComponent = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update screen size on resize to handle animation switching
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sortOptions = ["Recommended", "Fastest Delivery", "Rating", "Distance"];
    const priceOptions = ["$", "$$", "$$$", "$$$$"];
    const dietaryOptions = ["Vegetarian", "Vegan", "Gluten Free", "Halal"];

    // Dynamic animation variants based on screen size
    const variants = {
        initial: isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 },
        animate: { y: 0, x: 0 },
        exit: isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                    />

                    {/* Filter Sheet/Sidebar */}
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
                        className={`fixed right-0 z-[101] bg-card/95 backdrop-blur-2xl border-border shadow-glow-lg flex flex-col
                            ${isMobile 
                                ? "bottom-0 left-0 w-full h-[85vh] rounded-t-[2.5rem] border-t" 
                                : "top-0 h-screen w-[450px] rounded-l-[2.5rem] border-l"
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 md:p-8 border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-xl">
                                    <SlidersHorizontal className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-heading-sm font-bold">Filters & Sort</h2>
                                    <p className="text-caption text-muted-foreground hidden md:block">Refine your food search</p>
                                </div>
                            </div>
                            <button 
                                onClick={onClose} 
                                className="p-2 md:p-3 hover:bg-muted rounded-full transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8 md:space-y-10 scrollbar-hide">
                            {/* Sort Section */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4 md:mb-5">Sort By</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {sortOptions.map((option) => (
                                        <button
                                            key={option}
                                            className={`flex items-center justify-between px-4 py-3 md:py-3.5 rounded-2xl border transition-all text-body-sm ${
                                                option === "Recommended" 
                                                ? "border-primary bg-primary/5 text-primary" 
                                                : "border-border bg-background/50 hover:border-primary/30"
                                            }`}
                                        >
                                            {option}
                                            {option === "Recommended" && <Check className="w-4 h-4" />}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Quick Filters */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4 md:mb-5">Quick Filters</h3>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/40 text-body-sm hover:border-primary">
                                        <Star className="w-4 h-4 text-rating fill-rating" />
                                        <span>4.5+ Rating</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/40 text-body-sm hover:border-primary">
                                        <Clock className="w-4 h-4 text-info" />
                                        <span>Under 30 min</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/40 text-body-sm hover:border-primary">
                                        <DollarSign className="w-4 h-4 text-success" />
                                        <span>Free Delivery</span>
                                    </button>
                                </div>
                            </section>

                            {/* Price Range */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4 md:mb-5">Price Range</h3>
                                <div className="flex p-1 bg-muted/50 rounded-2xl border border-border/50">
                                    {priceOptions.map((price) => (
                                        <button
                                            key={price}
                                            className={`flex-1 py-2.5 md:py-3 text-center rounded-xl transition-all font-bold ${
                                                price === "$$" ? "bg-primary text-primary-foreground shadow-button" : "text-muted-foreground"
                                            }`}
                                        >
                                            {price}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Dietary */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4 md:mb-5">Dietary Preference</h3>
                                <div className="space-y-2 md:space-y-3">
                                    {dietaryOptions.map((diet) => (
                                        <div key={diet} className="flex items-center justify-between p-4 rounded-xl border border-transparent hover:bg-background/30 cursor-pointer group">
                                            <span className="text-body-md text-muted-foreground group-hover:text-foreground">{diet}</span>
                                            <div className="w-5 h-5 rounded-full border-2 border-border group-hover:border-primary" />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Footer */}
                        <div className="p-6 md:p-8 border-t border-border/50 bg-background/50 flex items-center gap-4">
                            <Button variant="ghost" className="flex-1 h-12 md:h-14 rounded-2xl font-bold">
                                Reset
                            </Button>
                            <Button className="flex-[2] h-12 md:h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold shadow-button">
                                Apply Filters
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};