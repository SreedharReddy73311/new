import React, { useState } from 'react';
import '../HomePagecss/PartnerShip.css';

const Partnerships = () => {
  const [activeTab, setActiveTab] = useState('corporate');

  const corporateData = [
  { name: "NexaCapital", industry: "Finance", region: "North America", initial: "N" },
  { name: "TechVenture Inc.", industry: "Technology", region: "Global", initial: "T" },
  { name: "DataCore Systems", industry: "Data & AI", region: "Europe", initial: "D" },
  { name: "GlobalFinance Group", industry: "Banking", region: "Asia Pacific", initial: "G" },
  { name: "InnovateTech", industry: "Software", region: "Middle East", initial: "I" },
  { name: "SilicaGroup", industry: "Semiconductor", region: "East Asia", initial: "S" },
  { name: "QuantumEdge", industry: "Fintech", region: "North America", initial: "Q" },
  { name: "MedPlus Corp", industry: "Healthcare", region: "South Asia", initial: "M" },
  { name: "Apex Financial", industry: "Investment", region: "Europe", initial: "A" },
  { name: "NeuralSoft", industry: "AI & ML", region: "Global", initial: "N" },
  { name: "PrismData", industry: "Analytics", region: "Oceania", initial: "P" },
  { name: "FusionTech", industry: "Cloud", region: "Southeast Asia", initial: "F" },
];

  const academicData = [
  { name: "MIT Technology Institute", industry: "AI Research", region: "USA" },
  { name: "Stanford University", industry: "Finance & Tech", region: "USA" },
  { name: "Imperial College London", industry: "Engineering", region: "UK" },
  { name: "National University of Singapore", industry: "Semiconductor", region: "Singapore" },
  { name: "IIT Bombay", industry: "Computer Science", region: "India" },
  { name: "ETH Zurich", industry: "Innovation", region: "Switzerland" },
  { name: "Tsinghua University", industry: "AI & Data", region: "China" },
  { name: "Tokyo Institute of Technology", industry: "Hardware", region: "Japan" },
];

  return (
    <div className="p-section">
      <div className="p-container">
        {/* Toggle Buttons */}
        <div className="tab-buttons">
          <button 
            className={activeTab === 'corporate' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveTab('corporate')}
          >
            Corporate Partners
          </button>
          <button 
            className={activeTab === 'academic' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveTab('academic')}
          >
            Academic Partners
          </button>
        </div>

        {/* Content Header */}
        <div className="content-header">
           <h2 className="title">
            {activeTab === 'corporate' ? 'Corporate' : 'Academic'} <span className="blue-text">Partners</span>
           </h2>
           <p className="subtitle">
             {activeTab === 'corporate' 
               ? 'Global enterprise organizations powered by VIGASI' 
               : 'World-leading research institutions advancing our technology'}
           </p>
        </div>

        {/* Dynamic Grid */}
        <div className="p-grid">
          {activeTab === 'corporate' ? (
            corporateData.map((item, i) => (
              <div key={i} className="p-card">
                <div className="p-icon">{item.initial}</div>
                <h3>{item.name}</h3>
                <p className="p-industry">{item.industry}</p>
                <p className="p-region">{item.region}</p>
              </div>
            ))
          ) : (
            academicData.map((item, i) => (
              <div key={i} className="p-card academic-style">
                <h3>{item.name}</h3>
                <p className="p-industry">{item.industry}</p>
                <p className="p-region">{item.region}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Partnerships;