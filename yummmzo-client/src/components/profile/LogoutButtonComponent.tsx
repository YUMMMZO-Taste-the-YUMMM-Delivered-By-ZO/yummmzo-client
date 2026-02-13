import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LogoutButtonComponent = ({handleLogout}: {handleLogout: any}) => {
    return (
        <Button onClick={handleLogout} variant="destructive" className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
        </Button>
    );
};