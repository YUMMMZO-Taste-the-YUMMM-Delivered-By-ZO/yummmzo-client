import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { RatingSelectionComponentProps } from "@/types/writeReviewTypes";

export const RatingSelectionComponent = ({ rating, setRating }: RatingSelectionComponentProps) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 text-center"
        >
            <h2 className="font-semibold mb-4">Rate Your Experience</h2>
            <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                        key={star}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        <Star
                            className={`h-10 w-10 transition-colors ${star <= (hoverRating || rating)
                                    ? "text-rating fill-rating"
                                    : "text-muted-foreground"
                                }`}
                        />
                    </motion.button>
                ))}
            </div>
            {rating > 0 && (
                <p className="text-sm text-muted-foreground mt-2">
                    {rating === 1 && "Poor"}
                    {rating === 2 && "Fair"}
                    {rating === 3 && "Good"}
                    {rating === 4 && "Very Good"}
                    {rating === 5 && "Excellent"}
                </p>
            )}
        </motion.div>
    );
};