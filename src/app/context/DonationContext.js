//Donation context
"use client";

import React, { createContext, useState, useEffect } from 'react';
import { generateCSV } from '../utils/csvGenerator';

export const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    // Fetch or simulate fetching donation data from an API
    const fetchDonationData = () => {
      // Dummy data for simulation
      const data = [
        { name: 'Day 1', donations: 4000, expenses: 2400 },
        { name: 'Day 2', donations: 3000, expenses: 1398 },
        { name: 'Day 3', donations: 2000, expenses: 9800 },
        { name: 'Day 4', donations: 2780, expenses: 3908 },
        { name: 'Day 5', donations: 1890, expenses: 4800 },
        { name: 'Day 6', donations: 2390, expenses: 3800 },
        { name: 'Day 7', donations: 3490, expenses: 4300 },
      ];
      setDonationData(data);
    };

    fetchDonationData();
  }, []);

  const totalDonations = donationData.reduce((sum, item) => sum + item.donations, 0);

  const generateReport = () => {
    const reportData = donationData.map(item => ({
      Day: item.name,
      Donations: item.donations,
      Expenses: item.expenses,
    }));
    generateCSV(reportData, 'Daily_Report.csv');
  };

  return (
    <DonationContext.Provider value={{ donationData, totalDonations , generateReport }}>
      {children}
    </DonationContext.Provider>
  );
};
