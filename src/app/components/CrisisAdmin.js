import React from 'react';

const CrisisAdmin = ({ crises, approveCrisis, changeCrisisSeverity }) => {
  return (
    <div>
      {crises.map(crisis => (
        <div key={crisis.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-bold">{crisis.name}</h3>
          <p>Status: {crisis.status}</p>
          <p>Severity: {crisis.severity}</p>
          <div className="mt-2">
            <button
              className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => approveCrisis(crisis.id)}
            >
              Approve
            </button>
            <select
              className="p-2 border rounded"
              onChange={(e) => changeCrisisSeverity(crisis.id, e.target.value)}
              defaultValue={crisis.severity}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrisisAdmin;
