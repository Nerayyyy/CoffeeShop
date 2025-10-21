import React, { useState } from 'react';

const About = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image visible">
          <img 
            src="https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107" 
            alt="About us" 
          />
        </div>
        <div className="about-text visible">
          <h2>About Us</h2>
          <p>
            We are passionate about serving freshly brewed coffee and delicious 
            pastries every day. Our beans are sourced from sustainable farms and 
            roasted with love.
          </p>
          <h2>Our Location</h2>
          <p>BGC, Taguig, Manila</p>
          
          <button 
            id="toggleMap" 
            onClick={() => setShowMap(!showMap)}
          >
            {showMap ? 'Hide Map' : 'Show Map'}
          </button>
          
          {showMap && (
            <div className="map-container" style={{ marginTop: '1rem' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.698846230237!2d121.04424437510677!3d14.548016985927474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c91b1b1b1b1b%3A0x1234567890abcdef!2sBonifacio%20Global%20City!5e0!3m2!1sen!2sph!4v1691854739173!5m2!1sen!2sph" 
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '10px' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Coffee Shop Location"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;

