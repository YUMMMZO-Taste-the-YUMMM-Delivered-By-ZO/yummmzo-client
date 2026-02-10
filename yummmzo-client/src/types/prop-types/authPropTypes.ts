
export interface SignupModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSwitchToLogin: () => void;
};

export type VerificationState = 'loading' | 'success' | 'error';

export interface LoginModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSwitchToSignup: () => void;
};

export interface ForgotPasswordModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onBackToLogin: () => void;
};