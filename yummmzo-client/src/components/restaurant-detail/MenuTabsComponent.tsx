import { SlidersHorizontal } from "lucide-react";

const ALL_TAB_ID = "ALL";

interface Props {
    restaurantMenu:   any[];
    activeTab:        string | null;
    handleShowItems:  (tabId: string) => void;
    onFilterClick:    () => void;
}

export const MenuTabsComponent = ({ restaurantMenu, handleShowItems, activeTab, onFilterClick }: Props) => {
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
                {/* ALL tab — always first */}
                <button
                    onClick={() => handleShowItems(ALL_TAB_ID)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 border ${
                        activeTab === ALL_TAB_ID
                            ? "bg-primary text-primary-foreground border-primary shadow-button"
                            : "bg-card text-muted-foreground border-border hover:border-primary/30"
                    }`}
                >
                    Recommended
                </button>

                {/* Dynamic category tabs */}
                {restaurantMenu?.map((category: any) => (
                    <button
                        key={category.id}
                        onClick={() => handleShowItems(category.id)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-200 border ${
                            category.id === activeTab
                                ? "bg-primary text-primary-foreground border-primary shadow-button"
                                : "bg-card text-muted-foreground border-border hover:border-primary/30"
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export { ALL_TAB_ID };