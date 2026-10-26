import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm">
      <Link className="navbar-brand fw-bold text-white fs-4" to="/">
        StudentPortal
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto gap-3">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/students">Students</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/reports">Reports</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;