import Navbar from "../components/Navbar";
import WelcomeBanner from "../components/WelcomeBanner";
import DashboardGrid from "../components/DashboardGrid";

const Dashboard: React.FC = () => {
  // You could fetch user info with context or global store
  const userName = "Amit"; // placeholder

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <WelcomeBanner userName={userName} />
        <DashboardGrid />
      </main>
    </div>
  );
};

export default Dashboard;
