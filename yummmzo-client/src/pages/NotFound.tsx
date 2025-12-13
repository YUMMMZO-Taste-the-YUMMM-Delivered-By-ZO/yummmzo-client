import { NotFoundActionsComponent } from "@/components/not-found/NotFoundActionsComponent";
import { NotFoundContentComponent } from "@/components/not-found/NotFoundContentComponent";
import { motion } from "framer-motion";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-md"
            >
                <NotFoundContentComponent />
                <NotFoundActionsComponent />
            </motion.div>
        </div>
    );
};

export default NotFound;