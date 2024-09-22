"use client";
import { useCrisisContext } from '../context/CrisisContext';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export default function CrisisList() {
  const { crises, approveCrisis, loading } = useCrisisContext();
  const [filter, setFilter] = useState({ severity: '', status: '', type: '', date: '' });
  const { isLoggedIn } = useAuth();
  // const [filter, setFilter] = useState({ severity: '', status: '', type: '', date: '' });
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const role = JSON.parse(localStorage.getItem('user'))?.role;
      setUserRole(role);
    }
  }, []);

  const filteredCrises = crises.filter(crisis => 
    (filter.severity ? crisis.severity === filter.severity : true) &&
    (filter.status ? crisis.status === filter.status : true) &&
    (filter.type ? crisis.type === filter.type : true) &&
    (filter.date ? crisis.date === filter.date : true)
  );

  if (loading) return <p>Loading crises...</p>;

  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex-grow flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">List of Crises</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        {/* Severity Filter */}
        <div>
          <label className="block text-sm font-bold mb-2">Severity Filter</label>
          <select 
            value={filter.severity}
            onChange={(e) => setFilter({ ...filter, severity: e.target.value })}
            className="p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        {/* Status Filter */}
        <div>
          <label className="block text-sm font-bold mb-2">Status Filter</label>
          <select 
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            className="p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        {/* Type Filter */}
        <div>
          <label className="block text-sm font-bold mb-2">Type Filter</label>
          <select 
            value={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value })}
            className="p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="Natural Disaster">Natural Disaster</option>
            <option value="Humanitarian Crisis">Humanitarian Crisis</option>
          </select>
        </div>
        {/* Date Filter */}
        <div>
          <label className="block text-sm font-bold mb-2">Date Filter</label>
          <input
            type="date"
            value={filter.date}
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
            className="p-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Crisis List with Scroll */}
      <div className="overflow-y-auto flex-grow max-h-[510px]">
        <ul className="space-y-4">
          {filteredCrises.map(crisis => (
            <li key={crisis.id} className="border p-4 rounded-lg">
              <p><strong>{crisis.name}</strong> - {crisis.severity} Severity</p>
              <p>Location: {crisis.location}</p>
              <p>Description: {crisis.description}</p>
              <p>Status: {crisis.status}</p>
              <p>Date: {crisis.date}</p>
              <p>Type: {crisis.type}</p>
              {crisis.status === 'Pending' && userRole === 'Admin' && (
                <button onClick={() => approveCrisis(crisis.id)} className="text-blue-500">
                  Approve Crisis
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
