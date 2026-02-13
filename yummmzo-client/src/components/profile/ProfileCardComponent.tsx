import type { RootState } from "@/store";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { useSelector } from "react-redux";

export const ProfileCardComponent = () => {
    // useSelector
    const { name, email } = useSelector((state: RootState) => state.auth.user);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6 text-center"
        >
            {/* Avatar with Upload Button */}
            <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    {/* TODO: if user has avatar image, show <img> instead */}
                    <span className="text-3xl font-bold text-primary">
                        {name.charAt(0)}
                    </span>
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-background shadow-md hover:bg-primary/90 transition-all">
                    <Camera className="w-3.5 h-3.5 text-primary-foreground" />
                </button>

                {/* TODO: Hidden file input for avatar upload */}
                {/* <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleAvatarUpload} /> */}
            </div>

            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-muted-foreground">{email}</p>
            <p className="text-sm text-muted-foreground">9875338181</p>
        </motion.div>
    );
};