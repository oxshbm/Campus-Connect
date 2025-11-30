// components/FeatureCard.tsx
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor: string;  // e.g. "bg-blue-100"
  iconColor: string;    // e.g. "text-blue-500"
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  iconBgColor,
  iconColor,
}) => {
  return (
    <div className="border-2 border-blue-300 rounded-lg p-8 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
      <div className="flex flex-col items-center text-center">
        <div
          className={`p-4 rounded-full mb-4 transition-transform duration-300 hover:rotate-12 ${iconBgColor}`}
        >
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
