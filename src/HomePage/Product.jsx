import React from 'react';
import '../HomePagecss/Product.css';
import dashboardImg from '../assets/dashboard.png';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate();
  const features = [
    { 
      title: "AI Powered Accounting", 
      desc: "Automated ledgers, smart reconciliation, neural bookkeeping" 
    },
    { 
      title: "Automated Financial Insights", 
      desc: "Predictive forecasting and anomaly detection in real-time" 
    },
    { 
      title: "Business Analytics Dashboard", 
      desc: "360° enterprise visibility with live KPIs and drill-downs" 
    },
    { 
      title: "Enterprise Finance Automation", 
      desc: "Invoice processing, payroll, tax filing — all automated" 
    },
  ];

  return (
    <section className="product-section">
      <div className="product-container">
        
        <div className="product-text-content">
          <div className="innovation-tag">Product Innovation</div>

          <h2 className="product-headline">
            The Most Advanced <br className="mobile-break" />
            <span className="highlight-text">Financial Platform</span> on Earth
          </h2>

          <p className="product-subtext">
            Beyond traditional accounting tools like Tally — VIGASI's finance platform is a 
            full AI-powered intelligence layer that automates, predicts, and optimizes 
            every financial process in your enterprise.
          </p>

          <div className="feature-list">
            {features.map((item, index) => (
              <div key={index} className="feature-item-card">
                <div className="status-indicator"></div>
                <div className="feature-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="platform-btn" onClick={() => navigate('/products')}>
            Explore Platform <span className="arrow">→</span>
          </button>
        </div>

        <div className="product-visual-container">
          <div className="dashboard-frame">
            <img src={dashboardImg} alt="Vigasi Dashboard" className="ui-screenshot" />

            <div className="metric-card growth-card">
              <span className="metric-val">+247%</span>
              <span className="metric-label">Revenue Growth</span>
            </div>
            
            <div className="metric-card accuracy-card">
              <span className="metric-val">99.8%</span>
              <span className="metric-label">AI Accuracy</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;