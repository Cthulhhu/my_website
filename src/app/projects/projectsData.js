const projectsData = [
    {
      id: 'zaitoun',
      title: 'ZAITOUN زيتون',
      description: 'A vibrant restaurant website featuring authentic Palestinian cuisine. Blends storytelling with elegant modern design with cultural elements. Includes a reservation form, and full ordering system with bilingual support.',
      image: '/images/project1.jpg',
      imageAlt: 'Zaitoun restaurant website homepage',
      showcase: '/images/project1.JPG',
      subtitle: 'Designing for Heritage: Bringing Authentic Palestinian Flavors to the Web',
      background: 'Zaitoun is a fictional restaurant site I created to showcase the vibrant culinary heritage of Palestine. I wanted to build something that honored traditional flavors, reflected cultural identity, and showed how clean modern design could still feel rich with history.',
      problem: 'Many restaurant websites lack personality: they\'re either generic or visually outdated. I wanted to explore how cultural storytelling could enhance user experience and deepen engagement. The goal was to build a professional-grade food website with features that support browsing, ordering, and learning more about Palestinian cuisine.',
      process: [
        'The design process began with creating a color palette inspired by the Palestinian flag: red, black, white, and green.',
        'I chose elegant, readable typefaces and used strong, high-quality imagery to give the site an inviting feel.',
        'I incorporated Arabic alongside English for authenticity and built out an interactive food ordering experience that included filters, buttons, modals, and even a light/dark mode toggle.',
        'I created an add-to-cart system, a past orders page, and a reservation form using React.',
        'I also included subtle animations and hover effects for polish. Every detail from spacing to typography was tested for clarity and accessibility.'
      ],
      results: 'Zaitoun functions like a real restaurant site and feels elevated. The final product successfully merges design and functionality, providing a respectful, engaging digital experience that pays tribute to Palestinian culture while also standing out as a professional web project.',
      gallery: [
        { image: '/images/project1.JPG', alt: 'Zaitoun restaurant website homepage' },
        { image: '/images/zaitoun-wireframe.png', alt: 'Initial wireframe designs for Zaitoun website' },
        { image: '/images/zaitoun-start.JPG', alt: 'Zaitoun website development in progress' },
        { image: '/images/zaitoun-css.JPG', alt: 'CSS styling code for Zaitoun website' }
      ]
    },
    {
      id: 'minna',
      title: 'MINNA-NO-KIMOCHI',
      description: 'A neon-drenched web experience created for a Tokyo-based DJ duo, blending rave culture, glitch art, and interactive design into a surreal digital world. Features include a BPM guessing game, merch store, and immersive contact forms.',
      image: '/images/project2.jpg',
      imageAlt: 'Minna-No-Kimochi DJ duo website',
      showcase: '/images/project2.JPG',
      subtitle: 'Raw Beats, Vivid Design: Building a Digital Dimension for a Tokyo DJ Duo',
      background: 'Minna-no-Kimochi is a DJ duo based out of Tokyo\'s underground trance scene. I built their website to amplify their brand identity, announce events, showcase merch, and capture the surreal, high-energy aesthetic of their live sets. This wasn\'t just a portfolio piece; it was a chance to fuse sound, style, and interaction into one bold digital experience.',
      problem: 'The DJs needed more than a basic bio page. They wanted a site that was an extension of their world: neon, high-energy, and immersive. I needed to design a space that would attract fans, showcase upcoming events, and capture their personality and sound simultaneously for the user.',
      process: [
        'I started by analyzing the duo\'s music and visual style, pulling inspiration from 90s rave posters, cyberpunk aesthetics, and glitch art. I chose vibrant neon colors (cyan, magenta) on black backgrounds to simulate a club-like experience.',
        'I built the site using semantic HTML, valid CSS, and JavaScript to create a strong foundation.',
        'I incorporated playful but purposeful features like a BPM guessing game, a "dimensional artifact" merch section, and a themed contact form rebranded as "Join Our Dimension".',
        'I tested each section to ensure responsiveness and UX flow, and every interaction with hover effects, toggles, and animations was crafted to feel alive and in rhythm with the brand. The entire site was styled with custom fonts and precise visual hierarchy to guide the user without sacrificing personality.'
      ],
      results: 'The final website became a vibrant, interactive extension of the DJs\' brand. It performs smoothly across devices, draws visitors into their universe, and reinforces their identity as creators of alternate realities through music. Users can explore events, shop merch, and even play a mini-game turning a portfolio site into a fully immersive fan experience.',
      gallery: [
        { image: '/images/minna-desktop.jpg', alt: 'Desktop view of Minna-No-Kimochi website' },
        { image: '/images/minna-merch.JPG', alt: 'Merchandise store section of Minna-No-Kimochi website' },
        { image: '/images/minna-upcoming.JPG', alt: 'Upcoming events calendar for Minna-No-Kimochi' },
        { image: '/images/minna-contact.JPG', alt: 'Contact form for Minna-No-Kimochi website' }
      ]
    },
    {
      id: 'dinner',
      title: 'WHAT\'S FOR DINNER?',
      description: 'A clean, fast recipe finder built to solve the daily dinner dilemma. Mobile-first, API-driven, and designed for instant, stress-free meal inspiration, all delivered through a polished, intuitive interface.',
      image: '/images/project3.jpg',
      imageAlt: 'What\'s For Dinner recipe finder application',
      showcase: '/images/project3.JPG',
      subtitle: 'From Clueless to Confident: A Recipe Finder That Solves the "What\'s for Dinner?" Dilemma',
      background: 'Every evening, my mom would ask the same question, "What\'s for dinner?"—and we\'d both come up blank. I realized this wasn\'t just a family issue, but a common one. So I created \'What\'s for Dinner?\', a web app that helps users quickly discover recipe ideas using what they already have or crave. The goal was to reduce decision fatigue and turn that daily moment of frustration into something easy and even fun.',
      problem: 'There are several hundred recipe websites, but most of them are busy, slow, and overwhelming. I wanted to create a simple, speedy, mobile-first solution that put the user at center stage: quick results, helpful filters, and easy-to-follow instructions. I aimed to reduce the friction of choosing what to eat.',
      process: [
        'I started by identifying key pain points: users want simplicity, speed, and something that actually works on their phones.',
        'The design emphasized minimalism and intuitive filtering. Using React and Tailwind CSS in a Vite development environment, I built the site\'s core functionality.',
        'I sourced real recipe data using the Edamam API, ensuring search results were relevant and up-to-date.',
        'To give the site a polished, professional feel, I deployed it using Vercel and even purchased a custom domain: whats4dinner.food.',
        'I tested for accessibility, responsiveness, and load speed. After refining the visual hierarchy and contrast, I conducted a round of user testing with friends and family, using their feedback to improve layout, usability, and API integration.'
      ],
      results: 'The final site is clean, responsive, and intuitive. It provides recipe inspiration in seconds and works smoothly across devices. Users appreciated the speed, the focused design, and how easy it was to go from "What\'s for dinner?" to "Let\'s cook this." It remains one of the projects I\'m most proud of.',
      gallery: [
        { image: '/images/project3.JPG', alt: 'What\'s For Dinner main interface showing recipe grid' },
        { image: '/images/whatsfordinner-recipe.jpg', alt: 'Recipe detail page with ingredients and instructions' },
        { image: '/images/whatsfordinner-mobile.jpg', alt: 'Mobile responsive view of the recipe finder' },
        { image: '/images/whatsfordinner-favorites.jpg', alt: 'User\'s favorite recipes collection page' }
      ]
    }
  ];
  
  export default projectsData;