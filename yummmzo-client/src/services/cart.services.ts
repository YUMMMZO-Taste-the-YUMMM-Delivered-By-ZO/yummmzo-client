import axios from 'axios';

const API_ENDPOINT="http://localhost:3000/api/v1/cart";

export async function addCartItemService(payload : {restaurantId: number , menuItemId: number , quantity: number}) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/items` , payload , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Adding Item in the Cart : " , error);
        throw error;
    };
};

export async function updateCartItemService(payload: {cartItemId: number , quantity: number}) {
    try {
        const response = await axios.patch(`${API_ENDPOINT}/items/${payload.cartItemId}` , {quantity: payload.quantity} , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Updating Item in the Cart : " , error);
        throw error;
    };
};

export async function getCartService() {
    try {
        const response = await axios.get(`${API_ENDPOINT}` , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting the Cart : " , error);
        throw error;
    };
};

export async function clearCartService() {
    try {
        const response = await axios.delete(`${API_ENDPOINT}` , {
            withCredentials: true
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Adding Item in the Cart : " , error);
        throw error;
    };
};

export async function applyCouponService(code: string) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/coupon`, 
            { code }, 
            { withCredentials: true }
        );
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Applying Coupon : ", error);
        throw error;
    };
};

export async function removeCouponService() {
    try {
        const response = await axios.delete(`${API_ENDPOINT}/coupon`, { 
            withCredentials: true 
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Removing Coupon : ", error);
        throw error;
    };
};