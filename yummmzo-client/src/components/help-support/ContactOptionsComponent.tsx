import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, LucideIcon } from "lucide-react";

interface ContactOption {
    icon: LucideIcon;
    title: string;
    description: string;
    action: string;
    color: string;
    isOnline?: boolean;
}

export const ContactOptionsComponent = () => {
    const contactOptions: ContactOption[] = [
        {
            icon: Mail,
            title: "Email Support",
            description: "Get help via email",
            action: "support@yummmzo.com",
            color: "text-info",
        },
        {
            icon: Phone,
            title: "Phone Support",
            description: "Call us 24/7",
            action: "+1 (800) 123-4567",
            color: "text-success",
        },
        {
            icon: MessageCircle,
            title: "Live Chat",
            description: "Chat with us now",
            action: "Online",
            color: "text-primary",
            isOnline: true,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
            {contactOptions.map((option) => (
                <div
                    key={option.title}
                    className="bg-card rounded-2xl border border-border p-4 hover:border-primary/30 transition-all cursor-pointer"
                >
                    <div className="flex items-start gap-3">
                        <div
                            className={`w-10 h-10 rounded-full bg-card flex items-center justify-center ${option.color}`}
                        >
                            <option.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-medium">{option.title}</h3>
                                {option.isOnline && (
                                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {option.description}
                            </p>
                            <p className="text-sm text-primary mt-1">{option.action}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};