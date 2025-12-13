import { useParams } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { orders } from "@/data/mockData";
import { OrderDetailsHeaderComponent } from "@/components/order-details/OrderDetailsHeaderComponent";
import { OrderStatusTimelineComponent } from "@/components/order-details/OrderStatusTimelineComponent";
import { OrderRestaurantInfoCardComponent } from "@/components/order-details/OrderRestaurantInfoCardComponent";
import { OrderItemsListComponent } from "@/components/order-details/OrderItemsListComponent";
import { DeliveryDetailsCardComponent } from "@/components/order-details/DeliveryDetailsCardComponent";
import { BillSummaryComponent } from "@/components/order-details/BillSummaryComponent";
import { OrderActionButtonsComponent } from "@/components/order-details/OrderActionButtonsComponent";

export default function OrderDetails() {
    const { orderId } = useParams();
    const order = orders.find((o) => o.id === orderId) || orders[0];

    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <OrderDetailsHeaderComponent />

            <main className="container mx-auto px-4 py-6 space-y-6">
                <OrderStatusTimelineComponent orderStatus={order.status} />

                <OrderRestaurantInfoCardComponent
                    restaurantImage={order.restaurantImage}
                    restaurantName={order.restaurantName}
                    orderId={order.id}
                    date={order.date}
                />

                <OrderItemsListComponent items={order.items} />

                <DeliveryDetailsCardComponent deliveryAddress={order.deliveryAddress} />

                <BillSummaryComponent total={order.total} />

                <OrderActionButtonsComponent
                    orderId={order.id}
                    orderStatus={order.status}
                />
            </main>

            <BottomNav />
        </div>
    );
}