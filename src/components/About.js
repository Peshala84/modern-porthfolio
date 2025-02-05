// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  const skills = [
    { name: 'Javascript', percentage: 95, color: '#F0DB4F' },
    { name: 'CSS', percentage: 95, color: '#F0DB4F' },
    { name: 'C', percentage: 90, color: '#F0DB4F' },
    { name: 'JAVA', percentage: 90, color: '#F0DB4F' },
    { name: 'C++', percentage: 85, color: '#F0DB4F' },
    { name: 'SQL', percentage: 70, color: '#F0DB4F' },
    { name: 'HTML', percentage: 70, color: '#F0DB4F' },
    { name: 'Figma', percentage: 70, color: '#F0DB4F' },
    { name: 'PHP', percentage: 70, color: '#F0DB4F' },
    { name: 'Jenkins', percentage: 70, color: '#F0DB4F' },
  ];

  const personalInfo = [
    { label: 'Profile', value: 'Full Stack Web Developer' },
    { label: 'Domain', value: ' Programming & Digital Marketing' },
    { label: 'Education', value: ' CS Undergraduate at UCSC' },
    { label: 'Language', value: 'English, Sinhala' },
    { label: 'Other Skills', value: 'Cloud, Excel, Git, Docker , Jenkins & SEO' },
    { label: 'Interest', value: 'Traveling, Cricket' }
  ];

  return (
    <section id="about-section" className="about-section">
      <div className="about-container">
        <div className="section-title">
          <h1>About Me</h1>
          <span>Who I Am</span>
        </div>

        <div className="about-content">
          <div className="about-profile">
            <div className="profile-image-wrapper">
              <div className="profile-image">
                <img
                  src="/image/main.png"
                  alt="Ramesh Peshala"
                  className="img-fluid"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            <div className="profile-details">
              <h2>Ramesh Peshala</h2>
              <p className="profile-title">Full Stack Developer</p>
              <div className="contact-info">
                <p><i className="icon-map-marker"></i> Thissamaharama, Sri Lanka</p>
                <p><i className="icon-briefcase"></i> 1+ Years Experience</p>
              </div>
            </div>
          </div>

          <div className="about-description">
            <div className="description-text">
              <h3>Professional Summary</h3>
              <p>
                I'm a second-year Computer Science undergraduate at the University of Colombo School of Computing
                (UCSC) with a passion for Software Engineering. My expertise spans Front-end development with React (NextJS),
                and Back-end development using NodeJS, PHP, and java. Also, I have good knowledge about Devops.
                I have learned about Jenkins , Docker , GitHub Action , Ansible among the tools used there.
              </p>
              <p>
                I am currently a member of the UCSC ACM Student Chapter's Web Team. Through that,
                I have worked as a Web Team Member in the Hackathon Competitions.
                Also has worked as a Club Service Member of Rotaract Club Of UCSC.
              </p>
              <p>
                In addition to my academic pursuits, I always try to learn about new technology and I am very interested in writing articles
              </p>
            </div>

            <div className="personal-info">
              <h2>Personal Information</h2>
              <div className="info-grid">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <span className="info-label">{info.label}:</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Professional Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-counter">
          <div className="counter-item">
            <h3>9+</h3>
            <h1>Projects</h1>
             <a href='https://github.com/Peshala84'>See All</a>
          </div>
          <div className="counter-item">
            <h3>20+</h3>
            <h1>Certifications</h1>
            <a href='https://www.linkedin.com/in/ramesh-peshala-b84a632aa'>See All</a>
          </div>
          <div className="counter-item">
            <h3>500+</h3>
            <h1>Connections</h1>
            <a href='https://www.linkedin.com/in/ramesh-peshala-b84a632aa'>See All</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;