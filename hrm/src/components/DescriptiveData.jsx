// src/components/DescriptiveData.js
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DescriptiveData = () => {

  const [data, setData] = useState([]);

  const fetchData = () => {

    fetch('http://localhost:5000/descriptiveData')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));

    useEffect(() => {
      setData(data);
    }, []);

  };

  return (
    <div>
      <h2>Descriptive Data</h2>

      {/* for graph */}
      <BarChart width={600} height={300} data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="department" fill="#8884d8" />
        <Bar dataKey="salary" fill="#82ca9d" />
        <Bar dataKey="turnover" fill="#822b9d" />
      </BarChart>

      {/* for down details  */}

      <button onClick={fetchData}>Fetch Descriptive Data</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name} - {item.department} - ${item.salary}</li>
        ))}
      </ul>

    </div>
  );
};

export default DescriptiveData
