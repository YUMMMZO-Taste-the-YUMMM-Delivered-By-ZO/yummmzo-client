import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSearchBarComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
        >
            <div className="flex flex-col sm:flex-row gap-3 p-3 bg-card rounded-2xl border border-border shadow-elevated">
                <div className="flex-1 relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        placeholder="Enter your delivery address"
                        className="pl-12 border-0 bg-transparent focus:ring-0"
                    />
                </div>
                <Button size="lg" className="sm:w-auto" variant="hero">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </motion.div>
    );
};