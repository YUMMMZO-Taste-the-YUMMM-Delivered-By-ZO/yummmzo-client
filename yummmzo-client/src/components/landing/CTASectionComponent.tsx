import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASectionComponent = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-16 text-center"
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-black/10 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                            Ready to Order?
                        </h2>
                        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                            Join thousands of food lovers who trust YUMMMZO for their daily meals.
                        </p>
                        <Link to="/home">
                            <Button
                                size="lg"
                                className="bg-background text-foreground hover:bg-background/90"
                            >
                                Start Ordering Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};