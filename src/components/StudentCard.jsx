import React, { useState } from 'react';

const StudentCard = ({ id, name, major, year, gpa }) => {
  const [views, setViews] = useState(0);
  const [showDetails, setShowDetails] = useState(false); // Details show/hide karne ke liye state

  const handleViewProfile = () => {
    // Agar pehli baar khol rahe hain toh view increment karein
    if (!showDetails) {
      setViews(prev => prev + 1);
    }
    // Toggle state (true ko false aur false ko true karna)
    setShowDetails(prev => !prev);
  };

  return (
    <div className="card student-card h-100 p-2">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title student-name">{name}</h5>
        <p className="card-text mb-1 text-muted small">ID: {id}</p>
        <p className="card-text mb-1 text-muted small">Major: {major}</p>
        <p className="card-text mb-1 text-muted small">Year: {year}</p>
        <p className="card-text mb-2 text-muted small">GPA: {gpa}</p>

        {/* Conditional Rendering: Jab showDetails true hoga tabhi yeh email aur phone dikhega */}
        {showDetails && (
          <div className="mb-3 p-2 bg-light rounded border">
            <p className="mb-1 text-dark small">✉️ student@szabist.pk</p>
            <p className="mb-0 text-dark small">📞 0300 1234567</p>
          </div>
        )}

        <div className="mb-2">
          <span className="badge student-views text-white">Views: {views}</span>
        </div>

        <div className="mt-auto d-flex gap-2 justify-content-between">
          <button 
            className={`btn btn-sm px-3 ${showDetails ? 'btn-outline-danger' : 'btn-outline-primary'}`} 
            onClick={handleViewProfile}
          >
            {showDetails ? 'Hide Profile' : 'View Profile'}
          </button>
          <button className="btn btn-outline-danger btn-sm px-3">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;