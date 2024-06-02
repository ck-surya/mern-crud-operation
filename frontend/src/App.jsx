import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList'; // Import StudentList component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<StudentList />} /> {/* Use element prop */}
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
