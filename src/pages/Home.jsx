import React from "react";
import { Link } from "react-router-dom";
import Stats from "../components/Stats";
import "../pages/Home.css"
import tech from "../assets/tech/855.jpg"
import Courses from "./Courses";
import PopularVideos from "../components/PopularVideos";
export default function Home() {
  return (
    <div>

      {/* HERO */}
      {/* <section
        className="text-white d-flex align-items-center position-relative"
        style={{
          minHeight: "90vh",
          background:
            "radial-gradient(circle at 20% 20%, #1f2937, #020617)",
        }}
      >
        <div className="container text-center">
          <h1 className="display-2 fw-bold mb-4">
            Launch Your Tech Career
          </h1>

          <p className="lead text-light mb-5">
            Master Cybersecurity, Ethical Hacking, AI & Full-Stack
            Development with real-world training.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link to="/courses" className="btn btn-primary btn-lg px-4">
              Explore Courses
            </Link>

            <Link to="/about" className="btn btn-outline-light btn-lg px-4">
              Learn More
            </Link>
          </div>
        </div>
      </section> */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <h1>
                Empowering the Next Generation of
                <span> Tech Experts</span>
              </h1>

              <p>
                At SateExpert, we believe technology is more than just code —
                it's a powerful tool to solve real-world problems and transform lives.
              </p>

              <p>
                Our mission is to equip learners with practical skills,
                industry knowledge, and the confidence to build successful
                careers in tech.
              </p>

              <div className="hero-features">

                <div className="feature">
                  🎓
                  <div>
                    <h6>Practical Learning</h6>
                    <small>Hands-on projects</small>
                  </div>
                </div>

                <div className="feature">
                  👨‍🏫
                  <div>
                    <h6>Expert Mentors</h6>
                    <small>Industry professionals</small>
                  </div>
                </div>

                <div className="feature">
                  🚀
                  <div>
                    <h6>Career Support</h6>
                    <small>Guidance & mentorship</small>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                className="img-fluid hero-image"
              />
            </div>

          </div>
        </div>
      </section>

      <Stats></Stats>

            {/* BENEFITS GRID */}
<section className="benefits-section py-5">
  <div className="container">

    <h2 className="benefits-title text-center mb-5">
      What You Gain
    </h2>

    <div className="row g-4 text-center">

      <div className="col-md-3">
        <div className="benefit-card">

          <div className="benefit-icon">💼</div>

          <h5 className="benefit-heading">
            Job-Ready Skills
          </h5>

          <p className="benefit-text">
            Learn practical skills companies actually need.
          </p>

        </div>
      </div>

      <div className="col-md-3">
        <div className="benefit-card">

          <div className="benefit-icon">📜</div>

          <h5 className="benefit-heading">
            Certification
          </h5>

          <p className="benefit-text">
            Earn certificates to validate your expertise.
          </p>

        </div>
      </div>

      <div className="col-md-3">
        <div className="benefit-card">

          <div className="benefit-icon">🤝</div>

          <h5 className="benefit-heading">
            Mentorship
          </h5>

          <p className="benefit-text">
            Guidance from experienced tech professionals.
          </p>

        </div>
      </div>

      <div className="col-md-3">
        <div className="benefit-card">

          <div className="benefit-icon">🌍</div>

          <h5 className="benefit-heading">
            Global Opportunities
          </h5>

          <p className="benefit-text">
            Prepare for remote and international tech jobs.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>


{/* ABOUT / MISSION SECTION */}
<section className="mission-section py-5">
  <div className="container">

    <div className="row align-items-center g-5">

      {/* IMAGE */}
      <div className="col-md-6">
        <img
          src={tech}
          alt="Tech Training"
          className="img-fluid rounded-4 mission-image"
        />
      </div>

      {/* CONTENT */}
      <div className="col-md-6">

        <h2 className="mission-title">
          Empowering the Next Generation of Tech Professionals
        </h2>

        <p className="mission-text">
          At <strong>SateExpert</strong>, our mission is to equip aspiring
          tech professionals with the skills needed to thrive in today's
          digital economy. Through practical training, mentorship, and
          real-world projects, we help students transition from learners
          to confident professionals.
        </p>

        {/* FEATURES */}
        <ul className="mission-list">
          <li>✔ Practical industry-focused curriculum</li>
          <li>✔ Real-world projects & portfolio building</li>
          <li>✔ Mentorship from experienced professionals</li>
          <li>✔ Career guidance and job preparation</li>
        </ul>

        <a href="/courses" className="btn btn-primary btn-lg mt-3">
          Explore Our Programs
        </a>

      </div>

    </div>

  </div>
</section>

<Courses></Courses>



      <section className="features-section py-5">
  <div className="container">

    <h2 className="features-title text-center mb-5">
      Why Choose SateExpert?
    </h2>

    <div className="row g-4">

      <div className="col-md-4">
        <div className="feature-card text-center">

          <div className="feature-icon">
            💻
          </div>

          <h4 className="feature-heading">
            Hands-on Training
          </h4>

          <p className="feature-text">
            Work on real-world projects and build portfolio-ready
            skills that employers actually want.
          </p>

        </div>
      </div>

      <div className="col-md-4">
        <div className="feature-card text-center">

          <div className="feature-icon">
            👨‍🏫
          </div>

          <h4 className="feature-heading">
            Expert Mentors
          </h4>

          <p className="feature-text">
            Learn directly from industry professionals actively
            working in cybersecurity, AI and software engineering.
          </p>

        </div>
      </div>

      <div className="col-md-4">
        <div className="feature-card text-center">

          <div className="feature-icon">
            🚀
          </div>

          <h4 className="feature-heading">
            Career Support
          </h4>

          <p className="feature-text">
            Get CV reviews, interview preparation and job
            placement support to launch your tech career.
          </p>

        </div>
      </div>

    </div>
  </div>


</section>


      {/* CTA */}
      <section className="py-5 text-center text-white"
        style={{ background: "linear-gradient(90deg,#2563eb,#9333ea)" }}
      >
        <div className="container">

          <h2 className="fw-bold mb-3">
            Ready to Start Your Journey?
          </h2>

          <p className="mb-4">
            Join SateExpert and build your future in tech.
          </p>

          <Link to="/courses" className="btn btn-light btn-lg px-4">
            Enroll Now
          </Link>

        </div>
      </section>

<PopularVideos></PopularVideos>
    </div>

  );
}