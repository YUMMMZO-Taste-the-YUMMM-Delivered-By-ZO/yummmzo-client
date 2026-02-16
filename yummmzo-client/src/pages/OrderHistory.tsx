import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { OrderHistoryHeaderComponent } from "@/components/order-history/OrderHistoryHeaderComponent";
import { OrderHistorySearchComponent } from "@/components/order-history/OrderHistorySearchComponent";
import { OrderHistoryCardComponent } from "@/components/order-history/OrderHistoryCardComponent";
import { EmptyOrderHistoryComponent } from "@/components/order-history/EmptyOrderHistoryComponent";
import { useOrders } from "@/hooks/useOrder";

export default function OrderHistory() {
    const [searchQuery, setSearchQuery] = useState("");
    const { orders, isOrdersLoading } = useOrders('DELIVERED');

    const filteredOrders = orders.filter((order: any) =>
        order.restaurant?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.orderNumber?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if(isOrdersLoading){
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Loading...</p>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <OrderHistoryHeaderComponent />

            <main className="container mx-auto px-4 py-6">
                <OrderHistorySearchComponent
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                {filteredOrders.length > 0 ? (
                    <div className="space-y-4">
                        {filteredOrders.map((order: any, index: number) => (
                            <OrderHistoryCardComponent
                                key={order.id}
                                order={order}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyOrderHistoryComponent />
                )}
            </main>

            <BottomNav />
        </div>
    );
};