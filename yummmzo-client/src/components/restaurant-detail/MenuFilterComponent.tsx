import { motion, AnimatePresence } from "framer-motion";
import { X, SlidersHorizontal, Check, Star, Leaf, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const SORT_OPTIONS = [
    { label: "Recommended",        value: "RECOMMENDED"       },
    { label: "Price: Low to High", value: "PRICE_LOW_TO_HIGH" },
    { label: "Price: High to Low", value: "PRICE_HIGH_TO_LOW" },
    { label: "Rating",             value: "RATING"            },
];

const SPICE_OPTIONS = [
    { label: "Mild",        value: "MILD",        color: "text-warning"     },
    { label: "Medium",      value: "MEDIUM",      color: "text-warning"     },
    { label: "Hot",         value: "HOT",         color: "text-destructive"  },
    { label: "Extra Spicy", value: "EXTRA_SPICY", color: "text-destructive"  },
];

interface ActiveMenuFilters {
    sort:         string;
    isVeg:        boolean;
    isBestseller: boolean;
    spiceLevel:   string;
}

interface Props {
    isOpen:   boolean;
    onClose:  () => void;
    filters:  ActiveMenuFilters;
    onApply:  (updated: ActiveMenuFilters) => void;
}

export const MenuFilterComponent = ({ isOpen, onClose, filters, onApply }: Props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Local draft state — only committed on "Apply"
    const [draft, setDraft] = useState<ActiveMenuFilters>({ ...filters });

    // Sync draft when panel opens
    useEffect(() => {
        if (isOpen) setDraft({ ...filters });
    }, [isOpen]);

    // Handle responsive animation
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const variants = {
        initial: isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 },
        animate: { y: 0, x: 0 },
        exit:    isMobile ? { y: "100%", x: 0 } : { x: "100%", y: 0 },
    };

    const handleReset = () => {
        setDraft({ sort: "RECOMMENDED", isVeg: false, isBestseller: false, spiceLevel: "" });
    };

    const handleApply = () => {
        onApply(draft);
        onClose();
    };

    // Count active non-default filters
    const activeCount = [
        draft.isVeg,
        draft.isBestseller,
        draft.spiceLevel !== "",
    ].filter(Boolean).length;

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

                    {/* Filter Sheet / Sidebar */}
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
                                <div className="flex items-center gap-2">
                                    <h2 className="text-heading-sm font-bold">Menu Filters</h2>
                                    {activeCount > 0 && (
                                        <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
                                            {activeCount}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-muted rounded-full transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8 scrollbar-hide">

                            {/* Sort By */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4">Sort By</h3>
                                <div className="space-y-2">
                                    {SORT_OPTIONS.map((option) => {
                                        const isSelected = draft.sort === option.value;
                                        return (
                                            <button
                                                key={option.value}
                                                onClick={() => setDraft((prev) => ({ ...prev, sort: option.value }))}
                                                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all text-body-sm ${
                                                    isSelected
                                                        ? "border-primary bg-primary/5 text-primary"
                                                        : "border-border bg-background/50 hover:border-primary/30"
                                                }`}
                                            >
                                                {option.label}
                                                {isSelected && <Check className="w-4 h-4" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </section>

                            {/* Preferences */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4">Preferences</h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setDraft((prev) => ({ ...prev, isVeg: !prev.isVeg }))}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all text-body-sm ${
                                            draft.isVeg
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border bg-background/40 hover:border-primary"
                                        }`}
                                    >
                                        <Leaf className="w-4 h-4 text-success" />
                                        <span>Veg Only</span>
                                    </button>

                                    <button
                                        onClick={() => setDraft((prev) => ({ ...prev, isBestseller: !prev.isBestseller }))}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all text-body-sm ${
                                            draft.isBestseller
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border bg-background/40 hover:border-primary"
                                        }`}
                                    >
                                        <Star className="w-4 h-4 text-rating fill-rating" />
                                        <span>Bestsellers</span>
                                    </button>
                                </div>
                            </section>

                            {/* Spice Level */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4">Spice Level</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {SPICE_OPTIONS.map((level) => {
                                        const isSelected = draft.spiceLevel === level.value;
                                        return (
                                            <button
                                                key={level.value}
                                                // Toggle off if already selected
                                                onClick={() => setDraft((prev) => ({
                                                    ...prev,
                                                    spiceLevel: prev.spiceLevel === level.value ? "" : level.value
                                                }))}
                                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all text-body-sm ${
                                                    isSelected
                                                        ? "border-primary bg-primary/5 text-primary"
                                                        : "border-border bg-background/50 hover:border-primary/30"
                                                }`}
                                            >
                                                <Flame className={`w-4 h-4 ${level.color}`} />
                                                {level.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>

                        {/* Footer */}
                        <div className="p-6 md:p-8 border-t border-border/50 bg-background/50 flex items-center gap-4">
                            <Button
                                variant="ghost"
                                onClick={handleReset}
                                className="flex-1 h-12 md:h-14 rounded-2xl font-bold"
                            >
                                Reset
                            </Button>
                            <Button
                                onClick={handleApply}
                                className="flex-[2] h-12 md:h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold shadow-button hover-lift"
                            >
                                Apply
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};