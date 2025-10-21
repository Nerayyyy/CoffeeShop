import React, { useState } from 'react';

const Apply = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    position: '',
    experience: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requiredFields = ['fullname', 'email', 'phone', 'position', 'experience'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
        return;
      }
    }

    alert('Application submitted successfully!');
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      position: '',
      experience: ''
    });
    setShowModal(false);
  };

  return (
    <>
      <section className="apply">
        <h2>Join Our Team</h2>
        <p>We are always looking for passionate individuals to be part of Blend & Co.!</p>
        
        {/* Team and Workspace Images */}
        <div className="apply-gallery">
          <img 
            src="https://i.pinimg.com/originals/14/30/4c/14304cee928aa1e721a533eb71d8ec89.jpg" 
            alt="Coffee Shop Interior" 
          />
          <img 
            src="https://img.freepik.com/premium-photo/photo-coffee-shop-staff-training_933496-48880.jpg" 
            alt="Barista Team" 
          />
          <img 
            src="https://i.pinimg.com/originals/18/64/16/1864160fabc4940c9a63d9ecdacfccb5.jpg" 
            alt="Coffee Shop Workspace" 
          />
        </div>
        
        <button className="btn" onClick={() => setShowModal(true)}>
          Apply Now
        </button>
      </section>

      {/* Apply Modal */}
      <div className={`modal ${showModal ? 'show' : ''}`}>
        <div className="modal-content">
          <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
          <h2>Job Application</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={(e) => setFormData({...formData, fullname: e.target.value})}
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
              value={formData.position}
              onChange={(e) => setFormData({...formData, position: e.target.value})}
              required
            >
              <option value="" disabled>Select Position</option>
              <option value="barista">Barista</option>
              <option value="cashier">Cashier</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Briefly describe your experience"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              required
            />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Apply;

