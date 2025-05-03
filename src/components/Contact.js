'use client';
// src/components/Contact.js
import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true after component mounts
    setIsMounted(true);
    
    // Add the visible class after the component mounts
    if (sectionRef.current) {
      sectionRef.current.classList.add(styles.visible);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  // Only render client-side content when the component is mounted
  if (!isMounted) {
    return <section id="contact" className={styles.contactSection} ref={sectionRef}></section>;
  }

  return (
    <section id="contact" className={styles.contactSection} ref={sectionRef}>
      <div className={styles.contactContainer}>
        <div className={styles.contactLeft}>
          <h2 className={styles.contactTitle}>
            LET'S<br />
            CHAT
          </h2>
          
          <div className={styles.contactChannels}>
            <a href="tel:+1234567890" className={styles.contactChannel}>
              <div className={styles.channelIcon}>
                <span className={styles.emoji}>📱</span>
              </div>
              <span>Phone Number</span>
            </a>
            
            <a href="mailto:contact@aminnassraoui.com" className={styles.contactChannel}>
              <div className={styles.channelIcon}>
                <span className={styles.emoji}>📧</span>
              </div>
              <span>Email</span>
            </a>
          </div>
        </div>
        
        <div className={styles.contactRight}>
          <form 
            className={styles.contactForm}
            onSubmit={handleFormSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
                placeholder="Your name"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                required
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SEND'}
            </button>
            
            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div className={styles.socialLinksContainer}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <div className={styles.socialIconWrapper}>
              <span className={styles.emoji}>🐱</span>
            </div>
          </a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <div className={styles.socialIconWrapper}>
              <span className={styles.emoji}>🔗</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}