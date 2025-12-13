export interface SearchResultsHeaderComponentProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    showFilters: boolean;
    setShowFilters: (show: boolean) => void;
};

export interface FiltersPanelComponentProps {
    showFilters: boolean;
    sortBy: string;
    setSortBy: (value: string) => void;
    priceRange: number[];
    setPriceRange: (value: number[]) => void;
};

export interface SearchCategoryPillsComponentProps {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
};

export interface ResultsCountComponentProps {
    searchQuery: string;
    resultsCount: number;
};

export interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    image: string;
    deliveryFee: number;
};

export interface ResultsGridComponentProps {
    restaurants: Restaurant[];
};