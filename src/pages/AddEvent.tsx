import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Book,
  Users,
  MessageCircle,
  Folder,
  Heart,
  LogOut,
  PlusCircle,
} from "lucide-react";

const AddEvent: React.FC = () => {
  const [events, setEvents] = useState<
    { id: number; title: string; date: string; time: string; organizer: string; hashtag: string; description: string }[]
  >([]);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    organizer: "",
    hashtag: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time) {
      alert("Please fill all required fields!");
      return;
    }

    const newEvent = {
      id: events.length + 1,
      ...formData,
    };

    setEvents((prev) => [...prev, newEvent]);
    setFormData({
      title: "",
      date: "",
      time: "",
      organizer: "",
      hashtag: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Book className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-blue-500">Campus Connect</h1>
        </div>

        <nav className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <Book className="w-4 h-4" /> Dashboard
          </Link>
          <Link to="/study-groups" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <Users className="w-4 h-4" /> Study Groups
          </Link>
          <Link to="/ask-question" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <MessageCircle className="w-4 h-4" /> Q&A Forum
          </Link>
          <Link to="/projects" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <Folder className="w-4 h-4" /> Projects
          </Link>
          <Link to="/mentorship" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <Heart className="w-4 h-4" /> Mentorship
          </Link>
          <Link to="/add-event" className="flex items-center gap-2 text-blue-600 font-semibold">
            <Calendar className="w-4 h-4" /> Manage Events
          </Link>
        </nav>

        <button className="flex items-center gap-2 text-red-500 mt-8 hover:text-red-600">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-blue-600">Event Management </h2>
          <div className="flex items-center gap-3">
            <PlusCircle className="w-6 h-6 text-blue-500" />
            <span className="text-gray-600">Add or Manage Events</span>
          </div>
        </header>

        {/* Add Event Form */}
        <section className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Add New Event</h3>
          <form onSubmit={handleAddEvent} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Event Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Organizer</label>
              <input
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                placeholder="Organizer name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Event Hashtag</label>
              <input
                type="text"
                name="hashtag"
                value={formData.hashtag}
                onChange={handleChange}
                placeholder="#TechFest"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the event..."
                rows={4}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
              >
                Add Event
              </button>
            </div>
          </form>
        </section>

        {/* Existing Events Section */}
        <section>
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Existing Events</h3>
          {events.length === 0 ? (
            <p className="text-gray-500">No events added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-blue-500">{event.title}</h4>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Organizer:</strong> {event.organizer || "N/A"}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Hashtag:</strong> {event.hashtag || "None"}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{event.description || "No description provided."}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AddEvent;
