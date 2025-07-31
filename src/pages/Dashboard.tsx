import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ClubBanner from "../components/ClubBanner";
import AssignmentsDue from "../components/AssignmentsDue";
import CreditCheckCard from "../components/CreditCheckCard";
import ExamTable from "../components/ExamTable";

const Dashboard: React.FC = () => (
  <div className="flex bg-[#E7ECF8] min-h-screen w-screen h-screen">
    <Sidebar />
    <div className="flex-1 px-8 pb-8">
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
  </div>
);

export default Dashboard;
