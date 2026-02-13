import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; 
import userCurrentLocationReducer from './slices/userLocationSlice';
import addressReducer from './slices/addressSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    userCurrentLocation: userCurrentLocationReducer,
    address: addressReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;