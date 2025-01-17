// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "ACM WEB TASK",
      description: "Dive into the ultimate gaming adventure! Explore thrilling games, stay updated with gaming posts, and enjoy an immersive experience with this full-stack masterpiece!",
      technologies: ["React", "Node.js"],
      githubLink: "https://github.com/Peshala84/acm-web-task.git",
      image: "/image/project_1.jpg",
      category: ["Web", "Full Stack"]
    },
    {
      title: "CALCULATOR",  
      description: "Feel the rhythm, live the beats! A dynamic Java-based music player that keeps your favorite tunes flowing smoothly. Perfect for all music lovers!",
      technologies: ["JavaScript", "HTML"],
      githubLink: "https://github.com/Peshala84/html-css-js-Calculator.git",
      image: "/image/project_2.jpg",
      category: ["Web", "APP"]
    },
    {
      title: "MADHACK 3.0 WEB TASK",
      description: "Track your fitness like a pro! Quickly calculate your Body Mass Index (BMI) to stay healthy and motivated. Fitness just got smarter!",
      technologies: ["React", "CSS"],
      githubLink: "https://github.com/Peshala84/madhack-3.0-web-task.git",
      image: "/image/project_3.png",
      category: ["IEEE", "Web"]
    },
    {
      title: "CCTV CAMERA COMPANY WEBSITE",
      description: "Revolutionize healthcare management with a robust MERN stack application. Streamline hospital operations and improve patient care.",
      technologies: ["React", "Node.js" ],
      githubLink: "https://github.com/Peshala84/SafeCam-web-app.git",
      image: "/image/project_4.png",
      category: ["Camera", "Web"]
    },
    {
      title: "TRAVEL & TOUR WEBSITE",
      description: "Break language barriers with a seamless translation experience. Supports multiple languages and provides accurate translations.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Peshala84/travel-tour-web-page.git",
      image: "/image/project_5.jpg",
      category: ["Full Stack", "Travel"]
    },
    {
      title: "MEDICARE WEB APP",
      description: "An interactive quiz application with dynamic question generation, user authentication, and real-time scoring.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      githubLink: "https://github.com/Peshala84/medicare-web-app.git",
      image: "/image/project_6.png",
      category: ["Web", "Medical"]
    }
  ];

  // Generate unique categories
  const categories = [
    'All', 
    ...new Set(projects.flatMap(project => project.category))
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="project-section" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h1 className="section-title">My Projects</h1>
          <span className="section-subtitle">Showcasing Innovation and Creativity</span>
        </div>

        {/* Project Filters */}
        <div className="projects-filter">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div 
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="image-overlay">
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-categories">
                  {project.category.map((cat, catIndex) => (
                    <span key={catIndex} className="category-tag">{cat}</span>
                  ))}
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-actions">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <i className="icon-github"></i> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects CTA */}
        <div className="projects-cta">
          <a 
            href="https://github.com/Peshala84" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p_btn p_btn-primary"
          >
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;