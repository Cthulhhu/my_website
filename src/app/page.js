'use client';
// src/app/page.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import ScrollHandler from '../components/ScrollHandler';
import SectionObserver from '../components/SectionObserver';
import ProjectsSection from '../components/ProjectsSection'; // Imported the new component

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration errors by only rendering client-side content after mount
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Form submitted:', data);
    
    // For demo purposes, just show an alert
    alert('Thanks for your message! I\'ll get back to you soon.');
    
    // Reset form
    e.target.reset();
  };
  
  return (
    <div className={styles.container}>
      {mounted && (
        <>
          <ScrollHandler />
          <SectionObserver />
        </>
      )}
      
      {/* Fixed Header/Navigation */}
      <header className={styles.header}>
        <h1 className={styles.logo}>AMIN NASSRAOUI</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">MY PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className={styles.homeSection}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <div className={styles.imageContainer}>
              <div className={styles.portraitWrapper}>
                <Image
                  src="/images/Eye-looking.png"
                  alt="Portrait"
                  width={300}
                  height={400}
                  priority
                  className={styles.portrait}
                />
              </div>
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>
                HELLO<br />
                THERE
              </h1>
              <div className={styles.flippedTextContainer}>
                <h1 className={styles.flippedText}>
                  HELLO<br />
                  THERE
                </h1>
              </div>
            </div>
          </div>
          
          <div className={styles.welcomeContainer}>
            <h2 className={styles.welcomeText}>
              WELCOME<br />
              TO<br />
              MY<br />
              PORTFOLIO
            </h2>
          </div>
        </div>
        
        <div className={styles.arrows}>
          <div className={styles.arrow}>→</div>
          <div className={styles.arrow}>→</div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollText}>SCROLL DOWN</div>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>ABOUT ME</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutImageContainer}>
            <Image
              src="/images/my_face.jpeg"
              alt="Amin Nassraoui"
              width={500}
              height={500}
              className={styles.profileImage}
            />
          </div>
          
          <div className={styles.bioContainer}>
            <p className={styles.bioText}>
              I'm Amin Nassraoui — a front-end developer focused 
              on building clean, fast, and expressive digital 
              experiences. I blend design and code to create websites 
              that stand out and feel alive.
            </p>
            
            <p className={styles.bioText}>
              I like bold colors, smooth interactions, and work that 
              speaks for itself.
            </p>
            
            <p className={styles.bioText}>
              Let's connect.
            </p>
            
            <div className={styles.buttonContainer}>
              <a href="https://linkedin.com" className={styles.button}>LINKEDIN</a>
              <a href="/resume.pdf" className={styles.button}>RESUME</a>
              <a href="mailto:contact@aminnassraoui.com" className={styles.button}>EMAIL ME</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>MY PROJECTS</h2>
        
        <div className={styles.projectsGrid}>
          {/* Project 1: Zaitoun */}
          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <Image 
                src="/images/project1.JPG"
                alt="Zaitoun restaurant website homepage"
                width={500}
                height={300}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>ZAITOUN زيتون</h3>
              <p className={styles.projectDescription}>
                A vibrant restaurant website featuring authentic Palestinian cuisine. 
                Blends storytelling with elegant modern design with cultural elements.
                Includes a reservation form, and full ordering system with bilingual support.
              </p>
              <button onClick={() => document.getElementById('zaitoun').scrollIntoView({ behavior: 'smooth' })} className={styles.projectLink}>View Project →</button>
            </div>
          </div>

          {/* Project 2: Minna-No-Kimochi */}
          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <Image 
                src="/images/project2.JPG"
                alt="Minna-No-Kimochi DJ duo website"
                width={500}
                height={300}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>MINNA-NO-KIMOCHI</h3>
              <p className={styles.projectDescription}>
                A neon-drenched web experience created for a Tokyo-based DJ duo, 
                blending rave culture, glitch art, and interactive design into a surreal digital world.
                Features include a BPM guessing game, merch store, and immersive contact forms.
              </p>
              <button onClick={() => document.getElementById('minna').scrollIntoView({ behavior: 'smooth' })} className={styles.projectLink}>View Project →</button>
            </div>
          </div>

          {/* Project 3: What's For Dinner */}
          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <Image 
                src="/images/project3.JPG"
                alt="What's For Dinner recipe finder application"
                width={500}
                height={300}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>WHAT'S FOR DINNER?</h3>
              <p className={styles.projectDescription}>
                A clean, fast recipe finder built to solve the daily dinner dilemma. 
                Mobile-first, API-driven, and designed for instant, stress-free meal inspiration,
                all delivered through a polished, intuitive interface.
              </p>
              <button onClick={() => document.getElementById('dinner').scrollIntoView({ behavior: 'smooth' })} className={styles.projectLink}>View Project →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Sections */}
      <section id="zaitoun" className={styles.projectDetailSection}>
        <div className={styles.projectDetailContent}>
          <h2 className={styles.projectDetailTitle}>ZAITOUN زيتون</h2>
          <h3 className={styles.projectDetailSubtitle}>Designing for Heritage: Bringing Authentic Palestinian Flavors to the Web</h3>
          
          <div className={styles.projectShowcase}>
            <Image 
              src="/images/project1.JPG"
              alt="Zaitoun project showcase"
              width={1000}
              height={600}
              className={styles.projectShowcaseImage}
            />
          </div>
          
          <div className={styles.projectInfoGrid}>
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>BACKGROUND</h3>
              <p className={styles.infoSectionText}>
                Zaitoun is a fictional restaurant site I created to showcase the vibrant culinary heritage of Palestine. 
                I wanted to build something that honored traditional flavors, reflected cultural identity, and showed 
                how clean modern design could still feel rich with history.
              </p>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>PROBLEM</h3>
              <p className={styles.infoSectionText}>
                Many restaurant websites lack personality: they're either generic or visually outdated. I wanted to explore 
                how cultural storytelling could enhance user experience and deepen engagement. The goal was to build a 
                professional-grade food website with features that support browsing, ordering, and learning more about 
                Palestinian cuisine.
              </p>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>PROCESS</h3>
              <ul className={styles.processList}>
                <li>The design process began with creating a color palette inspired by the Palestinian flag: red, black, white, and green.</li>
                <li>I chose elegant, readable typefaces and used strong, high-quality imagery to give the site an inviting feel.</li>
                <li>I incorporated Arabic alongside English for authenticity and built out an interactive food ordering experience that included filters, buttons, modals, and even a light/dark mode toggle.</li>
                <li>I created an add-to-cart system, a past orders page, and a reservation form using React.</li>
                <li>I also included subtle animations and hover effects for polish. Every detail from spacing to typography was tested for clarity and accessibility.</li>
              </ul>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>RESULTS</h3>
              <p className={styles.infoSectionText}>
                Zaitoun functions like a real restaurant site and feels elevated. The final product successfully merges design and functionality, 
                providing a respectful, engaging digital experience that pays tribute to Palestinian culture while also standing out as a 
                professional web project.
              </p>
            </div>
          </div>
          
          <div className={styles.projectGallery}>
            <h3 className={styles.galleryTitle}>PROJECT GALLERY</h3>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/zaitoun-desktop.JPG" 
                  alt="Zaitoun website homepage" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/zaitoun-wireframe.png" 
                  alt="Initial wireframe designs for Zaitoun website" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/project1.JPG" 
                  alt="Zaitoun website development in progress" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/zaitoun-css.JPG" 
                  alt="CSS styling code for Zaitoun website" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="minna" className={styles.projectDetailSection}>
        <div className={styles.projectDetailContent}>
          <h2 className={styles.projectDetailTitle}>MINNA-NO-KIMOCHI</h2>
          <h3 className={styles.projectDetailSubtitle}>Raw Beats, Vivid Design: Building a Digital Dimension for a Tokyo DJ Duo</h3>
          
          <div className={styles.projectShowcase}>
            <Image 
              src="/images/project2.JPG"
              alt="Minna-No-Kimochi project showcase"
              width={1000}
              height={600}
              className={styles.projectShowcaseImage}
            />
          </div>
          
          <div className={styles.projectInfoGrid}>
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>BACKGROUND</h3>
              <p className={styles.infoSectionText}>
                Minna-no-Kimochi is a DJ duo based out of Tokyo's underground trance scene. I built their website to amplify their brand identity, 
                announce events, showcase merch, and capture the surreal, high-energy aesthetic of their live sets. This wasn't just a portfolio piece; 
                it was a chance to fuse sound, style, and interaction into one bold digital experience.
              </p>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>PROBLEM</h3>
              <p className={styles.infoSectionText}>
                The DJs needed more than a basic bio page. They wanted a site that was an extension of their world: neon, high-energy, and immersive. 
                I needed to design a space that would attract fans, showcase upcoming events, and capture their personality and sound simultaneously for the user.
              </p>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>PROCESS</h3>
              <ul className={styles.processList}>
                <li>I started by analyzing the duo's music and visual style, pulling inspiration from 90s rave posters, cyberpunk aesthetics, and glitch art. I chose vibrant neon colors (cyan, magenta) on black backgrounds to simulate a club-like experience.</li>
                <li>I built the site using semantic HTML, valid CSS, and JavaScript to create a strong foundation.</li>
                <li>I incorporated playful but purposeful features like a BPM guessing game, a "dimensional artifact" merch section, and a themed contact form rebranded as "Join Our Dimension".</li>
                <li>I tested each section to ensure responsiveness and UX flow, and every interaction with hover effects, toggles, and animations was crafted to feel alive and in rhythm with the brand. The entire site was styled with custom fonts and precise visual hierarchy to guide the user without sacrificing personality.</li>
              </ul>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>RESULTS</h3>
              <p className={styles.infoSectionText}>
                The final website became a vibrant, interactive extension of the DJs' brand. It performs smoothly across devices, draws visitors into their universe, 
                and reinforces their identity as creators of alternate realities through music. Users can explore events, shop merch, and even play a mini-game turning 
                a portfolio site into a fully immersive fan experience.
              </p>
            </div>
          </div>
          
          <div className={styles.projectGallery}>
            <h3 className={styles.galleryTitle}>PROJECT GALLERY</h3>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/minna-desktop.JPG" 
                  alt="Desktop view of Minna-No-Kimochi website" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/minna-merch.JPG" 
                  alt="Merchandise store section of Minna-No-Kimochi website" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/minna-upcoming.JPG" 
                  alt="Upcoming events calendar for Minna-No-Kimochi" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/minna-contact.JPG" 
                  alt="Contact form for Minna-No-Kimochi website" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="dinner" className={styles.projectDetailSection}>
        <div className={styles.projectDetailContent}>
          <h2 className={styles.projectDetailTitle}>WHAT'S FOR DINNER?</h2>
          <h3 className={styles.projectDetailSubtitle}>From Clueless to Confident: A Recipe Finder That Solves the "What's for Dinner?" Dilemma</h3>
          
          <div className={styles.projectShowcase}>
            <Image 
              src="/images/project3.JPG"
              alt="What's For Dinner project showcase"
              width={1000}
              height={600}
              className={styles.projectShowcaseImage}
            />
          </div>
          
          <div className={styles.projectInfoGrid}>
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>BACKGROUND</h3>
              <p className={styles.infoSectionText}>
                Every evening, my mom would ask the same question, "What's for dinner?"—and we'd both come up blank. I realized this wasn't just a family issue, 
                but a common one. So I created 'What's for Dinner?', a web app that helps users quickly discover recipe ideas using what they already have or crave. 
                The goal was to reduce decision fatigue and turn that daily moment of frustration into something easy and even fun.
              </p>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>PROBLEM</h3>
              <p className={styles.infoSectionText}>
                There are several hundred recipe websites, but most of them are busy, slow, and overwhelming. I wanted to create a simple, speedy, mobile-first solution 
                that put the user at center stage: quick results, helpful filters, and easy-to-follow instructions. I aimed to reduce the friction of choosing what to eat.
              </p>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>PROCESS</h3>
              <ul className={styles.processList}>
                <li>I started by identifying key pain points: users want simplicity, speed, and something that actually works on their phones.</li>
                <li>The design emphasized minimalism and intuitive filtering. Using React and Tailwind CSS in a Vite development environment, I built the site's core functionality.</li>
                <li>I sourced real recipe data using the Edamam API, ensuring search results were relevant and up-to-date.</li>
                <li>To give the site a polished, professional feel, I deployed it using Vercel and even purchased a custom domain: whats4dinner.food.</li>
                <li>I tested for accessibility, responsiveness, and load speed. After refining the visual hierarchy and contrast, I conducted a round of user testing with friends and family, using their feedback to improve layout, usability, and API integration.</li>
              </ul>
            </div>
            
            <div className={styles.projectInfoSection}>
              <h3 className={styles.infoSectionTitle}>RESULTS</h3>
              <p className={styles.infoSectionText}>
                The final site is clean, responsive, and intuitive. It provides recipe inspiration in seconds and works smoothly across devices. 
                Users appreciated the speed, the focused design, and how easy it was to go from "What's for dinner?" to "Let's cook this." 
                It remains one of the projects I'm most proud of.
              </p>
            </div>
          </div>
          
          <div className={styles.projectGallery}>
            <h3 className={styles.galleryTitle}>PROJECT GALLERY</h3>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/project3.JPG" 
                  alt="What's For Dinner main interface showing recipe grid" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/whatsfordinner-reecipe.JPG" 
                  alt="Recipe detail page with ingredients and instructions" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/whatsforDinner-mobile.JPG" 
                  alt="Mobile responsive view of the recipe finder" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/whatsfordinner-favorites.JPG" 
                  alt="User's favorite recipes collection page" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  );
}