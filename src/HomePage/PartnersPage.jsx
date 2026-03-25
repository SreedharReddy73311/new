import React from 'react';
import '../HomePagecss/PartnersPage.css';

const Partner = () => {
  const stats = [
    { number: "40+", label: "Countries" },
    { number: "200+", label: "Corporate Partners" },
    { number: "50+", label: "Academic Institutions" },
    { number: "$10B+", label: "Combined Revenue" },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <span className="badge">Partnership Ecosystem</span>
        
        <h2 className="partners-title">
          Our Global <span className="gradient-text">Partner Network</span>
        </h2>
        
        <p className="partners-subtitle">
          VIGASI's ecosystem spans Fortune 500 corporations, global banks, and 
          the world's most prestigious academic research institutions.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;