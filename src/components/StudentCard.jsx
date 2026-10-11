import React from 'react'
function Avatar({ name }) {
  const initials = name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()
  return <div className="student-avatar" aria-label={`${name} avatar`}><span>{initials}</span></div>
}

export default function StudentCard({ student, onView, onDelete }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <article className="card student-card h-100 shadow-sm">
        <Avatar name={student.name} />
        <div className="card-body d-flex flex-column">
          <h2 className="card-title h6 mb-2">{student.name}</h2>
          <div className="student-details small text-secondary">
            <div><strong>ID:</strong> {student.id}</div>
            <div><strong>Major:</strong> {student.major}</div>
            <div><strong>Year:</strong> {student.year}</div>
            <div><strong>GPA:</strong> {student.gpa.toFixed(1)}</div>
          </div>
          <div className="d-flex flex-wrap gap-2 mt-3">
            <button className="btn btn-outline-primary btn-sm" onClick={() => onView(student)}>View Profile</button>
            <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(student.id)}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  )
}
