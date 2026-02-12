import { motion } from "framer-motion";

export const CategoryPillsComponent = ({ cuisines }) => {
    return (
        <div className="mb-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                {cuisines.map((cuisine, index) => (
                    <motion.button
                        key={cuisine.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="px-5 py-2.5 rounded-xl text-[11px] font-extrabold uppercase tracking-widest 
                                    bg-card/40 backdrop-blur-md border border-border/60 
                                    text-muted-foreground transition-all duration-300
                                    hover:border-primary/60 hover:text-primary hover:bg-primary/5
                                    hover:shadow-[0_0_20px_rgba(146,255,0,0.1)]
                                    active:scale-95 whitespace-nowrap shrink-0 flex items-center justify-center"
                    >
                        {cuisine.name}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};