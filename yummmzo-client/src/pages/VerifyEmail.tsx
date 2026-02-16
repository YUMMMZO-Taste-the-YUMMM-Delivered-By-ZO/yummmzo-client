import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { verifyEmailService } from '@/services/auth.services';
import { useDispatch } from 'react-redux';
import type { VerificationState } from '@/types/prop-types/authPropTypes';

export default function VerifyEmail() {
    // useNavigate
    const navigate = useNavigate();

    // useDispatch
    const dispatch = useDispatch();

    // useSearchParams
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    // State Variables
    const [state , setState] = useState<VerificationState>('loading');

    // useMutation
    const verifyMutation = useMutation({
        mutationFn: verifyEmailService,
        onSuccess: (data) => {
            setState('success');
            toast({
                title: "Email Verified!",
                description: "Your account is now active.",
            });
            setTimeout(() => {
                navigate('/')
            }, 2000);
        },
        onError: (error: any) => {
            setState('error');
            toast({
                variant: "destructive",
                title: "Verification Failed",
                description: error.response?.data?.message || "Invalid or expired token",
            });
        },
    });

    // useEffect
    useEffect(() => {
        if(token){
            verifyMutation.mutate(token);
        }   
        else{
            setState('error');
        };
    }, [token]);
    
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background animate-pulse-glow" />
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={state}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-full max-w-md"
                >
                    <div className="bg-card border border-border rounded-[2rem] p-10 shadow-elevated backdrop-blur-xl">
                        {/* Logo/Brand */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-black text-white tracking-tight uppercase italic">
                                YUMMM<span className="text-primary">ZO</span>
                            </h1>
                        </div>

                        {/* Loading State */}
                        {state === 'loading' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center space-y-6"
                            >
                                <div className="flex justify-center">
                                    <div className="relative">
                                        <Loader2 className="h-16 w-16 text-primary animate-spin" />
                                        <div className="absolute inset-0 h-16 w-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-2">
                                        Verifying Your Email
                                    </h2>
                                    <p className="text-muted-foreground text-sm">
                                        Please wait while we verify your account...
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* Success State */}
                        {state === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 0.6 }}
                                className="text-center space-y-6"
                            >
                                <div className="flex justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ 
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                            delay: 0.1
                                        }}
                                        className="relative"
                                    >
                                        <CheckCircle2 className="h-16 w-16 text-primary" />
                                        <div className="absolute inset-0 h-16 w-16 bg-primary/30 rounded-full blur-2xl animate-pulse" />
                                    </motion.div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-2">
                                        Email Verified!
                                    </h2>
                                    <p className="text-muted-foreground text-sm">
                                        Your account is now active. Redirecting to home...
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* Error State */}
                        {state === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-6"
                            >
                                <div className="flex justify-center">
                                    <motion.div
                                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="relative"
                                    >
                                        <XCircle className="h-16 w-16 text-destructive" />
                                        <div className="absolute inset-0 h-16 w-16 bg-destructive/20 rounded-full blur-xl" />
                                    </motion.div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-2">
                                        Verification Failed
                                    </h2>
                                    <p className="text-muted-foreground text-sm mb-6">
                                        The verification link is invalid or has expired.
                                    </p>
                                    <Button
                                        onClick={() => navigate('/')}
                                        className="w-full h-11 bg-primary hover:bg-primary/90 text-black font-bold uppercase text-xs tracking-wider rounded-xl transition-all active:scale-[0.98]"
                                    >
                                        Back to Home
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Bottom Text */}
                    <p className="text-center text-xs text-muted-foreground mt-6">
                        <span className="italic">Taste the Yummm, Delivered By Zo</span>
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}