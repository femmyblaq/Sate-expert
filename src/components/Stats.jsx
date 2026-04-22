import React, { useEffect, useState } from "react";
import "../components/Stats.css";

function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <h2 className="stat-number">
      {count}{suffix}
    </h2>
  );
}

export default function Stats() {
  return (
    <section className="stats-section py-5 text-center">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-3">
            <div className="stat-card">
              <CountUp end={500} suffix="+" />
              <p className="stat-text">Students Trained</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card">
              <CountUp end={4} />
              <p className="stat-text">Core Programs</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card">
              <CountUp end={90} suffix="%" />
              <p className="stat-text">Job Readiness</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card">
              <h2 className="stat-number">24/7</h2>
              <p className="stat-text">Mentor Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}