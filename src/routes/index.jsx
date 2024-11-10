import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Dashboard from "../pages/Dashboard";

export const AppRouter = ({ userData, setUserData }) => {
  const isAuthenticated = Boolean(userData.token);

  return (
    <Router>
      <Routes>
        <Route path="/login"  element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setUserData={setUserData} />
            )
          } />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};