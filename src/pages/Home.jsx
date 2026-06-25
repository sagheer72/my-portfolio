import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Projectcard from '../components/projectcard'
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <Projectcard/>
    </div>
  );
}

export default Home;