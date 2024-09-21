"use client";

import { useContext } from "react";
import { DonationContext } from "../context/DonationContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import DonationForm from "../components/DonationForm";
import TransactionList from "../components/TransactionList";

export default function DonationPage() {
  const { donationData, totalDonations } = useContext(DonationContext);

  return (
    <div className="flex flex-col lg:flex-row gap-10 h-[calc(100vh-80px)] container mx-auto p-6"> {/* Use calc for height */}
      
      {/* Left: Bar chart section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-2/3 bg-white shadow-lg p-6 rounded-lg flex-grow"
      >
        <h2 className="text-3xl font-bold mb-4">
          Daily Donations and Expenses
        </h2>
        <div className="h-full mb-6"> {/* Full height */}
          <ResponsiveContainer width="100%" height="100%"> {/* Make the chart fill available space */}
            <BarChart data={donationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="donations" fill="#82ca9d" />
              <Bar dataKey="expenses" fill="#ff4d4f" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-lg">
          Total donations:{" "}
          <span className="font-bold text-blue-600">${totalDonations}</span>
        </p>
      </motion.section>

      {/* Right: Donation form and transaction list */}
      <div className="lg:w-1/3 flex flex-col space-y-6 h-full">
        {/* Donation Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex-grow">
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
          <DonationForm />
        </div>

        {/* Transaction List */}
        <div className="bg-white shadow-lg p-6 rounded-lg flex-grow overflow-y-auto max-h-[300px]"> {/* Scrollable and limited height */}
          <TransactionList donationData={donationData} />
        </div>
      </div>
    </div>
  );
}
