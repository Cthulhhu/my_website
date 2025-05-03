'use client';
// src/components/Projects.js
import Image from 'next/image';
import styles from '../app/page.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>MY PROJECTS</h2>
      
      <div className={styles.projectsGrid}>
        {/* Project 1: Zaitoun */}
        <div className={styles.projectCard}>
          <div className={styles.projectImageContainer}>
            <Image 
              src="/images/project1.JPG"
              alt="Zaitoun restaurant website homepage"
              width={500}
              height={300}
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>ZAITOUN زيتون</h3>
            <p className={styles.projectDescription}>
              A vibrant restaurant website featuring authentic Palestinian cuisine. 
              Blends storytelling with elegant modern design with cultural elements.
              Includes a reservation form, and full ordering system with bilingual support.
            </p>
            <button onClick={() => document.getElementById('zaitoun').scrollIntoView({ behavior: 'smooth' })} className={styles.projectLink}>View Project →</button>
          </div>
        </div>

        {/* Project 2: Minna-No-Kimochi */}
        <div className={styles.projectCard}>
          <div className={styles.projectImageContainer}>
            <Image 
              src="/images/project2.JPG"
              alt="Minna-No-Kimochi DJ duo website"
              width={500}
              height={300}
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>MINNA-NO-KIMOCHI</h3>
            <p className={styles.projectDescription}>
              A neon-drenched web experience created for a Tokyo-based DJ duo, 
              blending rave culture, glitch art, and interactive design into a surreal digital world.
              Features include a BPM guessing game, merch store, and immersive contact forms.
            </p>
            <button onClick={() => document.getElementById('minna').scrollIntoView({ behavior: 'smooth' })} className={styles.projectLink}>View Project →</button>
          </div>
        </div>

        {/* Project 3: What's For Dinner */}
        <div className={styles.projectCard}>
          <div className={styles.projectImageContainer}>
            <Image 
              src="/images/project3.JPG"
              alt="What's For Dinner recipe finder application"
              width={500}
              height={300}
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>WHAT'S FOR DINNER?</h3>
            <p className={styles.projectDescription}>
              A clean, fast recipe finder built to solve the daily dinner dilemma. 
              Mobile-first, API-driven, and designed for instant, stress-free meal inspiration,
              all delivered through a polished, intuitive interface.
            </p>
            <button onClick={() => document.getElementById('dinner').scrollIntoView({ behavior: 'smooth' })} className={styles.projectLink}>View Project →</button>
          </div>
        </div>
      </div>
    </section>
  );
}