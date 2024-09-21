import React, { createContext, useState, useContext } from 'react';

const VolunteerContext = createContext();

export const VolunteerProvider = ({ children }) => {
  const [volunteers, setVolunteers] = useState([
    // Dummy data
    { id: 1, name: 'Alice Johnson', age: 30, mobile: '123-456-7890', task: 'Logistics' },
    { id: 2, name: 'Bob Smith', age: 25, mobile: '234-567-8901', task: 'Medical Assistance' },
    { id: 3, name: 'Charlie Brown', age: 28, mobile: '345-678-9012', task: 'Shelter Management' },
    // Add more volunteers as needed
  ]);

  return (
    <VolunteerContext.Provider value={{ volunteers }}>
      {children}
    </VolunteerContext.Provider>
  );
};

export const useVolunteerContext = () => {
  return useContext(VolunteerContext);
};
