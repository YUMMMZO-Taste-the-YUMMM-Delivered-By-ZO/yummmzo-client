import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StillNeedHelpComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-primary/10 rounded-2xl p-6 text-center"
        >
            <h3 className="font-semibold mb-2">Still Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
                Our support team is available 24/7 to assist you
            </p>
            <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Live Chat
            </Button>
        </motion.div>
    );
};