import { AboutCTAComponent } from "@/components/about/AboutCTAComponent";
import { AboutHeaderComponent } from "@/components/about/AboutHeaderComponent";
import { AboutHeroComponent } from "@/components/about/AboutHeroComponent";
import { AboutHeroImageComponent } from "@/components/about/AboutHeroImageComponent";
import { MissionStatementComponent } from "@/components/about/MissionStatementComponent";
import { StatsGridComponent } from "@/components/about/StatsGridComponent";
import { TeamGridComponent } from "@/components/about/TeamGridComponent";
import { ValuesGridComponent } from "@/components/about/ValuesGridComponent";
import { BottomNav } from "@/components/layout/BottomNav";

export default function About() {
    return (
        <div className="min-h-screen bg-background pb-20 md:pb-8">
            <AboutHeaderComponent />

            <main className="container mx-auto px-4 py-6 space-y-12">
                <AboutHeroComponent />

                <AboutHeroImageComponent />

                <MissionStatementComponent />

                <StatsGridComponent />

                <ValuesGridComponent />

                <TeamGridComponent />

                <AboutCTAComponent />
            </main>

            <BottomNav />
        </div>
    );
}