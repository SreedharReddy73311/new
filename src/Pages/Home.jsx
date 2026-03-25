import React from 'react';
import { Helmet } from 'react-helmet-async';

// Component Imports (Retained from your original structure)
import Title from '../HomePage/Title.jsx';
import Industries from '../HomePage/Industries.jsx';
import Product from '../HomePage/Product.jsx';
import Technology from '../HomePage/Technology.jsx';
import Partner from '../HomePage/PartnersPage.jsx';
import PartnerShip from '../HomePage/PartnerShip.jsx';
import Testimonials from '../HomePage/Feedback.jsx';
import HeroSection from '../HomePage/Banner.jsx';
import CTASection from '../HomePage/ContactPage.jsx';

const Home = () => {
  // SEO Meta Data
  const title = "ViGASI | AI Platform for Intelligent Finance & Enterprise Technology";
  const description = "ViGASI is a global AI-powered enterprise platform delivering intelligent finance solutions, AI chatbot, AI assistant, and advanced enterprise technology.";
  const url = "https://yourwebsite.com/";
  const image = "https://yourwebsite.com/preview.jpg";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta
          name="keywords"
          content="AI platform, intelligent finance, enterprise technology, AI solutions, AI chatbot, AI assistant, fintech AI solutions, enterprise AI platform, AI for business, AI platform for enterprise solutions, intelligent finance solutions using AI, AI chatbot for business automation, enterprise AI technology company"
        />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ViGASI",
            "url": "${url}",
            "description": "${description}",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 17.3850,
              "longitude": 78.4867
            }
          }
          `}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is ViGASI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ViGASI is an AI-powered enterprise platform offering intelligent finance and advanced technology solutions."
                }
              },
              {
                "@type": "Question",
                "name": "What services does ViGASI provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ViGASI provides AI chatbot, AI assistant, enterprise AI solutions, fintech systems, and automation tools."
                }
              },
              {
                "@type": "Question",
                "name": "Where is ViGASI located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ViGASI operates globally with presence in Hyderabad, India."
                }
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <div>
        <Title />
        <Industries />
        <Product />
        <Technology />
        <Partner />
        <PartnerShip />
        <Testimonials />
        <HeroSection />


        <CTASection />
      </div>
    </>
  );
};

// CRITICAL: This line must exist at the bottom
export default Home;