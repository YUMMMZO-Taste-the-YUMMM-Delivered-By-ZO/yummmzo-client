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

interface ResultsGridComponentProps {
    restaurants: Restaurant[];
}

export const ResultsGridComponent = ({ restaurants }: ResultsGridComponentProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
                <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    index={index}
                />
            ))}
        </div>
    );
};