import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="bg-[#C4CDE6] px-10 py-4 flex justify-between items-center rounded-b-lg">
    <div>
      <span className="font-semibold text-lg">👋 Welcome user!</span>
    </div>
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-end">
        <span className="text-sm text-[#757A92]">Semester 3 of 8</span>
        {/* Progress bar */}
        <div className="w-40 bg-[#959EBA] h-2 mt-1 rounded">
          <div className="bg-[#2C60EB] h-2 rounded" style={{ width: '100%' }} />
        </div>
      </div >
      {/* Profile circle or avatar */}<Link to ="/profile" className="flex items-center">
      <img src="https://i.pravatar.cc/40?img=3" alt="profile" className="w-10 h-10 rounded-full border-2 border-white" /></Link>
    </div>
  </header>
);

export default Header;
