import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: string | number;
  change?: string;
  positive?: boolean;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
}

export default function StatsCard({
  label,
  value,
  change,
  positive = true,
  icon: Icon,
  iconColor = "text-[#355486]",
  iconBg = "bg-[#355486]/10",
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
          {change && (
            <p className={cn("text-xs font-medium mt-1", positive ? "text-green-600" : "text-red-500")}>
              {positive ? "↑" : "↓"} {change} vs last month
            </p>
          )}
        </div>
        <div className={cn("p-2.5 rounded-xl", iconBg)}>
          <Icon size={20} className={iconColor} />
        </div>
      </div>
    </div>
  );
}
