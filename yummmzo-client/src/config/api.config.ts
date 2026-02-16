const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const API_ENDPOINTS = {
    AUTH: `${BASE_URL}/api/v1/auth`,
    RESTAURANT: `${BASE_URL}/api/v1/restaurant`,
    FAVOURITES: `${BASE_URL}/api/v1/favourites`,
    CART: `${BASE_URL}/api/v1/cart`,
    COUPON: `${BASE_URL}/api/v1/coupon`,
    ORDER: `${BASE_URL}/api/v1/order`,
    ADDRESS: `${BASE_URL}/api/v1/address`,
};