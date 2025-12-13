import { motion } from "framer-motion";

interface User {
    name: string;
    email: string;
    phone: string;
}

interface ProfileCardComponentProps {
    user: User;
}

export const ProfileCardComponent = ({ user }: ProfileCardComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6 text-center"
        >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">
                    {user.name.charAt(0)}
                </span>
            </div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
            <p className="text-sm text-muted-foreground">{user.phone}</p>
        </motion.div>
    );
};