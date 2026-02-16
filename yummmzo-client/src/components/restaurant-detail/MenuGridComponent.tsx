import { Button } from "@/components/ui/button";
import { MenuItemCard } from "@/components/cards/MenuItemCard";
import { ALL_TAB_ID } from "./MenuTabsComponent";

interface Props {
    restaurantMenu:  any[];
    activeTab:       string | null;
    restaurantId:    number;
    searchQuery:     string;
    onClearFilters:  () => void;
}

export const MenuGridComponent = ({ restaurantMenu, activeTab, restaurantId, searchQuery, onClearFilters }: Props) => {

    // ALL tab — render every category with its items grouped under a category header
    if (activeTab === ALL_TAB_ID) {
        const allCategories = restaurantMenu?.filter((cat: any) => cat.items?.length > 0) || [];
        const totalItemCount = allCategories.reduce((acc: number, cat: any) => acc + cat.items.length, 0);

        return (
            <div className="mt-6 space-y-10">
                {/* Search result count */}
                {searchQuery && (
                    <p className="text-sm text-muted-foreground">
                        Showing {totalItemCount} result{totalItemCount !== 1 ? "s" : ""} for "{searchQuery}"
                    </p>
                )}

                {/* Empty state */}
                {allCategories.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No items found matching your search.</p>
                        <Button variant="outline" className="mt-4" onClick={onClearFilters}>
                            Clear Filters
                        </Button>
                    </div>
                )}

                {/* Categories with items */}
                {allCategories.map((category: any) => (
                    <section key={category.id}>
                        <h3 className="text-body-lg font-bold mb-4 text-foreground/80">
                            {category.name}
                            <span className="ml-2 text-sm font-normal text-muted-foreground">
                                ({category.items.length})
                            </span>
                        </h3>
                        <div className="flex flex-col gap-3">
                            {category.items.map((item: any) => (
                                <MenuItemCard
                                    key={item.id}
                                    item={item}
                                    index={item.index}
                                    restaurantId={Number(restaurantId)}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        );
    }

    // Specific category tab — flat list, no category header
    const activeCategory = restaurantMenu?.find((cat: any) => cat.id === activeTab);
    const menuItems = activeCategory?.items ?? [];

    return (
        <div className="mt-6">
            {/* Search result count */}
            {searchQuery && (
                <p className="text-sm text-muted-foreground mb-4">
                    Showing {menuItems.length} result{menuItems.length !== 1 ? "s" : ""} for "{searchQuery}"
                </p>
            )}

            <div className="flex flex-col gap-3">
                {menuItems.map((item: any) => (
                    <MenuItemCard
                        key={item.id}
                        item={item}
                        index={item.index}
                        restaurantId={Number(restaurantId)}
                    />
                ))}
            </div>

            {/* Empty state */}
            {menuItems.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No items found matching your search.</p>
                    <Button variant="outline" className="mt-4" onClick={onClearFilters}>
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    );
};