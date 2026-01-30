import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Define the shape of our auth state
interface AuthState {
    user: {
        id: string;
        name: string;
        email: string;
    } | null;
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action to handle login
        setCredentials: (
            state,
            action: PayloadAction<{ user: AuthState['user']; token: string }>
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        // Action to handle logout
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

// Export actions to use in components
export const { setCredentials, logout } = authSlice.actions;

// Export the reducer to use in rootReducer.ts
export default authSlice.reducer;