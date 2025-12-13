import { Button } from "@/components/ui/button";
import { MenuItemCard } from "@/components/cards/MenuItemCard";
import type { MenuGridComponentProps } from "@/types/restaurantDetailTypes";

export const MenuGridComponent = ({
    filteredItems,
    searchQuery,
    setSearchQuery,
    setActiveTab
}: MenuGridComponentProps) => {
    return (
        <div className="mt-6">
            {searchQuery && (
                <p className="text-sm text-muted-foreground mb-4">
                    Showing {filteredItems.length} results for "{searchQuery}"
                </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                    <MenuItemCard key={item.id} item={item} index={index} />
                ))}
            </div>

            {filteredItems.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">
                        No items found matching your search.
                    </p>
                    <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                            setSearchQuery("");
                            setActiveTab("All");
                        }}
                    >
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    );
};