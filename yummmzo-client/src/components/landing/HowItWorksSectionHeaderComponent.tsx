import { motion } from "framer-motion";

export const HowItWorksSectionHeaderComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
                How It Works
            </h2>
        </motion.div>
    );
};