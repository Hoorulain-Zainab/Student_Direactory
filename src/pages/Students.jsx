import React from 'react';
import StudentCard from '../components/StudentCard';
import Form from '../components/Form';


const Students = () => {
  const students = [
    { id: "101", name: "Ali Kabeer", major: "Computer Science", year: "1", gpa: "2.9" },
    { id: "102", name: "Hoorulain Zainab", major: "Software Eng.", year: "3", gpa: "3.3" },
    { id: "103", name: "Saniya Rashid", major: "Artificial Intelligence", year: "3", gpa: "3.2" },
    { id: "104", name: "Hassan Askari", major: "Cyber Security", year: "1", gpa: "3.2" }
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark mb-0">Student Directory</h2>
        <button className="btn btn-danger btn-sm fw-semibold">+ Add New Student</button>
      </div>

      <div className="row g-4 mb-4">
        {students.map((student) => (
          <div className="col-md-3" key={student.id}>
            <StudentCard {...student} />
          </div>
        ))}
      </div>

      <div className="alert alert-danger py-2 small text-center" role="alert">
        Student records have been successfully updated.
      </div>
      < Form />
      
    </div>
  );
};

export default Students;