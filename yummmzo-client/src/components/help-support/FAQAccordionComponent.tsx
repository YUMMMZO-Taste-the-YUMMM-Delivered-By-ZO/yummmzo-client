import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
    question: string;
    answer: string;
    category: string;
}

interface FAQAccordionComponentProps {
    faqs: FAQ[];
}

export const FAQAccordionComponent = ({ faqs }: FAQAccordionComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
        >
            <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="px-4 hover:bg-muted/10">
                            <span className="text-left">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            {faqs.length === 0 && (
                <div className="p-8 text-center">
                    <p className="text-muted-foreground">
                        No FAQs found matching your search.
                    </p>
                </div>
            )}
        </motion.div>
    );
};