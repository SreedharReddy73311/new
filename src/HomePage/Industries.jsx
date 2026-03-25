import React from "react";
import "../HomePagecss/Industries.css";

/* Icons */
import { FaChartLine, FaMicrochip, FaHeartbeat, FaLayerGroup } from "react-icons/fa";

const data = [
  {
    title: "Finance",
    desc: "AI-powered financial intelligence, automated accounting, and enterprise-grade analytics.",
    icon: <FaChartLine />,
    color: "purple",
  },
  {
    title: "Information Technology",
    desc: "Cutting-edge software engineering, cloud infrastructure, and digital transformation.",
    icon: <FaMicrochip />,
    color: "blue",
  },
  {
    title: "Medical Consultation",
    desc: "Online doctor consultations and AI-assisted healthcare guidance.",
    icon: <FaHeartbeat />,
    color: "green",
  },
  {
    title: "Semiconductor Technology",
    desc: "Advanced semiconductor design and next-generation chip architecture.",
    icon: <FaLayerGroup />,
    color: "orange",
  },
];

function Industries() {
  return (
    <section className="industries">

      <div className="tag">Our Industries</div>

      <h2 className="industries-title">
        Four Pillars of{" "}
        <span className="gradient-text">Innovation</span>
      </h2>

      <p className="industries-subtitle">
        VIGASI operates across high-growth industries, delivering intelligent solutions at scale.
      </p>

      <div className="cards">
        {data.map((item, i) => (
          <div key={i} className={`card ${item.color}`}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <span className="learn">Learn more →</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Industries;