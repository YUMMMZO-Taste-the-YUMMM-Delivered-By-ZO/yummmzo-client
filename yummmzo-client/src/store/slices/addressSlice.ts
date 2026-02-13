import type { Address } from "@/data/mockData";
import { createSlice } from "@reduxjs/toolkit";

interface AddressState {
    selectedAddress: Address | null; 
}

const initialState: AddressState = {
    selectedAddress: null,
};

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        setSelectedAddress: (state , action) => {
            state.selectedAddress = action.payload;
        },
        clearSelectedAddress: (state) => {
            state.selectedAddress = null;
        }
    },
});

export const { setSelectedAddress , clearSelectedAddress } = addressSlice.actions;

export default addressSlice.reducer;