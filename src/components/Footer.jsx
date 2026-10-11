import React from 'react'
export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h2 className="h6">Links</h2>
            <ul className="footer-links list-unstyled mb-0">
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Computer Science</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#reports">Reports</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="h6">Contact Info</h2>
            <ul className="footer-links list-unstyled mb-0">
              <li><a href="mailto:contact@studentportal.com">Contact Us</a></li>
              <li>+1: 123 456 7890</li>
              <li><a href="mailto:info@studentportal.com">info@studentportal.com</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright text-center mt-4 pt-3">© 2026 StudentPortal. All rights reserved.</div>
      </div>
    </footer>
  )
}
