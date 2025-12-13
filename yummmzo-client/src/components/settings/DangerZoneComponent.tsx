import { motion } from "framer-motion";
import { Trash2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DangerZoneComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
        >
            <div className="px-4 py-3 bg-destructive/10 border-b border-border">
                <h3 className="text-sm font-semibold text-destructive">
                    Danger Zone
                </h3>
            </div>
            <div className="p-4 space-y-3">
                <Button
                    variant="outline"
                    className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                    <Trash2 className="h-4 w-4 mr-3" />
                    Delete Account
                </Button>
                <Button
                    variant="outline"
                    className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                    <LogOut className="h-4 w-4 mr-3" />
                    Logout from All Devices
                </Button>
            </div>
        </motion.div>
    );
};