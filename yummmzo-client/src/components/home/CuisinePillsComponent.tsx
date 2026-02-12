import { motion } from "framer-motion";

export const CuisinePillsComponent = ({ cuisines }) => {
    return (
        <div className="mb-6">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {Array.isArray(cuisines) && cuisines.map((cuisine, index) => (
                    <motion.button
                        key={cuisine.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="px-5 py-2.5 rounded-xl text-[13px] font-bold 
                                    bg-card/40 backdrop-blur-md border border-primary/10 
                                    text-muted-foreground transition-all duration-300
                                    hover:border-primary/40 hover:text-primary hover:bg-primary/5
                                    hover:shadow-[0_2px_8px_rgba(146,255,0,0.08)] 
                                    active:scale-95 whitespace-nowrap shrink-0 
                                    flex items-center justify-center leading-none"
                    >
                        {cuisine.name}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};