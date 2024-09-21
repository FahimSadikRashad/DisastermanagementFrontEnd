"use client";
import { useVolunteerContext } from '../context/VolunteerContext';

export default function VolunteerList() {
  const { volunteers } = useVolunteerContext();

  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex-grow flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-4">List of Volunteers</h2>

      {/* Volunteer List with Scroll */}
      <div className="overflow-y-auto flex-grow max-h-60">
        <ul className="space-y-4">
          {volunteers.map(volunteer => (
            <li key={volunteer.id} className="border p-4 rounded-lg">
              <p><strong>Name:</strong> {volunteer.name}</p>
              <p><strong>Age:</strong> {volunteer.age}</p>
              <p><strong>Mobile:</strong> {volunteer.mobile}</p>
              <p><strong>Task:</strong> {volunteer.task}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
