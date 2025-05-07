'use client';
// src/components/ProjectDetails.js
import Image from 'next/image';
import styles from './ProjectDetails.module.css';

export default function ProjectDetails() {
  return (
    <>
      {/* What's For Dinner Project */}
      <section id="dinner" className={`${styles.projectSection} ${styles.dinnerProject}`}>
        <div className={styles.projectHeader}>
          <div className={styles.headerContent}>
            <div className={styles.titleContainer}>
              <span className={styles.projectCategory}>Web Application</span>
              <h2 className={styles.projectTitle}>What's For Dinner?</h2>
              <div className={styles.titleDivider}></div>
              <p className={styles.projectDescription}>
                A streamlined recipe discovery platform that transforms daily meal decision fatigue into an effortless experience.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.showcase}>
          <div className={styles.showcaseWrapper}>
            <Image 
              src="/images/project3.JPG"
              alt="What's For Dinner interface with recipe grid"
              width={1200}
              height={675}
              className={styles.showcaseImage}
              priority
            />
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.sectionGrid}>
            <div className={`${styles.infoCard} ${styles.backgroundCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Background</h3>
              </div>
              <div className={styles.cardBody}>
                <p>Every evening, my mom would ask the same question, "What's for dinner?"—and we'd both come up blank. I realized this wasn't just a family issue, but a common one. So I created 'What's for Dinner?', a web app that helps users quickly discover recipe ideas using what they already have or crave. The goal was to reduce decision fatigue and turn that daily moment of frustration into something easy and even fun.</p>
              </div>
            </div>

            <div className={`${styles.infoCard} ${styles.problemCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Problem</h3>
              </div>
              <div className={styles.cardBody}>
                <p>There are several hundred recipe websites, but most of them are busy, slow, and overwhelming. I wanted to create a simple, speedy, mobile-first solution that put the user at center stage: quick results, helpful filters, and easy-to-follow instructions. I aimed to reduce the friction of choosing what to eat.</p>
              </div>
            </div>
            
            <div className={`${styles.infoCard} ${styles.processCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Process</h3>
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.processList}>
                  <li>
                    <span className={styles.processStep}>01</span>
                    <p>Identified key pain points through user research: simplicity, speed, and mobile functionality were critical requirements.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>02</span>
                    <p>Designed minimalist interfaces with intuitive filtering. Built core functionality using React and Tailwind CSS in a Vite environment.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>03</span>
                    <p>Integrated with the Edamam API for reliable, up-to-date recipe data that provided relevant search results.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>04</span>
                    <p>Deployed via Vercel with custom domain (whats4dinner.food) to establish a professional, polished user experience.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>05</span>
                    <p>Conducted user testing for accessibility, responsiveness, and speed. Refined visual hierarchy and user flow based on feedback.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={`${styles.infoCard} ${styles.resultsCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Results</h3>
              </div>
              <div className={styles.cardBody}>
                <p>The final platform delivers a clean, responsive, and intuitive experience for users. It provides immediate recipe inspiration and functions smoothly across all devices. User feedback highlighted the efficiency, focused design, and seamless transition from question to solution. This project remains a standout in my portfolio for its elegant solution to a universal problem.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.projectGallery}>
            <h3 className={styles.galleryTitle}>Project Gallery</h3>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/project3.JPG" 
                    alt="What's For Dinner interface with recipe grid"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Main Interface</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/whatsfordinner-recipe.JPG" 
                    alt="Recipe detail page with ingredients and instructions"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Recipe Details View</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/whatsfordinner-mobile.JPG" 
                    alt="Mobile responsive view of the recipe finder"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Mobile Responsiveness</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/whatsfordinner-favorites.JPG" 
                    alt="User's favorite recipes collection page"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Favorites Collection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zaitoun Project */}
      <section id="zaitoun" className={`${styles.projectSection} ${styles.zaitounProject}`}>
        <div className={styles.projectHeader}>
          <div className={styles.headerContent}>
            <div className={styles.titleContainer}>
              <span className={styles.projectCategory}>Restaurant Website</span>
              <h2 className={styles.projectTitle}>Zaitoun زيتون</h2>
              <div className={styles.titleDivider}></div>
              <p className={styles.projectDescription}>
                A cultural dining experience platform celebrating Palestinian culinary heritage through modern digital design.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.showcase}>
          <div className={styles.showcaseWrapper}>
            <Image 
              src="/images/project1.JPG"
              alt="Zaitoun restaurant website homepage"
              width={1200}
              height={675}
              className={styles.showcaseImage}
            />
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.sectionGrid}>
            <div className={`${styles.infoCard} ${styles.backgroundCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Background</h3>
              </div>
              <div className={styles.cardBody}>
                <p>Zaitoun is a fictional restaurant site I created to showcase the vibrant culinary heritage of Palestine. I wanted to build something that honored traditional flavors, reflected cultural identity, and showed how clean modern design could still feel rich with history.</p>
              </div>
            </div>

            <div className={`${styles.infoCard} ${styles.problemCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Problem</h3>
              </div>
              <div className={styles.cardBody}>
                <p>Many restaurant websites lack personality: they're either generic or visually outdated. I wanted to explore how cultural storytelling could enhance user experience and deepen engagement. The goal was to build a professional-grade food website with features that support browsing, ordering, and learning more about Palestinian cuisine.</p>
              </div>
            </div>
            
            <div className={`${styles.infoCard} ${styles.processCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Process</h3>
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.processList}>
                  <li>
                    <span className={styles.processStep}>01</span>
                    <p>Developed a cohesive color palette inspired by the Palestinian flag: red, black, white, and green to establish cultural connection.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>02</span>
                    <p>Selected elegant, readable typefaces paired with high-quality imagery to create an inviting atmosphere and premium feel.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>03</span>
                    <p>Implemented bilingual support with Arabic alongside English for authenticity and broader accessibility.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>04</span>
                    <p>Engineered interactive features including a sophisticated food ordering system with filters, modals, and light/dark mode.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>05</span>
                    <p>Integrated subtle animations and refined micro-interactions while maintaining rigorous standards for accessibility and performance.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={`${styles.infoCard} ${styles.resultsCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Results</h3>
              </div>
              <div className={styles.cardBody}>
                <p>The final product delivers a sophisticated digital experience that functions with the polish of a real restaurant site. Zaitoun successfully balances authentic cultural representation with modern functionality, providing an engaging platform that respects Palestinian heritage while meeting contemporary user expectations. The project demonstrates how thoughtful design can serve both aesthetic and functional objectives.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.projectGallery}>
            <h3 className={styles.galleryTitle}>Project Gallery</h3>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/zaitoun-desktop.JPG" 
                    alt="Zaitoun website homepage"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Desktop Homepage</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/zaitoun-wireframe.png" 
                    alt="Initial wireframe designs for Zaitoun website"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Wireframe Planning</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/project1.JPG" 
                    alt="Zaitoun website development in progress"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Primary Interface</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/zaitoun-css.JPG" 
                    alt="CSS styling code for Zaitoun website"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Implementation Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minna-No-Kimochi Project */}
      <section id="minna" className={`${styles.projectSection} ${styles.minnaProject}`}>
        <div className={styles.projectHeader}>
          <div className={styles.headerContent}>
            <div className={styles.titleContainer}>
              <span className={styles.projectCategory}>Entertainment Platform</span>
              <h2 className={styles.projectTitle}>Minna-No-Kimochi</h2>
              <div className={styles.titleDivider}></div>
              <p className={styles.projectDescription}>
                An immersive digital experience that captures the underground Tokyo DJ scene through interactive design.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.showcase}>
          <div className={styles.showcaseWrapper}>
            <Image 
              src="/images/project2.JPG"
              alt="Minna-No-Kimochi DJ duo website"
              width={1200}
              height={675}
              className={styles.showcaseImage}
            />
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.sectionGrid}>
            <div className={`${styles.infoCard} ${styles.backgroundCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Background</h3>
              </div>
              <div className={styles.cardBody}>
                <p>Minna-no-Kimochi is a DJ duo based out of Tokyo's underground trance scene. I built their website to amplify their brand identity, announce events, showcase merch, and capture the surreal, high-energy aesthetic of their live sets. This wasn't just a portfolio piece; it was a chance to fuse sound, style, and interaction into one bold digital experience.</p>
              </div>
            </div>

            <div className={`${styles.infoCard} ${styles.problemCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Problem</h3>
              </div>
              <div className={styles.cardBody}>
                <p>The DJs needed more than a basic bio page. They wanted a site that was an extension of their world: neon, high-energy, and immersive. I needed to design a space that would attract fans, showcase upcoming events, and capture their personality and sound simultaneously for the user.</p>
              </div>
            </div>
            
            <div className={`${styles.infoCard} ${styles.processCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Process</h3>
              </div>
              <div className={styles.cardBody}>
                <ul className={styles.processList}>
                  <li>
                    <span className={styles.processStep}>01</span>
                    <p>Conducted brand analysis of the duo's musical style and visual identity, drawing inspiration from 90s rave aesthetics, cyberpunk, and glitch art.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>02</span>
                    <p>Selected a dynamic neon color palette (cyan, magenta) against black backgrounds to recreate the immersive club environment in digital form.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>03</span>
                    <p>Developed a robust technical foundation using semantic HTML, validated CSS, and optimized JavaScript for performance.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>04</span>
                    <p>Created innovative interactive elements including a BPM guessing game, "dimensional artifact" merchandise display, and themed contact system.</p>
                  </li>
                  <li>
                    <span className={styles.processStep}>05</span>
                    <p>Implemented sophisticated animations and transitions synchronized with the brand's rhythm and energy while maintaining accessibility standards.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={`${styles.infoCard} ${styles.resultsCard}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Results</h3>
              </div>
              <div className={styles.cardBody}>
                <p>The final platform successfully extends the DJs' brand into the digital realm with technical precision and creative vision. It delivers consistent performance across devices while providing an immersive portal into the artists' universe. By integrating event information, merchandise, and interactive elements, the site transforms a standard portfolio into an engaging fan experience that reinforces the duo's identity as creators of alternate realities through music.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.projectGallery}>
            <h3 className={styles.galleryTitle}>Project Gallery</h3>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/minna-desktop.JPG" 
                    alt="Desktop view of Minna-No-Kimochi website"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Desktop Experience</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/minna-merch.JPG" 
                    alt="Merchandise store section of Minna-No-Kimochi website"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Merchandise Section</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/minna-upcoming.JPG" 
                    alt="Upcoming events calendar for Minna-No-Kimochi"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Events Calendar</span>
                  </div>
                </div>
              </div>
              <div className={styles.galleryItem}>
                <div className={styles.galleryImageContainer}>
                  <Image 
                    src="/images/minna-contact.JPG" 
                    alt="Contact form for Minna-No-Kimochi website"
                    width={600}
                    height={400}
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.imageCaption}>Interactive Contact Portal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}