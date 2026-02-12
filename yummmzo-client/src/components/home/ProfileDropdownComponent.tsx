import { Link, useNavigate } from "react-router-dom";
import {
    User,
    Heart,
    Settings,
    HelpCircle,
    LogOut,
    Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { logoutService } from "@/services/auth.services";
import { toast } from "@/hooks/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import type { RootState } from "@/store";

export const ProfileDropdownComponent = () => {
    // useNavigate
    const navigate = useNavigate();

    // useDispatch
    const dispatch = useDispatch();

    // useSelector
    const { name , email } = useSelector((state: RootState) => state.auth.user);

    // useMutation
    const logoutMutation = useMutation({
        mutationFn: logoutService,
        onSuccess: (data) => {
            toast({
                variant: "default",
                title: "Logout Successful!",
                description: "Logged Out Successfully."
            });
            dispatch(logout());
            setTimeout(() => {
                navigate('/');
            }, 1000);
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Logout Failed",
                description: error.response?.data?.message || "Something went wrong",
            });
        }
    });

    // Handler Functions
    const handleLogout = () => {
        logoutMutation.mutate();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                <div className="px-3 py-2">
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-muted-foreground">{email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
                        <User className="h-4 w-4" />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to="/orders/active" className="flex items-center gap-2 cursor-pointer">
                        <Package className="h-4 w-4" />
                        My Orders
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to="/favorites" className="flex items-center gap-2 cursor-pointer">
                        <Heart className="h-4 w-4" />
                        Favorites
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center gap-2 cursor-pointer">
                        <Settings className="h-4 w-4" />
                        Settings
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link to="/help" className="flex items-center gap-2 cursor-pointer">
                        <HelpCircle className="h-4 w-4" />
                        Help & Support
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};