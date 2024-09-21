"use client";

import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [volunteers, setVolunteers] = useState([
    { id: 1, name: 'Alice Johnson', age: 30, mobile: '123-456-7890', task: 'Logistics', assignedCrises: [], approved: false },
    { id: 2, name: 'Bob Smith', age: 25, mobile: '234-567-8901', task: 'Medical Assistance', assignedCrises: [], approved: false },
    { id: 3, name: 'Charlie Brown', age: 28, mobile: '345-678-9012', task: 'Shelter Management', assignedCrises: [], approved: false },
  ]);

  const [crises, setCrises] = useState([
    { id: 1, name: 'Flooding', severity: 'High', status: 'Pending', description: 'Severe flooding in the area', location: 'City Center' },
    { id: 2, name: 'Earthquake', severity: 'Medium', status: 'Approved', description: 'Moderate earthquake damage', location: 'Downtown' },
  ]);

  // Approve a crisis
  const approveCrisis = (id) => {
    setCrises(crises.map(crisis => crisis.id === id ? { ...crisis, status: 'Approved' } : crisis));
  };

  // Decline a crisis (delete it from the list)
  const declineCrisis = (id) => {
    setCrises(crises.filter(crisis => crisis.id !== id));
  };

  // Change the severity of a crisis
  const changeSeverity = (id, severity) => {
    setCrises(crises.map(crisis => crisis.id === id ? { ...crisis, severity } : crisis));
  };

  // Generate a report (this can be implemented later)
  const generateReport = () => {
    console.log('Generating report...');
  };

  const verifyVolunteer = (id) => {
    setVolunteers(volunteers.map(volunteer => 
      volunteer.id === id ? { ...volunteer, approved: true } : volunteer
    ));
  };

  const assignVolunteerToTask = (id, newTask) => {
    setVolunteers(volunteers.map(volunteer => 
      volunteer.id === id ? { ...volunteer, task: newTask } : volunteer
    ));
  };

  const assignVolunteerToCrisis = (volunteerId, crisisId) => {
    const crisis = crises.find(c => c.id === crisisId);
    if (crisis) {
      setVolunteers(volunteers.map(volunteer => 
        volunteer.id === volunteerId 
          ? { 
              ...volunteer, 
              assignedCrises: [...new Set([...volunteer.assignedCrises, crisisId])] // Prevent duplicates
            } 
          : volunteer
      ));
    }
  };

  return (
    <AdminContext.Provider value={{ volunteers, setVolunteers, crises, approveCrisis, declineCrisis, changeSeverity, generateReport ,verifyVolunteer ,assignVolunteerToTask , assignVolunteerToCrisis}}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
