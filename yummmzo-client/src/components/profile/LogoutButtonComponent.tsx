import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LogoutButtonComponent = () => {
    return (
        <Button variant="destructive" className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
        </Button>
    );
};