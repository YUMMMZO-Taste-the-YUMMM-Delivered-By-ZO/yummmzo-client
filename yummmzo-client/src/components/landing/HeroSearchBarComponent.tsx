import { motion } from "framer-motion";
import { MapPin, ArrowRight, Navigation } from "lucide-react";
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
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-card rounded-2xl border border-border shadow-elevated transition-all duration-300 focus-within:border-primary/50 group">
                <div className="flex-1 relative flex items-center">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        placeholder="Enter your delivery address"
                        className="pl-12 pr-32 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-body-md"
                    />
                    
                    {/* Desktop/iPad: "Use Location" Button */}
                    <button
                        type="button"
                        className="hidden md:flex items-center gap-1.5 absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-caption font-bold text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                        <Navigation className="h-3.5 w-3.5" />
                        <span>Use Location</span>
                    </button>

                    {/* Mobile: Small Icon version for better fit */}
                    <button
                        type="button"
                        className="md:hidden flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-primary hover:bg-primary/10"
                    >
                        <Navigation className="h-4 w-4" />
                    </button>
                </div>

                <Button 
                    size="lg" 
                    className="sm:w-auto rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-button hover-lift"
                >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
            
            {/* Subtle sub-text to fill space on desktop/iPad */}
            <div className="mt-3 hidden sm:flex items-center justify-center gap-6 text-caption text-muted-foreground/60">
                <span className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    No minimum order
                </span>
                <span className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    Live tracking
                </span>
            </div>
        </motion.div>
    );
};