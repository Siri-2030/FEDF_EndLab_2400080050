import React, { useState } from 'react';

const initialData = [
  { name: 'Bhuvana', subject: 'Maths', score: 98 },
  { name: 'pranathi', subject: 'Python', score: 72 },
  { name: 'Rajya', subject: 'FEDF', score: 90 },
  { name: 'Rahul', subject: 'Maths', score: 60 },
  { name: 'Ramesh', subject: 'Python', score: 95 },
];

const subjects = ['All', 'Maths', 'Python', 'FEDF'];

export default function StudentMarksTable() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterSubject, setFilterSubject] = useState('All');
  

  const sortedData = [...initialData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];
    if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((student) => {
    const subjectMatch = filterSubject === 'All' || student.subject === filterSubject;
  
    return subjectMatch;
  });

  

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Student Marks Table</h2>

      <div className="flex gap-4 mb-4">
        <select
          value={filterSubject}
          onChange={(e) => setFilterSubject(e.target.value)}
          className="border p-2 rounded"
        >
          {subjects.map((sub) => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>

      
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 cursor-pointer" onClick={() => handleSort('name')}>Name</th>
            <th className="border px-4 py-2 cursor-pointer" onClick={() => handleSort('subject')}>Subject</th>
            <th className="border px-4 py-2 cursor-pointer" onClick={() => handleSort('score')}>Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((student, idx) => (
            <tr key={idx} className="text-center">
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.subject}</td>
              <td className="border px-4 py-2">{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}