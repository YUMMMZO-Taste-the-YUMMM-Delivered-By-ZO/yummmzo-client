import { Sparkles, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { buildSmartCartService } from "@/services/restaurant.services";
import { toast } from "@/hooks/use-toast";

interface SmartAIOrderProps {
    restaurantId: number;
}

export const SmartAIOrderComponent = ({ restaurantId }: SmartAIOrderProps) => {
    // useQueryClient
    const queryClient = useQueryClient();

    // State Variables
    const [inputValue, setInputValue] = useState("");

    // useMutation
    const { mutate, isPending } = useMutation({
        mutationFn: () => buildSmartCartService(restaurantId, inputValue),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            setInputValue("");
            toast({
                title: "Magic successful! ✨",
                description: "AI has customized your cart based on your craving.",
            });
        },
        onError: (error: any) => {
            toast({
                variant: 'destructive',
                title: "Magic failed!",
                description: error.response?.data?.message || "AI is a bit sleepy, try again."
            });
        }
    });

    const handleMagicClick = () => {
        if (!inputValue.trim() || isPending) {
            return;
        };
        mutate();
    };

    return (
        <div className="container mx-auto px-4 mb-8 mt-4">
            <div className={`relative group transition-all duration-500 z-0 ${isPending ? 'scale-[1.01]' : ''}`}>
                
                {/* Background Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 ${isPending ? 'opacity-100 animate-pulse-glow' : ''}`}></div>
                
                {/* AI Badge */}
                <div className="absolute -top-3 right-6 bg-background border border-primary/40 px-2 py-0.5 rounded-full z-20 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                        </span>
                        AI Powered
                    </span>
                </div>

                <div className="relative glass-card rounded-xl p-2 flex items-center gap-4 border-primary/30 z-10">
                    <div className="bg-primary/10 p-2.5 rounded-lg flex-shrink-0">
                        {isPending ? (
                            <Loader2 className="w-5 h-5 text-primary animate-spin" />
                        ) : (
                            <Sparkles className="w-5 h-5 text-primary" /> 
                        )}
                    </div>

                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={isPending}
                        onKeyDown={(e) => e.key === 'Enter' && handleMagicClick()}
                        placeholder="Try: 'Something spicy with a chilled coke' ✨"
                        className="flex-1 bg-transparent border-none outline-none text-body-md py-2 px-2 placeholder:text-muted-foreground/60 truncate font-medium disabled:opacity-50"
                    />

                    <button 
                        onClick={handleMagicClick}
                        disabled={!inputValue.trim() || isPending}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-lg text-body-sm font-semibold transition-all active:scale-95 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed flex-shrink-0"
                    >
                        {isPending ? "Thinking..." : "Magic"}
                        {!isPending && <Send className="w-4 h-4" />}
                    </button>
                </div>
            </div>
        </div>
    );
};