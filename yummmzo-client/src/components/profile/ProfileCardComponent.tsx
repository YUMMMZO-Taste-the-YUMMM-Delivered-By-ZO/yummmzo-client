import type { RootState } from "@/store";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export const ProfileCardComponent = () => {
    // useSelector
    const { name , email } = useSelector((state: RootState) => state.auth.user);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6 text-center"
        >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">
                    {name.charAt(0)}
                </span>
            </div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-muted-foreground">{email}</p>
            <p className="text-sm text-muted-foreground">9875338181</p>
        </motion.div>
    );
};