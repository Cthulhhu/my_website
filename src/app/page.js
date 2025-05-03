// src/app/page.js
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>AMIN NASSRAOUI</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/projects">MY PROJECTS</a></li>
          </ul>
        </nav>
      </header>

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
    </div>
  );
}