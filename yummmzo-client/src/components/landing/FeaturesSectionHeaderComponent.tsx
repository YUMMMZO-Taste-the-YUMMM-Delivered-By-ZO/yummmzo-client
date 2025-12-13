import { motion } from "framer-motion";

export const FeaturesSectionHeaderComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Features You'll Love
            </h2>
        </motion.div>
    );
};