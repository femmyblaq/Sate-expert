import React from "react";
import "../pages/Contact.css";

export default function Contact() {
  return (
    <div>

      {/* HERO */}

      <section className="contact-hero">
        <div className="hero-overlay">

          <div className="container text-center hero-content">

            <h1>Contact Us</h1>

            <p>
              Have questions about our courses or programs?  
              Our team is here to help you start your tech journey.
            </p>

          </div>

        </div>
      </section>


      {/* CONTACT SECTION */}

      <section className="contact-section">

        <div className="container">

          <div className="row">

            {/* CONTACT FORM */}

            <div className="col-lg-7">

              <h2 className="mb-4">Send us a message</h2>

              <form className="contact-form">

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button className="btn contact-btn">
                  Send Message
                </button>

              </form>

            </div>


            {/* CONTACT INFO */}

            <div className="col-lg-5">

              <div className="contact-info">

                <div className="info-card">
                  <h5>📍 Address</h5>
                  <p>Lagos, Nigeria</p>
                </div>

                <div className="info-card">
                  <h5>📧 Email</h5>
                  <p>info@sateexpert.com</p>
                </div>

                <div className="info-card">
                  <h5>📞 Phone</h5>
                  <p>+234 XXX XXX XXXX</p>
                </div>

                <div className="info-card">
                  <h5>⏰ Hours</h5>
                  <p>Mon - Fri : 9AM - 6PM</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* MAP */}

      <section className="map-section">

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </section>

    </div>
  );
}