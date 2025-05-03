'use client';
// src/app/page.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollHandler from '../components/ScrollHandler';
import SectionObserver from '../components/SectionObserver';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import ProjectDetails from '../components/ProjectDetails';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
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
      
      {/* Fixed Header/Navigation */}
      <header className={styles.header}>
        <h1 className={styles.logo}>AMIN NASSRAOUI</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#portfolio">MY WORK</a></li>
            <li><a href="#projects">MY PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className={styles.homeSection}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <div className={styles.imageContainer}>
              <div className={styles.portraitWrapper}>
                <Image
                  src="/images/Eye-looking.png"
                  alt="Portrait"
                  width={300}
                  height={400}
                  priority
                  className={styles.portrait}
                />
              </div>
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>
                HELLO<br />
                THERE
              </h1>
              <div className={styles.flippedTextContainer}>
                <h1 className={styles.flippedText}>
                  HELLO<br />
                  THERE
                </h1>
              </div>
            </div>
          </div>
          
          <div className={styles.welcomeContainer}>
            <h2 className={styles.welcomeText}>
              WELCOME<br />
              TO<br />
              MY<br />
              PORTFOLIO
            </h2>
          </div>
        </div>
        
        <div className={styles.arrows}>
          <div className={styles.arrow}>→</div>
          <div className={styles.arrow}>→</div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollText}>SCROLL DOWN</div>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </section>

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