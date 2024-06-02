import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditStudent.css'; // Import CSS file

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enrollnumber: ''
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${id}`);
        setFormData(response.data); // Ensure response data structure is correct
      } catch (error) {
        alert('Error fetching student data');
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, formData);
      alert('Student updated successfully');
      navigate('/'); // Use navigate instead of history.push
    } catch (error) {
      alert('Error updating student');
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Enrollment Number:</label>
          <input type="number" name="enrollnumber" value={formData.enrollnumber} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
