import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Articles from './components/Articles';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Resume />
      <Articles />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;