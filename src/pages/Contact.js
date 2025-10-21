import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Enter a valid email.');
      return;
    }

    if (formData.message.length < 10) {
      alert('Message must be at least 10 characters.');
      return;
    }

    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact">
      <div className="contact-image">
        <img 
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348" 
          alt="Coffee shop" 
        />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

