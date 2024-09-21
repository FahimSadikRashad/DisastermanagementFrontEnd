"use client";
import { useState } from 'react';
import { useCrisisContext } from '../context/CrisisContext';

export default function CrisisForm() {
  const { addCrisis } = useCrisisContext();
  const [formData, setFormData] = useState({ name: '', location: '', description: '', severity: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.location && formData.description && formData.severity) {
      addCrisis(formData);
      setFormData({ name: '', location: '', description: '', severity: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Report a Crisis</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Crisis Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded-lg"
          placeholder="Crisis name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full p-2 border rounded-lg"
          placeholder="Crisis location"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Type</label>
        <input
          type="text"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full p-2 border rounded-lg"
          placeholder="Crisis type"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded-lg"
          placeholder="Describe the crisis"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Severity</label>
        <select
          value={formData.severity}
          onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Submit Crisis
      </button>
    </form>
  );
}
