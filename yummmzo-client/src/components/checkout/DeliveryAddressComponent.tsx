import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

export const DeliveryAddressComponent = ({ address, addresses, isLoading, onSelectAddress }: any) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h2 className="font-semibold mb-4">Delivery Address</h2>
                <div className="bg-card rounded-2xl p-4 border border-border">
                    {isLoading ? (
                        <p className="text-sm text-muted-foreground">Loading address...</p>
                    ) : !address ? (
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">No address found.</p>
                            <Button size="sm" onClick={() => navigate('/profile/addresses')}>
                                Add Address
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium capitalize">{address.type}</span>
                                    {address.isDefault && (
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                                            Default
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {address.address}, {address.city}, {address.state} {address.pincode}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">{address.name} · {address.phone}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => setIsSheetOpen(true)}>
                                Change <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </div>
                    )}
                </div>
            </motion.section>

            {/* Address Selection Sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent side="bottom" className="rounded-t-2xl max-h-[70vh] overflow-y-auto">
                    <SheetHeader className="mb-4">
                        <SheetTitle>Select Delivery Address</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-3 pb-6">
                        {addresses.length === 0 ? (
                            <div className="flex flex-col items-center gap-3 py-6">
                                <p className="text-sm text-muted-foreground">No saved addresses.</p>
                                <Button size="sm" onClick={() => navigate('/profile/addresses')}>
                                    Add Address
                                </Button>
                            </div>
                        ) : (
                            <>
                                {addresses.map((addr: any) => (
                                    <div
                                        key={addr.id}
                                        onClick={() => {
                                            onSelectAddress(addr);
                                            setIsSheetOpen(false);
                                        }}
                                        className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-colors ${
                                            address?.id === addr.id
                                                ? "border-primary bg-primary/5"
                                                : "border-border bg-card"
                                        }`}
                                    >
                                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-4 w-4 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <span className="font-medium capitalize text-sm">{addr.type}</span>
                                                {addr.isDefault && (
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                                                        Default
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {addr.address}, {addr.city}, {addr.state} {addr.pincode}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{addr.name} · {addr.phone}</p>
                                        </div>
                                        {address?.id === addr.id && (
                                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                        )}
                                    </div>
                                ))}
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => navigate('/profile/addresses')}
                                >
                                    + Add New Address
                                </Button>
                            </>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};