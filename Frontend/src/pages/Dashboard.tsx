// pages/Dashboard.tsx
import {
  Users,
  MessageCircle,
  Award,
  Clock,
  Folder,
  Calendar,
  Book,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';
import FeatureCard from '../components/FeatureCard';

const statCards = [
  {
    id: 'study-groups',
    label: 'Study Groups Joined',
    value: 3,
    icon: Users,
    valueColor: 'text-blue-500',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'Forum-Contributions',
    label: 'Forum Contributions',
    value: 12,
    icon: MessageCircle,
    valueColor: 'text-purple-500',
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-500',
  },
  {
    id : 'Project-Contributions',
    label: 'Project Contributions',
    value: 5,
    icon: Folder,
    valueColor: 'text-indigo-500',
    iconBgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-500',
  },
  {
    id: 'points-earned',
    label: 'Points Earned',
    value: 248,
    icon: Award,
    valueColor: 'text-green-500',
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-500',
  },
  {
    id: 'hours-studied',
    label: 'Hours Studied',
    value: 42,
    icon: Clock,
    valueColor: 'text-yellow-500',
    iconBgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-500',
  },
];

const featureCards = [
  {
    id: 'feature-study-groups',
    title: 'Study Groups',
    description: 'Join or create study groups to collaborate with peers',
    icon: Users,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'feature-qa',
    title: 'Students Forum',
    description: 'Ask questions and help others with their academic queries',
    icon: MessageCircle,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'feature-alumni',
    title: 'Alumni Network',
    description: 'Connect with alumni for career guidance and mentorship',
    icon: Users,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'feature-projects',
    title: 'Projects',
    description: 'Collaborate on projects and showcase your work',
    icon: Folder,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'feature-events',
    title: 'Events',
    description: 'Discover and attend campus events and workshops',
    icon: Calendar,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    id: 'feature-workshops',
    title: 'Workshops',
    description: 'Enroll in skill-building workshops and courses',
    icon: Book,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">
            Welcome back, Alex! 👋
          </h2>
          <p className="text-gray-600">
            Here's what's happening in your campus community today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((card) => (
            <StatCard
              key={card.id}
              label={card.label}
              value={card.value}
              icon={card.icon}
              valueColor={card.valueColor}
              iconBgColor={card.iconBgColor}
              iconColor={card.iconColor}
            />
          ))}
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500 mb-8">
            Explore Campus Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconBgColor={feature.iconBgColor}
                iconColor={feature.iconColor}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
