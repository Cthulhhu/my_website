'use client';
// src/components/Contact.js
import { useState } from 'react';
import styles from '../app/page.module.css';

export default function Contact() {
  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // For demo purposes, just show an alert
    alert('Thanks for your message! I\'ll get back to you soon.');
    
    // Reset form
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContent}>
        <div className={styles.contactHeading}>
          <h2 className={styles.contactTitle}>
            LET'S<br />
            CHAT
          </h2>
        </div>
        
        <div className={styles.formContainer}>
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
                className={styles.formTextarea}
                required
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              SEND
            </button>
          </form>
        </div>
      </div>
      
      <div className={styles.contactFooter}>
        <div className={styles.contactMethods}>
          <a href="tel:+1234567890" className={styles.contactMethod}>
            <span className={styles.contactIcon}>📱</span>
            Phone Number
          </a>
          <a href="mailto:contact@aminnassraoui.com" className={styles.contactMethod}>
            <span className={styles.contactIcon}>📧</span>
            Email
          </a>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="https://github.com" className={styles.socialLink}>
            <span className={styles.socialIcon}>🐱</span>
          </a>
          <a href="https://linkedin.com" className={styles.socialLink}>
            <span className={styles.socialIcon}>🔗</span>
          </a>
        </div>
      </div>
    </section>
  );
}