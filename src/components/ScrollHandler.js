'use client';
// src/components/ScrollHandler.js
import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      // Get the clicked element or its parent if it's a child of an anchor
      let target = e.target;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      
      // If no anchor was found or clicked, return
      if (!target) return;
      
      // Check if the clicked element is an anchor with href starting with #
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Get header height for offset (accounting for fixed header)
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          
          // Calculate scroll position
          const offsetTop = targetElement.offsetTop - headerHeight;
          
          // Scroll to the target element
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Update URL without reloading the page
          window.history.pushState(null, '', targetId);
        }
      }
    };
    
    // Add click event listener to document
    document.addEventListener('click', handleAnchorClick);
    
    // Add scroll event listener to change header appearance based on section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector('header');
      
      if (!header) return;
      
      // Get sections
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');
      
      // Get sections' positions
      const homeSectionTop = homeSection?.offsetTop || 0;
      const aboutSectionTop = aboutSection?.offsetTop || 0;
      const projectsSectionTop = projectsSection?.offsetTop || 0;
      const contactSectionTop = contactSection?.offsetTop || 0;
      
      // Determine which section is currently visible
      // and adjust header styling accordingly
      if (scrollPosition >= contactSectionTop - 100) {
        header.style.backgroundColor = 'var(--color-contact-bg)';
        header.style.color = 'var(--color-primary)';
      } else if (scrollPosition >= projectsSectionTop - 100) {
        header.style.backgroundColor = 'var(--color-projects-bg)';
        header.style.color = 'var(--color-secondary)';
      } else if (scrollPosition >= aboutSectionTop - 100) {
        header.style.backgroundColor = 'var(--color-about-bg)';
        header.style.color = 'var(--color-primary)';
      } else {
        header.style.backgroundColor = 'var(--color-primary)';
        header.style.color = 'var(--color-secondary)';
      }
      
      // Update active navigation link - more robust selector
      // This will find all anchor links in the header, including those nested in other elements
      const navLinks = header.querySelectorAll('a[href^="#"]');
      
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      if (scrollPosition >= contactSectionTop - 100) {
        header.querySelector('a[href="#contact"]')?.classList.add('active');
      } else if (scrollPosition >= projectsSectionTop - 100) {
        header.querySelector('a[href="#projects"]')?.classList.add('active');
      } else if (scrollPosition >= aboutSectionTop - 100) {
        header.querySelector('a[href="#about"]')?.classList.add('active');
      } else {
        header.querySelector('a[href="#home"]')?.classList.add('active');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Handle initial scroll position on page load
    handleScroll();
    
    // Check if URL has a hash on load and scroll to that section
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      
      if (targetElement) {
        setTimeout(() => {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const offsetTop = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
    
    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run effect only once
  
  return null; // This component doesn't render anything
}