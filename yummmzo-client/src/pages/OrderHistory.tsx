import { useState } from "react";
import { BottomNav } from "@/components/layout/BottomNav";
import { orders } from "@/data/mockData";
import { OrderHistoryHeaderComponent } from "@/components/order-history/OrderHistoryHeaderComponent";
import { OrderHistorySearchComponent } from "@/components/order-history/OrderHistorySearchComponent";
import { OrderHistoryCardComponent } from "@/components/order-history/OrderHistoryCardComponent";
import { EmptyOrderHistoryComponent } from "@/components/order-history/EmptyOrderHistoryComponent";

export default function OrderHistory() {
    const [searchQuery, setSearchQuery] = useState("");
    const pastOrders = orders.filter((o) => o.status === "delivered");

    const filteredOrders = pastOrders.filter(
        (order) =>
            order.restaurantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.id.includes(searchQuery)
    );

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
                        {filteredOrders.map((order, index) => (
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
}