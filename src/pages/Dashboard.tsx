import React from 'react';
import Header from "../components/Header";
import ClubBanner from "../components/ClubBanner";
import AssignmentsDue from "../components/AssignmentsDue";
import CreditCheckCard from "../components/CreditCheckCard";
import ExamTable from "../components/ExamTable";

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 bg-[#E7ECF8] min-h-screen w-full">
      <Header />
      <div>
        <ClubBanner />
        <div className="flex justify-between gap-6 items-start mt-8">
          <AssignmentsDue />
          <CreditCheckCard />
        </div>
        <ExamTable />
      </div>
    </div>
  );
};

export default Dashboard;