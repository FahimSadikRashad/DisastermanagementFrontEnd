"use client";
import { createContext, useState, useContext } from 'react';

const CrisisContext = createContext();

export const useCrisisContext = () => useContext(CrisisContext);

export function CrisisProvider({ children }) {
  const [crises, setCrises] = useState([
    { id: 1, name: 'Flood', location: 'City A', description: 'Severe flooding in City A.', severity: 'High', status: 'Approved', date: '2023-09-20', type: 'Natural Disaster' },
    { id: 2, name: 'Fire', location: 'Forest Area', description: 'Wildfire in the forest area.', severity: 'Medium', status: 'Approved', date: '2023-09-22', type: 'Natural Disaster' },
    { id: 3, name: 'Earthquake', location: 'City B', description: 'Minor earthquake in City B.', severity: 'Low', status: 'Pending', date: '2023-09-24', type: 'Natural Disaster' },
    // Add more dummy data for simulation
    { id: 4, name: 'Tornado', location: 'Town C', description: 'Tornado caused significant damage.', severity: 'High', status: 'Pending', date: '2023-09-21', type: 'Natural Disaster' },
    { id: 5, name: 'Civil Unrest', location: 'City D', description: 'Protests leading to unrest.', severity: 'High', status: 'Approved', date: '2023-09-23', type: 'Humanitarian Crisis' },
  ]);

  const addCrisis = (crisis) => {
    setCrises([...crises, { ...crisis, id: crises.length + 1, status: 'Pending', date: new Date().toISOString().split('T')[0] }]);
  };

  const approveCrisis = (id) => {
    setCrises(crises.map(crisis => crisis.id === id ? { ...crisis, status: 'Approved' } : crisis));
  };

  return (
    <CrisisContext.Provider value={{ crises, addCrisis, approveCrisis }}>
      {children}
    </CrisisContext.Provider>
  );
}
