import { useState } from "react";
import { Plus, Smartphone, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SavedUpiComponent = ({ selectedUpiId, onSelect }: { selectedUpiId: string, onSelect: (id: string) => void }) => {
    const [isAdding, setIsAdding] = useState(false);

    const SAVED_UPI = [
        { id: "u1", idName: "john.doe@okaxis" },
        { id: "u2", idName: "doe.john@paytm" }
    ];

    return (
        <div className="mt-4 space-y-3 animate-fade-in px-2">
            <p className="text-caption text-muted-foreground font-bold mb-1 uppercase tracking-wider">Saved UPI IDs</p>
            {SAVED_UPI.map((upi) => (
                <div 
                    key={upi.id}
                    onClick={() => { onSelect(upi.id); setIsAdding(false); }}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedUpiId === upi.id && !isAdding ? "border-primary bg-primary/5 shadow-glow" : "border-border bg-background/40 hover:border-primary/30"
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-card rounded-lg border border-border">
                            <Smartphone className="w-5 h-5 text-foreground" />
                        </div>
                        <p className="text-body-sm font-bold">{upi.idName}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedUpiId === upi.id && !isAdding ? "border-primary" : "border-muted"}`}>
                        {selectedUpiId === upi.id && !isAdding && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                </div>
            ))}

            {!isAdding ? (
                <button 
                    onClick={() => setIsAdding(true)}
                    className="flex items-center gap-2 w-full p-4 rounded-xl border border-dashed border-border hover:border-primary/50 text-primary transition-all group mt-2"
                >
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    <span className="text-body-sm font-bold tracking-tight">Add New UPI ID</span>
                </button>
            ) : (
                <div className="p-5 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-xl animate-scale-in mt-4 shadow-elevated">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4 text-primary" />
                            <span className="text-body-sm font-bold text-foreground">New UPI ID</span>
                        </div>
                        <button onClick={() => setIsAdding(false)} className="text-xs text-muted-foreground hover:text-destructive transition-colors font-medium">Cancel</button>
                    </div>

                    <div className="space-y-4">
                        <div className="relative group">
                            <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input 
                                type="text" 
                                placeholder="example@vpa" 
                                className="w-full bg-background/50 border border-border rounded-xl pl-10 pr-4 py-3 text-body-sm outline-none focus:border-primary/50 transition-all font-medium" 
                            />
                        </div>
                        
                        <div className="flex items-start gap-2 px-1 py-1">
                            <Info className="w-3.5 h-3.5 text-info mt-0.5" />
                            <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                                A verification request will be sent to your UPI app. Please approve it to link your ID.
                            </p>
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black py-6 rounded-xl mt-2 shadow-button hover-lift flex gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Verify & Save
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};