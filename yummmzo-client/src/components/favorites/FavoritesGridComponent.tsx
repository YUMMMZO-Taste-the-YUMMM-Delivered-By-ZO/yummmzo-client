import { Heart } from "lucide-react";
import { RestaurantCard } from "@/components/cards/RestaurantCard";

interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    image: string;
    deliveryFee: number;
}

interface FavoritesGridComponentProps {
    favorites: Restaurant[];
}

export const FavoritesGridComponent = ({ favorites }: FavoritesGridComponentProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((restaurant, index) => (
                <div key={restaurant.id} className="relative">
                    <RestaurantCard restaurant={restaurant} index={index} />
                    <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                        <Heart className="h-4 w-4 text-destructive fill-destructive" />
                    </button>
                </div>
            ))}
        </div>
    );
};