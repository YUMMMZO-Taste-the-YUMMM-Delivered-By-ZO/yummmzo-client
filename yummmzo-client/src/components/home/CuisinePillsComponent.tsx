import { motion } from "framer-motion";

interface Cuisine {
    id:   number;
    name: string;
}

interface Props {
    cuisines:          Cuisine[];
    selectedCuisines:  string[];
    onToggle:          (cuisineName: string) => void;
}

export const CuisinePillsComponent = ({ cuisines, selectedCuisines, onToggle }: Props) => {
    return (
        <div className="mb-6">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {Array.isArray(cuisines) && cuisines.map((cuisine, index) => {
                    const isSelected = selectedCuisines.includes(cuisine.name);
                    return (
                        <motion.button
                            key={cuisine.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                            onClick={() => onToggle(cuisine.name)}
                            className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300
                                        whitespace-nowrap shrink-0 flex items-center justify-center leading-none
                                        active:scale-95
                                        ${isSelected
                                            ? "border border-primary bg-primary/10 text-primary shadow-[0_2px_12px_rgba(146,255,0,0.15)]"
                                            : "bg-card/40 backdrop-blur-md border border-primary/10 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 hover:shadow-[0_2px_8px_rgba(146,255,0,0.08)]"
                                        }`}
                        >
                            {cuisine.name}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};