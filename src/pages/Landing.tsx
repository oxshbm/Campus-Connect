import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/dr06_5ev7_230323.jpg')" }} // Update path if needed
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center max-w-xl w-full text-white animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to <span className="text-blue-400">Campus Connect</span>
        </h1>

        <p className="text-lg text-gray-500 mb-8">
          A space for students to collaborate, connect, and grow together.
        </p>

        <button
          onClick={() => setShowOptions(!showOptions)}
          className="px-8 py-3 bg-blue-400 hover:bg-blue-700 text-grey font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Get Started
        </button>

        {showOptions && (
          <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center animate-fade-in">
            <Link
              to="/login"
              className="px-6 py-2 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-blue-200 text-white font-medium rounded-full hover:bg-blue-300 transition duration-300 transform hover:scale-105"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
 

  );
}

