import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";

interface PhotoUploadComponentProps {
    photos: string[];
    setPhotos: (photos: string[]) => void;
}

export const PhotoUploadComponent = ({ photos, setPhotos }: PhotoUploadComponentProps) => {
    const addPhoto = () => {
        if (photos.length < 3) {
            setPhotos([
                ...photos,
                `https://images.unsplash.com/photo-${Date.now()}?w=200`,
            ]);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl border border-border p-4"
        >
            <h3 className="font-semibold mb-4">Add Photos (Optional)</h3>
            <div className="flex gap-3 flex-wrap">
                {photos.map((photo, index) => (
                    <div key={index} className="relative">
                        <div className="w-20 h-20 rounded-xl bg-muted/30 overflow-hidden">
                            <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                                <Camera className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                        <button
                            onClick={() => setPhotos(photos.filter((_, i) => i !== index))}
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                ))}
                {photos.length < 3 && (
                    <button
                        onClick={addPhoto}
                        className="w-20 h-20 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 hover:border-primary/50 transition-colors"
                    >
                        <Camera className="h-5 w-5 text-muted-foreground" />
                        <span className="text-[10px] text-muted-foreground">Add</span>
                    </button>
                )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
                Max 3 photos allowed
            </p>
        </motion.div>
    );
};