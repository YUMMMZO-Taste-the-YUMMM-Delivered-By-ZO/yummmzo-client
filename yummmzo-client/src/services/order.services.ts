import axios from 'axios';

const API_ENDPOINT = "http://localhost:3000/api/v1/order";

export async function createOrderService(userId: string, payload: {
    addressId: number;
    paymentMethod: 'COD' | 'MOCK_ONLINE';
    deliveryInstruction?: string;
}) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/${userId}`, payload, {
            withCredentials: true
        });
        return response.data.data;
    }
    catch(error) {
        console.log("Error Creating Order: ", error);
        throw error;
    };
};

export async function getOrdersService(userId: string, params?: {
    status?: string;
    page?: number;
    limit?: number;
}) {
    try {
        const response = await axios.get(`${API_ENDPOINT}/${userId}`, {
            params,
            withCredentials: true
        });
        return response.data.data;
    }
    catch(error) {
        console.log("Error Fetching Orders: ", error);
        throw error;
    };
};

export async function getOrderByIdService(userId: string, orderId: string) {
    try {
        const response = await axios.get(`${API_ENDPOINT}/${userId}/${orderId}`, {
            withCredentials: true
        });
        return response.data.data;
    }
    catch(error) {
        console.log("Error Fetching Order: ", error);
        throw error;
    };
};

export async function cancelOrderService(userId: string, orderId: string) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/${userId}/${orderId}/cancel`, {}, {
            withCredentials: true
        });
        return response.data.data;
    }
    catch(error) {
        console.log("Error Cancelling Order: ", error);
        throw error;
    };
};

export async function reorderService(userId: number, orderId: number) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/${userId}/${orderId}/reorder`, {}, {
            withCredentials: true
        });
        return response.data.data;
    }
    catch(error) {
        console.log("Error Reordering: ", error);
        throw error;
    };
};