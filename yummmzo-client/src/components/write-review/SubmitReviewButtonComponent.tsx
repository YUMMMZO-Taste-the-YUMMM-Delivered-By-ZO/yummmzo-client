import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubmitReviewButtonComponentProps {
    rating: number;
    onSubmit: () => void;
}

export const SubmitReviewButtonComponent = ({
    rating,
    onSubmit
}: SubmitReviewButtonComponentProps) => {
    return (
        <Button
            className="w-full h-14"
            onClick={onSubmit}
            disabled={rating === 0}
        >
            <Send className="h-4 w-4 mr-2" />
            Submit Review
        </Button>
    );
};