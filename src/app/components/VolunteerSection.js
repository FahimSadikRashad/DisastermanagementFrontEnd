"use client";

import { useRef } from 'react';
import { useInView } from '../context/UserInViewContext';

export default function VolunteerSection() {
  const ref = useRef();
  const isVisible = useInView(ref);

  // Dummy data for volunteers
  const volunteers = [
    {
      id: 1,
      name: "John Doe",
      skills: "Medical Assistance, Logistics",
      availability: "Available for 2 weeks"
    },
    {
      id: 2,
      name: "Jane Smith",
      skills: "Communication, Counseling",
      availability: "Available for 1 month"
    },
    {
      id: 3,
      name: "Alex Johnson",
      skills: "First Aid, Distribution",
      availability: "Available for 3 weeks"
    }
  ];

  return (
    <section
      ref={ref}
      className={`bg-white shadow-lg p-8 rounded-xl mb-12 transform transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Volunteer Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map(volunteer => (
          <div key={volunteer.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{volunteer.name}</h3>
            <p className="text-gray-600 mb-2">Skills: {volunteer.skills}</p>
            <p className="text-gray-600 mb-4">Availability: {volunteer.availability}</p>
            <a
              href={`/volunteer/${volunteer.id}`}
              className="text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              View Details &raquo;
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/volunteer"
          className="inline-block text-white bg-blue-500 px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          View All Volunteers
        </a>
      </div>
    </section>
  );
}
