import { Link } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Study Groups", path: "/groups" },
  { label: "Q&A", path: "/questions" },
  { label: "Alumni", path: "/alumni" },
  { label: "Projects", path: "/projects" },
  { label: "Mentorship", path: "/mentorship" },
  { label: "Events", path: "/events" },
  { label: "Workshops", path: "/workshops" },
  { label: "Profile", path: "/profile" },
];

const Navbar: React.FC = () => (
  <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
    <div className="font-bold text-xl text-blue-700">Campus Connect</div>
    <ul className="flex gap-4">
      {navItems.map(item => (
        <li key={item.path}>
          <Link to={item.path} className="hover:text-blue-600">{item.label}</Link>
        </li>
      ))}
      <li>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          // logout logic here
        >
          Logout
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
