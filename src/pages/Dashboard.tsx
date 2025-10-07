// import React from 'react';
// import Header from "../components/Header";
// import ClubBanner from "../components/ClubBanner";
// import AssignmentsDue from "../components/AssignmentsDue";
// import CreditCheckCard from "../components/CreditCheckCard";
// import ExamTable from "../components/ExamTable";

// const Dashboard: React.FC = () => {
//   return (
//     <div className="p-8 bg-[#E7ECF8] min-h-screen w-full">
//       <Header />
//       <div>
//         <ClubBanner />
//         <div className="flex justify-between gap-6 items-start mt-8">
//           <AssignmentsDue />
//           <CreditCheckCard />
//         </div>
//         <ExamTable />
//       </div>
//     </div>
//   );
// };


// export default Dashboard;













import React from 'react';
import { Users, MessageCircle, Award, Clock, Folder, Heart, Calendar, Book } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Book className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-blue-500">Campus Connect</h1>
          </div>
          <nav className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-blue-500">
              <Book className="w-4 h-4" />
              <span className="text-sm">Dashboard</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Users className="w-4 h-4" />
              <span className="text-sm">Study Groups</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">Q&A</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Users className="w-4 h-4" />
              <span className="text-sm">Alumni</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Folder className="w-4 h-4" />
              <span className="text-sm">Projects</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Mentorship</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Events</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Book className="w-4 h-4" />
              <span className="text-sm">Workshops</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
              <Users className="w-4 h-4" />
              <span className="text-sm">Profile</span>
            </button>
          </nav>
        </div>
      </header>
      
      <main className="px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">
            Welcome back, Alex! 👋
          </h2>
          <p className="text-gray-600">Here's what's happening in your campus community today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stat Card 1 - Study Groups */}
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Study Groups Joined</p>
                <p className="text-3xl font-bold text-blue-500">3</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full transition-transform duration-300 hover:rotate-12">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Stat Card 2 - Questions */}
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Questions Asked</p>
                <p className="text-3xl font-bold text-purple-500">12</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full transition-transform duration-300 hover:rotate-12">
                <MessageCircle className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Stat Card 3 - Points */}
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Points Earned</p>
                <p className="text-3xl font-bold text-green-500">248</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full transition-transform duration-300 hover:rotate-12">
                <Award className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>

          {/* Stat Card 4 - Hours */}
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">Hours Studied</p>
                <p className="text-3xl font-bold text-yellow-500">42</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full transition-transform duration-300 hover:rotate-12">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500 mb-8">Explore Campus Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 - Study Groups */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Study Groups</h3>
                <p className="text-gray-600 text-sm">Join or create study groups to collaborate with peers</p>
              </div>
            </div>

            {/* Feature Card 2 - Q&A Forum */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                  <MessageCircle className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Q&A Forum</h3>
                <p className="text-gray-600 text-sm">Ask questions and help others with their academic queries</p>
              </div>
            </div>

            {/* Feature Card 3 - Alumni Network */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Alumni Network</h3>
                <p className="text-gray-600 text-sm">Connect with alumni for career guidance and mentorship</p>
              </div>
            </div>

            {/* Feature Card 4 - Projects */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                  <Folder className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Projects</h3>
                <p className="text-gray-600 text-sm">Collaborate on projects and showcase your work</p>
              </div>
            </div>

            {/* Feature Card 5 - Mentorship */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mentorship</h3>
                <p className="text-gray-600 text-sm">Find mentors or become one to help others grow</p>
              </div>
            </div>

            {/* Feature Card 6 - Events */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                  <Calendar className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Events</h3>
                <p className="text-gray-600 text-sm">Discover and attend campus events and workshops</p>
              </div>
            </div>

            {/* Feature Card 7 - Workshops */}
            <div className="border-2 border-blue-300 rounded-lg p-8 bg-white hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 transition-transform duration-300 hover:rotate-12">
                  <Book className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Workshops</h3>
                <p className="text-gray-600 text-sm">Enroll in skill-building workshops and courses</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;