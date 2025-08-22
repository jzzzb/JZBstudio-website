// src/pages/CareerPage.jsx
import React, { useState } from "react";
import Footer from "../components/Footer"; // make sure this path matches where Footer.jsx is saved

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
  });

  const vacancies = [
    { id: 1, title: "Architect", type: "Full-time", location: "3-4 Years Experience" },
    { id: 2, title: "Interior Designer", type: "Full-time", location: "3-4 Years Experience" },
    { id: 3, title: "3D Visualizer", type: "Contract", location: "3-4 Years Experience" },
    { id: 4, title: "Junior Architect", type: "Full-time", location: "3-4 Years Experience" },
    { id: 5, title: "Interns", type: "6 Months", location: "Rhino, AutoCad" },
    { id: 6, title: "Structure Engineer", type: "Full-time", location: "3-4 Years Experience" },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
        <img
          src={`${process.env.PUBLIC_URL}/images/careerhero.jpg`}
          alt="Career Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            JOIN OUR TEAM
          </h1>
        </div>
      </div>

      {/* Vacancies Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {vacancies.map((job) => (
            <div
              key={job.id}
              className="border rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.type}</p>
              <p className="text-gray-500">{job.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Apply Now</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md"
        >
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Position Applying For
            </label>
            <select
              name="position"
              required
              value={formData.position}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select a position</option>
              {vacancies.map((job) => (
                <option key={job.id} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>

          {/* Resume Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareerPage;
