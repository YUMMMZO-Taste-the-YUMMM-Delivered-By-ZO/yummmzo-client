import { motion } from "framer-motion";
import { MapPin, Navigation, Bike } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const TrackingMapComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-card border border-border"
        >
            {/* Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20">
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-primary/30"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            {/* Animated Route */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-1/2">
                    {/* Start Point - Restaurant */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <p className="text-xs text-center mt-1 font-medium">Restaurant</p>
                    </div>

                    {/* Route Line */}
                    <div className="absolute left-12 right-12 top-1/2 h-1 bg-primary/30 -translate-y-1/2">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="h-full bg-primary rounded-full"
                        />
                    </div>

                    {/* Driver */}
                    <motion.div
                        initial={{ left: "20%" }}
                        animate={{ left: "60%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                    >
                        <div className="w-10 h-10 rounded-full bg-warning flex items-center justify-center shadow-lg">
                            <Bike className="h-5 w-5 text-warning-foreground" />
                        </div>
                    </motion.div>

                    {/* End Point - Your Location */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
                            <Navigation className="h-6 w-6 text-success-foreground" />
                        </div>
                        <p className="text-xs text-center mt-1 font-medium">Your Location</p>
                    </div>
                </div>
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
                <Badge className="bg-warning/20 text-warning border-warning/30 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-warning mr-2" />
                    On the way
                </Badge>
            </div>
        </motion.div>
    );
};