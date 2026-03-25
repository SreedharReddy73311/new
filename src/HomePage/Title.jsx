import { useNavigate } from 'react-router-dom';
import "../HomePagecss/Title.css";

const stats = [
  { value: "4+", label: "Industry Sectors" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "$2B+", label: "Assets Managed" },
];

function Title() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="hero-badge__dot"></span>
          <span className="hero-badge__text">Super Intelligence · Visionary Growth</span>
        </div>

        <h1 className="hero-title">
          Building the Future of <br />
          <span className="hero-title--gradient">Intelligent Finance</span> and Technology
        </h1>

        <p className="hero-description">
          VIGASI is a global enterprise technology company operating at the
          intersection of Finance, IT, Medical Intelligence, and Semiconductor
          Innovation — powered by cutting-edge AI.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Contact Us <span className="arrow">→</span></button>
          <button className="btn-secondary" onClick={() => navigate('/products')}>
             <span className="play-icon">▷</span> Explore Products
          </button>
        </div>

        <div className="hero-stats">
          {stats.map((item, i) => (
            <div key={i} className="stat-item">
              <h3 className="stat-value">{item.value}</h3>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Title;