// src/components/Applications.js
import React, { useState } from 'react';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const fetchData = () => {
    fetch('http://localhost:5000/applications')
      .then(response => response.json())
      .then(data => setApplications(data))
      .catch(error => console.error('Error fetching applications:', error));

  };

  const handleAddApplication = () => {
    setApplications([...applications, { name, position, status: 'Pending' }]);
    setName('');
    setPosition('');
  };

  return (
    <div>

      <h2>Applications</h2>
      <input
        type="text"
        placeholder="Applicant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button onClick={handleAddApplication}>Add Application</button>
      <ul>  </ul>

      <button onClick={fetchData}>Fetch Applications</button>
      <ul>
        {applications.map(app => (
          <li key={app.id}>{app.name} - {app.position} - {app.applicant}</li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
