// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import './Home.css'; // We'll create a separate CSS file for styling

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const texts = ["Full Stack Developer", "DevOps Enthusiast", "Bloger"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = typingRef.current;

    const type = () => {
      if (typingElement) {
        const currentText = texts[index];
        let displayText = isDeleting 
          ? currentText.substring(0, charIndex - 1) 
          : currentText.substring(0, charIndex + 1);

        typingElement.textContent = displayText;

        if (!isDeleting && displayText === currentText) {
          isDeleting = true;
          setTimeout(type, 2000);
        } else if (isDeleting && displayText === '') {
          isDeleting = false;
          index = (index + 1) % texts.length;
          setTimeout(type, 500);
        } else {
          charIndex += isDeleting ? -1 : 1;
          setTimeout(type, 100);
        }
      }
    };

    type();

    // Parallax effect
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home-section" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-intro">
                <span className="hero-hello">Hello!</span>
                <h1 className="hero-name">
                  I'm <span className="highlight">Ramesh Peshala</span>
                </h1>
                
                <div className="typing-container">
                  <span 
                    ref={typingRef} 
                    id="typing-animation" 
                    className="typing-text"
                  ></span>
                  <span className="typing-cursor">|</span>
                </div>

                <div className="hero-details">
                  <h2>Undergraduate at UCSC</h2>
                  <h5>Full Stack Developer | DevOps Enthusiast</h5>
                </div>

                <div className="hero-cta">
                  <a 
                    href="https://www.linkedin.com/in/ramesh-peshala-b84a632aa" 
                    className="h_btn h_btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Peshala84" 
                    className="h_btn h_btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Works
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <div 
                className="hero-bg-image"
              >
                 <img 
                  src="/image/main.png" 
                  alt="Ramesh Peshala" 
                  className="img-fluid"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;