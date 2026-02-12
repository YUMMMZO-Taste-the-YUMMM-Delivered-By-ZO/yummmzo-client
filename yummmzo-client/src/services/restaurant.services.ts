import axios from 'axios';

const API_ENDPOINT="http://localhost:3000/api/v1/restaurant";

export async function getTopPicksService(latitude: number , longitude: number) {
    try {
        if(!latitude || !longitude){
            return null;
        };

        let lat = latitude;
        let lng = longitude;

        const response = await axios.get(`${API_ENDPOINT}/top-picks?lat=${lat}&lng=${lng}` , {});
        return response.data.data.topPicks;
    }
    catch (error) {
        console.log("Error Getting Top Picks :", error);
        throw error;
    }
};

export async function getAllCuisinesService() {
    try {
        const response = await axios.get(`${API_ENDPOINT}/cuisines`);
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting All Cuisines :", error);
        throw error;
    }
};

export async function getAllRestaurantsService(filters: any) {
    try {
        // logic....
    } 
    catch (error) {
        console.log("Error Getting All Restaurants :", error);
        throw error;
    }
};