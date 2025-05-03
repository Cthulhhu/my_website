'use client';
import { useState } from 'react';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Message sent! (Demo only)');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            LET'S<br />
            CHAT
          </h1>
        </div>
        
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={styles.textarea}
                required
              />
            </div>
            
            <div className={styles.submitContainer}>
              <button
                type="submit"
                className={styles.submitButton}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className={styles.footer}>
        <div className={styles.contactMethods}>
          <a href="#" className={styles.contactMethod}>
            <span className={styles.contactIcon}>📱</span>
            Phone Number
          </a>
          <a href="#" className={styles.contactMethod}>
            <span className={styles.contactIcon}>📧</span>
            Email
          </a>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <span className={styles.socialIcon}>🐱</span>
          </a>
          <a href="#" className={styles.socialLink}>
            <span className={styles.socialIcon}>🔗</span>
          </a>
        </div>
      </div>
    </div>
  );
}