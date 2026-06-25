import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import projects from '../components/projects';
import Contact from '../components/Contact';
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <skills />
      <projects/>
      <Contact/>
    </div>
  );
}

export default Home;