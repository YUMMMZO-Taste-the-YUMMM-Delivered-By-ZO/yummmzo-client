import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { FavoritesSearchComponentProps } from "@/types/favouritesTypes";

export const FavoritesSearchComponent = ({
    searchQuery,
    setSearchQuery
}: FavoritesSearchComponentProps) => {
    return (
        <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search favorites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
            />
        </div>
    );
};