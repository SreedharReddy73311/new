import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products.jsx';
import Medical from './Pages/Medical';
import Careers from './Pages/Careers';
import Partners from './Pages/Partners1.jsx';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import './Pages/Pages.css';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;