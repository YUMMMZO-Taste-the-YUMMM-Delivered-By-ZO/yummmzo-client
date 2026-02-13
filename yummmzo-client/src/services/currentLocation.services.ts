import axios from 'axios';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

export const getAddressSuggestions = async(query: string) => {
    if(!query || query.length < 3){
        return [];
    };
    try {
        const API_URL = `https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${query}&limit=5`;
        const response = await axios.get(API_URL);
        return response.data;
    }
    catch (error) {
        console.error("LocationIQ Error:", error);
        return [];
    };
};

export const convertCoordinatesToAddress = async(latitude: number | null , longitude: number | null) => {
    try {
        const API_URL = `https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${latitude}&lon=${longitude}&format=json&`;
        const response = await axios.get(API_URL);
        return response.data;
    }
    catch (error) {
        console.error("LocationIQ Error:", error);
        return error;
    };
};

export const geocodeAddressService = async (address: string, city: string, state: string, pincode: string) => {
    try {
        const query = `${address}, ${city}, ${state}, ${pincode}, India`;
        const API_URL = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${encodeURIComponent(query)}&format=json&limit=1`;
        const response = await axios.get(API_URL);
        return {
            latitude: parseFloat(response.data[0].lat),  
            longitude: parseFloat(response.data[0].lon), 
        };
    } 
    catch (error) {
        console.error("LocationIQ Error:", error);
        return error;
    };
};