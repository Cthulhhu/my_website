'use client';
// src/components/AboutMe.js
import Image from 'next/image';
import styles from '../app/page.module.css';

export default function AboutMe() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>ABOUT ME</h2>
      
      <div className={styles.aboutContent}>
        <div className={styles.aboutImageContainer}>
          <Image
            src="/images/my_face.jpeg"
            alt="Amin Nassraoui"
            width={500}
            height={500}
            className={styles.profileImage}
          />
        </div>
        
        <div className={styles.bioContainer}>
          <p className={styles.bioText}>
            I'm Amin Nassraoui — a front-end developer focused 
            on building clean, fast, and expressive digital 
            experiences. I blend design and code to create websites 
            that stand out and feel alive.
          </p>
          
          <p className={styles.bioText}>
            I like bold colors, smooth interactions, and work that 
            speaks for itself.
          </p>
          
          <p className={styles.bioText}>
            Let's connect.
          </p>
          
          <div className={styles.buttonContainer}>
            <a href="https://linkedin.com" className={styles.button}>LINKEDIN</a>
            <a href="/resume.pdf" className={styles.button}>RESUME</a>
            <a href="mailto:contact@aminnassraoui.com" className={styles.button}>EMAIL ME</a>
          </div>
        </div>
      </div>
    </section>
  );
}