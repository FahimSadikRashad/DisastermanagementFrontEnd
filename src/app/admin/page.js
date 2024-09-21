"use client";

import React from 'react';
import Link from 'next/link';

const AdminPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/volunteer">
          <a className="p-6 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition">
            Manage Volunteers
          </a>
        </Link>
        <Link href="/admin/crisis">
          <a className="p-6 bg-red-500 rounded-lg text-white hover:bg-red-600 transition">
            Manage Crises
          </a>
        </Link>
        <Link href="/admin/report">
          <a className="p-6 bg-green-500 rounded-lg text-white hover:bg-green-600 transition">
            Generate Reports
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
