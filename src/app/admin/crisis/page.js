"use client";

import React from 'react';
import { useAdminContext } from '../../context/AdminContext';

const CrisisPage = () => {
  const { crises, approveCrisis, changeSeverity, declineCrisis } = useAdminContext();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Crises</h2>
      {crises.map(crisis => (
        <div key={crisis.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-bold">{crisis.name}</h3>
          <p>Description: {crisis.description}</p>
          <p>Location: {crisis.location}</p>
          <p>Severity: {crisis.severity}</p>
          <p>Status: {crisis.status}</p>
          <div className="mt-2 flex items-center space-x-4">
            <button
              className={`mr-4 px-4 py-2 text-white rounded ${crisis.status === 'Approved' ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
              onClick={() => approveCrisis(crisis.id)}
              disabled={crisis.status === 'Approved'}
            >
              {crisis.status === 'Approved' ? 'Approved' : 'Approve'}
            </button>
            <select
              className="p-2 border rounded"
              onChange={(e) => changeSeverity(crisis.id, e.target.value)}
              value={crisis.severity}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <button
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => declineCrisis(crisis.id)}
            >
              Decline
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrisisPage;
