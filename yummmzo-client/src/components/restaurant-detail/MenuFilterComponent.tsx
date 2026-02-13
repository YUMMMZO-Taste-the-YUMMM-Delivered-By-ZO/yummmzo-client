import { motion, AnimatePresence } from "framer-motion";
import { X, SlidersHorizontal, Check, Star, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// TODO: Add props: isOpen, onClose (already structured, just wire them)
// TODO: Add state for selectedSort, selectedPreferences, selectedSpiceLevel
// TODO: Wire Apply button to pass filter state up to parent
// TODO: Wire Reset button to clear all filter states

const sortOptions = ["Recommended", "Price: Low to High", "Price: High to Low", "Rating"];
const spiceLevels = ["Mild", "Medium", "Hot", "Extra Spicy"];

export const MenuFilterComponent = () => {
    // State Variables
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // useEffect
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const variants = {
        initial: isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 },
        animate: { y: 0, x: 0 },
        exit: isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 },
    };

    // TODO: Replace `true` with isOpen prop
    return (
        <AnimatePresence>
            {true && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        // TODO: onClick={onClose}
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
                                ? "bottom-0 left-0 w-full h-[80vh] rounded-t-[2.5rem] border-t"
                                : "top-0 h-screen w-[420px] rounded-l-[2.5rem] border-l"
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 md:p-8 border-b border-border/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-xl">
                                    <SlidersHorizontal className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-heading-sm font-bold">Menu Filters</h2>
                            </div>
                            {/* TODO: onClick={onClose} */}
                            <button className="p-2 hover:bg-muted rounded-full transition-all">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8 scrollbar-hide">
                            {/* Sort By */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4">Sort By</h3>
                                <div className="space-y-2">
                                    {sortOptions.map((option) => (
                                        <button
                                            key={option}
                                            // TODO: onClick to set selectedSort
                                            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all text-body-sm ${
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

                            {/* Preferences */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4">Preferences</h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* TODO: Wire active state for each preference */}
                                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-background/40 hover:border-primary transition-all text-body-sm">
                                        <Leaf className="w-4 h-4 text-success" />
                                        <span>Veg Only</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-background/40 hover:border-primary transition-all text-body-sm">
                                        <Star className="w-4 h-4 text-rating fill-rating" />
                                        <span>Bestsellers</span>
                                    </button>
                                </div>
                            </section>

                            {/* Spice Level */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4">Spice Level</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {spiceLevels.map((level) => (
                                        <button
                                            key={level}
                                            // TODO: Wire active state for each spice level
                                            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-background/50 hover:border-primary/30 transition-all text-body-sm"
                                        >
                                            <Flame className={`w-4 h-4 ${level === "Hot" || level === "Extra Spicy" ? "text-destructive" : "text-warning"}`} />
                                            {level}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Footer */}
                        <div className="p-6 md:p-8 border-t border-border/50 bg-background/50 flex items-center gap-4">
                            {/* TODO: onClick to reset all filter states */}
                            <Button variant="ghost" className="flex-1 h-12 md:h-14 rounded-2xl font-bold">Reset</Button>
                            {/* TODO: onClick to apply filters and close panel */}
                            <Button className="flex-[2] h-12 md:h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold shadow-button hover-lift">
                                Apply
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};