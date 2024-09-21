"use client";
import { VolunteerProvider } from '../context/VolunteerContext';
import VolunteerList from '../components/VolunteerList';

export default function VolunteerPage() {
  return (
    <VolunteerProvider>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Volunteer Management</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Volunteer List (takes most of the width) */}
          <VolunteerList />
        </div>
      </div>
    </VolunteerProvider>
  );
}
