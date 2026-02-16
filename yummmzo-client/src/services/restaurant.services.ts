import axios from 'axios';

const API_ENDPOINT = "http://localhost:3000/api/v1/restaurant";

/**
    * Service 1: Get Top Picks
    * Always returns { topPicks: [...] } after backend fix
*/
export async function getTopPicksService(latitude: number, longitude: number) {
    try {
        if (!latitude || !longitude) return { topPicks: [] };

        const response = await axios.get(`${API_ENDPOINT}/top-picks`, {
            params: { lat: latitude, lng: longitude }
        });

        const data = response.data.data;

        if (Array.isArray(data)) {
            return { topPicks: data };
        };

        return data;
    }
    catch (error) {
        console.log("Error Getting Top Picks :", error);
        throw error;
    }
};

/**
    * Service 2: Get All Cuisines
*/
export async function getAllCuisinesService() {
    try {
        const response = await axios.get(`${API_ENDPOINT}/cuisines`);
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting All Cuisines :", error);
        throw error;
    }
};

/**
    * Service 3: Get All Restaurants with Filters & Pagination
    * Always returns { restaurants: [...], pagination: {...} } after backend fix
*/
export async function getAllRestaurantsService(filters: any) {
    try {
        const params = new URLSearchParams();

        params.append("lat", String(filters.lat));
        params.append("lng", String(filters.lng));

        if (filters.search)                params.append("search", filters.search);
        if (filters.cuisine?.length)       params.append("cuisine", filters.cuisine.join(","));
        if (filters.rating)                params.append("rating", filters.rating);
        if (filters.priceRange)            params.append("priceRange", filters.priceRange);
        if (filters.sort)                  params.append("sort", filters.sort);
        if (filters.page)                  params.append("page", String(filters.page));
        if (filters.limit)                 params.append("limit", String(filters.limit));

        const response = await axios.get(`${API_ENDPOINT}?${params.toString()}`);
        const data = response.data.data;

        // Defensive: handle old double-nested cache responses { restaurants: { restaurants, pagination } }
        if (data?.restaurants?.restaurants) {
            return {
                restaurants: data.restaurants.restaurants,
                pagination: data.restaurants.pagination
            };
        };

        return data;
    } 
    catch (error) {
        console.log("Error Getting All Restaurants :", error);
        throw error;
    }
};

/**
    * Service 4: Get Restaurant Details
*/
export async function getRestaurantDetailsService(restaurantId: number, latitude: number, longitude: number) {
    try {
        const response = await axios.get(`${API_ENDPOINT}/${restaurantId}`, {
            params: { lat: latitude, lng: longitude }
        });
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting Restaurant Details :", error);
        throw error;
    }
};

/**
    * Service 5: Get Restaurant Menu with Filters
*/
export async function getRestaurantMenuService(restaurantId: number, filters: any) {
    try {
        const params: Record<string, any> = {};

        if (filters.search)                    params.search       = filters.search;
        if (filters.sort)                      params.sort         = filters.sort;
        if (filters.isVeg === true)            params.isVeg        = true;
        if (filters.isBestseller === true)     params.isBestseller = true;
        if (filters.spiceLevel)                params.spiceLevel   = filters.spiceLevel; 

        const response = await axios.get(`${API_ENDPOINT}/${restaurantId}/menu`, { params });
        return response.data.data;
    } 
    catch (error) {
        console.log("Error Getting Restaurant Menu :", error);
        throw error;
    }
};