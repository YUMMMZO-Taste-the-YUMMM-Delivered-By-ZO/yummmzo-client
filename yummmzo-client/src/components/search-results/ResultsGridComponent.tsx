import { RestaurantCard } from "@/components/cards/RestaurantCard";
import type { ResultsGridComponentProps } from "@/types/searchResultsTypes";

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