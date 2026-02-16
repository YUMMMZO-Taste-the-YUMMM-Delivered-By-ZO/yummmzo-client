import { useParams } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { TrackOrderHeaderComponent } from "@/components/track-order/TrackOrderHeaderComponent";
import { ETACardComponent } from "@/components/track-order/ETACardComponent";
import { OrderDetailsCardComponent } from "@/components/track-order/OrderDetailsCardComponent";
import { DeliveryAddressCardComponent } from "@/components/track-order/DeliveryAddressCardComponent";
import { OrderStatusTimelineComponent } from "@/components/order-details/OrderStatusTimelineComponent";
import { useOrderById } from "@/hooks/useOrder";

export default function TrackOrder() {
    const { orderId } = useParams();
    const { order, isLoading } = useOrderById(orderId);

    if(isLoading){
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Loading...</p>
            </div>
        );
    };

    if(!order){
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Order not found.</p>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <TrackOrderHeaderComponent orderId={order.orderNumber} />

            <main className="container mx-auto px-4 py-6 space-y-6">
                {/* Polling auto-updates this every 8s */}
                <OrderStatusTimelineComponent
                    orderStatus={order.orderStatus}
                    statusHistory={order.statusHistory}
                />

                <ETACardComponent
                    orderStatus={order.orderStatus}
                    restaurantDeliveryTime={order.restaurant?.deliveryTime}
                />

                <OrderDetailsCardComponent order={order} />

                <DeliveryAddressCardComponent deliveryAddress={order.address} />
            </main>

            <BottomNav />
        </div>
    );
};