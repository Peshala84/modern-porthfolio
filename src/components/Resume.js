// src/components/Resume.js
import React from 'react';
import './Resume.css';

function Resume() {
  const experiences = [
    {
      title: "Computer Science Undergraduate",
      company: "University of Colombo School of Computing",
      period: "2023 - Present",
      description: [
        "Pursuing Bachelor of Science in Computer Science",
        "Actively participating in academic and extracurricular programs",
        "Developing foundational skills in software development and computer science"
      ]
    },
    {
      title: "Web Team Member",
      company: "UCSC ACM Student Chapter",
      period: "2024 - Present",
      description: [
        "Leading the development of a comprehensive learn-based full-stack website",
        "Collaborative group project focusing on innovative educational technology",
        "Implementing modern web development practices and technologies"
      ]
    },
    {
      title: "Intern",
      company: "Peoples Bank Thissamaharama",
      period: "2022 - 2023",
      description: [
        "Front Office Management - Customer service, Account opening, Money deposit and withdrawal",
        "Back Office Management - Mail management",
        "Credit Department - Loan recovery"
      ]
    },
  ];

  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "University of Colombo School of Computing",
      period: "2023 - Present",
      details: "Undergraduate program focusing on advanced computer science concepts"
    },
    {
      degree: "Advanced Level (A/L)",
      institution: "Debarawewa National College , Hambantota",
      period: "2018 - 2021",
      details: "Mathematics Stream - Physics (B), Chemistry (B), Combined Maths (A)"
    }
  ];

  const skills = [
    { name: "Full Stack Development", level: "Advanced" },
    { name: "DevOps", level: "Intermediate" },
    { name: "Cloud Computing", level: "Beginner" },
    { name: "Agile Methodologies", level: "Intermediate" },
    { name: "Project Management", level: "Intermediate" }

  ];

  return (
    <section id="resume-section" className="resume-section">
      <div className="resume-container">
        <div className="section-header">
          <h1 className="section-title">My Resume</h1>
          <span className="section-subtitle">Professional Journey</span>
        </div>

        <div className="resume-content">
          <div className="resume-column">
            <div className="resume-section-title">
              <i className="icon-briefcase"></i>
              <h2>Professional Experience</h2>
            </div>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-period">{exp.period}</span>
                    <ul className="timeline-description">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-column">
            <div className="resume-section-title">
              <i className="icon-graduation-cap"></i>
              <h2>Educational Background</h2>
            </div>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <span className="timeline-company">{edu.institution}</span>
                    <span className="timeline-period">{edu.period}</span>
                    <p className="timeline-description">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="professional-skills">
          <div className="section-header">
            <h2>Professional Skills</h2>
            <span>Technical Expertise</span>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="t_skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: skill.level === "Advanced" ? "90%"
                        : skill.level === "Intermediate" ? "70%"
                          : "30%"
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-actions">
          <a
            href="/path/to/your/resume.pdf"
            className="r_btn r_btn-primary"
            download
          >
            Download CV
          </a>
          <a
            href="#contact-section"
            className="r_btn r_btn-primary"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;