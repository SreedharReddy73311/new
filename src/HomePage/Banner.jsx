import {useNavigate} from 'react-router-dom';
import '../HomePagecss/Banner.css';

const HeroSection = () => {
  const navigate =useNavigate();
  return (
    <div className="main-site-wrapper">
      <section className="hero-card-container">
        {/* Replace the URL with your uploaded image path */}
        <div className="hero-background" style={{ backgroundImage: `url('https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg')` }}>
          <div className="hero-overlay">
            <div className="hero-text-content">
              <h1 className="hero-heading">
                A Team Driven by <span className="gradient-highlight">Super Intelligence</span>
              </h1>
              <p className="hero-subtext">
                World-class engineers, financial experts, and medical <br className="desktop-line-break" />
                professionals united under one vision.
              </p>
              <button className="cta-button" onClick={() =>navigate('/about')} >
                About VIGASI
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;