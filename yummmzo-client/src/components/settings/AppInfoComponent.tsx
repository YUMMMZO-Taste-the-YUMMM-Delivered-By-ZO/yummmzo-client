import { motion } from "framer-motion";

export const AppInfoComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-muted-foreground py-4"
        >
            <p>YUMMMZO v1.0.0</p>
            <p>Made with ❤️ in India</p>
        </motion.div>
    );
};