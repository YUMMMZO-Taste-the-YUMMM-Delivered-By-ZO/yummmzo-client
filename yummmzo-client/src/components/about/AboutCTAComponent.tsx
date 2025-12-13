import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AboutCTAComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-primary rounded-3xl p-8 text-center"
        >
            <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Order?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
                Join millions of happy customers and experience the YUMMMZO difference.
            </p>
            <Link to="/home">
                <Button variant="secondary" size="lg">
                    Start Ordering
                </Button>
            </Link>
        </motion.div>
    );
};