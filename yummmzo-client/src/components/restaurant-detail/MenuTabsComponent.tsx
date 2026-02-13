import { SlidersHorizontal } from "lucide-react";

// TODO: Add props: menuCategories (from API), activeTab, setActiveTab, onFilterClick
// TODO: Apply active styles based on activeTab state
// TODO: Wire onFilterClick to open filter panel

export const MenuTabsComponent = ({restaurantMenu , handleShowItems , activeTab}: {restaurantMenu: any , handleShowItems: any , activeTab: any}) => {
    return (
        <div className="mt-8 flex items-center gap-3">
            {/* Filter Trigger */}
            <button className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-card border border-border text-primary hover:border-primary/50 transition-all active:scale-95 shadow-sm">
                <SlidersHorizontal className="w-5 h-5" />
            </button>

            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2">
                {
                    restaurantMenu?.map((category) => (
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
                    ))
                }
            </div>
        </div>
    );
};