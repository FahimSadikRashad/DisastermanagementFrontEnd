//DonationForm
"use client";

import { useState } from 'react';

export default function DonationForm() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission logic
    console.log(`Donation Amount: $${amount}, Message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="mb-2 font-semibold" htmlFor="amount">Donation Amount</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 mb-4 border border-gray-300 rounded"
        placeholder="Enter amount"
        required
      />
      <label className="mb-2 font-semibold" htmlFor="message">Message (optional)</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 mb-4 border border-gray-300 rounded"
        placeholder="Leave a message"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Donate
      </button>
    </form>
  );
}
