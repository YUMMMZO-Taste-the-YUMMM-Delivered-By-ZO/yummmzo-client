import { useState } from "react";
import { useParams } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { restaurants } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { WriteReviewHeaderComponent } from "@/components/write-review/WriteReviewHeaderComponent";
import { RestaurantCardComponent } from "@/components/write-review/RestaurantCardComponent";
import { RatingSelectionComponent } from "@/components/write-review/RatingSelectionComponent";
import { ReviewTextAreaComponent } from "@/components/write-review/ReviewTextAreaComponent";
import { PhotoUploadComponent } from "@/components/write-review/PhotoUploadComponent";
import { SubmitReviewButtonComponent } from "@/components/write-review/SubmitReviewButtonComponent";

export default function WriteReview() {
    const { id } = useParams();
    const { toast } = useToast();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [photos, setPhotos] = useState<string[]>([]);

    const restaurant = restaurants.find((r) => r.id === id) || restaurants[0];
    const maxChars = 500;

    const handleSubmit = () => {
        toast({
            title: "Review Submitted!",
            description: "Thank you for sharing your experience.",
        });
    };

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <WriteReviewHeaderComponent restaurantId={id || ""} />

            <main className="container mx-auto px-4 py-6 space-y-6">
                <RestaurantCardComponent restaurant={restaurant} />

                <RatingSelectionComponent
                    rating={rating}
                    setRating={setRating}
                />

                <ReviewTextAreaComponent
                    review={review}
                    setReview={setReview}
                    maxChars={maxChars}
                />

                <PhotoUploadComponent
                    photos={photos}
                    setPhotos={setPhotos}
                />

                <SubmitReviewButtonComponent
                    rating={rating}
                    onSubmit={handleSubmit}
                />
            </main>

            <BottomNav />
        </div>
    );
}