import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, to }) => (
  <Link to={to} className="flex flex-col items-center p-5 bg-white rounded-lg shadow hover:shadow-lg transition group">
    <div className="mb-4 text-4xl text-blue-500">{icon}</div>
    <h3 className="font-semibold text-lg group-hover:text-blue-700">{title}</h3>
    <p className="text-gray-500 text-sm mt-1 text-center">{description}</p>
  </Link>
);

export default FeatureCard;
