import React from "react";
import "../components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">

      <div className="container py-5">

        <div className="row g-4">

          {/* BRAND */}
          <div className="col-md-4">
            <h4 className="footer-logo">SateExpert</h4>
            <p className="footer-text">
              Empowering the next generation of tech professionals through
              practical training, mentorship, and real-world projects.
            </p>

            <div className="footer-socials">
              <a href="#">🌐</a>
              <a href="#">🐦</a>
              <a href="#">💼</a>
              <a href="#">📺</a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="footer-title">Company</h6>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* COURSES */}
          <div className="col-md-3">
            <h6 className="footer-title">Popular Courses</h6>
            <ul className="footer-links">
              <li><a href="#">Cybersecurity</a></li>
              <li><a href="#">Ethical Hacking</a></li>
              <li><a href="#">AI & Automation</a></li>
              <li><a href="#">Full Stack Development</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-md-3">
            <h6 className="footer-title">Stay Updated</h6>
            <p className="footer-text">
              Subscribe to get updates on new courses and tech insights.
            </p>

            <div className="footer-subscribe">
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom text-center">
        © {new Date().getFullYear()} SateExpert. Empowering Future Tech Experts.
      </div>

    </footer>
  );
}