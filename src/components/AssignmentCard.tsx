type AssignmentCardProps = {
  title: string;
  prof: string;
  dayTime: string;
  location: string;
  bgColor: string;
};

const AssignmentCard: React.FC<AssignmentCardProps> = ({ title, prof, dayTime, location, bgColor }) => (
  <div className={`rounded-xl p-4 shadow text-white ${bgColor}`}>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <div className="text-sm mb-1">👤 {prof}</div>
    <div className="text-sm mb-1">🗓 {dayTime}</div>
    <div className="text-sm">📍 {location}</div>
  </div>
);

export default AssignmentCard;
