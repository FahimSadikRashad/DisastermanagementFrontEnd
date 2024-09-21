"use client";

import { useRef } from 'react';
import { useInView } from '../context/UserInViewContext';

export default function CrisisSection() {
  const ref = useRef();
  const isVisible = useInView(ref);

  // Dummy data for crises
  const crises = [
    {
      id: 1,
      title: "Flood in Southeast Asia",
      description: "Heavy rains have caused widespread flooding in several areas.",
      date: "2024-09-15"
    },
    {
      id: 2,
      title: "Earthquake in South America",
      description: "A major earthquake has struck the region, causing significant damage.",
      date: "2024-09-10"
    },
    {
      id: 3,
      title: "Wildfire in California",
      description: "A large wildfire is spreading rapidly in Southern California.",
      date: "2024-09-08"
    }
  ];

  return (
    <section
      ref={ref}
      className={`bg-white shadow-lg p-8 rounded-xl mb-12 transform transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Crisis Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crises.map(crisis => (
          <div key={crisis.id} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{crisis.title}</h3>
            <p className="text-gray-600 mb-4">{crisis.description}</p>
            <p className="text-sm text-gray-400 mb-6">{crisis.date}</p>
            <a
              href={`/crisis/${crisis.id}`}
              className="text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              View Details &raquo;
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/crisis"
          className="inline-block text-white bg-blue-500 px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          View All Crises
        </a>
      </div>
    </section>
  );
}
