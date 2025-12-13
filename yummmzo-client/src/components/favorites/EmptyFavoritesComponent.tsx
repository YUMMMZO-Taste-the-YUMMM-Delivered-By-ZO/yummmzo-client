import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EmptyFavoritesComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
        >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-card flex items-center justify-center">
                <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No Favorites Yet</h2>
            <p className="text-muted-foreground mb-6">
                Start exploring and save your favorite restaurants!
            </p>
            <Link to="/home">
                <Button>Explore Restaurants</Button>
            </Link>
        </motion.div>
    );
};