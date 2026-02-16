import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";

interface DeliveryInstructionsComponentProps {
    instruction: string;
    setInstruction: (val: string) => void;
}

export const DeliveryInstructionsComponent = ({ instruction, setInstruction }: DeliveryInstructionsComponentProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className="font-semibold mb-4">Delivery Instructions</h2>
            <Textarea
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                placeholder="Add delivery instructions (optional)..."
                className="min-h-[100px]"
            />
        </motion.section>
    );
};