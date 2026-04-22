import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/Header.css"


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-100 z-50 transition-all duration-300 header-blur ${
      scrolled ? "shadow-lg" : ""
    }`}>

      {/* SUB HEADER */}
      <div className={`text-gray-300 py-1 text-sm transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur"
          : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      }`}>
        <div className="container flex justify-end gap-6">
          <Link to="/support" className="hover:text-white transition">
            Support
          </Link>
          <Link to="/faq" className="hover:text-white transition">
            Help Center
          </Link>
          <Link to="/login" className="hover:text-white transition">
            Student Login
          </Link>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`navbar navbar-expand-lg px-4 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur scrolled"
            : "bg-white"
        }`}
      >
        <div className="container">

          {/* LOGO WITH GRADIENT */}
          <Link
            className="navbar-brand fw-bold fs-3"
            to="/"
            style={{
              background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SateExpert
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAVIGATION */}
          <div className="collapse navbar-collapse" id="mainNav">

            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

              <li className="nav-item">
                <Link className="nav-link fw-medium text-dark" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-medium text-dark" to="/about">
                  About
                </Link>
              </li>

              {/* COURSES DROPDOWN */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-medium text-dark"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Courses
                </a>

                <ul className="dropdown-menu shadow-lg border-0 rounded-3 p-2">
                  <li>
                    <Link className="dropdown-item rounded" to="/courses/cybersecurity">
                      Cybersecurity
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded" to="/courses/ethical-hacking">
                      Ethical Hacking
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded" to="/courses/ai">
                      Artificial Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item rounded" to="/courses/fullstack">
                      Full Stack Development
                    </Link>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li>
                    <Link className="dropdown-item fw-semibold text-primary" to="/courses">
                      View All Courses
                    </Link>
                  </li>
                </ul>
              </li>

              {/* SUPPORT DROPDOWN */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-medium text-dark"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Support
                </a>

                <ul className="dropdown-menu shadow-lg border-0 rounded-3 p-2">
                  <li>
                    <Link className="dropdown-item" to="/support">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-medium text-dark" to="/contact">
                  Contact
                </Link>
              </li>

              {/* CTA BUTTON */}
              <li className="nav-item">
                <Link
                  className="btn btn-gradient ms-lg-3 px-4 py-2 fw-semibold"
                  to="/courses"
                  style={{
                    background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
                    border: "none",
                    color: "white",
                    borderRadius: "999px",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                  }}
                >
                  Enroll Now
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}
