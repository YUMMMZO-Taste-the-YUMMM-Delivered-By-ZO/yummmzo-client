import type { MenuTabsComponentProps } from "@/types/restaurantDetailTypes";
import { SlidersHorizontal } from "lucide-react";

interface ExtendedMenuTabsProps extends MenuTabsComponentProps {
    onFilterClick: () => void;
}

export const MenuTabsComponent = ({
    menuCategories,
    activeTab,
    setActiveTab,
    onFilterClick
}: ExtendedMenuTabsProps) => {
    return (
        <div className="mt-8 flex items-center gap-3">
            {/* Filter Trigger */}
            <button
                onClick={onFilterClick}
                className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-card border border-border text-primary hover:border-primary/50 transition-all active:scale-95 shadow-sm"
            >
                <SlidersHorizontal className="w-5 h-5" />
            </button>

            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2">
                {menuCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 border ${activeTab === category
                                ? "bg-primary text-primary-foreground border-primary shadow-button"
                                : "bg-card text-muted-foreground border-border hover:border-primary/30"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};