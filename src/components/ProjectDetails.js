'use client';
// src/components/ProjectDetails.js
import Image from 'next/image';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails() {
  return (
    <>
      {/* Zaitoun Project */}
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
      
      {/* Minna-No-Kimochi Project */}
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
      
      {/* What's For Dinner Project */}
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
                <li>I fetched real recipe data using the Edamam API, ensuring search results were relevant and up-to-date.</li>
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
                  src="/images/whatsfordinner-recipe.JPG" 
                  alt="Recipe detail page with ingredients and instructions" 
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              </div>
              <div className={styles.galleryItem}>
                <Image 
                  src="/images/whatsfordinner-mobile.JPG" 
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
    </>
  );
}