import { Ticket, ChevronRight } from "lucide-react";

export const CouponSectionComponent = ({ onOpenSelection }: { onOpenSelection: () => void }) => {
    return (
        <div className="mb-8 space-y-3">
            <h3 className="text-body-md font-bold text-muted-foreground px-1">Offers & Benefits</h3>
            
            <div className="flex flex-col gap-3">
                {/* Manual Input Field (as per your current screenshot) */}
                <div className="flex gap-2 p-2 bg-card rounded-2xl border border-border shadow-sm focus-within:border-primary/50 transition-all">
                    <input 
                        type="text" 
                        placeholder="Enter Discount Code"
                        className="flex-1 bg-transparent px-3 text-body-sm outline-none placeholder:text-muted-foreground/50"
                    />
                    <button className="px-6 py-2.5 bg-primary text-primary-foreground text-caption font-black rounded-xl hover:bg-primary/90 transition-all shadow-button">
                        Apply
                    </button>
                </div>

                {/* New: Select Available Coupons Trigger */}
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
            </div>
        </div>
    );
};