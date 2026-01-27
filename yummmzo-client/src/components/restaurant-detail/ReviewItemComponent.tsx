import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, MessageSquare, Reply, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ReviewData {
    id: string;
    user: {
        name: string;
        avatar: string;
    };
    rating?: number;
    comment: string;
    likes: number;
    time: string;
    replies?: ReviewData[];
}

export const ReviewItemComponent = ({ review, depth = 0 }: { review: ReviewData; depth?: number }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const isMobile = window.innerWidth < 768;

    return (
        <div className={`group ${depth > 0 ? "mt-4 ml-4 md:ml-10 border-l-2 border-border/30 pl-4 md:pl-6" : "mb-8"}`}>
            <div className="flex gap-3 md:gap-4">
                {/* User Avatar */}
                <img 
                    src={review.user.avatar} 
                    alt={review.user.name} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/20 object-cover"
                />

                <div className="flex-1">
                    {/* Review Header */}
                    <div className="flex items-center justify-between mb-1">
                        <div>
                            <h4 className="font-bold text-body-sm md:text-body-md text-foreground">{review.user.name}</h4>
                            <span className="text-[10px] md:text-caption text-muted-foreground">{review.time}</span>
                        </div>
                        <button className="p-1 hover:bg-muted rounded-full text-muted-foreground">
                            <MoreVertical className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Review Text */}
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {review.comment}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-3">
                        <button className="flex items-center gap-1.5 text-caption font-bold text-muted-foreground hover:text-primary transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            {review.likes}
                        </button>
                        <button 
                            onClick={() => setShowReplyForm(!showReplyForm)}
                            className="flex items-center gap-1.5 text-caption font-bold text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Reply className="w-4 h-4" />
                            Reply
                        </button>
                    </div>

                    {/* Animated Reply Input */}
                    <AnimatePresence>
                        {showReplyForm && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 overflow-hidden"
                            >
                                <div className="flex gap-2">
                                    <input 
                                        type="text" 
                                        placeholder={`Reply to ${review.user.name}...`}
                                        className="flex-1 bg-background border border-border rounded-xl px-4 py-2 text-body-sm outline-none focus:border-primary/50 transition-all"
                                    />
                                    <Button size="sm" className="bg-primary text-primary-foreground rounded-xl">Post</Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Recursive Replies */}
            {review.replies && review.replies.length > 0 && (
                <div className="mt-2">
                    {review.replies.map((reply) => (
                        <ReviewItemComponent key={reply.id} review={reply} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};