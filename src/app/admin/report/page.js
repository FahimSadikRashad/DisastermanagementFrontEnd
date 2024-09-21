"use client";

import React from 'react';
import { DonationContext } from '../../context/DonationContext';
import { useContext } from 'react';
const ReportPage = () => {
  // const { generateReport } = useContext(DonationContext);
  const { donationData, totalDonations ,generateReport } = useContext(DonationContext);
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Generate Reports</h2>
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={generateReport}
      >
        Generate CSV Report
      </button>
    </div>
  );
};

export default ReportPage;
