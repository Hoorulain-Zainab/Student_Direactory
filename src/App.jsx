import React from 'react'
import Navbar from './components/Navbar.jsx'
import StudentCard from './components/StudentCard.jsx'
import Pagination from './components/Pagination.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

const initialStudents = [
  { id: 101, name: 'Jane Doe', major: 'Computer Science', year: 2, gpa: 3.8 },
  { id: 102, name: 'Mary Doe', major: 'Computer Science', year: 2, gpa: 3.8 },
  { id: 103, name: 'Gant Doe', major: 'Computer Science', year: 2, gpa: 3.8 },
  { id: 104, name: 'Amm Doe', major: 'Computer Science', year: 2, gpa: 3.8 },
  { id: 105, name: 'Ali Khan', major: 'Software Engineering', year: 3, gpa: 3.6 },
  { id: 106, name: 'Sara Ahmed', major: 'Information Technology', year: 1, gpa: 3.9 },
  { id: 107, name: 'Hamza Malik', major: 'Computer Science', year: 4, gpa: 3.5 },
  { id: 108, name: 'Ayesha Noor', major: 'Data Science', year: 2, gpa: 3.7 },
  { id: 109, name: 'Zain Shah', major: 'Cyber Security', year: 3, gpa: 3.4 },
  { id: 110, name: 'Hira Iqbal', major: 'Computer Science', year: 1, gpa: 3.9 },
  { id: 111, name: 'Usman Tariq', major: 'Software Engineering', year: 4, gpa: 3.6 },
  { id: 112, name: 'Mina Raza', major: 'Information Technology', year: 2, gpa: 3.8 },
]

export default function App() {
  const students = initialStudents
  const studentsPerPage = 4

  const visibleStudents = students.slice(0, studentsPerPage)
  const totalPages = Math.ceil(students.length / studentsPerPage)

  return (
    <div className="app-shell" id="home">

      <Navbar searchTerm="" onSearchChange={() => {}} />

      <main className="container directory-main" id="students">

        <nav aria-label="breadcrumb" className="breadcrumb-bar">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#home">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#students">Students</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Directory
            </li>
          </ol>
        </nav>

        <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap page-heading">
          <div>
            <h1 className="h3 mb-1">Student Directory</h1>
            <p className="text-secondary small mb-0">
              Browse and manage student records
            </p>
          </div>

          <button className="btn btn-primary btn-sm" type="button">
            Add New Student
          </button>
        </div>

        <div className="directory-summary d-flex justify-content-between align-items-center mb-3">
          <span className="small text-secondary">
            Showing {visibleStudents.length} of {students.length} students
          </span>

          <button className="btn btn-link btn-sm p-0" type="button">
            Clear search
          </button>
        </div>

        <div className="row g-3 student-grid">
          {visibleStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onView={() => {}}
              onDelete={() => {}}
            />
          ))}
        </div>

        <Pagination
          currentPage={1}
          totalPages={totalPages}
          onPageChange={() => {}}
        />

        <div className="alert alert-info directory-alert mt-3" role="status">
          Student records have been successfully updated.
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          />
        </div>

      </main>

      <Footer />

    </div>
  )
}
