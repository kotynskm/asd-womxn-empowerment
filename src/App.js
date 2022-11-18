import React from 'react';
import { Router, Routes, Route } from 'react-router-dom'

import './stylesheets/app.css';
import Login from './components/Login'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About'
import Account from './components/Account';
import LandingPage from './components/LandingPage';


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
