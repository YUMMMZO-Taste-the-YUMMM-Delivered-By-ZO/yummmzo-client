import { Ticket, ChevronRight, X, Tag } from "lucide-react";

interface CouponSectionProps {
    onOpenSelection: () => void;
    appliedCoupon: { code: string; discountAmount: number; discountType: string } | null;
    onRemoveCoupon: () => void;
    couponCode: string;
    setCouponCode: (val: string) => void;
    onApplyManual: (code: string) => void;
    isApplying: boolean;
}

export const CouponSectionComponent = ({
    onOpenSelection,
    appliedCoupon,
    onRemoveCoupon,
    couponCode,
    setCouponCode,
    onApplyManual,
    isApplying
}: CouponSectionProps) => {
    return (
        <div className="mb-8 space-y-3">
            <h3 className="text-body-md font-bold text-muted-foreground px-1">Offers & Benefits</h3>

            <div className="flex flex-col gap-3">
                {/* Applied Coupon State */}
                {appliedCoupon ? (
                    <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/30 rounded-2xl">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <Tag className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                                <p className="text-body-sm font-black text-primary">{appliedCoupon.code}</p>
                                <p className="text-[10px] text-primary/70 font-bold">
                                    ₹{appliedCoupon.discountAmount} discount applied!
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onRemoveCoupon}
                            className="p-2 hover:bg-primary/20 rounded-full transition-all"
                        >
                            <X className="w-4 h-4 text-primary" />
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Manual Input */}
                        <div className="flex gap-2 p-2 bg-card rounded-2xl border border-border shadow-sm focus-within:border-primary/50 transition-all">
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                                placeholder="Enter Discount Code"
                                className="flex-1 bg-transparent px-3 text-body-sm outline-none placeholder:text-muted-foreground/50"
                            />
                            <button
                                onClick={() => couponCode && onApplyManual(couponCode)}
                                disabled={!couponCode || isApplying}
                                className="px-6 py-2.5 bg-primary text-primary-foreground text-caption font-black rounded-xl hover:bg-primary/90 transition-all shadow-button disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isApplying ? "Applying..." : "Apply"}
                            </button>
                        </div>

                        {/* View All Coupons */}
                        <button
                            onClick={onOpenSelection}
                            className="flex items-center justify-between w-full p-4 bg-primary/5 border border-primary/20 rounded-2xl group hover:bg-primary/10 transition-all active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary rounded-lg shadow-glow">
                                    <Ticket className="w-4 h-4 text-primary-foreground" />
                                </div>
                                <div className="text-left">
                                    <p className="text-body-sm font-black text-foreground">View Available Coupons</p>
                                    <p className="text-[10px] text-primary font-bold">Save up to 50% on this order</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};