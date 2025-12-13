import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
    type: "home" | "work" | "other";
    address: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
}

interface AddAddressFormComponentProps {
    showForm: boolean;
    formData: FormData;
    setFormData: (data: FormData) => void;
    onSave: () => void;
}

export const AddAddressFormComponent = ({
    showForm,
    formData,
    setFormData,
    onSave
}: AddAddressFormComponentProps) => {
    return (
        <AnimatePresence>
            {showForm && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-card rounded-2xl border border-border p-6 overflow-hidden"
                >
                    <h3 className="font-semibold mb-4">Add New Address</h3>

                    {/* Address Type */}
                    <div className="mb-4">
                        <Label className="mb-2 block">Address Type</Label>
                        <div className="flex gap-2">
                            {["home", "work", "other"].map((type) => (
                                <Button
                                    key={type}
                                    type="button"
                                    variant={formData.type === type ? "default" : "outline"}
                                    size="sm"
                                    onClick={() =>
                                        setFormData({ ...formData, type: type as any })
                                    }
                                    className="capitalize"
                                >
                                    {type}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                placeholder="Enter full address"
                                value={formData.address}
                                onChange={(e) =>
                                    setFormData({ ...formData, address: e.target.value })
                                }
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="city">City</Label>
                                <Input
                                    id="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={(e) =>
                                        setFormData({ ...formData, city: e.target.value })
                                    }
                                />
                            </div>
                            <div>
                                <Label htmlFor="state">State</Label>
                                <Input
                                    id="state"
                                    placeholder="State"
                                    value={formData.state}
                                    onChange={(e) =>
                                        setFormData({ ...formData, state: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input
                                id="pincode"
                                placeholder="Pincode"
                                value={formData.pincode}
                                onChange={(e) =>
                                    setFormData({ ...formData, pincode: e.target.value })
                                }
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="isDefault"
                                checked={formData.isDefault}
                                onChange={(e) =>
                                    setFormData({ ...formData, isDefault: e.target.checked })
                                }
                                className="rounded border-border"
                            />
                            <Label htmlFor="isDefault" className="cursor-pointer">
                                Set as default address
                            </Label>
                        </div>

                        <Button className="w-full" onClick={onSave}>
                            Save Address
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};