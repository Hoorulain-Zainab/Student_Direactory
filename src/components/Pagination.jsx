import React from 'react'
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav aria-label="Student directory pages" className="d-flex justify-content-center mt-4">
      <ul className="pagination pagination-sm mb-0">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        </li>
        {pages.map((page) => (
          <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
            <button className="page-link" aria-current={currentPage === page ? 'page' : undefined} onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </li>
      </ul>
    </nav>
  )
}
