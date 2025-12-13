import { motion } from "framer-motion";

export const HeroFloatingImagesComponent = () => {
    return (
        <>
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 hidden lg:block"
            >
                <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200"
                    alt="Burger"
                    className="w-24 h-24 rounded-2xl object-cover shadow-elevated"
                />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-10 hidden lg:block"
            >
                <img
                    src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200"
                    alt="Pizza"
                    className="w-32 h-32 rounded-2xl object-cover shadow-elevated"
                />
            </motion.div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-20 hidden lg:block"
            >
                <img
                    src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200"
                    alt="Sushi"
                    className="w-20 h-20 rounded-2xl object-cover shadow-elevated"
                />
            </motion.div>
        </>
    );
};