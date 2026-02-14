import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ConflictCartDialogComponent = ({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="rounded-2xl">
                <DialogHeader>
                    <DialogTitle>Start Fresh Cart?</DialogTitle>
                    <DialogDescription>
                        Your cart has items from another restaurant. Clear it and add this item?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex gap-3 mt-4">
                    <Button variant="outline" className="flex-1" onClick={onClose}>
                        Keep Current
                    </Button>
                    <Button className="flex-1" onClick={onConfirm}>
                        Clear & Add
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};