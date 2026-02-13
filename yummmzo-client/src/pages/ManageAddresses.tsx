import { BottomNav } from "@/components/layout/BottomNav";
import { ManageAddressesHeaderComponent } from "@/components/manage-addresses/ManageAddressesHeaderComponent";
import { AddAddressFormComponent } from "@/components/manage-addresses/AddAddressFormComponent";
import { AddressCardComponent } from "@/components/manage-addresses/AddressCardComponent";
import { EmptyAddressesComponent } from "@/components/manage-addresses/EmptyAddressesComponent";
import { UpdateAddressFormComponent } from "@/components/manage-addresses/UpdateAddressFormComponent";
import { useState } from "react";
import type { CreateAddressFormData } from "@/types/formTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAddressService, getAllAddressesService, updateAddressService, markAddressDefaultService } from "@/services/address.services";
import { toast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { geocodeAddressService } from "@/services/currentLocation.services";

export default function ManageAddresses() {
    // useQueryClient
    const queryClient = useQueryClient();

    // useDispatch
    const dispatch = useDispatch();

    // State Variables
    const [showForm, setShowForm] = useState(false);
    const [addAddressFormData, setAddAddressFormData] = useState<CreateAddressFormData>({
        type: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        name: "",
        phone: "",
        isDefault: false,
        latitude: null as number | null,
        longitude: null as number | null,
    });

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [updateAddressFormData, setUpdateAddressFormData] = useState({
        id: null as number | null,
        type: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        name: "",
        phone: "",
        isDefault: false,
        latitude: null as number | null,
        longitude: null as number | null,
    });

    // useQuery
    const { data: addresses = [], isLoading: isAddressesLoading } = useQuery({
        queryKey: ["addresses"],
        queryFn: getAllAddressesService,
    });

    const hasAddresses = (addresses.length > 0);

    // useMutations
    const addAddressMutation = useMutation({
        mutationFn: createAddressService,
        onSuccess: (data) => {
            queryClient.refetchQueries({ queryKey: ['addresses'] });
            setAddAddressFormData({
                type: "",
                address: "",
                city: "",
                state: "",
                pincode: "",
                name: "",
                phone: "",
                isDefault: false,
                latitude: null,
                longitude: null
            });
            toast({
                title: "Address Added Successfull!",
                description: "A new address added in the list successfully.",
            });
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Address Creation Failed",
                description: error.response?.data?.message || "Something went wrong",
            });
        },
    });

    const updateAddressMutation = useMutation({
        mutationFn: ({ formData, addressId }: { formData: any, addressId: number }) =>
            updateAddressService(formData, addressId),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ['addresses'] });
            setUpdateAddressFormData({
                id: null,
                type: "",
                address: "",
                city: "",
                state: "",
                pincode: "",
                name: "",
                phone: "",
                isDefault: false,
                latitude: null,
                longitude: null,
            });
            setShowUpdateModal(false);
            toast({
                title: "Address Updated Successfully!",
                description: "Address updated in the list successfully.",
            });
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Address Updation Failed",
                description: error.response?.data?.message || "Something went wrong",
            });
        },
    });

    const markDefaultMutation = useMutation({
        mutationFn: (addressId: number) => markAddressDefaultService(addressId),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ['addresses'] });
            toast({
                title: "Default Address Updated!",
                description: "Your default address has been updated successfully.",
            });
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Failed to Set Default",
                description: error.response?.data?.message || "Something went wrong",
            });
        },
    });

    // Handler Functions
    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    const handleAddAddressInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setAddAddressFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleTypeSelect = (type: string) => {
        setAddAddressFormData(prev => ({
            ...prev,
            type
        }));
    };

    const handleAddAddress = async (e) => {
        e.preventDefault();

        if (!addAddressFormData.type || !addAddressFormData.address || !addAddressFormData.city || !addAddressFormData.name || !addAddressFormData.phone || !addAddressFormData.pincode || !addAddressFormData.state) {
            toast({
                variant: "destructive",
                title: "Oops!",
                description: "Please fill in all fields to continue",
            });
            return;
        };

        let finalFormData = { ...addAddressFormData };

        if (!finalFormData.latitude || !finalFormData.longitude) {
            const coords = await geocodeAddressService(
                finalFormData.address,
                finalFormData.city,
                finalFormData.state,
                finalFormData.pincode
            );
            finalFormData.latitude = coords.latitude;
            finalFormData.longitude = coords.longitude;
        };

        addAddressMutation.mutate(finalFormData);
    };

    const handleEditClick = (address) => {
        setUpdateAddressFormData({
            id: address.id,
            type: address.type,
            address: address.address,
            city: address.city,
            state: address.state,
            pincode: address.pincode,
            name: address.name,
            phone: address.phone,
            isDefault: address.isDefault,
            latitude: address.latitude,
            longitude: address.longitude,
        });

        setShowUpdateModal(true);
    };

    const handleUpdateAddressInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUpdateAddressFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleUpdateTypeSelect = (type: string) => {
        setUpdateAddressFormData(prev => ({ ...prev, type }));
    };

    const handleUpdateAddress = async (e) => {
        e.preventDefault();

        if (!updateAddressFormData.type || !updateAddressFormData.address || !updateAddressFormData.city || !updateAddressFormData.name || !updateAddressFormData.phone || !updateAddressFormData.pincode || !updateAddressFormData.state) {
            toast({
                variant: "destructive",
                title: "Oops!",
                description: "Please fill in all fields to continue",
            });
            return;
        };

        // Strip id from formData — id goes as URL param, not in body
        const { id, ...formData } = updateAddressFormData;

        updateAddressMutation.mutate({
            formData,
            addressId: id as number,
        });
    };

    const handleMakeDefault = (addressId: number) => {
        markDefaultMutation.mutate(addressId);
    };

    return (
        <div className="min-h-screen bg-background pb-24 md:pb-8">
            {/* Header */}
            <ManageAddressesHeaderComponent showForm={showForm} handleShowForm={handleShowForm} />

            <main className="container mx-auto px-4 py-6 max-w-2xl space-y-4">
                {/* Add Form — animates in/out */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <AddAddressFormComponent
                                handleTypeSelect={handleTypeSelect}
                                addAddressFormData={addAddressFormData}
                                handleAddAddressInputChange={handleAddAddressInputChange}
                                handleAddAddress={handleAddAddress}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Address List */}
                {/* TODO: Replace addresses=[] with Redux store addresses to render cards */}
                {hasAddresses ? (
                    <div className="space-y-3">
                        {addresses.map((address, index) => (
                            <AddressCardComponent
                                key={address.id}
                                address={address}
                                index={index}
                                onEdit={handleEditClick}
                                onMakeDefault={handleMakeDefault}
                                onDelete={() => {}} // TODO: wire up delete mutation
                            />
                        ))}
                    </div>
                ) : (
                    // Only show empty state when form is also hidden
                    !showForm && (
                        <EmptyAddressesComponent onAddClick={handleShowForm} />
                    )
                )}
            </main>

            {/* Update Modal */}
            <UpdateAddressFormComponent
                isOpen={showUpdateModal}
                onClose={() => setShowUpdateModal(false)}
                updateAddressFormData={updateAddressFormData}
                handleUpdateAddressInputChange={handleUpdateAddressInputChange}
                handleUpdateAddress={handleUpdateAddress}
                handleUpdateTypeSelect={handleUpdateTypeSelect}
            />

            <BottomNav />
        </div>
    );
}