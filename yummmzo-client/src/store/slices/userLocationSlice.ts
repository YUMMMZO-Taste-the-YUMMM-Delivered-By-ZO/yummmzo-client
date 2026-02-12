import { createSlice } from "@reduxjs/toolkit";

interface UserCurrentLocation {
    latitude: number | null,
    longitude: number | null,
    addressDisplayName?: string, 
};

const initialState: UserCurrentLocation = {
    latitude: null,
    longitude: null,
    addressDisplayName: ""
};

export const userCurrentLocationSlice = createSlice({
    name: 'userCurrentLocation',
    initialState,
    reducers: {
        setUserCoordinates: (state , action) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
        setUserAddressDisplayName: (state , action) => {
            state.addressDisplayName = action.payload;
        }
    },
});

export const { setUserCoordinates , setUserAddressDisplayName } = userCurrentLocationSlice.actions;

export default userCurrentLocationSlice.reducer;