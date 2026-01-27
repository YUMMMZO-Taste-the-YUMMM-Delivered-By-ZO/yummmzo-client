import { useState } from "react";
import { Plus, CreditCard, Lock, Calendar, User, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SavedCardsComponent = ({ selectedCardId, onSelect }: { selectedCardId: string, onSelect: (id: string) => void }) => {
    const [isAdding, setIsAdding] = useState(false);

    const SAVED_CARDS = [
        { id: "c1", brand: "Visa", last4: "4242", expiry: "12/28" },
        { id: "c2", brand: "Mastercard", last4: "8891", expiry: "05/27" }
    ];

    return (
        <div className="mt-4 space-y-3 animate-fade-in px-2">
            <p className="text-caption text-muted-foreground font-bold mb-1 uppercase tracking-wider">Saved Cards</p>
            {SAVED_CARDS.map((card) => (
                <div 
                    key={card.id}
                    onClick={() => { onSelect(card.id); setIsAdding(false); }}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedCardId === card.id && !isAdding ? "border-primary bg-primary/5 shadow-glow" : "border-border bg-background/40 hover:border-primary/30"
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-card rounded-lg border border-border">
                            <CreditCard className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                            <p className="text-body-sm font-bold">{card.brand} •••• {card.last4}</p>
                            <p className="text-[10px] text-muted-foreground">Expires {card.expiry}</p>
                        </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedCardId === card.id && !isAdding ? "border-primary" : "border-muted"}`}>
                        {selectedCardId === card.id && !isAdding && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                </div>
            ))}

            {!isAdding ? (
                <button 
                    onClick={() => setIsAdding(true)}
                    className="flex items-center gap-2 w-full p-4 rounded-xl border border-dashed border-border hover:border-primary/50 text-primary transition-all group mt-2"
                >
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    <span className="text-body-sm font-bold tracking-tight">Add New Card</span>
                </button>
            ) : (
                <div className="p-5 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-xl animate-scale-in mt-4 shadow-elevated">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-primary" />
                            <span className="text-body-sm font-bold text-foreground">New Card Details</span>
                        </div>
                        <button onClick={() => setIsAdding(false)} className="text-xs text-muted-foreground hover:text-destructive transition-colors font-medium">Cancel</button>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="relative group">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input type="text" placeholder="Cardholder Name" className="w-full bg-background/50 border border-border rounded-xl pl-10 pr-4 py-3 text-body-sm outline-none focus:border-primary/50 transition-all" />
                        </div>
                        
                        <div className="relative group">
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input type="text" placeholder="Card Number" className="w-full bg-background/50 border border-border rounded-xl pl-10 pr-4 py-3 text-body-sm outline-none focus:border-primary/50 transition-all" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <input type="text" placeholder="MM / YY" className="w-full bg-background/50 border border-border rounded-xl pl-10 pr-4 py-3 text-body-sm outline-none focus:border-primary/50 transition-all" />
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <input type="password" placeholder="CVV" className="w-full bg-background/50 border border-border rounded-xl pl-10 pr-4 py-3 text-body-sm outline-none focus:border-primary/50 transition-all" />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 px-1 text-[10px] text-muted-foreground">
                            <ShieldCheck className="w-3 h-3 text-success" />
                            Your payment info is encrypted and secure
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black py-6 rounded-xl mt-2 shadow-button hover-lift">
                            Add & Use Card
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};