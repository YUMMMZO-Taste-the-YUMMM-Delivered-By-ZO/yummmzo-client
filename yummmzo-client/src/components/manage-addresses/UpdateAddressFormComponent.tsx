import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Briefcase, MapPin, User, Phone, Building2, X } from "lucide-react";

const ADDRESS_TYPES = [
    { label: "Home", icon: Home },
    { label: "Work", icon: Briefcase },
    { label: "Other", icon: Building2 },
];

export const UpdateAddressFormComponent = ({ 
    isOpen, 
    onClose, 
    updateAddressFormData, 
    handleUpdateAddressInputChange, 
    handleUpdateAddress,
    handleUpdateTypeSelect,
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="glass-card border border-border rounded-3xl p-0 max-w-lg w-full overflow-hidden">
                
                {/* Header */}
                <DialogHeader className="px-6 pt-6 pb-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-primary/15 flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <DialogTitle className="font-semibold text-lg leading-tight text-left">
                                Update Address
                            </DialogTitle>
                            <p className="text-xs text-muted-foreground mt-0.5">Edit your saved address details</p>
                        </div>
                    </div>
                </DialogHeader>

                {/* Divider */}
                <div className="h-px bg-border mx-6 mt-5" />

                {/* Body */}
                <div className="px-6 pb-6 pt-5 space-y-5 max-h-[70vh] overflow-y-auto scrollbar-hide">

                    {/* Address Type */}
                    <div>
                        <Label className="mb-3 block text-xs uppercase tracking-widest text-muted-foreground font-medium">
                            Address Type
                        </Label>
                        <div className="flex gap-2">
                            {ADDRESS_TYPES.map(({ label, icon: Icon }) => (
                                <Button
                                    key={label}
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleUpdateTypeSelect(label)}
                                    className={`
                                        flex-1 flex items-center justify-center gap-2 h-10 capitalize 
                                        border-border hover:border-primary hover:bg-primary/10 
                                        hover:text-primary transition-all duration-200 rounded-xl
                                        ${updateAddressFormData.type === label ? "border-primary bg-primary/10 text-primary" : ""}
                                    `}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="text-sm">{label}</span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="update-name" className="text-sm font-medium">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                <Input
                                    onChange={handleUpdateAddressInputChange}
                                    value={updateAddressFormData.name}
                                    name="name"
                                    id="update-name"
                                    placeholder="Sahil Ladhania"
                                    className="pl-9"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="update-phone" className="text-sm font-medium">Phone Number</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                <Input
                                    onChange={handleUpdateAddressInputChange}
                                    value={updateAddressFormData.phone}
                                    name="phone"
                                    id="update-phone"
                                    placeholder="9876543210"
                                    className="pl-9"
                                    maxLength={10}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Street Address */}
                    <div className="space-y-1.5">
                        <Label htmlFor="update-address" className="text-sm font-medium">Street Address</Label>
                        <Input
                            onChange={handleUpdateAddressInputChange}
                            value={updateAddressFormData.address}
                            name="address"
                            id="update-address"
                            placeholder="123 Main Street, Apartment 4B"
                        />
                    </div>

                    {/* City & State */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="update-city" className="text-sm font-medium">City</Label>
                            <Input
                                onChange={handleUpdateAddressInputChange}
                                value={updateAddressFormData.city}
                                name="city"
                                id="update-city"
                                placeholder="Patna"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="update-state" className="text-sm font-medium">State</Label>
                            <Input
                                onChange={handleUpdateAddressInputChange}
                                value={updateAddressFormData.state}
                                name="state"
                                id="update-state"
                                placeholder="Bihar"
                            />
                        </div>
                    </div>

                    {/* Pincode */}
                    <div className="space-y-1.5">
                        <Label htmlFor="update-pincode" className="text-sm font-medium">Pincode</Label>
                        <Input
                            onChange={handleUpdateAddressInputChange}
                            value={updateAddressFormData.pincode}
                            name="pincode"
                            id="update-pincode"
                            placeholder="400001"
                            className="max-w-[180px]"
                            maxLength={6}
                        />
                    </div>

                    {/* Default Toggle */}
                    <div className="flex items-start gap-3 py-3.5 px-4 bg-primary/5 rounded-2xl border border-primary/20">
                        <Input
                            onChange={handleUpdateAddressInputChange}
                            checked={updateAddressFormData.isDefault}
                            name="isDefault"
                            type="checkbox"
                            id="update-isDefault"
                            className="w-4 h-4 mt-0.5 rounded border-border accent-primary shrink-0"
                        />
                        <div>
                            <Label htmlFor="update-isDefault" className="cursor-pointer text-sm font-medium leading-tight">
                                Set as default address
                            </Label>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                This address will be pre-selected at checkout
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-1">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="flex-1 h-11 rounded-xl border-border hover:bg-muted"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleUpdateAddress}
                            className="flex-1 bg-primary hover:opacity-90 text-primary-foreground font-bold h-11 rounded-xl shadow-button"
                        >
                            Save Changes
                        </Button>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
};