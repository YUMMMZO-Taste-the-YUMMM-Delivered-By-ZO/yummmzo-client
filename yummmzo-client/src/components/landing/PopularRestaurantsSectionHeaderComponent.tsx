import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    onViewAll: (e: React.MouseEvent) => void;
}

export const PopularRestaurantsSectionHeaderComponent = ({ onViewAll }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
        >
            <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                    Top Picks
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Popular Restaurants
                </h2>
            </div>
            <Link to="/home" onClick={onViewAll}>
                <Button variant="outline">
                    View All
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </motion.div>
    );
};