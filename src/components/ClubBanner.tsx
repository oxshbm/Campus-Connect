import React from "react";

const ClubBanner: React.FC = () => (
  <section className="bg-purple-300 p-6 rounded-xl flex items-center gap-8 mt-8">
    <div className="flex-1">
      <h3 className="text-xl font-bold text-purple-900 mb-2">Get Involved – Join a Club Today!</h3>
      <p className="text-purple-700 mb-3">Explore your interests and meet like-minded students... there's a club for you. Find your community!</p>
      <button className="bg-purple-700 text-white px-4 py-2 rounded shadow hover:bg-purple-800">Learn More →</button>
    </div>
    <img src="https://undraw.co/api/illustrations/club?color=purple" alt="clubs" className="w-36 h-auto" />
  </section>
);

export default ClubBanner;
