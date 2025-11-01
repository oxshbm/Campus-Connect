import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "/src/styles/AddEvent.css";

const AddEvent: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    type: "Event",
    description: "",
    attendees: 0,
    organizer: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location) return;
    setEvents([...events, newEvent]);
    setNewEvent({
      title: "",
      date: "",
      location: "",
      type: "Event",
      description: "",
      attendees: 0,
      organizer: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-[#f6f7f8]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Add Events, Workshops & Seminars</h1>

        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create a New Entry</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="Enter title"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="e.g. Auditorium, Block A"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">Type</label>
              <select
                name="type"
                value={newEvent.type}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="Event">Event</option>
                <option value="Workshop">Workshop</option>
                <option value="Seminar">Seminar</option>
              </select>
            </div>

            {newEvent.type !== "Event" && (
              <div>
                <label className="block font-medium text-gray-700 mb-2">Organizer</label>
                <input
                  type="text"
                  name="organizer"
                  value={newEvent.organizer}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Who is conducting it?"
                />
              </div>
            )}

            {newEvent.type !== "Event" && (
              <div>
                <label className="block font-medium text-gray-700 mb-2">Attendees</label>
                <input
                  type="number"
                  name="attendees"
                  value={newEvent.attendees}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Number of people attending"
                />
              </div>
            )}
          </div>

          <div className="mt-6">
            <label className="block font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Describe the event, workshop or seminar..."
              rows={4}
            />
          </div>

          <button
            onClick={handleAddEvent}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition-all"
          >
            Add {newEvent.type}
          </button>
        </div>

        {/* Display Added Events */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-6 shadow hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">
                  📅 <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600 mb-1">
                  📍 <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-600 mb-1">
                  🎯 <strong>Type:</strong> {event.type}
                </p>
                {event.type !== "Event" && (
                  <>
                    <p className="text-gray-600 mb-1">
                      👨‍🏫 <strong>Organizer:</strong> {event.organizer}
                    </p>
                    <p className="text-gray-600 mb-3">
                      👥 <strong>Attendees:</strong> {event.attendees}
                    </p>
                    <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
                      Register
                    </button>
                  </>
                )}
                <p className="text-gray-700 mt-3">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
