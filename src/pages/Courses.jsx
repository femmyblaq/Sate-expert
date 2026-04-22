import React from "react";
import "../pages/Courses.css";

export default function Courses() {

  const courses = [
  {
    name: "Ethical Hacking",
    level: "Advanced",
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    description: "Learn how to identify, exploit, and secure system vulnerabilities. You’ll need basic networking knowledge and a strong interest in cybersecurity practices."
  },
  {
    name: "Cybersecurity",
    level: "Intermediate",
    duration: "10 Weeks",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    description: "Understand how to protect systems, networks, and data from attacks. Familiarity with operating systems and basic IT concepts is recommended."
  },
  {
    name: "AI & Automation",
    level: "Advanced",
    duration: "14 Weeks",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description: "Dive into machine learning and automation tools to build intelligent systems. Requires Python knowledge and basic math/statistics understanding."
  },
  {
    name: "Full Stack Development",
    level: "Beginner",
    duration: "16 Weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Learn to build complete web applications from frontend to backend. No prior experience required, but basic computer literacy is helpful."
  },
  {
    name: "Cloud Computing",
    level: "Intermediate",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    description: "Master cloud platforms, deployment, and scaling applications. Basic knowledge of networking and servers will be beneficial."
  },
  {
    name: "DevOps Engineering",
    level: "Advanced",
    duration: "10 Weeks",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
    description: "Learn CI/CD pipelines, automation, and infrastructure management. Requires understanding of development workflows and Linux basics."
  },
  {
    name: "Data Science",
    level: "Intermediate",
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Analyze and visualize data to extract insights. Knowledge of Python and basic statistics is recommended."
  },
  {
    name: "Python Programming",
    level: "Beginner",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    description: "Start coding with Python, one of the most versatile programming languages. No prior coding experience required."
  }
];

  return (
    <section className="courses-section py-5">
      <div className="container">

        <h2 className="courses-title text-center mb-5">
          Explore Our Courses
        </h2>

        <div className="row g-4">

          {courses.map((course, index) => (

            <div key={index} className="col-lg-3 col-md-6">

              <div className="course-card h-100">

                {/* IMAGE */}
                <div className="course-image">
                  <img src={course.image} alt={course.name} />
                </div>

                {/* CONTENT */}
                <div className="course-body">

                  <h5 className="course-name">
                    {course.name}
                  </h5>

                  <p className="course-meta">
                    {course.level} • {course.duration}
                  </p>

                  <p className="course-desc">
                    {course.description}
                  </p>

                  <button className="btn btn-primary w-100">
                    Enroll Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
