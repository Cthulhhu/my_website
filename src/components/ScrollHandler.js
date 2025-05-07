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
      
      // Get all important sections
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const myWorkSection = document.getElementById('my-work'); // MY WORK section
      const myProjectsSection = document.getElementById('projects'); // MY PROJECTS section
      const dinnerSection = document.getElementById('dinner');
      const zaitounSection = document.getElementById('zaitoun');
      const minnaSection = document.getElementById('minna');
      const contactSection = document.getElementById('contact');
      
      // Function to determine if an element is in viewport
      const isInViewport = (element, offset = 100) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= 0;
      };
      
      // Home section colors
      if (isInViewport(homeSection)) {
        header.style.backgroundColor = 'var(--color-primary)';
        header.style.color = 'var(--color-secondary)';
        setActiveNav('#home');
      }
      // About section colors
      else if (isInViewport(aboutSection)) {
        header.style.backgroundColor = 'var(--color-about-bg)';
        header.style.color = 'var(--color-primary)';
        setActiveNav('#about');
      }
      // MY WORK section colors
      else if (isInViewport(myWorkSection)) {
        // From your screenshot, it looks like MY WORK has a blue background
        header.style.backgroundColor = '#3741D2'; // Blue background
        header.style.color = '#C2EB0E'; // Lime green text
        setActiveNav('#my-work');
      }
      // MY PROJECTS section colors (including project details)
      else if (isInViewport(myProjectsSection) || 
               isInViewport(dinnerSection) || 
               isInViewport(zaitounSection) || 
               isInViewport(minnaSection)) {
        
        if (isInViewport(myProjectsSection)) {
          // Main projects section
          header.style.backgroundColor = 'var(--color-projects-bg)';
          header.style.color = 'var(--color-secondary)';
          setActiveNav('#projects');
        } 
        else if (isInViewport(dinnerSection)) {
          // What's For Dinner project
          header.style.backgroundColor = 'var(--color-dinner-bg)';
          header.style.color = 'var(--color-dinner-text)';
          setActiveNav('#projects');
        }
        else if (isInViewport(zaitounSection)) {
          // Zaitoun project
          header.style.backgroundColor = 'var(--color-zaitoun-bg)';
          header.style.color = 'var(--color-zaitoun-text)';
          setActiveNav('#projects');
        }
        else if (isInViewport(minnaSection)) {
          // Minna-No-Kimochi project
          header.style.backgroundColor = 'var(--color-minna-bg)';
          header.style.color = 'var(--color-minna-text)';
          setActiveNav('#projects');
        }
      }
      // Contact section colors
      else if (isInViewport(contactSection)) {
        header.style.backgroundColor = 'var(--color-contact-bg)';
        header.style.color = 'var(--color-primary)';
        setActiveNav('#contact');
      }
    };
    
    // Helper function to set the active navigation item
    const setActiveNav = (sectionId) => {
      // Remove 'active' class from all nav links
      const navLinks = document.querySelectorAll('header nav a');
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add 'active' class to current section link
      const currentLink = document.querySelector(`header nav a[href="${sectionId}"]`);
      if (currentLink) {
        currentLink.classList.add('active');
      }
    };
    
    // Add scroll event listener
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