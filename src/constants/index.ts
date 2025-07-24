export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  // export const clientReviews = [
  //   {
  //     id: 1,
  //     name: 'Emily Johnson',
  //     position: 'Marketing Director at GreenLeaf',
  //     img: 'assets/review1.png',
  //     review:
  //       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mark Rogers',
  //     position: 'Founder of TechGear Shop',
  //     img: 'assets/review2.png',
  //     review:
  //       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  //   },
  //   {
  //     id: 3,
  //     name: 'John Dohsas',
  //     position: 'Project Manager at UrbanTech ',
  //     img: 'assets/review3.png',
  //     review:
  //       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Ether Smith',
  //     position: 'CEO of BrightStar Enterprises',
  //     img: 'assets/review4.png',
  //     review:
  //       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  //   },
  // ];
  
  export const myProjects = [
    {
      title: 'Ai Email Summarizer',
      desc: 'AI Email Summarizer is a platform that uses Gemini AI API to generate concise summaries of email content, enhancing productivity by providing quick insights from emails.',
      subdesc:
       " Built with React for the frontend, Spring Boot for the backend, and powered by the Gemini AI API for email processing and summarization.",
      href: 'https://github.com/cosmicdanish1/spring-wrriting-ai',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        
        {
          id: 1,
          name: 'java',
          path: '/assets/java.png',
        },
        {
          id: 2,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 3,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 5,
          name: 'Springboot',
          path: '/assets/springboot.png',
        },
       
      ],
    },
    {
      title: 'REAL-TIME AI FACE LANDMARK DETECTION',
      desc: 'This real-time application utilizes TensorFlow to detect facial landmarks, enabling advanced features such as emotion recognition and facial expression tracking with minimal latency.',
      subdesc:
        'Built with React for the frontend, the app integrates TensorFlow’s powerful models to provide fast and accurate facial landmark detection, ensuring seamless performance even in real-time environments.',
      href: 'https://frolicking-pixie-c67d09.netlify.app',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Tensorflow',
          path: '/assets/tensarflow.png',
        },
      ],
    },
    {
      title: 'The Super Saga - Awesome websites',
      desc: 'Step into a world of cinema where Marvel, DC, anime, Hollywood, and Bollywood come together. Get the latest news, in-depth reviews, fan theories, and behind-the-scenes insights on your favorite movies and shows',
      subdesc:
        'From superhero sagas to anime epics and Bollywood dramas, we cover it all. Discover hidden details, explore character breakdowns, and dive deep into the stories that shape the entertainment industry',
      href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'GSAP',
          path: '/assets/gsap.png',
        },
      ],
    },
    // {
    //   title: 'Horizon - Online Banking Platform',
    //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //   subdesc:
    //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //   texture: '/textures/project/project4.mp4',
    //   logo: '/assets/project-logo4.png',
    //   logoStyle: {
    //     backgroundColor: '#0E1F38',
    //     border: '0.2px solid #0E2D58',
    //     boxShadow: '0px 0px 60px 0px #2F67B64D',
    //   },
    //   spotlight: '/assets/spotlight4.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  interface Sizes {
    deskScale: number;
    deskPosition: [number, number, number];
    cubePosition: [number, number, number];
    reactLogoPosition: [number, number, number];
    ringPosition: [number, number, number];
    targetPosition: [number, number, number];
  }

  export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean): Sizes => {
    return {
      deskScale: isSmall ? 1.4 : isMobile ? 2 : 3,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-3, 0, 0] : isMobile ? [-3.6, 0, 7] : isTablet ? [-6, -1.5, 7] : [-6, -1.5, 7],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Hire Me ',
      pos: 'Software Developer',
      duration: '2025 - Present',
      title: "I'm a versatile software developer with experience in Java, Spring Boot, Node.js, React, Angular, and more. I can adapt to any tech stack and build scalable, efficient solutions. Passionate about technology, problem-solving, and continuous learning",
      icon: '/assets/questionMark.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Freelancer',
      pos: 'Web Developer',
      duration: '1/2024 - Present',
      title: "As a freelancer, I’ve honed my skills across various technologies, including Spring Boot, React, Java, Angular, React Native, Python, and web scraping. I use Figma as my collaborative design platform, enabling seamless feedback and iterations.",
      icon: '/assets/freelancer.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'CAI Info India Pvt. Ltd.',
      pos: 'Junior Software Developer',
      duration: '2/2023 - 12/2023',
      title: "At CAI Info India, I worked as a Junior Software Developer, specializing in Java, Spring Boot, CMS software, and microservices. I contributed to building scalable backend solutions and managing content-driven applications.",
      icon: '/assets/cai.png',
      animation: 'salute',
    },
    
  ];