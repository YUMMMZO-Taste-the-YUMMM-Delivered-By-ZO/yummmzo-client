import type { SearchCategoryPillsComponentProps } from "@/types/searchResultsTypes";

export const SearchCategoryPillsComponent = ({
    categories,
    selectedCategory,
    setSelectedCategory
}: SearchCategoryPillsComponentProps) => {
    return (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-muted-foreground border border-border hover:border-primary/50"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};