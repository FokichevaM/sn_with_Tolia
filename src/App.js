import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/searchDashboard" />} />
      </Routes>
      <AuthPage />;
    </BrowserRouter>
  );
}

export default App;
