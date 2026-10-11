import React from 'react'
export default function Navbar({ searchTerm, onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#home">StudentPortal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#dashboard">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#students">Students</a></li>
            <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="#reports">Reports</a></li>
          </ul>
          <form className="d-flex gap-2" role="search" onSubmit={(event) => event.preventDefault()}>
            <input className="form-control form-control-sm" type="search" placeholder="Search students..." aria-label="Search students" value={searchTerm} onChange={(event) => onSearchChange(event.target.value)} />
            <button className="btn btn-primary btn-sm" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
