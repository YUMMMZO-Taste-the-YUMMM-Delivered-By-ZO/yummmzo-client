import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BestChoiceItemCardComponent } from "./BestChoiceItemCardComponent";

interface MenuItem {
    id: number;
    name: string;
    price: number;
    image: string;
    restaurantId: number;
    rating: number;
    calories?: number;
}

interface BestChoiceSectionComponentProps {
    bestChoiceItems: MenuItem[];
}

export const BestChoiceSectionComponent = ({ bestChoiceItems }: BestChoiceSectionComponentProps) => {
    return (
        <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Best Choice</h2>
                <Link to="/search" className="text-primary text-sm font-medium flex items-center gap-1">
                    See All
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                {bestChoiceItems.map((item, index) => (
                    <BestChoiceItemCardComponent
                        key={item.id}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};