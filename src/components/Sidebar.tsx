import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaSignOutAlt,
  FaBell,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Dashboard", to: "/dashboard", icon: <FaChalkboardTeacher /> },
  { label: "Timetable", to: "/timetable", icon: <FaCalendarAlt /> },
  { label: "Attendance", to: "/attendance", icon: <FaUserFriends /> },
  { label: "Exam Board", to: "/exams", icon: <FaChalkboardTeacher /> },
  { label: "Credit Check", to: "/credit", icon: <FaBell /> },
  { label: "Calendar", to: "/calendar", icon: <FaCalendarAlt /> },
  { label: "Study Groups", to: "/groups", icon: <FaUsers /> }, // Newly added
  { label: "Students Forum", to: "/forum", icon: <FaUserFriends /> },
  { label: "Assignment Tracker", to: "/tracker", icon: <FaChalkboardTeacher /> },
];

const Sidebar: React.FC = () => (
  <aside className="w-56 bg-[#181F2C] text-white min-h-screen flex flex-col py-4">
    <div className="text-2xl font-bold px-6 mb-10">CampusConnect</div>
    <nav className="flex-1">
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="flex items-center gap-3 px-6 py-2 hover:bg-[#232A38] rounded transition"
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    <Link
      to="/logout"
      className="flex ml-6 items-center gap-2 mt-auto mb-4 text-red-400 hover:text-red-600"
    >
      <FaSignOutAlt /> Logout
    </Link>
  </aside>
);

export default Sidebar;