// TODO: Props - image, name

export const RestaurantHeroImageComponent = ({restaurantData}: {restaurantData: any}) => {
    return (
        <div className="relative h-64 md:h-80 overflow-hidden">
            <img
                src={`${restaurantData?.image}`}
                alt={`${restaurantData?.name}`}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
    );
};