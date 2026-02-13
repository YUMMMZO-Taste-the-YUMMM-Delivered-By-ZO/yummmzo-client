
export interface SignupFormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
};

export interface LoginFormData {
    email: string,
    password: string,
};

export interface ForgotPasswordFormData {
    email: string
};

export interface CreateAddressFormData {
    type: string,
    address: string,
    city: string,
    state: string,
    pincode: string,
    name: string,
    phone: string,
    isDefault: boolean,
    latitude: number | null,
    longitude: number | null,
};

export interface UpdateAddressFormData {
    type?: string,
    address?: string,
    city?: string,
    state?: string,
    pincode?: string,
    name?: string,
    phone?: string,
    isDefault?: boolean
    latitude?: number | null,
    longitude?: number | null,
};