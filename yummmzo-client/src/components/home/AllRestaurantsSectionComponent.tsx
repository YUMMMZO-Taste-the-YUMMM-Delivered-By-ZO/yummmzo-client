import { Button } from "@/components/ui/button";
import { RestaurantCard } from "@/components/cards/RestaurantCard";

interface Props {
    filteredRestaurants: any[];
    isLoading: boolean;
    totalCount: number;
}

export const AllRestaurantsSectionComponent = ({ filteredRestaurants, isLoading, totalCount }: Props) => {
    
    if (isLoading) {
        return (
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">All Restaurants</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="h-64 bg-card animate-pulse rounded-2xl" />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">All Restaurants</h2>
                <span className="text-sm text-muted-foreground">
                    {totalCount} results
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.isArray(filteredRestaurants) && filteredRestaurants.map((restaurant, index) => (
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        index={index}
                    />
                ))}
            </div>

            {Array.isArray(filteredRestaurants) && filteredRestaurants.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">
                        No restaurants found matching your search.
                    </p>
                    <Button variant="outline" className="mt-4">
                        Clear Filters
                    </Button>
                </div>
            )}
        </section>
    );
};