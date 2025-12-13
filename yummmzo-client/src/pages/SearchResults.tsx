import { useState, useMemo } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { restaurants, categories } from "@/data/mockData";
import { SearchResultsHeaderComponent } from "@/components/search-results/SearchResultsHeaderComponent";
import { FiltersPanelComponent } from "@/components/search-results/FiltersPanelComponent";
import { SearchCategoryPillsComponent } from "@/components/search-results/SearchCategoryPillsComponent";
import { ResultsCountComponent } from "@/components/search-results/ResultsCountComponent";
import { ResultsGridComponent } from "@/components/search-results/ResultsGridComponent";
import { EmptySearchResultsComponent } from "@/components/search-results/EmptySearchResultsComponent";

export default function SearchResults() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All Type");
    const [sortBy, setSortBy] = useState("relevance");
    const [priceRange, setPriceRange] = useState([0, 100]);

    const filteredRestaurants = useMemo(() => {
        let results = restaurants;

        // Filter by search query
        if (searchQuery) {
            results = results.filter(
                (r) =>
                    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    r.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== "All Type") {
            results = results.filter((r) =>
                r.cuisine.toLowerCase().includes(selectedCategory.toLowerCase())
            );
        }

        // Sort
        switch (sortBy) {
            case "rating":
                results = [...results].sort((a, b) => b.rating - a.rating);
                break;
            case "delivery":
                results = [...results].sort((a, b) => {
                    const aTime = parseInt(a.deliveryTime.split("-")[0]);
                    const bTime = parseInt(b.deliveryTime.split("-")[0]);
                    return aTime - bTime;
                });
                break;
            default:
                break;
        }

        return results;
    }, [searchQuery, selectedCategory, sortBy, priceRange]);

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <SearchResultsHeaderComponent
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
            />

            <main className="container mx-auto px-4 py-6">
                <FiltersPanelComponent
                    showFilters={showFilters}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                />

                <SearchCategoryPillsComponent
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <ResultsCountComponent
                    searchQuery={searchQuery}
                    resultsCount={filteredRestaurants.length}
                />

                {filteredRestaurants.length > 0 ? (
                    <ResultsGridComponent restaurants={filteredRestaurants} />
                ) : (
                    <EmptySearchResultsComponent />
                )}
            </main>

            <BottomNav />
        </div>
    );
}