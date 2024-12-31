import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Rewards } from './pages/Rewards';
import { Maps } from './pages/Maps';
import { Timetable } from './pages/Timetable';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}