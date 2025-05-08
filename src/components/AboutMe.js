// src/components/AboutMe.js
'use client';
import styles from './AboutMe.module.css';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.heading}>ABOUT ME</h2>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/my_face.jpeg"
            alt="Amin Nassraoui"
            width={300}
            height={400}
            className={styles.profileImage}
          />
        </div>

        <div className={styles.textBlock}>
          <p>
            I'm Amin Nassraoui — a front-end developer focused on building clean,
            fast, and expressive digital experiences. I blend design and code to create
            websites that stand out and feel alive.
          </p>
          <p>
            I like bold colors, smooth interactions, and work that speaks for itself.
            Let’s connect.
          </p>

          <div className={styles.buttons}>
            <a href="mailto:nassraouiamin@gmail.com">EMAIL ME</a>
          </div>
        </div>
      </div>
    </section>
  );
}
