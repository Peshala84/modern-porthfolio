// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    status: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        status: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        setFormStatus({
          status: 'success',
          message: 'Thank you for your message. I will get back to you soon!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setFormStatus({
        status: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/ramesh-peshala-b84a632aa'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/Peshala84'
    },
    {
      name: 'Medium',
      icon: 'fab fa-medium',
      url: 'https://medium.com/@peshala84'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/rameshpeshala000?igsh=ejVtY2F1ZmRhcDU0'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      url: 'https://www.facebook.com/profile.php?id=100046880754370&mibextid=ZbWKwL'
    },

    {
      name: 'Stack Overflow',
      icon: 'fab fa-stack-overflow',
      url: 'https://stackoverflow.com/users/25468352/ramesh-peshala'
    }
  ];

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      content: 'Thissamaharama, Sri Lanka'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+94 762163506'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'rameshpeshala84@gmail.com'
    }
  ];

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h1 className="section-title">Contact Me</h1>
          <span className="section-subtitle">Get in Touch</span>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-detail-item">
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-detail-text">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h3>Connect with Me</h3>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={link.name}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {formStatus.message && (
                <div className={`form-status ${formStatus.status}`}>
                  {formStatus.message}
                </div>
              )}

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;