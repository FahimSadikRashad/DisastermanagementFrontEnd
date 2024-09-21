import React from 'react';

const ReportAdmin = ({ generateReport }) => {
  return (
    <div>
      <button
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={generateReport}
      >
        Generate CSV Report
      </button>
    </div>
  );
};

export default ReportAdmin;
