import '../HomePagecss/feedback.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.webp';

const testimonialsData = [
  {
    name: "Sarah Chen",
    role: "CFO, NexaCapital",
    text: "VIGASI's financial platform transformed our accounting operations...",
    image: image1 
  },
  {
    name: "Marcus Williams",
    role: "CTO, TechVenture Inc.",
    text: "The AI integration from VIGASI is unlike anything on the market...",
    image: image2 
  },
  {
    name: "Priya Sharma",
    role: "Director, HealthFirst Group",
    text: "The medical consultation platform has given our employees...",
    image: image3
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="section-header">
        <span className="badge">Client Testimonials</span>
        <h2 className="section-title">
          Trusted by Global <span className="gradient-text">Enterprises</span>
        </h2>
      </div>
     
      <div className="testimonials-carousel">
        
        <div className="testimonials-group">
          {testimonialsData.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="user-info">
                <img src={item.image}
                 alt={`Portrait of ${item.name}`}
                 className="user-avatar" />
                <div className="user-details">
                  <h4 className="user-name">{item.name}</h4>
                  <p className="user-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-group" aria-hidden="true">
          {testimonialsData.map((item, index) => (
            <div key={`dup-${index}`} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="user-info">
                <img src={item.image}
                 alt={`Portrait of ${item.name}`}
                 className="user-avatar" />
                <div className="user-details">
                  <h4 className="user-name">{item.name}</h4>
                  <p className="user-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;