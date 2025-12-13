import { Button } from "@/components/ui/button";
import type { PlaceOrderButtonComponentProps } from "@/types/checkoutTypes";

export const PlaceOrderButtonComponent = ({
    grandTotal,
    isLoading,
    onPlaceOrder
}: PlaceOrderButtonComponentProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
            <Button
                className="w-full h-14 rounded-2xl text-base"
                size="lg"
                onClick={onPlaceOrder}
                disabled={isLoading}
            >
                {isLoading ? (
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Processing...
                    </div>
                ) : (
                    `Place Order - $${grandTotal.toFixed(2)}`
                )}
            </Button>
        </div>
    );
};