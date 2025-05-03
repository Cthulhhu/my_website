'use client';
// src/components/Home.js
import Image from 'next/image';
import styles from '../app/page.module.css';

export default function Home() {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.nameSection}>
        <h1 className={styles.nameTitle}>AMIN NASSRAOUI</h1>
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/Eye-looking.png"
            alt="Portrait"
            width={500}
            height={650}
            priority
            className={styles.portrait}
          />
        </div>
        
        <div className={styles.textGrid}>
          <div className={styles.heroTextContainer}>
            <h2 className={styles.heroText}>
              HELLO<br />
              THERE
            </h2>
            <h2 className={`${styles.heroText} ${styles.flippedText}`}>
              HELLO<br />
              THERE
            </h2>
          </div>
          
          <div className={styles.welcomeTextContainer}>
            <h2 className={styles.welcomeText}>
              WELCOME<br />
              TO<br />
              MY<br />
              PORTFOLIO
            </h2>
          </div>
        </div>
      </div>
      
      <div className={styles.arrows}>
        <div className={styles.arrowRight}>→</div>
        <div className={styles.arrowRight}>→</div>
      </div>
      
      <div className={styles.navigationContainer}>
        <nav className={styles.navigation}>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li><a href="#projects">MY PROJECTS</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}