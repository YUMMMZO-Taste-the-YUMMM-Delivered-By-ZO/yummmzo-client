import { Button } from "@/components/ui/button";
import { RestaurantCard } from "@/components/cards/RestaurantCard";
import { Loader2 } from "lucide-react";

interface Props {
    favouriteIds:        any[];
    filteredRestaurants: any[];
    isLoading:           boolean;
    isLoadingMore:       boolean;
    totalCount:          number;
    hasMore:             boolean;
    onLoadMore:          () => void;
    onClearFilters:      () => void;
}

export const AllRestaurantsSectionComponent = ({
    favouriteIds,
    filteredRestaurants,
    isLoading,
    isLoadingMore,
    totalCount,
    hasMore,
    onLoadMore,
    onClearFilters,
}: Props) => {

    // Initial load skeleton
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
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">All Restaurants</h2>
                <span className="text-sm text-muted-foreground">
                    {filteredRestaurants.length} of {totalCount} results
                </span>
            </div>

            {/* Empty State */}
            {filteredRestaurants.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No restaurants found matching your search.</p>
                    <Button variant="outline" className="mt-4" onClick={onClearFilters}>
                        Clear Filters
                    </Button>
                </div>
            )}

            {/* Restaurant Grid */}
            {filteredRestaurants.length > 0 && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredRestaurants.map((restaurant, index) => (
                            <RestaurantCard
                                key={restaurant.id}
                                restaurant={restaurant}
                                favouriteIds={favouriteIds}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Load More skeleton — appends below existing cards */}
                    {isLoadingMore && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-64 bg-card animate-pulse rounded-2xl" />
                            ))}
                        </div>
                    )}

                    {/* Show More Button */}
                    {hasMore && !isLoadingMore && (
                        <div className="flex justify-center mt-10">
                            <Button
                                onClick={onLoadMore}
                                variant="outline"
                                className="px-10 py-3 h-12 rounded-2xl border-border hover:border-primary/50 font-bold text-body-sm"
                            >
                                Show More
                            </Button>
                        </div>
                    )}

                    {/* End of results */}
                    {!hasMore && filteredRestaurants.length > 0 && (
                        <p className="text-center text-muted-foreground text-sm mt-10">
                            You've seen all {totalCount} restaurants
                        </p>
                    )}
                </>
            )}
        </section>
    );
};