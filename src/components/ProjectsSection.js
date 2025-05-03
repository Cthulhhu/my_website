// src/components/ProjectsSection.js
'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const detailsRef = useRef(null);
  
  const projects = [
    {
      id: 'zaitoun',
      title: 'ZAITOUN زيتون',
      subtitle: 'Authentic Palestinian Restaurant',
      description: 'A vibrant restaurant website featuring authentic Palestinian cuisine. Blends storytelling with elegant modern design with cultural elements. Includes a reservation form, and full ordering system with bilingual support.',
      color: 'var(--color-zaitoun-bg)',
      textColor: 'var(--color-zaitoun-text)',
      mainImage: '/images/project1.JPG',
      additionalImages: [
        { src: '/images/zaitoun-desktop.JPG', alt: 'Zaitoun website homepage' },
        { src: '/images/zaitoun-wireframe.png', alt: 'Initial wireframe designs' },
        { src: '/images/zaitoun-css.JPG', alt: 'CSS styling code' }
      ],
      tags: ['React', 'CSS Modules', 'Responsive Design', 'Multilingual'],
      longDescription: 'Zaitoun is a fictional restaurant site I created to showcase the vibrant culinary heritage of Palestine. I wanted to build something that honored traditional flavors, reflected cultural identity, and showed how clean modern design could still feel rich with history.'
    },
    {
      id: 'minna',
      title: 'MINNA-NO-KIMOCHI',
      subtitle: 'Tokyo-based DJ Duo Experience',
      description: 'A neon-drenched web experience created for a Tokyo-based DJ duo, blending rave culture, glitch art, and interactive design into a surreal digital world. Features include a BPM guessing game, merch store, and immersive contact forms.',
      color: 'var(--color-minna-bg)',
      textColor: 'var(--color-minna-text)',
      mainImage: '/images/project2.JPG',
      additionalImages: [
        { src: '/images/minna-desktop.JPG', alt: 'Desktop view of website' },
        { src: '/images/minna-merch.JPG', alt: 'Merchandise store section' },
        { src: '/images/minna-contact.JPG', alt: 'Contact form' }
      ],
      tags: ['JavaScript', 'CSS Animation', 'Interactive Design', 'WebGL'],
      longDescription: 'Minna-no-Kimochi is a DJ duo based out of Tokyo\'s underground trance scene. I built their website to amplify their brand identity, announce events, showcase merch, and capture the surreal, high-energy aesthetic of their live sets.'
    },
    {
      id: 'dinner',
      title: 'WHAT\'S FOR DINNER?',
      subtitle: 'Recipe Finder Application',
      description: 'A clean, fast recipe finder built to solve the daily dinner dilemma. Mobile-first, API-driven, and designed for instant, stress-free meal inspiration, all delivered through a polished, intuitive interface.',
      color: 'var(--color-dinner-bg)',
      textColor: 'var(--color-dinner-text)',
      mainImage: '/images/project3.JPG',
      additionalImages: [
        { src: '/images/whatsfordinner-reecipe.JPG', alt: 'Recipe detail page' },
        { src: '/images/whatsforDinner-mobile.JPG', alt: 'Mobile responsive view' },
        { src: '/images/whatsfordinner-favorites.JPG', alt: 'Favorites collection page' }
      ],
      tags: ['React', 'API Integration', 'Mobile-First', 'User Experience'],
      longDescription: 'Every evening, my mom would ask the same question, "What\'s for dinner?"—and we\'d both come up blank. I realized this wasn\'t just a family issue, but a common one. So I created this app to help users quickly discover recipe ideas using what they already have or crave.'
    }
  ];

  const handleProjectClick = (project) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (activeProject === project.id) {
      // Close the project details
      setActiveProject(null);
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    } else {
      // Show new project details
      setActiveProject(project.id);
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
        setIsAnimating(false);
      }, 600);
    }
  };
  
  useEffect(() => {
    // Initialize with project details closed
    setActiveProject(null);
  }, []);

  // Find the active project data
  const currentProject = activeProject 
    ? projects.find(p => p.id === activeProject) 
    : null;

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>MY PROJECTS</h2>
      
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.projectCard} ${activeProject === project.id ? styles.active : ''}`}
            onClick={() => handleProjectClick(project)}
            style={{
              '--project-color': project.color,
              '--project-text-color': project.textColor
            }}
          >
            <div className={styles.projectImageContainer}>
              <Image
                src={project.mainImage}
                alt={`${project.title} preview`}
                width={500}
                height={300}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSubtitle}>{project.subtitle}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              <button className={styles.projectButton}>
                {activeProject === project.id ? 'Close Details' : 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Details Section */}
      <div 
        ref={detailsRef}
        className={`${styles.projectDetails} ${activeProject ? styles.active : ''}`}
        style={{
          '--project-color': currentProject?.color,
          '--project-text-color': currentProject?.textColor
        }}
      >
        {currentProject && (
          <>
            <div className={styles.detailsHeader}>
              <h2 className={styles.detailsTitle}>{currentProject.title}</h2>
              <button 
                className={styles.closeButton}
                onClick={() => handleProjectClick(currentProject)}
              >
                ×
              </button>
            </div>
            
            <div className={styles.detailsContent}>
              <div className={styles.detailsMainImage}>
                <Image
                  src={currentProject.mainImage}
                  alt={`${currentProject.title} main view`}
                  width={1000}
                  height={600}
                  className={styles.mainImage}
                />
              </div>
              
              <div className={styles.detailsInfo}>
                <h3 className={styles.detailsSubtitle}>{currentProject.subtitle}</h3>
                <p className={styles.detailsDescription}>{currentProject.longDescription}</p>
                
                <div className={styles.detailsTags}>
                  {currentProject.tags.map((tag, index) => (
                    <span key={index} className={styles.detailTag}>{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className={styles.detailsGallery}>
                <h3 className={styles.galleryTitle}>PROJECT GALLERY</h3>
                <div className={styles.galleryGrid}>
                  {currentProject.additionalImages.map((image, index) => (
                    <div key={index} className={styles.galleryItem}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className={styles.galleryImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.detailsActions}>
                <a href="#" className={styles.detailsButton}>Live Demo</a>
                <a href="#" className={styles.detailsButton}>View Code</a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}