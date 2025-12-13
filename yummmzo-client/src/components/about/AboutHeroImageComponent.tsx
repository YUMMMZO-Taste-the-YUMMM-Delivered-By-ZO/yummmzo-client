import { motion } from "framer-motion";

export const AboutHeroImageComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative h-64 md:h-80 rounded-3xl overflow-hidden"
        >
            <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200"
                alt="Delicious food"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Delivering Happiness, One Meal at a Time
                </h2>
            </div>
        </motion.div>
    );
};