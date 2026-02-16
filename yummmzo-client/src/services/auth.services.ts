import { API_ENDPOINTS } from '@/config/api.config';
import type { ForgotPasswordFormData, LoginFormData, SignupFormData } from '@/types/formTypes';
import axios from 'axios';

const API_ENDPOINT = API_ENDPOINTS.AUTH;

export async function signupService(formData: SignupFormData) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/register` , formData , {
            withCredentials: true
        });
        return response.data;
    }
    catch (error) {
        console.log("Error Signing Up : " , error);
        throw error;
    };
};

export async function verifyEmailService(token: string) {
    try {
        const response = await axios.get(`${API_ENDPOINT}/verify-email?token=${token}` , {
            withCredentials: true
        });
        return response.data;
    }
    catch (error) {
        console.log("Error Verifying Users Email : " , error);
        throw error;
    };
};

export async function loginService(formData: LoginFormData) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/login` , formData , {
            withCredentials: true
        });        
        return response.data;
    }
    catch (error) {
        console.log("Error Logging In : " , error);
        throw error;
    };
};

export async function forgotPasswordService(formData: ForgotPasswordFormData) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/forgot-password` , formData , {
            withCredentials: true
        });
        return response.data;
    }
    catch (error) {
        console.log("Error in Forgot Password : " , error);
        throw error;
    };
};

export async function resetPasswordService(data: { token: string; newPassword: string }) {
    try {
        const response = await axios.post(`${API_ENDPOINT}/reset-password`, { resetToken: data.token , password: data.newPassword , confirmPassword: data.newPassword }, { 
            withCredentials: true
        });
        return response.data;
    } 
    catch (error) {
        console.log("Error Resetting Password:", error);
        throw error;
    };
};

export async function logoutService() {
    try {
        const response = await axios.post(`${API_ENDPOINT}/logout`, {} , { 
            withCredentials: true
        });
        return response.data;
    } 
    catch (error) {
        console.log("Error Logging Out :", error);
        throw error;
    };
};