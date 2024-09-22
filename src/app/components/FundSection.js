"use client";

import { useRef } from 'react';
import { useInView } from '../context/UserInViewContext';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function FundSection() {
  const ref = useRef();
  const isVisible = useInView(ref);

  // Dummy data for the chart
  const data = [
    { name: 'Day 1', donations: 4000, expenses: 2400 },
    { name: 'Day 2', donations: 3000, expenses: 1398 },
    { name: 'Day 3', donations: 2000, expenses: 9800 },
    { name: 'Day 4', donations: 2780, expenses: 3908 },
    { name: 'Day 5', donations: 1890, expenses: 4800 },
    { name: 'Day 6', donations: 2390, expenses: 3800 },
    { name: 'Day 7', donations: 3490, expenses: 4300 },
  ];

  const totalDonations = data.reduce((sum, item) => sum + item.donations, 0);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="bg-white shadow-lg p-8 rounded-lg mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">Donation Fund</h2>
      <p className="text-lg mb-4">
        Total donations:{" "}
        <span className="font-bold text-blue-600">${totalDonations}</span>
      </p>

      <div className="h-64 mb-6">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="donations" fill="#82ca9d" />
            <Bar dataKey="expenses" fill="#ff4d4f" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center mt-8">
        <a
          href="/donation"
          className="mt-4 inline-block text-white bg-blue-500 px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
        >
          View Donation Details &raquo;
        </a>
      </div>
    </motion.section>
  );
}
