interface FAQCategoriesComponentProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

export const FAQCategoriesComponent = ({
    categories,
    selectedCategory,
    setSelectedCategory
}: FAQCategoriesComponentProps) => {
    return (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap capitalize transition-all ${selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-muted-foreground border border-border hover:border-primary/50"
                        }`}
                >
                    {category === "all" ? "All Topics" : category}
                </button>
            ))}
        </div>
    );
};