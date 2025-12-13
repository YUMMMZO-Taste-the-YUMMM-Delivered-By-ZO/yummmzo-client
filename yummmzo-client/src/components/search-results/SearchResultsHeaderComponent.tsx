import { Link } from "react-router-dom";
import { ArrowLeft, Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SearchResultsHeaderComponentProps } from "@/types/searchResultsTypes";

export const SearchResultsHeaderComponent = ({
    searchQuery,
    setSearchQuery,
    showFilters,
    setShowFilters
}: SearchResultsHeaderComponentProps) => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 h-16">
                    <Link to="/home">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search restaurants, cuisines..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-10"
                            autoFocus
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <X className="h-4 w-4 text-muted-foreground" />
                            </button>
                        )}
                    </div>
                    <Button
                        variant={showFilters ? "default" : "outline"}
                        size="icon"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
};