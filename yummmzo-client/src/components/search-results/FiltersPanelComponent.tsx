import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { FiltersPanelComponentProps } from "@/types/searchResultsTypes";

export const FiltersPanelComponent = ({
    showFilters,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange
}: FiltersPanelComponentProps) => {
    if (!showFilters) return null;

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-card rounded-2xl border border-border p-4 mb-6 space-y-4"
        >
            <div>
                <label className="text-sm font-medium mb-2 block">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="delivery">Delivery Time</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="text-sm font-medium mb-2 block">
                    Price Range
                </label>
                <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={100}
                    step={10}
                    className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </motion.div>
    );
};