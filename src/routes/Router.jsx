import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import VerifyOtp from "../pages/VerifyOtp";
import Dashboard from "../pages/Dashboard";
import Trends from "../pages/Trends";
import Location from "../pages/Location";
import Settings from "../pages/Settings";
import Error404 from '../components/Error404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
