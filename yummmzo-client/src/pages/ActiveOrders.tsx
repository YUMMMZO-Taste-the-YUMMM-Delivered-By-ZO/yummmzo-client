import { ActiveOrderCardComponent } from "@/components/active-orders/ActiveOrderCardComponent";
import { ActiveOrdersHeaderComponent } from "@/components/active-orders/ActiveOrdersHeaderComponent";
import { EmptyActiveOrdersComponent } from "@/components/active-orders/EmptyActiveOrdersComponent";
import { BottomNav } from "@/components/layout/BottomNav";
import { useOrders } from "@/hooks/useOrder";

const ACTIVE_STATUSES = ['PENDING', 'CONFIRMED', 'PREPARING', 'READY', 'OUT_FOR_DELIVERY'];

export default function ActiveOrders() {
    const { orders, isOrdersLoading } = useOrders();

    const activeOrders = orders.filter((o: any) => ACTIVE_STATUSES.includes(o.orderStatus));

    if(isOrdersLoading){
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Loading...</p>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <ActiveOrdersHeaderComponent />

            <main className="container mx-auto px-4 py-6">
                {activeOrders.length > 0 ? (
                    <div className="space-y-4">
                        {activeOrders.map((order: any, index: number) => (
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
};