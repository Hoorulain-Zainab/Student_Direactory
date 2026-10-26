import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';

import './App.css';

// Importing Pages
import Home from './pages/Home';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column bg-light text-dark">
        <Navbar />

        {/* Breadcrumb */}
        <div className="bg-white border-bottom py-2 px-4 shadow-sm">
          <span className="text-danger small fw-semibold">Home</span> <span className="text-muted small">/ Portal Navigation</span>
        </div>

        {/* Page Routing */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;