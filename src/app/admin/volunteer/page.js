"use client";

import React, { useState } from 'react';
import { useAdminContext } from '../../context/AdminContext';

const VolunteerPage = () => {
  const { volunteers, crises, verifyVolunteer, assignVolunteerToTask, assignVolunteerToCrisis } = useAdminContext();
  const [selectedCrisis, setSelectedCrisis] = useState('');

  const handleVerify = (id) => {
    verifyVolunteer(id);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Volunteers</h2>
      <ul className="space-y-4">
        {volunteers.map(volunteer => (
          <li key={volunteer.id} className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-bold">{volunteer.name}</h3>
            <p>Age: {volunteer.age}</p>
            <p>Mobile: {volunteer.mobile}</p>
            <p>
              Task: 
              <select
                className="ml-2 border rounded p-1"
                value={volunteer.task}
                onChange={(e) => assignVolunteerToTask(volunteer.id, e.target.value)}
              >
                <option value="Logistics">Logistics</option>
                <option value="Medical Assistance">Medical Assistance</option>
                <option value="Shelter Management">Shelter Management</option>
                <option value="Food Distribution">Food Distribution</option>
                <option value="Community Outreach">Community Outreach</option>
              </select>
            </p>

            <div className="mt-4">
              <label className="block mb-2">Assigned Crises:</label>
              {volunteer.assignedCrises.length > 0 ? (
                <ul className="list-disc pl-5">
                  {volunteer.assignedCrises.map(crisisId => {
                    const crisis = crises.find(c => c.id === crisisId);
                    return <li key={crisisId}>{crisis ? crisis.name : 'Unknown Crisis'}</li>;
                  })}
                </ul>
              ) : (
                <p>No crises assigned.</p>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-2">Assign to Crisis:</label>
              <select
                className="border rounded p-1"
                onChange={(e) => setSelectedCrisis(e.target.value)}
              >
                <option value="">Select Crisis</option>
                {crises.map(crisis => (
                  <option key={crisis.id} value={crisis.id}>
                    {crisis.name}
                  </option>
                ))}
              </select>
              <button
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => assignVolunteerToCrisis(volunteer.id, selectedCrisis)}
                disabled={!selectedCrisis}
              >
                Assign
              </button>
            </div>

            <div className="mt-4">
              <button
                className={`px-4 py-2 rounded ${volunteer.approved ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
                onClick={() => handleVerify(volunteer.id)}
                disabled={volunteer.approved}
              >
                {volunteer.approved ? 'Verified' : 'Verify'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerPage;
