import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import type { SettingItemComponentProps } from "@/types/settingsTypes";

export const SettingItemComponent = ({ item, index, isLast }: SettingItemComponentProps) => {
    return (
        <div
            className={`relative group flex items-center justify-between px-4 py-4 ${!isLast ? "border-b border-border" : ""} ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{item.label}</span>
            </div>

            {item.type === "toggle" ? (
                <Switch
                    defaultChecked={item.defaultValue}
                    checked={item.value as boolean}
                    onCheckedChange={item.onChange}
                    disabled={item.disabled}
                />
            ) : (
                <div className="flex items-center gap-2 text-muted-foreground">
                    {item.value && (
                        <span className="text-sm">{item.value as string}</span>
                    )}
                    <ChevronRight className="h-5 w-5" />
                </div>
            )}

            {/* Tooltip - only shows on disabled items on hover */}
            {item.disabled && (
                <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center">
                    <div className="bg-popover border border-border text-popover-foreground text-xs px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
                        🚧 Coming soon — we're working on it!
                    </div>
                </div>
            )}
        </div>
    );
};