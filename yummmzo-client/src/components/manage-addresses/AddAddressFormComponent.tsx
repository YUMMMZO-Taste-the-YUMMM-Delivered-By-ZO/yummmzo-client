import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Briefcase, MapPin, User, Phone, Building2 } from "lucide-react";

const ADDRESS_TYPES = [
    { label: "Home", icon: Home },
    { label: "Work", icon: Briefcase },
    { label: "Other", icon: Building2 },
];

export const AddAddressFormComponent = ({ handleTypeSelect , addAddressFormData, handleAddAddressInputChange, handleAddAddress }) => {
    return (
        <div className="glass-card rounded-3xl p-6 max-w-2xl mx-auto animate-fade-in border border-border">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-primary/15 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg leading-tight">Add New Address</h3>
                    <p className="text-xs text-muted-foreground">Fill in the details below</p>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-6" />

            {/* Address Type */}
            <div className="mb-6">
                <Label className="mb-3 block text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    Address Type
                </Label>
                <div className="flex gap-2">
                    {ADDRESS_TYPES.map(({ label, icon: Icon }) => (
                        <Button
                            onClick={() => handleTypeSelect(label)}
                            key={label}
                            name={label}
                            type="button"
                            variant="outline"
                            size="sm"
                            // TODO: Add active styling when addAddressFormData.type === label
                            // Active class to apply: "border-primary bg-primary/10 text-primary"
                            className={
                                `flex-1 flex items-center justify-center gap-2 h-10 capitalize 
                                border-border hover:border-primary hover:bg-primary/10 
                                hover:text-primary transition-all duration-200 rounded-xl
                                ${addAddressFormData.type === label ? "border-primary bg-primary/10 text-primary" : ""}
                                `
                            }
                        >
                            <Icon className="h-4 w-4" />
                            <span className="text-sm">{label}</span>
                        </Button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <Input
                                onChange={(e) => handleAddAddressInputChange(e)}
                                value={addAddressFormData.name}
                                name="name"
                                id="name"
                                placeholder="Sahil Ladhania"
                                className="pl-9"
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <Input
                                onChange={(e) => handleAddAddressInputChange(e)}
                                value={addAddressFormData.phone}
                                name="phone"
                                id="phone"
                                placeholder="9876543210"
                                className="pl-9"
                                maxLength={10}
                            />
                        </div>
                    </div>
                </div>

                {/* Street Address */}
                <div className="space-y-1.5">
                    <Label htmlFor="address" className="text-sm font-medium">Street Address</Label>
                    <Input
                        onChange={(e) => handleAddAddressInputChange(e)}
                        value={addAddressFormData.address}
                        name="address"
                        id="address"
                        placeholder="123 Main Street, Apartment 4B"
                    />
                </div>

                {/* City & State */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="city" className="text-sm font-medium">City</Label>
                        <Input
                            onChange={(e) => handleAddAddressInputChange(e)}
                            value={addAddressFormData.city}
                            name="city"
                            id="city"
                            placeholder="Patna"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="state" className="text-sm font-medium">State</Label>
                        <Input
                            onChange={(e) => handleAddAddressInputChange(e)}
                            value={addAddressFormData.state}
                            name="state"
                            id="state"
                            placeholder="Bihar"
                        />
                    </div>
                </div>

                {/* Pincode */}
                <div className="space-y-1.5">
                    <Label htmlFor="pincode" className="text-sm font-medium">Pincode</Label>
                    <Input
                        onChange={(e) => handleAddAddressInputChange(e)}
                        value={addAddressFormData.pincode}
                        name="pincode"
                        id="pincode"
                        placeholder="400001"
                        className="max-w-[180px]"
                        maxLength={6}
                    />
                </div>

                {/* Default Toggle */}
                <div className="flex items-start gap-3 py-3.5 px-4 bg-primary/5 rounded-2xl border border-primary/20">
                    <Input
                        onChange={(e) => handleAddAddressInputChange(e)}
                        value={addAddressFormData.isDefault}
                        name="isDefault"
                        type="checkbox"
                        id="isDefault"
                        className="w-4 h-4 mt-0.5 rounded border-border accent-primary shrink-0"
                    />
                    <div>
                        <Label htmlFor="isDefault" className="cursor-pointer text-sm font-medium leading-tight">
                            Set as default address
                        </Label>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            This address will be pre-selected at checkout
                        </p>
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    onClick={(e) => handleAddAddress(e)}
                    className="w-full bg-primary hover:opacity-90 text-primary-foreground font-bold h-12 rounded-xl shadow-button transition-all duration-200"
                >
                    Save Address
                </Button>
            </div>
        </div>
    );
};