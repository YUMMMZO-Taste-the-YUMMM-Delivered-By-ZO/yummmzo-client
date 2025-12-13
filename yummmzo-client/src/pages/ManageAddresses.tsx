import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { addresses as initialAddresses, type Address} from "@/data/mockData";
import { ManageAddressesHeaderComponent } from "@/components/manage-addresses/ManageAddressesHeaderComponent";
import { AddAddressFormComponent } from "@/components/manage-addresses/AddAddressFormComponent";
import { AddressCardComponent } from "@/components/manage-addresses/AddressCardComponent";
import { EmptyAddressesComponent } from "@/components/manage-addresses/EmptyAddressesComponent";

export default function ManageAddresses() {
    const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        type: "home" as "home" | "work" | "other",
        address: "",
        city: "",
        state: "",
        pincode: "",
        isDefault: false,
    });

    const handleAddAddress = () => {
        const newAddress: Address = {
            id: `addr_${Date.now()}`,
            ...formData,
        };
        setAddresses([...addresses, newAddress]);
        setShowForm(false);
        setFormData({
            type: "home",
            address: "",
            city: "",
            state: "",
            pincode: "",
            isDefault: false,
        });
    };

    const handleDeleteAddress = (id: string) => {
        setAddresses(addresses.filter((a) => a.id !== id));
    };

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <ManageAddressesHeaderComponent
                showForm={showForm}
                setShowForm={setShowForm}
            />

            <main className="container mx-auto px-4 py-6 space-y-4">
                <AddAddressFormComponent
                    showForm={showForm}
                    formData={formData}
                    setFormData={setFormData}
                    onSave={handleAddAddress}
                />

                {addresses.map((address, index) => (
                    <AddressCardComponent
                        key={address.id}
                        address={address}
                        index={index}
                        onDelete={handleDeleteAddress}
                    />
                ))}

                {addresses.length === 0 && (
                    <EmptyAddressesComponent onAddClick={() => setShowForm(true)} />
                )}
            </main>

            <BottomNav />
        </div>
    );
}