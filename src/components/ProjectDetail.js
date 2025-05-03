import Image from 'next/image';
import styles from '../styles/ProjectDetail.module.css';
import GalleryItem from './GalleryItem';

export default function ProjectDetail({ project }) {
  const detailSectionClass = 
    project.id === 'dinner' ? styles.dinnerSection :
    project.id === 'zaitoun' ? styles.zaitounSection :
    styles.minnaSection;
  
  const bgClass = 
    project.id === 'dinner' ? styles.dinnerBg :
    project.id === 'zaitoun' ? styles.zaitounBg :
    styles.minnaBg;
    
  return (
    <section id={project.id} className={`${styles.container} ${bgClass}`}>
      <div className={styles.intro}>
        <div className={styles.titleContainer}>
          <h3 className={styles.primaryTitle}>PROJECT NAME</h3>
          <h2 className={styles.secondaryTitle}>{project.title}</h2>
        </div>
        <div className={styles.subtitleContainer}>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>
      </div>
      
      <div className={styles.showcase}>
        <div className={styles.showcaseWrapper}>
          <Image 
            src={project.showcase}
            alt={`${project.title} showcase`}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className={styles.showcaseImage}
          />
        </div>
      </div>
      
      <div className={styles.detailSections}>
        <div className={`${styles.section} ${detailSectionClass}`}>
          <h2 className={styles.sectionTitle}>BACKGROUND</h2>
          <p className={styles.sectionText}>{project.background}</p>
        </div>
        
        <div className={`${styles.section} ${detailSectionClass}`}>
          <h2 className={styles.sectionTitle}>PROBLEM</h2>
          <p className={styles.sectionText}>{project.problem}</p>
        </div>
        
        <div className={`${styles.section} ${detailSectionClass}`}>
          <h2 className={styles.sectionTitle}>PROCESS</h2>
          <ul className={styles.processList}>
            {project.process.map((step, index) => (
              <li key={index} className={styles.processItem}>{step}</li>
            ))}
          </ul>
        </div>
        
        <div className={`${styles.section} ${detailSectionClass}`}>
          <h2 className={styles.sectionTitle}>RESULTS</h2>
          <p className={styles.sectionText}>{project.results}</p>
        </div>
      </div>
      
      <div className={styles.gallery}>
        <h2 className={styles.galleryTitle}>PROJECT GALLERY</h2>
        <div className={styles.galleryGrid}>
          {project.gallery.map((item, index) => (
            <GalleryItem 
              key={index} 
              image={item.image} 
              alt={item.alt} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}