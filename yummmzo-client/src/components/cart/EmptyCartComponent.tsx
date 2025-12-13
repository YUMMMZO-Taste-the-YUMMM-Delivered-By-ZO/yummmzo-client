import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EmptyCartComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
        >
            <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center mx-auto mb-6">
                <Tag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
                Add items from restaurants to start an order
            </p>
            <Link to="/home">
                <Button>Browse Restaurants</Button>
            </Link>
        </motion.div>
    );
};