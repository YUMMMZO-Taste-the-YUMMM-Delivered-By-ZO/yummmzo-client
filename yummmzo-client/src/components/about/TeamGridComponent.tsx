import type { TeamMember } from "@/types/aboutTypes";
import { motion } from "framer-motion";

export const TeamGridComponent = () => {
    const team: TeamMember[] = [
        {
            name: "Alex Chen",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        },
        {
            name: "Sarah Johnson",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        },
        {
            name: "Mike Wilson",
            role: "Head of Operations",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {team.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="bg-card rounded-2xl border border-border p-6 text-center"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                        />
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};