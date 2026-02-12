import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { MapPin, ChevronDown, Search, LocateFixed, Clock } from "lucide-react";
import { getAddressSuggestions } from "@/services/currentLocation.services";
import { toast } from "@/hooks/use-toast";
import { setUserCoordinates } from "@/store/slices/userLocationSlice";
import { getCurrentLocation } from "@/helpers/getCurrentLocation";

export const LocationButtonComponent = () => {
    // useDispatch
    const dispatch = useDispatch();

    // State Variables
    const [isOpen, setIsOpen] = useState(false);
    const { addressDisplayName } = useSelector((state: RootState) => state.userCurrentLocation);
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [loading, setLoading] = useState(false);

    // useRef
    const timerRef = useRef<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // useEffect
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            };
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handler Functions
    const handleGetUserCurrentLocation = async () => {
        try {
            const coords = await getCurrentLocation();
            dispatch(setUserCoordinates(coords));
            setIsOpen(false);
            toast({ 
                variant: 'default',
                title: "Location Updated", 
                description: "Finding flavors near you!" 
            });
        } 
        catch (error: any) {
            toast({ 
                variant: 'destructive', 
                title: "Access Denied",
                description: error.message 
            });
        }
    };

    const handleAddressSuggestions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (timerRef.current){
            clearTimeout(timerRef.current);
        };

        if (value.length < 3) {
            setSuggestions([]);
            return;
        };

        setLoading(true);
        timerRef.current = setTimeout(async () => {
            try {
                const data = await getAddressSuggestions(value);
                setSuggestions(data);
            } 
            catch (error) {
                console.error(error);
            } 
            finally {
                setLoading(false);
            }
        }, 600);
    };

    const handleSelectLocation = (loc: any) => {
        dispatch(setUserCoordinates({
            latitude: parseFloat(loc.lat),
            longitude: parseFloat(loc.lon)
        }));
        setIsOpen(false);
        setSearchQuery("");
        setSuggestions([]);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-card/80 border border-transparent hover:border-border transition-all group"
            >
                <div className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20">
                    <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col items-start leading-tight max-w-[180px] md:max-w-[250px]">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Deliver to</span>
                    <span className="text-sm font-medium truncate w-full text-foreground/90">{addressDisplayName || "Select Location"}</span>
                </div>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-[350px] glass-card rounded-2xl p-4 shadow-elevated z-50 animate-scale-in origin-top-left overflow-hidden">
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            onChange={handleAddressSuggestions}
                            value={searchQuery}
                            autoFocus
                            type="text"
                            placeholder="Search area, street name..."
                            className="w-full bg-background border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                    </div>

                    {/* Dynamic Suggestions List */}
                    {suggestions.length > 0 && (
                        <div className="mb-4 space-y-1 max-h-[220px] overflow-y-auto scrollbar-hide">
                            <p className="px-2 text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Search Results</p>
                            {suggestions.map((loc, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => handleSelectLocation(loc)}
                                    className="flex items-start gap-3 w-full p-2.5 rounded-xl hover:bg-primary/10 text-left transition-colors group"
                                >
                                    <MapPin className="h-4 w-4 text-muted-foreground mt-1 shrink-0 group-hover:text-primary" />
                                    <div className="overflow-hidden">
                                        <p className="text-xs font-semibold text-foreground/90 truncate">{loc.display_name.split(',')[0]}</p>
                                        <p className="text-[10px] text-muted-foreground truncate">{loc.display_name}</p>
                                    </div>
                                </button>
                            ))}
                            <div className="my-3 border-t border-border/50" />
                        </div>
                    )}

                    <button onClick={handleGetUserCurrentLocation} className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-primary/10 text-primary transition-colors group">
                        <LocateFixed className="h-5 w-5 group-hover:animate-pulse" />
                        <div className="text-left">
                            <p className="text-sm font-semibold">Use current location</p>
                            <p className="text-[11px] text-muted-foreground">Using GPS</p>
                        </div>
                    </button>

                    <div className="my-3 border-t border-border/50" />
                    <p className="px-2 text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Recent Locations</p>
                    <div className="space-y-1 opacity-60">
                        <button className="flex items-start gap-3 w-full p-3 rounded-xl hover:bg-card transition-colors">
                            <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <div className="text-left">
                                <p className="text-sm font-medium">Digha, Patna</p>
                                <p className="text-[10px] text-muted-foreground truncate w-[240px]">Bihar, 800001, India</p>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};