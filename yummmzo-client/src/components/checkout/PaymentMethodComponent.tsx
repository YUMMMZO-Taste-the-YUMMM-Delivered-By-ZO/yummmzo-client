import { useState } from "react";
import { CreditCard, Smartphone, Banknote, CheckCircle2 } from "lucide-react";
import { SavedCardsComponent } from "./SavedCardsComponent";
import { SavedUpiComponent } from "./SavedUpiComponent";

export const PaymentMethodComponent = ({ selectedPayment, setSelectedPayment }: any) => {
    const [selectedCardId, setSelectedCardId] = useState("c1");
    const [selectedUpiId, setSelectedUpiId] = useState("");

    const paymentOptions = [
        { id: "card", label: "Credit Card", icon: CreditCard },
        { id: "upi", label: "UPI", icon: Smartphone },
        { id: "cod", label: "Cash on Delivery", icon: Banknote },
    ];

    return (
        <div className="space-y-4">
            <h3 className="text-heading-sm font-bold px-1">Payment Method</h3>
            <div className="flex flex-col gap-4">
                {paymentOptions.map((option) => {
                    const Icon = option.icon;
                    const isSelected = selectedPayment === option.id;

                    return (
                        <div 
                            key={option.id}
                            className={`p-4 rounded-2xl border transition-all duration-300 ${
                                isSelected ? "border-primary bg-primary/5" : "border-border bg-card/50"
                            }`}
                        >
                            <div 
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setSelectedPayment(option.id)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-body-md">{option.label}</span>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                    isSelected ? "border-primary bg-primary shadow-glow" : "border-muted"
                                }`}>
                                    {isSelected && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
                                </div>
                            </div>

                            {/* Conditional expansion for Card/UPI */}
                            {isSelected && option.id === "card" && (
                                <SavedCardsComponent selectedCardId={selectedCardId} onSelect={setSelectedCardId} />
                            )}
                            {isSelected && option.id === "upi" && (
                                <SavedUpiComponent selectedUpiId={selectedUpiId} onSelect={setSelectedUpiId} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};