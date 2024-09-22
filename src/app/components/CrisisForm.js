import axios from 'axios';
import { useState } from 'react';
import { useCrisisContext } from '../context/CrisisContext';

export default function CrisisForm() {
  const { addCrisis } = useCrisisContext();
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    severity: '',
    help: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    if (formData.title && formData.location && formData.description && formData.severity && formData.help) {
      try {
        const response = await axios.post('http://localhost:5000/api/Crisis', formData);
        addCrisis(response.data); // Assuming your API returns the created crisis data
        setFormData({
          title: '',
          location: '',
          description: '',
          severity: '',
          help: '',
        });
      } catch (error) {
        console.error('Error posting crisis:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Report a Crisis</h2>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Crisis Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded-lg"
          placeholder="Crisis title"
          required // Ensure this field is filled
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
          required // Ensure this field is filled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded-lg"
          placeholder="Describe the crisis"
          required // Ensure this field is filled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Severity</label>
        <select
          value={formData.severity}
          onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required // Ensure this field is filled
        >
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Help</label>
        <input
          type="text"
          value={formData.help}
          onChange={(e) => setFormData({ ...formData, help: e.target.value })}
          className="w-full p-2 border rounded-lg"
          placeholder="Help needed"
          required // Ensure this field is filled
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Submit Crisis
      </button>
    </form>
  );
}
