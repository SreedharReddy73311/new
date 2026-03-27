import React from "react";
import "../HomePagecss/Title.css";

const stats = [
  { value: "4+", label: "Industry Sectors" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "$2B+", label: "Assets Managed" },
];

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">

        <div className="hero-badge">
          <span className="hero-dot"></span>
          <span>Super Intelligence · Visionary Growth</span>
        </div>

        <h1 className="hero-heading">
          Building the Future of <br className="hide-mobile" />
          <span className="hero-gradient">Intelligent Finance</span> and <br className="hide-mobile" />
          Technology
        </h1>

        <p className="hero-text">
          ViGASI is a global enterprise technology company operating at the
          intersection of Finance, IT, Medical Intelligence, and Semiconductor
          Innovation — powered by cutting-edge AI.
        </p>

        <div className="hero-actions">
          <button className="hero-btn-primary">Contact Us →</button>
          <button className="hero-btn-secondary">▶ Explore Products</button>
        </div>

        {/* ✅ Updated Stats Layout */}
        <div className="hero-stats">
          {stats.map((item, i) => (
            <div key={i} className="hero-stat">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;