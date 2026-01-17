const examData = [
  {
    exam: "Database Intermediate",
    code: "DATA6221",
    date: "Nov 7, 2024",
    time: "12:00 AM",
    status: "Upcoming",
  },
  {
    exam: "IT Project Management",
    code: "IPMA6212",
    date: "Nov 18, 2024",
    time: "08:00 AM",
    status: "Upcoming",
  },
];

const ExamTable: React.FC = () => (
  <section className="mt-10">
    <h3 className="text-lg font-bold text-gray-700 mb-2">Exam Board</h3>
    <table className="w-full bg-white rounded-xl shadow text-left overflow-hidden">
      <thead>
        <tr className="bg-gray-100 text-gray-600">
          <th className="py-2 px-4">Exam Name</th>
          <th className="py-2 px-4">Course ID</th>
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Time</th>
          <th className="py-2 px-4">Status</th>
        </tr>
      </thead>
      <tbody>
        {examData.map((e, i) => (
          <tr key={i}>
            <td className="py-2 px-4">{e.exam}</td>
            <td className="py-2 px-4">{e.code}</td>
            <td className="py-2 px-4">{e.date}</td>
            <td className="py-2 px-4">{e.time}</td>
            <td className="py-2 px-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">{e.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default ExamTable;
