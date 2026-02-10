import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { forgotPasswordService } from "@/services/auth.services";
import type { ForgotPasswordModalProps } from "@/types/prop-types/authPropTypes";

export function ForgotPasswordModal({ open, onOpenChange, onBackToLogin }: ForgotPasswordModalProps) {
    // State Variables
    const [email, setEmail] = useState("");

    // useMutation
    const forgotPasswordMutation = useMutation({
        mutationFn: forgotPasswordService,
        onSuccess: () => {
            toast({
                title: "Check Your Email!",
                description: "If an account exists, we've sent a reset link.",
            });
            setEmail("");
            setTimeout(() => {
                onOpenChange(false);
                onBackToLogin();
            }, 2000);
        },
        onError: (error: any) => {
            toast({
                variant: "destructive",
                title: "Request Failed",
                description: error.response?.data?.message || "Something went wrong",
            });
        }
    });

    // Handler Functions
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            toast({
                variant: "destructive",
                title: "Email Required",
                description: "Please enter your email address",
            });
            return;
        };
        
        forgotPasswordMutation.mutate({ email });
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenChange(false)}
                        className="fixed inset-0 bg-background/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-[440px]"
                    >
                        <div className="relative bg-card border border-border rounded-[2rem] shadow-lg overflow-hidden">
                            <div className="p-8 md:p-10">
                                {/* Close Button */}
                                <button
                                    onClick={() => onOpenChange(false)}
                                    className="absolute top-6 right-6 p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase italic">
                                        Forgot Password?
                                    </h2>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        Enter your email to reset your password
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <Input
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            name="email"
                                            type="email"
                                            placeholder="Email address"
                                            className="pl-11 h-11 bg-background/30 border-border focus:border-primary/40 rounded-xl"
                                        />
                                    </div>

                                    <Button 
                                        type="submit"
                                        disabled={forgotPasswordMutation.isPending}
                                        className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-bold uppercase text-xs tracking-wider rounded-xl transition-all active:scale-[0.98] mt-2"
                                    >
                                        {forgotPasswordMutation.isPending ? "Sending..." : "Send Reset Link"}
                                    </Button>

                                    {/* Back to Login */}
                                    <button
                                        type="button"
                                        onClick={onBackToLogin}
                                        className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors pt-2"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Back to Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}