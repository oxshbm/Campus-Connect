import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    instituteId: '',
    email: '',
    username: '',
    interests: '',
    skills: '',
    year: '',
    course: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.instituteId.trim()) {
      newErrors.instituteId = 'Institute ID is required';
    }

    if (
      !formData.email ||
      (!formData.email.endsWith('.edu') && !formData.email.includes('.ac.in'))
    ) {
      newErrors.email = 'Please enter a valid institute email';
    }

    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.interests.trim()) newErrors.interests = 'Please mention your interests';
    if (!formData.skills.trim()) newErrors.skills = 'Please mention your skills';
    if (!formData.year.trim()) newErrors.year = 'Select your academic year';
    if (!formData.course.trim()) newErrors.course = 'Please enter your course';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Registered:', formData);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-800 to-indigo-900 flex items-center justify-center px-4"
    style={{
        backgroundImage: "url('/images/dr06_5ev7_230323.jpg')", // Replace with actual path or cloud URL
      }}>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-500">Student Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Institute ID */}
          <div>
            <label className="block font-medium text-gray-700">Institute ID Number</label>
            <input
              type="text"
              name="instituteId"
              value={formData.instituteId}
              onChange={handleChange}
              placeholder="e.g., 21UCS1234"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
              required
            />
            {errors.instituteId && <p className="text-red-600 text-sm">{errors.instituteId}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700">Institute Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourname@institute.edu"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
              required
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          {/* Username */}
          <div>
            <label className="block font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="coolcoder123"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
              required
            />
            {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}
          </div>

          {/* Interests */}
          <div>
            <label className="block font-medium text-gray-700">Interests (Technologies you like)</label>
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="e.g., Web Dev, AI, Cybersecurity"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
              required
            />
            {errors.interests && <p className="text-red-600 text-sm">{errors.interests}</p>}
          </div>

          {/* Skills */}
          <div>
            <label className="block font-medium text-gray-700">Skills Acquired</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., Python, React, Git"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
              required
            />
            {errors.skills && <p className="text-red-600 text-sm">{errors.skills}</p>}
          </div>

          {/* Academic Year */}
          <div>
            <label className="block font-medium text-gray-700">Academic Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
              required
            >
              <option value="">-- Select Year --</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
            {errors.year && <p className="text-red-600 text-sm">{errors.year}</p>}
          </div>

          {/* Course */}
          <div>
            <label className="block font-medium text-gray-700">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="e.g., B.Tech CSE"
              className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
              required
            />
            {errors.course && <p className="text-red-600 text-sm">{errors.course}</p>}
          </div>
        {/* Password */}
        <div>
            <label className="block font-medium text-gray-700">Password</label>
            <input
                type="password"
                name="password"
                value={formData.password || ''}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
                required
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
            <label className="block font-medium text-gray-700">Confirm Password</label>
            <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword || ''}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full mt-1 px-4 py-2 border border-blue-500 ring-2 ring-blue-500 rounded bg-white text-gray-900 placeholder-gray-500"
                required
            />
            {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
        </div>

          {/* Submit */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Register & Go to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
