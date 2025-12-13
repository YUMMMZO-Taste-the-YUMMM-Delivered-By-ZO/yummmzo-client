interface RestaurantHeroImageComponentProps {
    image: string;
    name: string;
}

export const RestaurantHeroImageComponent = ({ image, name }: RestaurantHeroImageComponentProps) => {
    return (
        <div className="relative h-64 md:h-80 overflow-hidden">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
    );
};