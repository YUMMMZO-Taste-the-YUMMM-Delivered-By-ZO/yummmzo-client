import { ActiveOrderCardComponent } from "@/components/active-orders/ActiveOrderCardComponent";
import { ActiveOrdersHeaderComponent } from "@/components/active-orders/ActiveOrdersHeaderComponent";
import { EmptyActiveOrdersComponent } from "@/components/active-orders/EmptyActiveOrdersComponent";
import { BottomNav } from "@/components/layout/BottomNav";
import { orders } from "@/data/mockData";

export default function ActiveOrders() {
    const activeOrders = orders.filter(
        (o) => o.status === "preparing" || o.status === "on_the_way"
    );

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <ActiveOrdersHeaderComponent />

            <main className="container mx-auto px-4 py-6">
                {activeOrders.length > 0 ? (
                    <div className="space-y-4">
                        {activeOrders.map((order, index) => (
                            <ActiveOrderCardComponent
                                key={order.id}
                                order={order}
                                index={index}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyActiveOrdersComponent />
                )}
            </main>

            <BottomNav />
        </div>
    );
}