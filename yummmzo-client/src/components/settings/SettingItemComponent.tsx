import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import type { SettingItemComponentProps } from "@/types/settingsTypes";

export const SettingItemComponent = ({ item, index, isLast }: SettingItemComponentProps) => {
    return (
        <div
            className={`flex items-center justify-between px-4 py-4 ${!isLast ? "border-b border-border" : ""
                }`}
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
                />
            ) : (
                <div className="flex items-center gap-2 text-muted-foreground">
                    {item.value && (
                        <span className="text-sm">{item.value as string}</span>
                    )}
                    <ChevronRight className="h-5 w-5" />
                </div>
            )}
        </div>
    );
};