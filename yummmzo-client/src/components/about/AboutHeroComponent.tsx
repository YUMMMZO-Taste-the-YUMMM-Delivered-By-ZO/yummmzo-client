import { motion } from "framer-motion";

export const AboutHeroComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-primary">YUMMMZO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Taste the Yummm, Delivered By Zo
            </p>
        </motion.div>
    );
};