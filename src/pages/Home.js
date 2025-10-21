import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    time: '',
    attendees: '',
    specialRequests: ''
  });

  // Scroll reveal effect
  useEffect(() => {
    const elements = document.querySelectorAll('.menu-card, .about-text, .about-image');
    const revealOnScroll = () => {
      elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    const requiredFields = ['name', 'email', 'phone', 'eventType', 'date', 'time', 'attendees'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
        return;
      }
    }

    alert('Booking submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      time: '',
      attendees: '',
      specialRequests: ''
    });
    setShowModal(false);
  };

  return (
    <>
      {/* Home Section */}
      <section className="home">
        <h1>Welcome to Blend & Co.</h1>
        <p>Your urban oasis for expertly crafted coffee and cozy vibes in the heart of BGC.</p>
        <button className="btn" onClick={() => setShowModal(true)}>Book Now</button>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <h2>What People Say</h2>
        <div className="reviews-container">
          <div className="reviews-grid">
            <div className="review-card">
              <p>"Best coffee in BGC! Cozy vibe and super friendly staff. The latte art is always perfect!"</p>
              <div className="stars">★★★★★</div>
              <h4>- Maria Santos</h4>
            </div>
            <div className="review-card">
              <p>"Their croissant is heavenly, and the cappuccino pairs so well with it. Highly recommended."</p>
              <div className="stars">★★★★☆</div>
              <h4>- James Lee</h4>
            </div>
            <div className="review-card">
              <p>"I love working here with my laptop. Great ambiance, stable WiFi, and amazing cold brew."</p>
              <div className="stars">★★★★★</div>
              <h4>- Angela Cruz</h4>
            </div>
            <div className="review-card">
              <p>"The staff are so welcoming, and the pastries are always fresh. This is my go-to café in BGC."</p>
              <div className="stars">★★★★☆</div>
              <h4>- Carlo Mendoza</h4>
            </div>
            <div className="review-card">
              <p>"Perfect place for meetings and catching up with friends. Coffee is always excellent!"</p>
              <div className="stars">★★★★★</div>
              <h4>- Lisa Tan</h4>
            </div>
            <div className="review-card">
              <p>"The ambiance is amazing, and I always feel relaxed. Their pastries are a must-try!"</p>
              <div className="stars">★★★★☆</div>
              <h4>- Mark Rivera</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`} id="reservationModal">
        <div className="modal-content">
          <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
          <h2>Book an event</h2>
          <form onSubmit={handleBookingSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
            <select
              value={formData.eventType}
              onChange={(e) => setFormData({...formData, eventType: e.target.value})}
              required
            >
              <option value="" disabled>Select Event Type</option>
              <option value="birthday">Birthday Party</option>
              <option value="corporate">Corporate Event</option>
              <option value="private">Private Gathering</option>
              <option value="other">Other</option>
            </select>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
            />
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              required
            />
            <input
              type="number"
              placeholder="Number of Attendees"
              min="1"
              value={formData.attendees}
              onChange={(e) => setFormData({...formData, attendees: e.target.value})}
              required
            />
            <textarea
              placeholder="Special Requests (e.g., food preferences, setup, AV needs)"
              value={formData.specialRequests}
              onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
            />
            <button type="submit">Submit Booking</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;

