import React from 'react';
import '../HomePagecss/Technology.css';
import { HiOutlineCpuChip } from "react-icons/hi2";
import { FiShield, FiZap, FiBarChart2 } from "react-icons/fi";

const Technology = () => {
  const features = [
    {
      icon: <HiOutlineCpuChip />,
      title: "Artificial Intelligence Integration",
      desc: "Deep learning models and neural networks embedded into every business workflow.",
      accent: "purple"
    },
    {
      icon: <FiShield />,
      title: "Secure Financial Systems",
      desc: "Bank-grade encryption, zero-trust architecture, and real-time fraud detection.",
      accent: "cyan"
    },
    {
      icon: <FiZap />,
      title: "Enterprise Automation",
      desc: "End-to-end process automation that eliminates manual work and drives efficiency.",
      accent: "orange"
    },
    {
      icon: <FiBarChart2 />,
      title: "Smart Data Intelligence",
      desc: "Predictive analytics and real-time business intelligence at enterprise scale.",
      accent: "teal"
    }
  ];

  return (
    <section className="tech-section">
      <div className="tech-container">

        <div className="tech-header">
          <div className="tech-advantage-badge">Technology Advantage</div>

          <h2 className="tech-main-title">
            Why Enterprises Choose <span className="brand-cyan">VIGASI</span>
          </h2>
        </div>

        <div className="tech-grid">
          {features.map((item, index) => (
            <div key={index} className={`tech-card border-${item.accent}`}>
              <div className={`tech-icon-wrapper icon-${item.accent}`}>
                {item.icon}
              </div>

              <div className="tech-text-box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technology;