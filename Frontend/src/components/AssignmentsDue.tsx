import React from "react";
import AssignmentCard from "./AssignmentCard";

const assignmentData = [
  { 
    title: "Database Intermediate - DATA6221", prof: "Prof. Smith",
    dayTime: "Monday & Wednesday, 9:00 AM – 10:30 AM", 
    location: "Computer Lab 4", bgColor: "bg-fuchsia-500"
  },
  { 
    title: "Human Computer Interaction - HCIN6222", prof: "Prof. Johnson",
    dayTime: "Tuesday & Thursday, 1:30 PM – 3:00 PM",
    location: "Computer Lab 2", bgColor: "bg-pink-400"
  },
  { 
    title: "Programming 2A", prof: "Prof. Davis",
    dayTime: "Monday & Saturday, 10:00 AM – 12:30 AM", 
    location: "Computer Lab 3", bgColor: "bg-cyan-400"
  },
];

const AssignmentsDue: React.FC = () => (
  <section className="mt-8">
    <h3 className="text-lg font-bold text-gray-700 mb-4">Assignments Due</h3>
    <div className="flex flex-row gap-4">
      {assignmentData.map((a, i) => <AssignmentCard key={i} {...a} />)}
    </div>
  </section>
);

export default AssignmentsDue;
