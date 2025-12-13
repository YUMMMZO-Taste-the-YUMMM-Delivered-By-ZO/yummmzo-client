import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { OrderHistorySearchComponentProps } from "@/types/orderHistoryTypes";

export const OrderHistorySearchComponent = ({
    searchQuery,
    setSearchQuery
}: OrderHistorySearchComponentProps) => {
    return (
        <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
            />
        </div>
    );
};