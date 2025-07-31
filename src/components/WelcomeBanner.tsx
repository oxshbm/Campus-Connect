type WelcomeBannerProps = { userName?: string };

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName }) => (
  <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg mb-6 shadow">
    <h2 className="text-2xl font-semibold text-blue-700 mb-2">
      {userName ? `Welcome back, ${userName}!` : "Welcome to Campus Connect!"}
    </h2>
    <p className="text-gray-600">Connect. Collaborate. Grow your campus journey!</p>
  </div>
);

export default WelcomeBanner;
