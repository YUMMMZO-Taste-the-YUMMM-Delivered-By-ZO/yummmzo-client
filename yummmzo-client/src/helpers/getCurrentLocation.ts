
export const getCurrentLocation = (): Promise<{ latitude: number , longitude: number }> => {
    return new Promise((resolve , reject) => {
        if (!navigator.geolocation) {
            return reject(new Error("Geolocation not supported"));
        };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => reject(error),
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
    });
};