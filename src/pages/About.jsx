import React from "react";
import "../pages/About.css";

export default function About() {
  return (
    <div id="AboutPage">

      {/* HERO */}

      <section className="about-hero">

        <div className="hero-overlay">

          <div className="container hero-content">

            <h1>About SateExpert</h1>

            <p>
              SateExpert is a modern technology academy focused on empowering
              the next generation of developers, engineers, and innovators.
            </p>

            <p>
              Our goal is to provide practical, industry-driven training that
              helps learners gain real-world skills in cybersecurity,
              artificial intelligence, cloud computing, and full-stack
              development.
            </p>

            <p>
              We believe education should be hands-on, accessible, and focused
              on solving real problems. Through mentorship, real projects,
              and expert guidance, we prepare students for successful careers
              in technology.
            </p>

          </div>

        </div>

      </section>


      {/* SIMPLE INFO SECTION */}

      <section className="about-info">

        <div className="container text-center">

          <h2>Our Mission</h2>

          <p>
            To empower thousands of learners with practical tech skills and
            prepare them for real-world careers in the digital economy.
          </p>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section className="about-body">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h2>Who We Are</h2>

              <p>
                SateExpert was founded with a simple mission — to make
                high-quality technology education accessible to everyone.
                We believe that anyone with the right guidance and
                dedication can build a successful career in tech.
              </p>

              <p>
                Our courses are designed by experienced professionals
                and focus heavily on practical learning. Students work
                on real projects, collaborate with mentors, and gain the
                confidence needed to succeed in today's digital world.
              </p>

              <p>
                Whether you're just starting your journey in technology
                or looking to upgrade your skills, SateExpert provides
                the tools and support you need to grow.
              </p>

            </div>

            <div className="col-lg-6">

              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                className="img-fluid about-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="why-us">

        <div className="container text-center">

          <h2 className="mb-5">Why Learn With Us</h2>

          <div className="row">

            <div className="col-md-4">

              <div className="feature-card">

                <h5>Practical Learning</h5>

                <p>
                  Our courses focus on hands-on experience with real
                  projects that mirror industry challenges.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="feature-card">

                <h5>Expert Mentors</h5>

                <p>
                  Learn directly from experienced developers and
                  engineers working in the tech industry.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="feature-card">

                <h5>Career Growth</h5>

                <p>
                  We help students prepare for tech careers through
                  mentorship, portfolio building, and guidance.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}