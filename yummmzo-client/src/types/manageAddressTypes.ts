export interface ManageAddressesHeaderComponentProps {
    showForm: boolean;
    setShowForm: (show: boolean) => void;
};

export interface FormData {
    type: "home" | "work" | "other";
    address: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
};

export interface AddAddressFormComponentProps {
    showForm: boolean;
    formData: FormData;
    setFormData: (data: FormData) => void;
    onSave: () => void;
};

export interface Address {
    id: string;
    type: "home" | "work" | "other";
    address: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
};

export interface AddressCardComponentProps {
    address: Address;
    index: number;
    onDelete: (id: string) => void;
};

export interface EmptyAddressesComponentProps {
    onAddClick: () => void;
};