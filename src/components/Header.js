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

    // Only add the event listener when the component is fully mounted
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Safely close mobile menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      const nav = document.querySelector(`.${styles.nav}`);
      const button = document.querySelector(`.${styles.mobileMenuButton}`);
      
      if (nav && button && !nav.contains(event.target) && !button.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add with a small delay to prevent immediate triggering
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle link clicks - close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>AMIN NASSRAOUI</h1>
        </div>
        
        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}></span>
        </button>
        
        <nav className={`${styles.nav} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul>
            <li><a href="#home" onClick={handleLinkClick} className={activeSection === 'home' ? styles.active : ''}>HOME</a></li>
            <li><a href="#about" onClick={handleLinkClick} className={activeSection === 'about' ? styles.active : ''}>ABOUT</a></li>
            <li><a href="#portfolio" onClick={handleLinkClick} className={activeSection === 'portfolio' ? styles.active : ''}>MY WORK</a></li>
            <li><a href="#projects" onClick={handleLinkClick} className={activeSection === 'projects' ? styles.active : ''}>MY PROJECTS</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className={activeSection === 'contact' ? styles.active : ''}>CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}