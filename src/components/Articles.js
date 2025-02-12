// src/components/Articles.js
import React, { useState } from 'react';
import './Articles.css';

function Articles() {
  const [activeFilter, setActiveFilter] = useState('All');

  const articles = [
    {
      title: "Why use functional programming with object oriented programming Languages? 🚀",
      description: "Functional programming and object-oriented programming are two paradigms that can be combined to create robust , maintainable and scalable code bases.💪👨‍💻",
      link: "https://medium.com/@peshala84/why-use-functional-programming-with-object-oriented-programming-languages-739750dd9105",
      image: "/image/blog_1.png",
      category: ["OOP", "Scala"]
    },
    {
      title: "SQL Vs NoSQL: Choose The Most Convenient Technology 🛠️",
      description: "Data lies at the heart of every application, and how it is managed directly affects performance and scalability. SQL (Relational) databases offer structure and reliability, while NoSQL (Non-Relational) databases provide flexibility and scalability. 🚀✨",
      link: "https://medium.com/@peshala84/sql-vs-nosql-choose-the-most-convenient-technology-0c5aaf21aa75",
      image: "/image/blog_2.png",
      category: ["SQL", "NoSQL"]
    },
    {
      title: "How to apply the OOP Principles in the real world scenario 🤖📉",
      description: "Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around objects. These objects represent real-world entities and have both attributes (data) and methods (functions or behaviors). 🧠📊",
      link: "https://medium.com/@peshala84/how-to-apply-the-oop-principles-in-the-real-world-scenario-a8a335249f3c",
      image: "/image/blog_3.png",
      category: ["OOP", "C++"]
    },
    {
      title: "Everything an Analyst Needs to Know to Use Git for Version Control 🔐",
      description: "Version control is an essential skill for analysts, especially when collaborating on projects involving code, data, or documentation. Git, the most widely used version control system, offers a structured way to track changes, collaborate effectively, and maintain a history of your work🚀✨.",
      link: "https://medium.com/@peshala84/everything-an-analyst-needs-to-know-to-use-git-for-version-control-d1e8f78659c0",
      image: "/image/blog_4.png",
      category: ["Git", "Version Control"]
    },
    {
      title: "The Role of Hooks in Modern React Development 🤖",
      description: "React.js, one of the most popular JavaScript libraries for building user interfaces, introduced Hooks in version 16.8. Before Hooks, functional components were limited to rendering UI, while class components handled state and lifecycle methods🚀✨",
      link: "https://medium.com/@peshala84/the-role-of-hooks-in-modern-react-development-a9b27ee0ac8a",
      image: "/image/blog_5.jpg",
      category: ["React", "JavaScript"]
    }
  ];

  const categories = [
    'All', 
    ...new Set(articles.flatMap(article => article.category))
  ];

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(article => article.category.includes(activeFilter));

  return (
    <section id="articles-section" className="articles-section">
      <div className="articles-container">
        <div className="section-header">
          <h1 className="section-title">My Articles</h1>
          <span className="section-subtitle">Technical Insights and Tutorials</span>
        </div>

        <div className="articles-filter">
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

        <div className="articles-grid">
          {filteredArticles.map((article, index) => (
            <div key={index} className="article-card">
              <div 
                className="article-image"
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div className="image-overlay"></div>
              </div>
              <div className="article-content">
                <div className="article-categories">
                  {article.category.map((cat, catIndex) => (
                    <span key={catIndex} className="category-tag">{cat}</span>
                  ))}
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <div className="article-actions">
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="read-more-btn"
                  >
                    Read More
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="articles-cta">
          <a 
            href="https://medium.com/@peshala84" 
            target="_blank" 
            rel="noopener noreferrer"
            className="a_btn a_btn-primary"
          >
            View All Articles on Medium
          </a>
        </div>
      </div>
    </section>
  );
}

export default Articles;