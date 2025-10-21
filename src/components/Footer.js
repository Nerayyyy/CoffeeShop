import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: '',
    suggestions: '',
    rating: ''
  });

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    
    if (!feedbackForm.name || !feedbackForm.email || !feedbackForm.message) {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(feedbackForm.email)) {
      alert('Please enter a valid email.');
      return;
    }

    alert(`Thank you for your feedback, ${feedbackForm.name}!`);
    setFeedbackForm({
      name: '',
      email: '',
      message: '',
      suggestions: '',
      rating: ''
    });
    setShowFeedbackModal(false);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      e.target.reset();
    }
  };

  return (
    <>
      <footer>
        <div className="footer-container">
          {/* Left: Company info */}
          <div className="footer-left">
            <p>© 2025 Blend & Co.</p>
          </div>

          {/* Center: Navigation links */}
          <div className="footer-center">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/apply">Apply</Link>
            <Link to="/contact">Contact</Link>
            <a onClick={() => setShowFeedbackModal(true)}>Feedback</a>
          </div>

          {/* Right: Newsletter */}
          <div className="footer-right">
            <p>Subscribe to our newsletter</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" name="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>

      {/* Feedback Modal */}
      <div className={`modal ${showFeedbackModal ? 'show' : ''}`}>
        <div className="modal-content">
          <span 
            className="close-btn" 
            onClick={() => setShowFeedbackModal(false)}
          >
            &times;
          </span>
          <form onSubmit={handleFeedbackSubmit}>
            <h3>Send Us Your Feedback</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={feedbackForm.name}
              onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={feedbackForm.email}
              onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
              required
            />
            <textarea
              placeholder="Your Feedback"
              rows="4"
              value={feedbackForm.message}
              onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
              required
            />
            <textarea
              placeholder="Any suggestions or ideas?"
              rows="3"
              value={feedbackForm.suggestions}
              onChange={(e) => setFeedbackForm({...feedbackForm, suggestions: e.target.value})}
            />
            <label htmlFor="rating">Rate Your Experience:</label>
            <select
              id="rating"
              value={feedbackForm.rating}
              onChange={(e) => setFeedbackForm({...feedbackForm, rating: e.target.value})}
            >
              <option value="">Select rating</option>
              <option value="5">★★★★★ Excellent</option>
              <option value="4">★★★★☆ Very Good</option>
              <option value="3">★★★☆☆ Good</option>
              <option value="2">★★☆☆☆ Fair</option>
              <option value="1">★☆☆☆☆ Poor</option>
            </select>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;

