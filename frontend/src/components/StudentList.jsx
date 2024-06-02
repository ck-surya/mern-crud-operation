import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentList.css'; // Import CSS file for styling

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data.data); // Ensure the response data structure is correct
      } catch (error) {
        console.error('Error fetching student data:', error);
        alert('Error fetching student data');
      }
    };

    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      setStudents(students.filter(student => student._id !== id));
      alert('Student deleted successfully');
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Error deleting student');
    }
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Enrollment Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.enrollnumber}</td>
              <td>
                <Link to={`/edit/${student._id}`}>Edit</Link>
                <button onClick={() => deleteStudent(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
