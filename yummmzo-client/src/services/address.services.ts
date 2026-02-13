import type { CreateAddressFormData, UpdateAddressFormData } from '@/types/formTypes';
import axios from 'axios';

const API_ENDPOINT="http://localhost:3000/api/v1/address";

export async function createAddressService(finalFormData: CreateAddressFormData) {
    try {
        const response = await axios.post(`${API_ENDPOINT}` , finalFormData , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Creating New Address : " , error);
        throw error;
    };
};

export async function updateAddressService(formData: UpdateAddressFormData , addressId: number) {
    try {
        const response = await axios.patch(`${API_ENDPOINT}/${addressId}` , formData , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Updating a Address : " , error);
        throw error;
    };
};

export async function markAddressDefaultService(addressId: number) {
    try {
        const response = await axios.patch(`${API_ENDPOINT}/${addressId}/default` , {} , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Marking Address as Default : " , error);
        throw error;
    };
};

export async function deleteAddressService(addressId: number) {
    try {
        const response = await axios.delete(`${API_ENDPOINT}/${addressId}` , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Deleting a Address : " , error);
        throw error;
    };
};

export async function getAllAddressesService() {
    try {
        const response = await axios.get(`${API_ENDPOINT}` , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting all Addresses : " , error);
        throw error;
    };
};

export async function getAddressService(addressId: number) {
    try {
        const response = await axios.get(`${API_ENDPOINT}/${addressId}` , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting a Address : " , error);
        throw error;
    };
};