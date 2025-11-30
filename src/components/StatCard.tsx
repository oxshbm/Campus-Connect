// components/StatCard.tsx
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: number | string;
  icon: LucideIcon;
  valueColor: string;   // e.g. "text-blue-500"
  iconBgColor: string;  // e.g. "bg-blue-100"
  iconColor: string;    // e.g. "text-blue-500"
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon: Icon,
  valueColor,
  iconBgColor,
  iconColor,
}) => {
  return (
    <div className="border-2 border-blue-300 rounded-lg p-6 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm mb-1">{label}</p>
          <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
        </div>
        <div
          className={`p-3 rounded-full transition-transform duration-300 hover:rotate-12 ${iconBgColor}`}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
