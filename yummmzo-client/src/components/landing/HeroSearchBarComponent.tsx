import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Navigation, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState, useEffect } from "react";
import { getAddressSuggestions } from "@/services/currentLocation.services";
import { toast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { setUserCoordinates } from "@/store/slices/userLocationSlice";

export const HeroSearchBarComponent = ({ handleGetUserCurrentLocation }: any) => {
    // State Variables
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const dispatch = useDispatch();
    const timerRef = useRef<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // useEffect
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handler: Search Suggestions with Debounce
    const handleAddressSuggestions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (timerRef.current) clearTimeout(timerRef.current);

        if (value.length < 3) {
            setSuggestions([]);
            setIsDropdownOpen(false);
            return;
        }

        timerRef.current = setTimeout(async () => {
            try {
                const data = await getAddressSuggestions(value);
                setSuggestions(data);
                setIsDropdownOpen(data.length > 0);
            } catch (error) {
                toast({
                    variant: 'destructive',
                    title: "Location Search Failed",
                    description: "Hume address nahi mila, shayad network ka issue hai."
                });
            }
        }, 500);
    };

    const handleSelectSuggestion = (suggestion: any) => {
        setSearchQuery(suggestion.display_name);
        setSuggestions([]);
        setIsDropdownOpen(false);

        dispatch(setUserCoordinates({
            latitude: parseFloat(suggestion.lat),
            longitude: parseFloat(suggestion.lon)
        }));

        setSearchQuery("");

        toast({
            title: "Location Updated!",
            description: `Now showing restaurants near ${suggestion.display_name.split(',')[0]}`,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-2xl mx-auto mb-8"
            ref={dropdownRef}
        >
            {/* Main Search Bar Container */}
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-card/90 backdrop-blur-md rounded-2xl border border-border shadow-elevated transition-all duration-300 focus-within:border-primary/50 group relative z-20">
                <div className="flex-1 relative flex items-center">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                        onChange={handleAddressSuggestions}
                        value={searchQuery}
                        onFocus={() => suggestions.length > 0 && setIsDropdownOpen(true)}
                        placeholder="Enter your delivery address"
                        className="pl-12 pr-32 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-body-md placeholder:text-muted-foreground/50"
                    />
                    
                    {/* Location Buttons (Desktop & Mobile) */}
                    <button
                        onClick={handleGetUserCurrentLocation}
                        type="button"
                        className="hidden md:flex items-center gap-1.5 absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-caption font-bold text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                        <Navigation className="h-3.5 w-3.5" />
                        <span>Use Location</span>
                    </button>

                    <button
                        onClick={handleGetUserCurrentLocation}
                        type="button"
                        className="md:hidden flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-primary hover:bg-primary/10"
                    >
                        <Navigation className="h-4 w-4" />
                    </button>
                </div>

                <Button 
                    size="lg" 
                    className="sm:w-auto rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-button hover-lift shrink-0"
                >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>

            {/* Suggestions Dropdown UI */}
            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-3 z-[100]"
                    >
                        <div className="mx-1 md:mx-0 glass-card rounded-2xl border border-border/50 shadow-elevated bg-card/95 backdrop-blur-xl max-h-[320px] overflow-y-auto scrollbar-hide">
                            <div className="p-2">
                                {suggestions.map((item: any, index: number) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleSelectSuggestion(item)}
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.03 }}
                                        className="w-full flex items-start gap-4 p-4 rounded-xl hover:bg-primary/10 text-left transition-all duration-200 group border-b border-border/5 last:border-0"
                                    >
                                        <div className="mt-1 p-2 rounded-full bg-muted/50 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                            <Search className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-body-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                                {item.display_name.split(',')[0]}
                                            </p>
                                            <p className="text-caption text-muted-foreground truncate opacity-80">
                                                {item.display_name.split(',').slice(1).join(',')}
                                            </p>
                                        </div>
                                        <div className="self-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                            <ArrowRight className="h-4 w-4 text-primary" />
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Subtle sub-text */}
            <div className="mt-4 hidden sm:flex items-center justify-center gap-6 text-caption text-muted-foreground/60">
                <span className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    No minimum order
                </span>
                <span className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    Live tracking
                </span>
            </div>
        </motion.div>
    );
};