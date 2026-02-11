import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; 
import userCurrentLocationReducer from './slices/userLocationSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    userCurrentLocation: userCurrentLocationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;