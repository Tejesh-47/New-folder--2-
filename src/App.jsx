import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Interests />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
