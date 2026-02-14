import { Button } from "@/components/ui/button";
import { MenuItemCard } from "@/components/cards/MenuItemCard";

// TODO: Add props: filteredItems (from API + filter/search), searchQuery, setSearchQuery, setActiveTab
// TODO: Map over real filteredItems
// TODO: Show empty state when filteredItems.length === 0
// TODO: Show search result count when searchQuery is set

export const MenuGridComponent = ({restaurantMenu , activeTab , restaurantId}: {restaurantMenu: any , activeTab: any , restaurantId: number}) => {
    // Modify Data
    const activeCategory = restaurantMenu?.find((category) => category.id === activeTab);
    const menuItems = activeCategory?.items ?? [];

    return (
        <div className="mt-6">
            {/* TODO: Show this when searchQuery is active */}
            {/* <p className="text-sm text-muted-foreground mb-4">
                Showing X results for "query"
            </p> */}

            <div className="flex flex-col gap-3">
                {
                    menuItems.map((item , index) => (
                        <MenuItemCard key={item.id} item={item} index={item.index} restaurantId={Number(restaurantId)} />
                    ))
                }
            </div>

            {/* Empty State - shown when no items */}
            {menuItems.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">
                        No items found matching your search.
                    </p>
                    <Button variant="outline" className="mt-4">
                        Clear Filters
                    </Button>
                </div>
            )}
        </div>
    );
};