'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProjectCard from '../../components/ProjectCard';
import ProjectDetail from '../../components/ProjectDetail';
import projectsData from './projectsData';
import styles from '../../styles/Projects.module.css';

export default function Projects() {
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash') || '';
  
  // Check for hash in URL or params to scroll to the right project
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hashValue = window.location.hash || `#${hash}`;
      if (hashValue) {
        const id = hashValue.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Add a slight delay to ensure the DOM is fully loaded
          setTimeout(() => {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            window.scrollTo({
              top: element.offsetTop - headerHeight,
              behavior: 'smooth'
            });
          }, 300);
        }
      }
    }
  }, [hash]);
  
  return (
    <div className={styles.container}>
      {/* Projects Showcase */}
      <section className={styles.showcase}>
        <div className={styles.projectsGrid}>
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      {/* Project Details */}
      <div className={styles.detailsContainer}>
        {projectsData.map(project => (
          <ProjectDetail key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}