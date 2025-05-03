'use client';
// src/components/Header.js
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class when page is scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'portfolio', 'projects', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>AMIN NASSRAOUI</h1>
        </div>
        
        <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={styles.hamburger}></span>
        </button>
        
        <nav className={`${styles.nav} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? styles.active : ''}>HOME</a></li>
            <li><a href="#about" className={activeSection === 'about' ? styles.active : ''}>ABOUT</a></li>
            <li><a href="#portfolio" className={activeSection === 'portfolio' ? styles.active : ''}>MY WORK</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>MY PROJECTS</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? styles.active : ''}>CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}