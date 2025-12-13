import { motion } from "framer-motion";
import { SettingItemComponent } from "./SettingItemComponent";
import type { SettingGroupComponentProps } from "@/types/settingsTypes";

export const SettingGroupComponent = ({ title, items, groupIndex }: SettingGroupComponentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.1 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
        >
            <div className="px-4 py-3 bg-muted/10 border-b border-border">
                <h3 className="text-sm font-semibold text-muted-foreground">
                    {title}
                </h3>
            </div>
            {items.map((item, index) => (
                <SettingItemComponent
                    key={item.label}
                    item={item}
                    index={index}
                    isLast={index === items.length - 1}
                />
            ))}
        </motion.div>
    );
};