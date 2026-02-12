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