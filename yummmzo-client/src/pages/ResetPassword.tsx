import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { resetPasswordService } from '@/services/auth.services';

export default function ResetPassword() {
    // useSearchParams
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    // useNavigate
    const navigate = useNavigate();

    // State Variables
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });

    // useMutation
    const resetMutation = useMutation({
        mutationFn: resetPasswordService,
        onSuccess: () => {
            toast({
                title: "Password Reset Successful!",
                description: "You can now login with your new password.",
            });
            setTimeout(() => navigate('/'), 2000);
        },
        onError: (error: any) => {
            toast({
                variant: "destructive",
                title: "Reset Failed",
                description: error.response?.data?.message || "Invalid or expired token",
            });
        }
    });

    // Handler Functions
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!token) {
            toast({
                variant: "destructive",
                title: "Invalid Link",
                description: "Reset token is missing",
            });
            return;
        };

        if (formData.password !== formData.confirmPassword) {
            toast({
                variant: "destructive",
                title: "Passwords Don't Match",
                description: "Please make sure both passwords match",
            });
            return;
        };

        if (formData.password.length < 8) {
            toast({
                variant: "destructive",
                title: "Password Too Short",
                description: "Password must be at least 8 characters",
            });
            return;
        };

        resetMutation.mutate({ token, newPassword: formData.password });
    };

    if (!token) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-background">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-white mb-4">Invalid Reset Link</h2>
                    <Button onClick={() => navigate('/')} className="bg-primary hover:bg-primary/90 text-black">
                        Go to Home
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background animate-pulse-glow" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="bg-card border border-border rounded-[2rem] p-10 shadow-elevated backdrop-blur-xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-black text-white tracking-tight uppercase italic">
                            YUMMM<span className="text-primary">ZO</span>
                        </h1>
                        <h2 className="text-xl font-bold text-white mt-4">
                            Reset Password
                        </h2>
                        <p className="text-muted-foreground text-sm mt-1">
                            Enter your new password
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                value={formData.password}
                                type={showPassword ? "text" : "password"}
                                placeholder="New Password"
                                className="pl-11 pr-11 h-11 bg-background/30 border-border focus:border-primary/40 rounded-xl"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>

                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                value={formData.confirmPassword}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="pl-11 pr-11 h-11 bg-background/30 border-border focus:border-primary/40 rounded-xl"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                            >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>

                        <Button
                            type="submit"
                            disabled={resetMutation.isPending}
                            className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-bold uppercase text-xs tracking-wider rounded-xl transition-all active:scale-[0.98] mt-4"
                        >
                            {resetMutation.isPending ? "Resetting..." : "Reset Password"}
                        </Button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-xs text-muted-foreground mt-6">
                        <span className="italic">Taste the Yummm, Delivered By Zo</span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}