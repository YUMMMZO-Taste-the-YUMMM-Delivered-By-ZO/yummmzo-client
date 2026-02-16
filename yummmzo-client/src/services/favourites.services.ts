import { API_ENDPOINTS } from '@/config/api.config';
import axios from 'axios';

const API_ENDPOINT = API_ENDPOINTS.FAVOURITES;

export async function getFavouritesService() {
    try {
        const response = await axios.get(`${API_ENDPOINT}/` , {
            withCredentials: true
        });
        return response.data;
    }
    catch (error) {
        console.log("Error Getting Favourites : " , error);
        throw error;
    };
};

export async function getFavouriteIdsService() {
    try {
        const response = await axios.get(`${API_ENDPOINT}/ids` , {
            withCredentials: true
        });
        return response.data;
    }
    catch (error) {
        console.log("Error Getting Favourites IDs : " , error);
        throw error;
    };
};

export async function toggleFavouriteService(restaurantId: number) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/toggle/${restaurantId}` , {} , {
            withCredentials: true
        });
        return response.data;
    }
    catch (error) {
        console.log("Error Toggling Favourites : " , error);
        throw error;
    };
};