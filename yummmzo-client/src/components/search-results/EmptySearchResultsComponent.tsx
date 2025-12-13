import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const EmptySearchResultsComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
        >
            <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
            <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">Pizza</Badge>
                <Badge variant="outline">Sushi</Badge>
                <Badge variant="outline">Burgers</Badge>
                <Badge variant="outline">Indian</Badge>
            </div>
        </motion.div>
    );
};