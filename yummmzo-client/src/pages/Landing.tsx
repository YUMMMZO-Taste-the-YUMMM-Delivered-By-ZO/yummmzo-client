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
import { features, howItWorks, restaurants } from "@/data/mockData";
import { getCurrentLocation } from "@/helpers/getCurrentLocation";
import { toast } from "@/hooks/use-toast";
import { setUserCoordinates } from "@/store/slices/userLocationSlice";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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

    // Handler Functions
    const handleGetUserCurrentLocation = async () => {
        try {
            const coords = await getCurrentLocation();
            dispatch(setUserCoordinates(coords));
            toast({
                variant:'default',
                title: "Location Fetched!",
                description: "Showing Restaurants near your location."
            })
        } 
        catch (error: any) {
            toast({
                variant: 'destructive',
                title: "Location Error",
                description: error.message || "Could not fetch location."
            });
        };
    };

    // useEffect
    useEffect(() => {
        handleGetUserCurrentLocation();
    }, []);

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
                        <HeroSearchBarComponent handleGetUserCurrentLocation={handleGetUserCurrentLocation}/>
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
                            <HowItWorksStepCardComponent
                                key={index}
                                step={step}
                                index={index}
                                isLast={index === howItWorks.length - 1}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Popular Restaurants */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <PopularRestaurantsSectionHeaderComponent />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {restaurants.slice(0, 8).map((restaurant, index) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
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