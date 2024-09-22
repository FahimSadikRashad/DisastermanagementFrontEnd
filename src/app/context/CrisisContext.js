"use client";
import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CrisisContext = createContext();

export const useCrisisContext = () => useContext(CrisisContext);

export function CrisisProvider({ children }) {
  const [crises, setCrises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrises = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Crisis');
        const crisesData = response.data.map(crisis => ({
          id: crisis.id,
          name: crisis.title,
          location: crisis.location,
          description: crisis.description,
          severity: crisis.severity,
          status: crisis.isApproved ? 'Approved' : 'Pending',
          date: new Date(crisis.date).toISOString().split('T')[0],
          type: 'Natural Disaster', // Adjust as necessary
        }));
        setCrises(crisesData);
      } catch (error) {
        console.error('Error fetching crises:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrises();
  }, []);

  const addCrisis = (crisis) => {
    setCrises([...crises, { ...crisis, id: crises.length + 1, status: 'Pending', date: new Date().toISOString().split('T')[0] }]);
  };

  const approveCrisis = async (id) => {
    const crisisToApprove = crises.find(crisis => crisis.id === id);
    
    if (!crisisToApprove) {
      console.error('Crisis not found');
      return;
    }
  
    try {
      await axios.put(`http://localhost:5000/api/Crisis/${id}`, {
        isApproved: true,
        severity: crisisToApprove.severity // Pass the current severity
      });
      
      setCrises(crises.map(crisis => 
        crisis.id === id 
          ? { ...crisis, status: 'Approved' } 
          : crisis
      ));
    } catch (error) {
      console.error('Error approving crisis:', error);
    }
  };
  
  const changeSeverity = async (id, severity) => {
    const crisisToUpdate = crises.find(crisis => crisis.id === id);
    
    if (!crisisToUpdate) {
      console.error('Crisis not found');
      return;
    }
  
    try {
      await axios.put(`http://localhost:5000/api/Crisis/${id}`, {
        severity,
        isApproved: crisisToUpdate.status === 'Approved' // Keep the current approval status
      });
      setCrises(crises.map(crisis => 
        crisis.id === id ? { ...crisis, severity } : crisis
      ));
    } catch (error) {
      console.error('Error changing severity:', error);
    }
  };
  
  const declineCrisis = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/Crisis/${id}`);
      setCrises(crises.filter(crisis => crisis.id !== id));
    } catch (error) {
      console.error('Error declining crisis:', error);
    }
  };
  return (
    <CrisisContext.Provider value={{ crises, addCrisis, approveCrisis, loading ,changeSeverity, declineCrisis}}>
      {children}
    </CrisisContext.Provider>
  );
}
