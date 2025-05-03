'use client';
// src/components/Portfolio.js
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  
  // Projects data with all relevant information
  const projects = [
    {
      id: 'zaitoun',
      title: 'ZAITOUN زيتون',
      subtitle: 'A vibrant restaurant website celebrating Palestinian cuisine',
      description: 'A vibrant restaurant website featuring authentic Palestinian cuisine. Blends storytelling with elegant modern design with cultural elements. Includes a reservation form, and full ordering system with bilingual support.',
      image: '/images/project1.JPG',
      color: 'var(--color-zaitoun-bg)',
      textColor: 'var(--color-zaitoun-text)'
    },
    {
      id: 'minna',
      title: 'MINNA-NO-KIMOCHI',
      subtitle: 'A neon-drenched web experience for a Tokyo DJ duo',
      description: 'A neon-drenched web experience created for a Tokyo-based DJ duo, blending rave culture, glitch art, and interactive design into a surreal digital world. Features include a BPM guessing game, merch store, and immersive contact forms.',
      image: '/images/project2.JPG',
      color: 'var(--color-minna-bg)',
      textColor: 'var(--color-minna-text)'
    },
    {
      id: 'dinner',
      title: 'WHAT\'S FOR DINNER?',
      subtitle: 'A clean, fast recipe finder for daily meal inspiration',
      description: 'A clean, fast recipe finder built to solve the daily dinner dilemma. Mobile-first, API-driven, and designed for instant, stress-free meal inspiration, all delivered through a polished, intuitive interface.',
      image: '/images/project3.JPG',
      color: 'var(--color-dinner-bg)',
      textColor: 'var(--color-dinner-text)'
    }
  ];
  
  // Navigation controls for the slider
  const handlePrev = () => {
    setActiveSlide(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveSlide(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  // Handle dot navigation
  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  
  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [activeSlide]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <h2 className={styles.sectionTitle}>MY * WORK</h2>
      
      <div 
        className={styles.sliderContainer}
        ref={sliderRef}
        style={{
          backgroundColor: projects[activeSlide].color
        }}
      >
        <div className={styles.slider}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`${styles.slide} ${index === activeSlide ? styles.active : ''}`}
              style={{
                color: project.textColor
              }}
            >
              <div className={styles.slideContent}>
                <div className={styles.slideImageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.slideImage}
                  />
                </div>
                <div className={styles.slideInfo}>
                  <h3 className={styles.slideTitle}>{project.title}</h3>
                  <p className={styles.slideSubtitle}>{project.subtitle}</p>
                  <p className={styles.slideDescription}>{project.description}</p>
                  <button 
                    className={styles.viewButton}
                    onClick={() => document.getElementById(project.id).scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>←</button>
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>→</button>
        
        <div className={styles.dotsContainer}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}