import { Link } from "react-router-dom";
import { ArrowLeft, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// TODO: Props - restaurantName, showSearch, setShowSearch, searchQuery, setSearchQuery

export const RestaurantDetailHeaderComponent = ({ handleShowSearch , showSearch , restaurantData }: { handleShowSearch: any , showSearch: boolean , restaurantData: any }) => {
    return (
        <header className="sticky top-0 z-40 glass border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 gap-3">

                    <Link to="/home" className="flex-shrink-0">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>

                    {
                        showSearch ? 
                            (
                                /* Search Mode */
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search menu items..."
                                        className="pl-9 pr-9 h-10 rounded-xl bg-muted/60 border-border focus:border-primary"
                                        autoFocus
                                    />
                                    {/* TODO: show X only when searchQuery is not empty */}
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                        <X className="h-4 w-4 text-muted-foreground" />
                                    </button>
                                </div>
                            ) 
                            : 
                            (
                                /* Normal Mode */
                                <h1 className="flex-1 text-center font-semibold truncate">
                                    {restaurantData?.name}
                                </h1>
                            )
                    }

                    <div className="flex items-center gap-1 flex-shrink-0">
                        <Button onClick={handleShowSearch} variant="ghost" size="icon">
                            {
                                showSearch ? 
                                    <X className="h-5 w-5" /> 
                                    : 
                                    <Search className="h-5 w-5" />
                            }
                        </Button>
                    </div>

                </div>
            </div>
        </header>
    );
};