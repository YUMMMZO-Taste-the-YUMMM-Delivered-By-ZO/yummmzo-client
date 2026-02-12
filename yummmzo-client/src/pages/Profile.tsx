import { BottomNav } from "@/components/layout/BottomNav";
import { LogoutButtonComponent } from "@/components/profile/LogoutButtonComponent";
import { PreferencesComponent } from "@/components/profile/PreferencesComponent";
import { ProfileCardComponent } from "@/components/profile/ProfileCardComponent";
import { ProfileHeaderComponent } from "@/components/profile/ProfileHeaderComponent";
import { ProfileMenuItemsComponent } from "@/components/profile/ProfileMenuItemsComponent";
import { QuickStatsComponent } from "@/components/profile/QuickStatsComponent";
import { addresses } from "@/data/mockData";

export default function Profile() {
    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <ProfileHeaderComponent />

            <main className="container mx-auto px-4 py-6 space-y-6">
                <ProfileCardComponent/>

                <QuickStatsComponent />

                <ProfileMenuItemsComponent addressesCount={addresses.length} />

                <PreferencesComponent />

                <LogoutButtonComponent />
            </main>

            <BottomNav />
        </div>
    );
}