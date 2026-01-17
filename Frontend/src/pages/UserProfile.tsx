import React from "react";
import Sidebar from "../components/Sidebar"; // adjust path if needed
import {
  FaUserGraduate,
  FaCode,
  FaBookOpen,
  FaUsers,
  FaProjectDiagram,
  FaHandshake,
  FaTrophy,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import type { User } from "lucide-react";

const UserProfile: React.FC = () => {
  const studentInfo = {
    name: "John Doe",
    username: "john123",
    instituteEmail: "john123@university.edu",
    instituteId: "UNI2025CSE45",
    skills: ["Python", "React", "Cybersecurity"],
    course: "B.Tech in Computer Science",
    academicYear: "3rd Year",
  };

  const activities = {
    studyGroupsJoined: ["AI Enthusiasts", "Web Dev Club", "Cybersec Learners"],
    studySessionsAttended: 12,
    pointsEarned: 850,
    alumniConnections: 4,
    projectContributions: 3,
    workshopsAttended: 5,
    seminarsConducted: 2,
    questionsAsked: 7,
    answersGiven: 11,
  };

  const pointsData = [
    { label: "Study Group Joined", points: 20 },
    { label: "Study Session Attended", points: 10 },
    { label: "Alumni Connection", points: 15 },
    { label: "Project Contribution", points: 25 },
    { label: "Workshop/Seminar Attended", points: 20 },
    { label: "Workshop/Seminar Conducted", points: 30 },
    { label: "Question Asked", points: 5 },
    { label: "Answer Given", points: 10 },
  ];

  const totalPoints = activities.pointsEarned;

  return (
    <div className="flex bg-[#0F172A] min-h-screen text-white">
      <Sidebar />

      <main className="flex-1 p-10 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-l-2xl shadow-lg overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-700 pb-4">
          <h1 className="text-3xl font-bold text-blue-400">Student Profile</h1>
          <div className="flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 transition">
              <FaEdit /> Change Password
            </button>
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center gap-2 transition">
              <FaTrashAlt /> Delete Account
            </button>
          </div>
        </div>

        {/* Personal Information Card */}
        <section className="bg-[#1E293B] p-8 rounded-2xl shadow-lg mb-10">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center text-4xl font-bold">
              {studentInfo.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{studentInfo.name}</h2>
              <p className="text-gray-400">@{studentInfo.username}</p>
              <p className="text-gray-300">{studentInfo.course}</p>
              <p className="text-gray-400">{studentInfo.academicYear}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-6 gap-6 text-gray-300">
            <div><strong>Email:</strong> {studentInfo.instituteEmail}</div>
            <div><strong>Institute ID:</strong> {studentInfo.instituteId}</div>
            <div className="col-span-2">
              <strong>Skills:</strong> {studentInfo.skills.join(", ")}
            </div>
          </div>
        </section>

        {/* Activity Cards Section */}
        <section className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-blue-800/30 transition">
            <FaUsers className="text-blue-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Study Groups Joined</h3>
            <p className="text-gray-400">{activities.studyGroupsJoined.length}</p>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-400">
              {activities.studyGroupsJoined.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-blue-800/30 transition">
            <FaBookOpen className="text-blue-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Study Sessions Attended</h3>
            <p className="text-gray-400">{activities.studySessionsAttended}</p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-blue-800/30 transition">
            <FaHandshake className="text-blue-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Alumni Connections</h3>
            <p className="text-gray-400">{activities.alumniConnections}</p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-blue-800/30 transition">
            <FaProjectDiagram className="text-blue-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Project Contributions</h3>
            <p className="text-gray-400">{activities.projectContributions}</p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-blue-800/30 transition">
            <FaChalkboardTeacher className="text-blue-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Workshops Attended</h3>
            <p className="text-gray-400">{activities.workshopsAttended}</p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-blue-800/30 transition">
            <FaChalkboardTeacher className="text-green-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Seminars Conducted</h3>
            <p className="text-gray-400">{activities.seminarsConducted}</p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-blue-800/30 transition">
            <FaQuestionCircle className="text-yellow-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Q&A Participation</h3>
            <p className="text-gray-400">
              Asked: {activities.questionsAsked}, Answered: {activities.answersGiven}
            </p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md hover:shadow-blue-800/30 transition">
            <FaTrophy className="text-orange-400 text-3xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Total Points Earned</h3>
            <p className="text-gray-400 text-xl font-semibold">{activities.pointsEarned}</p>
          </div>
        </section>

        {/* Points Breakdown Section */}
        <section className="bg-[#1E293B] p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
            <FaTrophy /> Points Breakdown
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {pointsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#243447] p-4 rounded-xl shadow hover:shadow-blue-800/30 transition text-center"
              >
                <p className="font-semibold">{item.label}</p>
                <p className="text-blue-400 font-bold mt-1">{item.points} pts</p>
              </div>
            ))}
          </div>

          <div className="text-right mt-8 text-lg font-semibold text-blue-400">
            Total Points: {totalPoints}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
