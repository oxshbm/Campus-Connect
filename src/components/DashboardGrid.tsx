import { HiUserGroup, HiQuestionMarkCircle, HiAcademicCap, HiLightBulb, HiUser, HiCalendar, HiPresentationChartBar } from "react-icons/hi";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Find Study Groups",
    description: "Join or create groups in your domain.",
    icon: <HiUserGroup />,
    to: "/groups",
  },
  {
    title: "Ask a Question",
    description: "Post academic questions and get answers.",
    icon: <HiQuestionMarkCircle />,
    to: "/questions",
  },
  {
    title: "Alumni Connect",
    description: "Reach out to alumni for guidance.",
    icon: <HiAcademicCap />,
    to: "/alumni",
  },
  {
    title: "Project Collaboration",
    description: "Post and join group projects.",
    icon: <HiLightBulb />,
    to: "/projects",
  },
  {
    title: "Mentorship",
    description: "Find or become a mentor.",
    icon: <HiUser />,
    to: "/mentorship",
  },
  {
    title: "View Events",
    description: "Campus tech events calendar.",
    icon: <HiCalendar />,
    to: "/events",
  },
  {
    title: "Browse Workshops",
    description: "Attend paid skill workshops.",
    icon: <HiPresentationChartBar />,
    to: "/workshops",
  },
];

const DashboardGrid: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {features.map(f => (
      <FeatureCard key={f.title} {...f} />
    ))}
  </div>
);

export default DashboardGrid;
