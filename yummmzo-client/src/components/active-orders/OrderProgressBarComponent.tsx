import { motion } from "framer-motion";

interface OrderProgressBarComponentProps {
    status: string;
}

export const OrderProgressBarComponent = ({ status }: OrderProgressBarComponentProps) => {
    const getProgress = (status: string) => {
        switch (status) {
            case "preparing":
                return 40;
            case "on_the_way":
                return 75;
            default:
                return 0;
        }
    };

    return (
        <div className="mt-4">
            <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${getProgress(status)}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full bg-primary rounded-full"
                />
            </div>
        </div>
    );
};