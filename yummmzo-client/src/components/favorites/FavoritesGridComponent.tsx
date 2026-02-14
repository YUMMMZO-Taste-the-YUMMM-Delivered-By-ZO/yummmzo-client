import { RestaurantCard } from "@/components/cards/RestaurantCard";

export const FavoritesGridComponent = ({ favourites }: { favourites: any[] }) => {
    // Ye sab already favourites hain → ids construct karo
    const favouriteIds = {
        data: favourites.map(fav => fav.restaurantId)
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favourites.map((fav, index) => (
                <RestaurantCard
                    key={fav.id}
                    index={index}
                    favouriteIds={favouriteIds}
                    restaurant={{
                        ...fav.restaurant,
                        cuisine: fav.restaurant.cuisines?.map((c: any) => c.name).join(', ')
                    }}
                />
            ))}
        </div>
    );
};