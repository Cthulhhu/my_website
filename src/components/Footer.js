'use client';
// src/components/Footer.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    // Get current year for copyright
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h3 className={styles.footerLogo}>AMIN NASSRAOUI</h3>
          <p className={styles.footerTagline}>
            Building clean, fast, and expressive digital experiences.
          </p>
        </div>
        
        <div className={styles.footerNav}>
          <div className={styles.navColumn}>
            <h4 className={styles.navTitle}>Navigation</h4>
            <ul className={styles.navList}>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#portfolio">My Work</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.navColumn}>
            <h4 className={styles.navTitle}>Projects</h4>
            <ul className={styles.navList}>
              <li><Link href="#zaitoun">Zaitoun</Link></li>
              <li><Link href="#minna">Minna-No-Kimochi</Link></li>
              <li><Link href="#dinner">What's For Dinner</Link></li>
            </ul>
          </div>
          
          <div className={styles.navColumn}>
            <h4 className={styles.navTitle}>Connect</h4>
            <ul className={styles.navList}>
              <li><a href="https://github.com/Cthulhhu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:nassraouiamin@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          © {currentYear} Amin Nassraoui. All rights reserved.
        </div>
        
        <div className={styles.footerLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <span className={styles.divider}>|</span>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>
      
      <div className={styles.footerArrow} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </div>
    </footer>
  );
}