import { Button } from "@/components/ui/button";
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

interface AllRestaurantsSectionComponentProps {
    filteredRestaurants: Restaurant[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setActiveCategory: (category: string) => void;
}

export const AllRestaurantsSectionComponent = ({
    filteredRestaurants,
    searchQuery,
    setSearchQuery,
    setActiveCategory
}: AllRestaurantsSectionComponentProps) => {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">All Restaurants</h2>
                <span className="text-sm text-muted-foreground">
                    {filteredRestaurants.length} results
                </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRestaurants.map((restaurant, index) => (
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        index={index}
                    />
                ))}
            </div>

            {filteredRestaurants.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">
                        No restaurants found matching your search.
                    </p>
                    <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                            setSearchQuery("");
                            setActiveCategory("All Type");
                        }}
                    >
                        Clear Filters
                    </Button>
                </div>
            )}
        </section>
    );
};