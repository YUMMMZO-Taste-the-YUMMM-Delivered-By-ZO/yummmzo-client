import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";

interface ReviewTextAreaComponentProps {
    review: string;
    setReview: (review: string) => void;
    maxChars: number;
}

export const ReviewTextAreaComponent = ({
    review,
    setReview,
    maxChars
}: ReviewTextAreaComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <div className="flex justify-between items-center mb-2">
                <label className="font-semibold">Your Review</label>
                <span className="text-sm text-muted-foreground">
                    {review.length}/{maxChars}
                </span>
            </div>
            <Textarea
                placeholder="Share your experience with others..."
                value={review}
                onChange={(e) => setReview(e.target.value.slice(0, maxChars))}
                className="min-h-[150px] resize-none"
            />
        </motion.div>
    );
};