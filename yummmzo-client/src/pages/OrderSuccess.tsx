import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { SuccessIconComponent } from "@/components/order-success/SuccessIconComponent";
import { SuccessMessageComponent } from "@/components/order-success/SuccessMessageComponent";
import { DeliveryEstimateCardComponent } from "@/components/order-success/DeliveryEstimateCardComponent";
import { SuccessActionButtonsComponent } from "@/components/order-success/SuccessActionButtonsComponent";

export default function OrderSuccess() {
    const { orderId } = useParams();

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
            >
                <SuccessIconComponent />

                <SuccessMessageComponent orderId={orderId} />

                <DeliveryEstimateCardComponent />

                <SuccessActionButtonsComponent />
            </motion.div>
        </div>
    );
}