'use client';
// src/app/page.js

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import ScrollHandler from '../components/ScrollHandler';
import SectionObserver from '../components/SectionObserver';
import Header from '../components/Header';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import ProjectDetails from '../components/ProjectDetails';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function MainPage() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by only rendering client-side content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.container}>
      {mounted && (
        <>
          <ScrollHandler />
          <SectionObserver />
        </>
      )}

      {/* Header with Navigation */}
      <Header />

      {/* Home Section */}
      <Home />

      {/* About Me Section */}
      <AboutMe />

      {/* Portfolio Work Slider Section */}
      <Portfolio />

      {/* Projects Section */}
      <Projects />

      {/* Project Detail Sections */}
      <ProjectDetails />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}