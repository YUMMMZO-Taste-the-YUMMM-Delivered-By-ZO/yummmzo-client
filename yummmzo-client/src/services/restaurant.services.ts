import axios from 'axios';

const API_ENDPOINT="http://localhost:3000/api/v1/restaurant";

export async function getTopPicksService(latitude: number , longitude: number) {
    try {
        if(!latitude || !longitude){
            return [];
        };

        let lat = latitude;
        let lng = longitude;

        const response = await axios.get(`${API_ENDPOINT}/top-picks?lat=${lat}&lng=${lng}` , {});
        return response.data.data;
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
        const params = new URLSearchParams();

        params.append("lat", String(filters.lat));
        params.append("lng", String(filters.lng));

        if (filters.search){
            params.append("search", filters.search);
        };
        if (filters.cuisine.length){
            params.append("cuisine", filters.cuisine.join(","));
        };
        if (filters.rating){
            params.append("rating", filters.rating);
        };
        if (filters.priceRange){
            params.append("priceRange", filters.priceRange);
        };
        if (filters.sort){
            params.append("sort", filters.sort);
        };
        if (filters.page){
            params.append("page", String(filters.page));
        };
        if (filters.limit){
            params.append("limit", String(filters.limit));
        };

        const response = await axios.get(`${API_ENDPOINT}?${params.toString()}`);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting All Restaurants :", error);
        throw error;
    }
};

export async function getRestaurantDetailsService(restaurantId: number, latitude: number, longitude: number) {
    try {
        const response = await axios.get(`${API_ENDPOINT}/${restaurantId}`, {
            params: {
                lat: latitude,
                lng: longitude
            }
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting Restaurant Details :", error);
        throw error;
    };
};

export async function getRestaurantMenuService(restaurantId: number , filters: any) {
    try {
        const response = await axios.get(`${API_ENDPOINT}/${restaurantId}/menu` , {
            params: {
                search: filters.search,
                sort: filters.sort,
                isVeg: filters.isVeg,
                isBestseller: filters.isBestseller,
                spiceLevel: filters.spiceLevel
            }
        });
        console.log(response.data.data);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting Restaurant Menu :", error);
        throw error;
    }
};