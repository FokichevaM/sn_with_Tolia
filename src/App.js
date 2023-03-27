import React from 'react';
import { Route, Routes, BrowserRouter, redirect } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ResetPage from './pages/ResetPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/teams" element={<HomePage />} />
        <Route path="/notifications" element={<HomePage />} />
        <Route path="/profile" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
