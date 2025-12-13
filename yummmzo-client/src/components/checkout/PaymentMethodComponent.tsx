import type { PaymentMethod, PaymentMethodComponentProps } from "@/types/checkoutTypes";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Banknote, Check } from "lucide-react";

export const PaymentMethodComponent = ({
    selectedPayment,
    setSelectedPayment
}: PaymentMethodComponentProps) => {
    const paymentMethods: PaymentMethod[] = [
        { id: "card", name: "Credit Card", icon: CreditCard },
        { id: "upi", name: "UPI", icon: Wallet },
        { id: "cod", name: "Cash on Delivery", icon: Banknote },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <h2 className="font-semibold mb-4">Payment Method</h2>
            <div className="space-y-3">
                {paymentMethods.map((method) => (
                    <button
                        key={method.id}
                        onClick={() => setSelectedPayment(method.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 ${selectedPayment === method.id
                                ? "border-primary bg-primary/5"
                                : "border-border bg-card hover:border-primary/50"
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedPayment === method.id ? "bg-primary/10" : "bg-muted"
                            }`}>
                            <method.icon className={`h-5 w-5 ${selectedPayment === method.id ? "text-primary" : "text-muted-foreground"
                                }`} />
                        </div>
                        <span className="flex-1 text-left font-medium">{method.name}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === method.id ? "border-primary bg-primary" : "border-muted-foreground"
                            }`}>
                            {selectedPayment === method.id && (
                                <Check className="h-3 w-3 text-primary-foreground" />
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </motion.section>
    );
};