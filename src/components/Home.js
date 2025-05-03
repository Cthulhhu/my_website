// src/components/Home.js
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add(styles.visible);
    }
  }, []);

  return (
    <section id="home" className={styles.homeSection} ref={sectionRef}>
      <div className={styles.homeContainer}>
        <div className={styles.nameHeading}>
          AMIN NASSRAOUI
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.portraitContainer}>
            <Image
              src="/images/Eye-looking.png" 
              alt="Portrait"
              width={400}
              height={500}
              priority
              className={styles.portrait}
            />
          </div>
          
          <div className={styles.greetingContainer}>
            <h1 className={styles.greeting}>
              HELLO<br />
              THERE
            </h1>
            
            <div className={styles.welcomeText}>
              WELCOME<br />
              TO<br />
              MY<br />
              PORTFOLIO
            </div>
          </div>
        </div>
        
        <div className={styles.arrowsContainer}>
          <div className={styles.arrow}>→</div>
          <div className={styles.arrow}>→</div>
        </div>
      </div>
      
      <div className={styles.navigationLinks}>
        <a href="#about" className={styles.navLink}>ABOUT</a>
        <a href="#contact" className={styles.navLink}>CONTACT</a>
        <a href="#projects" className={styles.navLink}>MY PROJECTS</a>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>SCROLL DOWN</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  );
}