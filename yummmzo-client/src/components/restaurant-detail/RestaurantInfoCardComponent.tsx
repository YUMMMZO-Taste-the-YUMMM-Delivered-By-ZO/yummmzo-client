import { motion } from "framer-motion";
import { MapPin, Star, Clock, Bike, CheckCircle, XCircle } from "lucide-react";

export const RestaurantInfoCardComponent = ({restaurantData}: {restaurantData: any}) => {
    // Modify Data
    const kmValue = parseFloat(restaurantData?.distance);
    const distance = kmValue.toFixed(2);

    return (
        <div className="container mx-auto px-4 -mt-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl border border-border p-6 shadow-card"
            >
                {/* Name + isOpen Badge */}
                <div className="flex items-start justify-between mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-primary">
                        {restaurantData?.name}
                    </h1>
                    <div className={`flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full ${restaurantData?.isOpen ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                        {restaurantData?.isOpen ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        {restaurantData?.isOpen ? "Open" : "Closed"}
                    </div>
                </div>

                {/* Cuisines */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {
                        restaurantData?.cuisines?.map((cuisine: any) => (
                            <span key={cuisine.id} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">{cuisine.name}</span>
                        ))
                    }
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{restaurantData?.location}</span>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-rating fill-rating" />
                        <span className="font-semibold">{restaurantData?.rating}</span>
                        <span className="text-muted-foreground text-sm">({restaurantData?.totalRatings}+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{restaurantData?.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Bike className="h-4 w-4" />
                        <span className="text-sm">{distance} km away</span>
                    </div>
                    <div className="text-muted-foreground text-sm">
                        ₹{restaurantData?.priceForTwo} for two
                    </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                    {restaurantData?.description}
                </p>
            </motion.div>
        </div>
    );
};