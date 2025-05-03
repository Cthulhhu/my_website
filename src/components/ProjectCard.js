'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const router = useRouter();
  
  const handleClick = () => {
    // Scroll to project section if on the projects page
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/projects') {
        const element = document.getElementById(project.id);
        if (element) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          window.scrollTo({
            top: element.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      } else {
        // Navigate to projects page with hash
        router.push(`/projects#${project.id}`);
      }
    }
  };
  
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tag}>
          MY *<br />
          WORK
        </div>
      </div>
    </div>
  );
}