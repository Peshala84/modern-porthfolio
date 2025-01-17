// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', url: '#home-section' },
        { name: 'About', url: '#about-section' },
        { name: 'Resume', url: '#resume-section' },
        { name: 'Projects', url: '#project-section' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ramesh-peshala-b84a632aa' },
        { name: 'GitHub', url: 'https://github.com/Peshala84' },
        { name: 'Medium', url: 'https://medium.com/@peshala84' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/25468352/ramesh-peshala' }
      ]
    }
  ];

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
      name: 'Stack Overflow',
      icon: 'fab fa-stack-overflow',
      url: 'https://stackoverflow.com/users/25468352/ramesh-peshala'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/rameshpeshala000?igsh=ejVtY2F1ZmRhcDU0'
    },
    {
      name: 'Medium',
      icon: 'fab fa-medium',
      url: 'https://medium.com/@peshala84'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      url: 'https://www.facebook.com/profile.php?id=100046880754370&mibextid=ZbWKwL'
    }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>Ramesh Peshala</h3>
            <p>
              Passionate Full Stack Developer and Devops enthusiast, 
              dedicated to creating innovative solutions and continuous learning.
            </p>
          </div>

          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="footer-link-section">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-contact">
            <h4>Contact Me</h4>
            <p>Email: rameshpeshala84@gmail.com</p>
            <p>Phone: +94 762163506</p>
          </div>
        </div>

        <div className="footer-social">
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

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Ramesh Peshala. All Rights Reserved.
          </p>
          <div className="footer-policies">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;