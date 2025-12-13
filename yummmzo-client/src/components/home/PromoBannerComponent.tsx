import { motion } from "framer-motion";

export const PromoBannerComponent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl bg-primary p-6 mb-8"
        >
            <div className="relative z-10 max-w-xs">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                    Get 50% Off
                </h2>
                <p className="text-primary-foreground/80 mb-4">
                    On your first order with us!
                </p>
                <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-sm font-semibold text-primary-foreground">
                        Code: FIRST50
                    </span>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52">
                <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
                    alt="Delicious food"
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />
        </motion.div>
    );
};