import { useParams } from "react-router-dom";
import { BottomNav } from "@/components/layout/BottomNav";
import { OrderDetailsHeaderComponent } from "@/components/order-details/OrderDetailsHeaderComponent";
import { OrderStatusTimelineComponent } from "@/components/order-details/OrderStatusTimelineComponent";
import { OrderRestaurantInfoCardComponent } from "@/components/order-details/OrderRestaurantInfoCardComponent";
import { OrderItemsListComponent } from "@/components/order-details/OrderItemsListComponent";
import { DeliveryDetailsCardComponent } from "@/components/order-details/DeliveryDetailsCardComponent";
import { BillSummaryComponent } from "@/components/order-details/BillSummaryComponent";
import { OrderActionButtonsComponent } from "@/components/order-details/OrderActionButtonsComponent";
import { useOrderById, useOrder } from "@/hooks/useOrder";

export default function OrderDetails() {
    const { orderId } = useParams();
    const { order, isLoading } = useOrderById(orderId);
    const { cancelOrder, isCancellingOrder } = useOrder();

    if(isLoading){
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Loading order...</p>
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
            <OrderDetailsHeaderComponent />

            <main className="container mx-auto px-4 py-6 space-y-6">
                <OrderStatusTimelineComponent
                    orderStatus={order.orderStatus}
                    statusHistory={order.statusHistory}
                />

                <OrderRestaurantInfoCardComponent
                    restaurantImage={order.restaurant?.image}
                    restaurantName={order.restaurant?.name}
                    orderId={order.orderNumber}
                    date={order.createdAt}
                />

                <OrderItemsListComponent items={order.items} />

                <DeliveryDetailsCardComponent deliveryAddress={order.address} />

                <BillSummaryComponent
                    itemTotal={order.itemTotal}
                    gst={order.gst}
                    deliveryFee={order.deliveryFee}
                    packagingFee={order.packagingFee}
                    discount={order.discount}
                    total={order.total}
                />

                <OrderActionButtonsComponent
                    orderId={String(order.id)}
                    orderStatus={order.orderStatus}
                    onCancel={() => cancelOrder(String(order.id))}
                    isCancellingOrder={isCancellingOrder}
                />
            </main>

            <BottomNav />
        </div>
    );
};