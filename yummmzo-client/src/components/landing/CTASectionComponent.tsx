import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASectionComponent = () => {
    return (
        <section className="py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[3rem] bg-[#0A0A0A] border border-white/5 p-8 md:p-20 shadow-2xl shadow-primary/10"
                >
                    {/* Branding: Large Vibrant Gradient Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[60%] h-full bg-primary/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4" />
                        <div className="absolute bottom-0 left-0 w-[40%] h-full bg-primary/10 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
                        
                        {/* Subtle Branding Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '40px' }} 
                        />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-left">
                        <div className="max-w-xl">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
                            >
                                <Utensils className="w-4 h-4" />
                                <span className="text-xs font-black uppercase tracking-widest">YUMMMZO Exclusive</span>
                            </motion.div>
                            
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Craving <span className="text-primary italic">something</span> delicious?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
                                Join over <span className="text-white font-bold">100k+</span> foodies getting their favorites delivered in under 30 minutes.
                            </p>
                            
                            <Link to="/home">
                                <Button
                                    size="lg"
                                    className="h-16 px-10 rounded-2xl bg-primary text-black hover:bg-primary/90 shadow-button hover-lift transition-all duration-300 flex items-center gap-3 group"
                                >
                                    <span className="text-lg font-black tracking-tight uppercase">Start Ordering Now</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>

                        {/* Visual: Premium Floating Food / Device */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative w-full max-w-[400px] aspect-square"
                        >
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                            <img 
                                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" 
                                alt="Burger" 
                                className="relative z-10 w-full h-full object-cover rounded-[2rem] border-4 border-white/10 shadow-glow-lg rotate-3 hover:rotate-0 transition-transform duration-500"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 bg-white text-black p-4 rounded-2xl shadow-2xl rotate-12 flex flex-col items-center">
                                <span className="text-xs font-bold text-muted-foreground uppercase">Off Today</span>
                                <span className="text-2xl font-black">50%</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};