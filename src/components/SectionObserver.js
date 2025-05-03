'use client';
// src/components/SectionObserver.js
import { useEffect } from 'react';

export default function SectionObserver() {
  useEffect(() => {
    // Function to handle intersection observations
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        // Add class when section is visible
        if (entry.isIntersecting) {
          entry.target.classList.add('sectionVisible');
        } else {
          // Optional: remove class when section is no longer visible
          // entry.target.classList.remove('sectionVisible');
        }
      });
    };
    
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport is used as the root
      rootMargin: '-100px 0px', // trigger slightly after section enters viewport
      threshold: 0.15 // trigger when 15% of the target is visible
    });
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Cleanup
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return null; // This component doesn't render anything
}