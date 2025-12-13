import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { restaurants } from "@/data/mockData";
import { FavoritesHeaderComponent } from "@/components/favorites/FavoritesHeaderComponent";
import { FavoritesSearchComponent } from "@/components/favorites/FavoritesSearchComponent";
import { FavoritesGridComponent } from "@/components/favorites/FavoritesGridComponent";
import { EmptyFavoritesComponent } from "@/components/favorites/EmptyFavoritesComponent";

export default function Favorites() {
    const [searchQuery, setSearchQuery] = useState("");
    // Simulate some favorites
    const favoriteRestaurants = restaurants.slice(0, 6);

    const filteredFavorites = favoriteRestaurants.filter((r) =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <FavoritesHeaderComponent />

            <main className="container mx-auto px-4 py-6">
                <FavoritesSearchComponent
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                {filteredFavorites.length > 0 ? (
                    <FavoritesGridComponent favorites={filteredFavorites} />
                ) : (
                    <EmptyFavoritesComponent />
                )}
            </main>

            <BottomNav />
        </div>
    );
}