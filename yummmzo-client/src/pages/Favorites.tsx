import { BottomNav } from "@/components/layout/BottomNav";
import { FavoritesHeaderComponent } from "@/components/favorites/FavoritesHeaderComponent";
import { FavoritesGridComponent } from "@/components/favorites/FavoritesGridComponent";
import { EmptyFavoritesComponent } from "@/components/favorites/EmptyFavoritesComponent";
import { useQuery } from "@tanstack/react-query";
import { getFavouritesService } from "@/services/favourites.services";

export default function Favorites() {
    // useQuery
    const { data: favouriteRestaurants , isLoading: isFavouritesLoading } = useQuery({
        queryKey: ["favourites"],
        queryFn: () => getFavouritesService()
    });

    const favouritesList = favouriteRestaurants?.data || []

    console.log(favouriteRestaurants);
    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <FavoritesHeaderComponent />
            <main className="container mx-auto px-4 py-6">
                {favouritesList.length === 0 && <EmptyFavoritesComponent />}
                {favouritesList.length > 0 && <FavoritesGridComponent favourites={favouritesList} />}
            </main>
            <BottomNav />
        </div>
    );
}