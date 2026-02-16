import { API_ENDPOINTS } from '@/config/api.config';
import axios from 'axios';

const API_ENDPOINT = API_ENDPOINTS.COUPON;

export async function getCouponsService(restaurantId: number) {
    try {
        const response = await axios.get(`${API_ENDPOINT}`, { 
            params: { restaurantId },
            withCredentials: true 
        });
        return response.data.data;
    }
    catch (error) {
        console.log("Error Getting Coupons : ", error);
        throw error;
    };
};

export async function validateCouponService({ code, restaurantId, cartTotal }: { code: string; restaurantId: number; cartTotal: number }) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/validate`, 
            { code, restaurantId, cartTotal }, 
            { withCredentials: true }
        );
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Validating Coupon : ", error);
        throw error;
    };
};