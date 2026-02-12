import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantCard } from "@/components/cards/RestaurantCard";
import { CTASectionComponent } from "@/components/landing/CTASectionComponent";
import { FeatureCardComponent } from "@/components/landing/FeatureCardComponent";
import { FeaturesSectionHeaderComponent } from "@/components/landing/FeaturesSectionHeaderComponent";
import { HeroBackgroundPatternComponent } from "@/components/landing/HeroBackgroundPatternComponent";
import { HeroBadgeComponent } from "@/components/landing/HeroBadgeComponent";
import { HeroFloatingImagesComponent } from "@/components/landing/HeroFloatingImagesComponent";
import { HeroHeadingComponent } from "@/components/landing/HeroHeadingComponent";
import { HeroSearchBarComponent } from "@/components/landing/HeroSearchBarComponent";
import { HeroStatsComponent } from "@/components/landing/HeroStatsComponent";
import { HowItWorksSectionHeaderComponent } from "@/components/landing/HowItWorksSectionHeaderComponent";
import { HowItWorksStepCardComponent } from "@/components/landing/HowItWorksStepCardComponent";
import { PopularRestaurantsSectionHeaderComponent } from "@/components/landing/PopularRestaurantsSectionHeaderComponent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { features, howItWorks } from "@/data/mockData";
import { getCurrentLocation } from "@/helpers/getCurrentLocation";
import { toast } from "@/hooks/use-toast";
import { getTopPicksService } from "@/services/restaurant.services";
import type { RootState } from "@/store";
import { setUserCoordinates } from "@/store/slices/userLocationSlice";
import { useQuery } from "@tanstack/react-query";

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Landing() {
    // useDispatch
    const dispatch = useDispatch();

    // useSelector
    const { latitude, longitude } = useSelector((state: RootState) => state.userCurrentLocation);

    // State Variables
    const [isLoading, setIsLoading] = useState(false);

    // Handler Functions
    const handleGetUserCurrentLocation = async () => {
        try {
            const coords = await getCurrentLocation();
            dispatch(setUserCoordinates(coords));
            toast({
                title: "Location Updated",
                description: "Finding the best flavors near you!"
            });
        } 
        catch (error: any) {
            toast({
                variant: 'destructive',
                title: "Location Access Denied",
                description: error.message || "Please enable location to see nearby restaurants."
            });
        }
    };

    // useEffect
    useEffect(() => {
        handleGetUserCurrentLocation();
    }, []);

    // useQuery
    const { data: topPicks = [] , isLoading: isTopPicksLoading , error: topPicksError } = useQuery({
        queryKey: ["topPicks" , latitude , longitude],
        queryFn: () => getTopPicksService(latitude! , longitude!),
        enabled: !!(latitude && longitude),
        staleTime: 1000 * 60 * 5
    });

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
                <HeroBackgroundPatternComponent />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <HeroBadgeComponent />
                        <HeroHeadingComponent />
                        <HeroSearchBarComponent handleGetUserCurrentLocation={handleGetUserCurrentLocation} />
                        <HeroStatsComponent />
                    </div>
                </div>
                <HeroFloatingImagesComponent />
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 md:py-32 bg-card/50">
                <div className="container mx-auto px-4">
                    <HowItWorksSectionHeaderComponent />
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {howItWorks.map((step, index) => (
                            <HowItWorksStepCardComponent key={index} step={step} index={index} isLast={index === howItWorks.length - 1} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Popular Restaurants Section*/}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <PopularRestaurantsSectionHeaderComponent />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {
                            isLoading ? 
                            (
                                [...Array(4)].map((_, i) => (
                                    <div key={i} className="aspect-square bg-card animate-pulse rounded-2xl border border-border flex flex-col p-4 gap-4">
                                        <div className="flex-1 bg-muted rounded-xl" />
                                        <div className="h-4 w-2/3 bg-muted rounded" />
                                        <div className="h-4 w-1/2 bg-muted rounded" />
                                    </div>
                                ))
                            )
                            : 
                            (topPicks.length > 0) ? 
                                (
                                    topPicks.map((tp, index) => (
                                        <RestaurantCard 
                                            key={tp.id} 
                                            index={index}
                                            restaurant={{
                                                ...tp,
                                                cuisine: tp.cuisine || "Multi-Cuisine", 
                                                priceRange: `₹${tp.priceForTwo} for two`,
                                                isOpen: tp.status === "OPEN" 
                                            }} 
                                        />
                                    ))
                                    ) 
                                    : 
                                    (
                                        <div className="col-span-full text-center py-20 bg-card/30 rounded-3xl border-2 border-dashed border-border">
                                            <p className="text-muted-foreground">No restaurants found nearby. Try searching a different area!</p>
                                        </div>
                                    )
                        }
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 md:py-32 bg-card/50">
                <div className="container mx-auto px-4">
                    <FeaturesSectionHeaderComponent />
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {features.map((feature, index) => (
                            <FeatureCardComponent key={index} feature={feature} />
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTASectionComponent />
            <Footer />
        </div>
    );
}