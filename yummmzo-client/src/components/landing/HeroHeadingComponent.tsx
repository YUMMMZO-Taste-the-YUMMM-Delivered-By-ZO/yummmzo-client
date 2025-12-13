import { motion } from "framer-motion";

export const HeroHeadingComponent = () => {
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
                Order Food{" "}
                <span className="text-gradient">You Love</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
                Taste the Yummm, Delivered By Zo
            </motion.p>
        </>
    );
};