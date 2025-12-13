import { motion } from "framer-motion";

interface CategoryPillsComponentProps {
    categories: string[];
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

export const CategoryPillsComponent = ({
    categories,
    activeCategory,
    setActiveCategory
}: CategoryPillsComponentProps) => {
    return (
        <div className="mb-8">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {categories.map((category, index) => (
                    <motion.button
                        key={category}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-card text-muted-foreground border border-border hover:border-primary/50"
                            }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};