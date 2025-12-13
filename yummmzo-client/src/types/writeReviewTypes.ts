export interface WriteReviewHeaderComponentProps {
    restaurantId: string | number;
};

export interface Restaurant {
    image: string;
    name: string;
    cuisine: string;
    address: string;
};

export interface RestaurantCardComponentProps {
    restaurant: Restaurant;
};

export interface RatingSelectionComponentProps {
    rating: number;
    setRating: (rating: number) => void;
};

export interface ReviewTextAreaComponentProps {
    review: string;
    setReview: (review: string) => void;
    maxChars: number;
};

export interface SubmitReviewButtonComponentProps {
    rating: number;
    onSubmit: () => void;
};