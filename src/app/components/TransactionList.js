"use client";

export default function TransactionList({ donationData }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-8 mb-4">Donation Transactions</h2>
      <ul className="space-y-4 max-h-80 overflow-y-auto"> {/* Scrollable List */}
        {donationData.map((item, index) => (
          <li key={index} className="border p-4 rounded-lg bg-gray-50">
            <p className="font-semibold">Day {item.name}:</p>
            <p>
              Donations: <span className="text-green-600">${item.donations}</span>
            </p>
            <p>
              Expenses: <span className="text-red-600">${item.expenses}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
