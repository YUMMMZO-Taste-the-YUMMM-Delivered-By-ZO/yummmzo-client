interface MenuTabsComponentProps {
    menuCategories: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const MenuTabsComponent = ({
    menuCategories,
    activeTab,
    setActiveTab
}: MenuTabsComponentProps) => {
    return (
        <div className="mt-8">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4">
                {menuCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveTab(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeTab === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-card text-muted-foreground border border-border hover:border-primary/50"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};