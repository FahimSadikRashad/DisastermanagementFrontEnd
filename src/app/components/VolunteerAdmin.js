import React from 'react';

const VolunteerAdmin = ({ volunteers }) => {
  return (
    <div>
      {volunteers.map(volunteer => (
        <div key={volunteer.id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-xl font-bold">{volunteer.name}</h3>
          <p>Email: {volunteer.email}</p>
          <p>Status: {volunteer.status}</p>
        </div>
      ))}
    </div>
  );
};

export default VolunteerAdmin;
