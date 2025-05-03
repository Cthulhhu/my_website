import Image from 'next/image';
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ABOUT ME</h1>
      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/amin_face.jpeg"
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
            <a href="#" className={styles.button}>LINKEDIN</a>
            <a href="#" className={styles.button}>RESUME</a>
            <a href="#" className={styles.button}>EMAIL ME</a>
          </div>
        </div>
      </div>
    </div>
  );
}