// src/components/CreateStudent.js

import React, { useState } from 'react';
import axios from 'axios';
import './CreateStudents.css'; // Import CSS file

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enrollnumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/students', formData);
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        enrollnumber: ''
      });
      alert('Student created successfully');
    } catch (error) {
      alert('Error creating student');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Student</h2>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateStudent;
