// utils/csvGenerator.js
export const generateCSV = (data, filename = 'report.csv') => {
    const csvRows = [];
  
    // Get headers from the data keys
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(',')); // Join headers with commas
  
    // Loop over the rows of data
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = String(row[header]).replace(/"/g, '\\"'); // Escape quotes
        return `"${escaped}"`;
      });
      csvRows.push(values.join(',')); // Join values with commas
    }
  
    // Create a CSV blob and download it
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    a.click();
  };
  