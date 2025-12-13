import { useParams } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { orders } from "@/data/mockData";
import { TrackOrderHeaderComponent } from "@/components/track-order/TrackOrderHeaderComponent";
import { TrackingMapComponent } from "@/components/track-order/TrackingMapComponent";
import { ETACardComponent } from "@/components/track-order/ETACardComponent";
import { DriverInfoCardComponent } from "@/components/track-order/DriverInfoCardComponent";
import { OrderDetailsCardComponent } from "@/components/track-order/OrderDetailsCardComponent";
import { DeliveryAddressCardComponent } from "@/components/track-order/DeliveryAddressCardComponent";


export default function TrackOrder() {
    const { orderId } = useParams();
    const order = orders.find((o) => o.id === orderId) || orders[0];

    const driver = {
        name: "John Smith",
        phone: "+1 (555) 987-6543",
        rating: 4.9,
        deliveries: 1250,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    };

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <TrackOrderHeaderComponent orderId={orderId} />

            <main className="container mx-auto px-4 py-6 space-y-6">
                <TrackingMapComponent />

                <ETACardComponent />

                <DriverInfoCardComponent driver={driver} />

                <OrderDetailsCardComponent order={order} />

                <DeliveryAddressCardComponent deliveryAddress={order.deliveryAddress} />
            </main>

            <BottomNav />
        </div>
    );
}