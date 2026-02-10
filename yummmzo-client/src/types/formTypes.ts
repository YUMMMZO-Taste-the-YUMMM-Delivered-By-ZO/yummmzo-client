
export interface SignupFormData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
};

export interface LoginFormData {
    email: string,
    password: string,
};

export interface ForgotPasswordFormData {
    email: string
};