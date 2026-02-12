import axios from 'axios';

const API_ENDPOINT="http://localhost:3000/api/v1/restaurant";

export async function getTopPicksService(latitude: number , longitude: number) {
    try {
        if(!latitude || !longitude){
            return null;
        };

        let lat = latitude;
        let lng = longitude;

        const response = await axios.get(`${API_ENDPOINT}/top-picks?lat=${lat}&lng=${lng}`);
        return response.data.data.topPicks;
    }
    catch (error) {
        console.log("Error Getting Top Picks :", error);
        throw error;
    }
};