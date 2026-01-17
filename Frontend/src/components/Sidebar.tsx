// import {
//   FaChalkboardTeacher,
//   FaCalendarAlt,
//   FaSignOutAlt,
//   FaBell,
//   FaUserFriends,
//   FaUsers,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const navLinks = [
//   { label: "Dashboard", to: "/dashboard", icon: <FaChalkboardTeacher /> },
//   { label: "Timetable", to: "/timetable", icon: <FaCalendarAlt /> },
//   { label: "Attendance", to: "/attendance", icon: <FaUserFriends /> },
//   { label: "Exam Board", to: "/exams", icon: <FaChalkboardTeacher /> },
//   { label: "Credit Check", to: "/credit", icon: <FaBell /> },
//   { label: "Calendar", to: "/calendar", icon: <FaCalendarAlt /> },
//   { label: "Study Groups", to: "/groups", icon: <FaUsers /> }, // Newly added
//   { label: "Students Forum", to: "/forum", icon: <FaUserFriends /> },
//   { label: "Assignment Tracker", to: "/tracker", icon: <FaChalkboardTeacher /> },
// ];

// const Sidebar: React.FC = () => (
//   <aside className="w-56 bg-[#181F2C] text-white min-h-screen flex flex-col py-4">
//     <div className="text-2xl font-bold px-6 mb-10">CampusConnect</div>
//     <nav className="flex-1">
//       <ul className="space-y-2">
//         {navLinks.map((link) => (
//           <li key={link.to}>
//             <Link
//               to={link.to}
//               className="flex items-center gap-3 px-6 py-2 hover:bg-[#232A38] rounded transition"
//             >
//               <span className="text-lg">{link.icon}</span>
//               <span>{link.label}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//     <Link
//       to="/logout"
//       className="flex ml-6 items-center gap-2 mt-auto mb-4 text-red-400 hover:text-red-600"
//     >
//       <FaSignOutAlt /> Logout
//     </Link>
//   </aside>
// );

// export default Sidebar;




























import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaSignOutAlt,
  FaBell,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Dashboard", to: "/dashboard", icon: <FaChalkboardTeacher /> },
   { label: "Study Groups", to: "/groups", icon: <FaUsers /> },
  { label: "Questions Forum", to: "/timetable", icon: <FaCalendarAlt /> },
  { label: "Alumni Network", to: "/attendance", icon: <FaUserFriends /> },
  { label: "Daily Quiz", to: "/exams", icon: <FaChalkboardTeacher /> },
  { label: "Projects", to: "/credit", icon: <FaBell /> },
  { label: "Events", to: "/calendar", icon: <FaCalendarAlt /> },
 
  { label: "Students Forum", to: "/forum", icon: <FaUserFriends /> },
  { label: "Assignment Tracker", to: "/tracker", icon: <FaChalkboardTeacher /> },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-white min-h-screen flex flex-col py-6 shadow-lg rounded-r-2xl">
      {/* Logo */}
      <div className="text-2xl font-extrabold px-6 mb-12 tracking-wide">
        Campus<span className="text-blue-400">Connect</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md scale-[1.02]"
                      : "hover:bg-[#243447] hover:scale-[1.02] text-gray-300"
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <Link
        to="/logout"
        className="flex ml-6 items-center gap-2 mt-auto mb-4 text-red-400 hover:text-red-500 hover:scale-105 transition-all"
      >
        <FaSignOutAlt /> <span className="font-semibold">Logout</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
