import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { RestaurantCard } from "../cards/RestaurantCard";

export const TopPicksSectionComponent = ({ topPicks, isTopPicksLoading }: { topPicks: any[], isTopPicksLoading: boolean }) => {

    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground/90">Top Picks</h2>
                <Link to="/search" className="text-primary text-xs font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
                    See All
                    <ChevronRight className="h-3 w-3" />
                </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                {
                    isTopPicksLoading ? 
                        (
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="min-w-[200px] h-[260px] bg-card/40 border border-border rounded-2xl animate-pulse p-3 space-y-3">
                                    <div className="w-full h-32 bg-muted rounded-xl" />
                                    <div className="h-3 w-3/4 bg-muted rounded" />
                                    <div className="h-2 w-1/2 bg-muted rounded" />
                                </div>
                            ))
                        ) 
                        : 
                        (
                            Array.isArray(topPicks) && topPicks.map((tP: any) => (
                                <div key={tP.id} className="min-w-[200px] max-w-[220px] shrink-0">
                                    <RestaurantCard restaurant={tP} />
                                </div>
                            ))
                        )
                }
            </div>
        </section>
    );
};