import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateStudentPage from './pages/CreateStudent';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/create-student" element={<CreateStudentPage />} />
      </Routes>
   
  );
}

export default App;
