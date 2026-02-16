import type { TeamMember } from "@/types/aboutTypes";
import { motion } from "framer-motion";

export const TeamGridComponent = () => {
    const team: TeamMember[] = [
        {
            name: "Sahil Ladhania",
            role: "CEO & Founder",
            image: "https://media.licdn.com/dms/image/v2/D5603AQF5PbfBxY6Y9A/profile-displayphoto-scale_400_400/B56ZvrCg7FJEAg-/0/1769174867894?e=1772668800&v=beta&t=lLKeRvu9oIwWGP5sOi0puWC0DUGfYgLL3hCHY8tOxF8",
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