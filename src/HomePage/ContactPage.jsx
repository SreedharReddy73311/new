import { useNavigate } from 'react-router-dom';
import '../HomePagecss/ContactPage.css';

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-banner">
      <div className="cta-container">
        <div className="cta-text">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-subtitle">Join hundreds of enterprises powered by VIGASI intelligence.</p>
        </div>
        
        <div className="cta-buttons">
         <button className="btn-primary" onClick={() => navigate('/contact')}>
            Contact Us <span className="arrow">→</span>
          </button>
          <button className="btn-secondary" onClick={() => navigate('/products')}>
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;