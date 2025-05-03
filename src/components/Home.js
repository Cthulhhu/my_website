'use client';
// src/components/Home.js
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Add the visible class after the component mounts
    if (sectionRef.current) {
      sectionRef.current.classList.add(styles.visible);
    }
  }, []);

  return (
    <section id="home" className={styles.homeSection} ref={sectionRef}>
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
  );
}