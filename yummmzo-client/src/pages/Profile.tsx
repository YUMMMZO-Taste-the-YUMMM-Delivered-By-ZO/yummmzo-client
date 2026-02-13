import { BottomNav } from "@/components/layout/BottomNav";
import { LogoutButtonComponent } from "@/components/profile/LogoutButtonComponent";
import { PreferencesComponent } from "@/components/profile/PreferencesComponent";
import { ProfileCardComponent } from "@/components/profile/ProfileCardComponent";
import { ProfileHeaderComponent } from "@/components/profile/ProfileHeaderComponent";
import { ProfileMenuItemsComponent } from "@/components/profile/ProfileMenuItemsComponent";
import { QuickStatsComponent } from "@/components/profile/QuickStatsComponent";
import { addresses } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";
import { logoutService } from "@/services/auth.services";
import { logout } from "@/store/slices/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    // useNavigate
    const navigate = useNavigate();
    
    // useDispatch
    const dispatch = useDispatch();
    
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
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <ProfileHeaderComponent />

            <main className="container mx-auto px-4 py-6 space-y-6">
                <ProfileCardComponent/>

                <QuickStatsComponent />

                <ProfileMenuItemsComponent addressesCount={addresses.length} />

                <PreferencesComponent />

                <LogoutButtonComponent handleLogout={handleLogout}/>
            </main>

            <BottomNav />
        </div>
    );
}