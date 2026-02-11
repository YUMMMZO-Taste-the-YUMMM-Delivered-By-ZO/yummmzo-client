import { createSlice } from "@reduxjs/toolkit";

interface UserCurrentLocation {
    latitude: number | null,
    longitude: number | null,
    addressName?: string, 
};

const initialState: UserCurrentLocation = {
    latitude: null,
    longitude: null,
    addressName: ""
};

export const userCurrentLocationSlice = createSlice({
    name: 'userCurrentLocation',
    initialState,
    reducers: {
        setUserCoordinates: (state , action) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        }
    },
});

export const { setUserCoordinates } = userCurrentLocationSlice.actions;

export default userCurrentLocationSlice.reducer;