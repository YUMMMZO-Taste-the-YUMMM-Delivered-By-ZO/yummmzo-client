import { ReviewItemComponent, type ReviewData } from "./ReviewItemComponent";
import { Star, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_REVIEWS: ReviewData[] = [
    {
        id: "r1",
        user: { name: "Alex Rivera", avatar: "https://i.pravatar.cc/150?u=alex" },
        rating: 5,
        comment: "The Dragon Roll here is absolutely legendary. Best sushi in downtown!",
        likes: 24,
        time: "2 hours ago",
        replies: [
            {
                id: "c1",
                user: { name: "Sarah Chen", avatar: "https://i.pravatar.cc/150?u=sarah" },
                comment: "Totally agree! Did you try it with the spicy mayo?",
                likes: 5,
                time: "1 hour ago",
                replies: [
                    {
                        id: "rp1",
                        user: { name: "Alex Rivera", avatar: "https://i.pravatar.cc/150?u=alex" },
                        comment: "Yes! It adds such a nice kick to the shrimp tempura.",
                        likes: 2,
                        time: "30 mins ago"
                    }
                ]
            }
        ]
    }
];

export const RestaurantReviewsComponent = () => {
    return (
        <section className="mt-12 mb-20 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="heading-md mb-1">Customer Reviews</h2>
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-4 h-4 text-rating fill-rating" />
                            ))}
                        </div>
                        <span className="text-body-sm font-bold">4.8 (500+ reviews)</span>
                    </div>
                </div>
                
                <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 hidden md:flex">
                    <MessageSquarePlus className="w-4 h-4" />
                    Write a Review
                </Button>
            </div>

            {/* Review List */}
            <div className="glass-card rounded-[2.5rem] p-6 md:p-10">
                {MOCK_REVIEWS.map((review) => (
                    <ReviewItemComponent key={review.id} review={review} />
                ))}
            </div>

            {/* Mobile Fab for Review */}
            <button className="md:hidden fixed bottom-28 right-6 w-14 h-14 bg-primary rounded-full shadow-button flex items-center justify-center text-primary-foreground z-40">
                <MessageSquarePlus className="w-6 h-6" />
            </button>
        </section>
    );
};