import { motion, AnimatePresence } from "framer-motion";
import { X, SlidersHorizontal, Check, Star, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Sort option label → backend enum mapping
const SORT_OPTIONS = [
    { label: "Recommended",     value: "RECOMMENDED"     },
    { label: "Fastest Delivery", value: "FASTEST_DELIVERY" },
    { label: "Rating",           value: "RATING"          },
    { label: "Distance",         value: "DISTANCE"        },
];

// Price range label → backend value mapping
const PRICE_OPTIONS = [
    { label: "$",    value: "1" },
    { label: "$$",   value: "2" },
    { label: "$$$",  value: "3" },
    { label: "$$$$", value: "4" },
];

interface ActiveFilters {
    sort:        string;
    rating:      string;
    priceRange:  string;
    maxTime:     string;
    freeDelivery: boolean;
}

interface Props {
    isOpen:   boolean;
    onClose:  () => void;
    filters:  ActiveFilters;
    onApply:  (updated: Partial<ActiveFilters>) => void;
}

export const FilterSortComponent = ({ isOpen, onClose, filters, onApply }: Props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Local draft state — only committed on "Apply Filters"
    const [draft, setDraft] = useState<ActiveFilters>({ ...filters });

    // Sync draft when panel opens (so it always reflects latest applied filters)
    useEffect(() => {
        if (isOpen) {
            setDraft({ ...filters });
        }
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

    // Handlers for draft state
    const handleSortSelect = (value: string) => {
        setDraft((prev) => ({ ...prev, sort: value }));
    };

    const handlePriceSelect = (value: string) => {
        // Toggle off if already selected
        setDraft((prev) => ({ ...prev, priceRange: prev.priceRange === value ? "" : value }));
    };

    const handleRatingToggle = () => {
        setDraft((prev) => ({ ...prev, rating: prev.rating === "4.5" ? "" : "4.5" }));
    };

    const handleMaxTimeToggle = () => {
        setDraft((prev) => ({ ...prev, maxTime: prev.maxTime === "30" ? "" : "30" }));
    };

    const handleFreeDeliveryToggle = () => {
        setDraft((prev) => ({ ...prev, freeDelivery: !prev.freeDelivery }));
    };

    // Reset draft to defaults
    const handleReset = () => {
        const defaults: ActiveFilters = {
            sort:         "DISTANCE",
            rating:       "",
            priceRange:   "",
            maxTime:      "",
            freeDelivery: false,
        };
        setDraft(defaults);
    };

    // Commit draft to parent and close
    const handleApply = () => {
        onApply(draft);
        onClose();
    };

    // Count active non-default filters for badge (excluding sort)
    const activeCount = [
        draft.rating !== "",
        draft.priceRange !== "",
        draft.maxTime !== "",
        draft.freeDelivery,
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
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-heading-sm font-bold">Filters & Sort</h2>
                                        {activeCount > 0 && (
                                            <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
                                                {activeCount}
                                            </span>
                                        )}
                                    </div>
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

                        {/* Scrollable Content */}
                        <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8 md:space-y-10 scrollbar-hide">

                            {/* Sort By */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4 md:mb-5">Sort By</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {SORT_OPTIONS.map((option) => {
                                        const isSelected = draft.sort === option.value;
                                        return (
                                            <button
                                                key={option.value}
                                                onClick={() => handleSortSelect(option.value)}
                                                className={`flex items-center justify-between px-4 py-3 md:py-3.5 rounded-2xl border transition-all text-body-sm ${
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

                            {/* Quick Filters */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4 md:mb-5">Quick Filters</h3>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    <button
                                        onClick={handleRatingToggle}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-body-sm transition-all ${
                                            draft.rating === "4.5"
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border bg-background/40 hover:border-primary"
                                        }`}
                                    >
                                        <Star className="w-4 h-4 text-rating fill-rating" />
                                        <span>4.5+ Rating</span>
                                    </button>

                                    <button
                                        onClick={handleMaxTimeToggle}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-body-sm transition-all ${
                                            draft.maxTime === "30"
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border bg-background/40 hover:border-primary"
                                        }`}
                                    >
                                        <Clock className="w-4 h-4 text-info" />
                                        <span>Under 30 min</span>
                                    </button>

                                    <button
                                        onClick={handleFreeDeliveryToggle}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-body-sm transition-all ${
                                            draft.freeDelivery
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-border bg-background/40 hover:border-primary"
                                        }`}
                                    >
                                        <DollarSign className="w-4 h-4 text-success" />
                                        <span>Free Delivery</span>
                                    </button>
                                </div>
                            </section>

                            {/* Price Range */}
                            <section>
                                <h3 className="text-body-lg font-bold mb-4 md:mb-5">Price Range</h3>
                                <div className="flex p-1 bg-muted/50 rounded-2xl border border-border/50">
                                    {PRICE_OPTIONS.map((price) => {
                                        const isSelected = draft.priceRange === price.value;
                                        return (
                                            <button
                                                key={price.value}
                                                onClick={() => handlePriceSelect(price.value)}
                                                className={`flex-1 py-2.5 md:py-3 text-center rounded-xl transition-all font-bold ${
                                                    isSelected
                                                        ? "bg-primary text-primary-foreground shadow-button"
                                                        : "text-muted-foreground hover:text-foreground"
                                                }`}
                                            >
                                                {price.label}
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
                                className="flex-[2] h-12 md:h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold shadow-button"
                            >
                                Apply Filters
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};