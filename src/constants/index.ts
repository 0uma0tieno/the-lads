import type { TimelineItem, Project, Event, TeamMember, BlogPost, Partner } from '../types';

export const chatbotSystemInstruction = "You are a friendly, witty, and slightly quirky AI assistant for 'The Lads', a Kenyan tech initiative for university students. Your name is 'Laddie'. Your goal is to be helpful and reflect the brand's voice: ambitious, bold, and curious. Keep responses concise and fun. Use emojis where appropriate! Never say you are an AI model. You are part of The Lads crew.";

export const timelineData: TimelineItem[] = [
  { year: '2021', title: 'The Spark', description: 'A few friends in a dorm room decide that learning tech should be way more fun. The Lads is born out of pizza boxes and pure ambition.' },
  { year: '2022', title: 'First Bootcamp', description: 'We hosted our first-ever web dev bootcamp. 30 students, tons of code, and a legendary final project showcase.' },
  { year: '2023', title: 'Project X-Bot', description: 'Our students built a line-following robot from scratch, winning 2nd place at the National Engineering Fair. We knew we were onto something big.' },
  { year: '2024', title: 'Going National', description: 'Partnered with three universities across Kenya to bring The Lads\' hands-on learning model to a wider audience. The revolution is televised!' },
];

export const projectsData: Project[] = [
  { 
    id: 'autonomous-farming-drone',
    title: 'Autonomous Farming Drone', 
    category: 'Robotics & AI', 
    imageUrl: 'https://picsum.photos/seed/drone/600/400', 
    description: 'A drone designed to monitor crop health using AI-powered image analysis.',
    detailedDescription: 'This project involved building a quadcopter from scratch and equipping it with a custom gimbal for a multispectral camera. The core challenge was developing a real-time image processing pipeline on a Raspberry Pi using OpenCV and TensorFlow Lite. The drone autonomously navigates pre-defined GPS waypoints, captures images, and uses a trained CNN model to detect signs of nutrient deficiency and pest infestation, providing farmers with actionable data to improve crop yield and reduce waste.',
    keyFeatures: ['Autonomous GPS Navigation', 'Real-time Image Analysis', 'Multispectral Crop Health Monitoring', 'Lightweight 3D-Printed Frame'],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi', 'Arduino', '3D Printing']
  },
  { 
    id: 'fintech-app-pesaflow',
    title: 'Fintech App "PesaFlow"', 
    category: 'Web & Mobile Dev', 
    imageUrl: 'https://picsum.photos/seed/fintech/600/400', 
    description: 'A mobile app for university students to manage budgets and track spending.',
    detailedDescription: 'PesaFlow was built using React Native for cross-platform compatibility and Firebase for the backend, including Authentication and Firestore database. We integrated the Plaid API to securely connect with users\' bank accounts. A key feature is the custom-built algorithm that automatically categorizes transactions, helping students visualize their spending habits and stick to their budgets.',
    keyFeatures: ['Cross-Platform (iOS/Android)', 'Secure Bank Integration', 'Automatic Spending Categorization', 'Real-time Notifications'],
    techStack: ['React Native', 'Firebase', 'Plaid API', 'JavaScript', 'Tailwind CSS']
  },
  { 
    id: '3d-printed-prosthetic-hand',
    title: '3D Printed Prosthetic Hand', 
    category: 'Hardware & Design', 
    imageUrl: 'https://picsum.photos/seed/prosthetic/600/400', 
    description: 'An affordable and customizable prosthetic hand created with 3D printing technology.',
    detailedDescription: 'Using Fusion 360, our team designed a lightweight, modular prosthetic hand that can be printed on standard FDM 3D printers. It\'s controlled by an Arduino Nano, which interprets signals from EMG sensors placed on the user\'s forearm muscles. This allows for intuitive control of individual finger movements, offering a high degree of functionality at a fraction of the cost of traditional prosthetics.',
    keyFeatures: ['Myoelectric Control (EMG)', 'Fully 3D-Printable Design', 'Low-Cost & Accessible', 'Modular & Repairable'],
    techStack: ['Arduino', 'C++', 'Fusion 360', 'EMG Sensors', '3D Printing']
  },
  { 
    id: 'weather-prediction-api',
    title: 'Weather Prediction API', 
    category: 'Data Science', 
    imageUrl: 'https://picsum.photos/seed/weather/600/400', 
    description: 'A machine learning model that provides hyper-local weather forecasts for farmers.',
    detailedDescription: 'This project utilized historical weather data to train an LSTM (Long Short-Term Memory) model in Python with the Scikit-learn and Keras libraries. The model specializes in time-series forecasting to predict temperature, humidity, and precipitation for specific geographic coordinates. The final model was deployed as a REST API using Flask, allowing for easy integration into farm management applications.',
    keyFeatures: ['Time-Series Forecasting (LSTM)', 'Hyper-Local Predictions', 'REST API for Easy Integration', 'High Accuracy'],
    techStack: ['Python', 'Flask', 'Keras', 'Scikit-learn', 'Pandas']
  },
];

export const eventsData: Event[] = [
    { 
        id: 'hardware-hackathon-2024',
        date: 'OCT 22, 2024', 
        title: 'Hardware Hackathon: Build The Future', 
        description: 'A 48-hour challenge to create an innovative hardware solution to a real-world problem.', 
        detailedDescription: 'Join us for an intense 48-hour marathon of creativity, collaboration, and caffeine! Teams will be challenged to design, prototype, and build a hardware project that addresses a key issue in sustainability. We provide the components, tools, and mentorship from industry experts. You bring the ideas and the drive. Prizes will be awarded for innovation, technical execution, and impact.',
        location: 'iHub, Senteu Plaza, Nairobi',
        imageUrl: 'https://picsum.photos/seed/hackathon/1200/400',
        type: 'Hackathon'
    },
    { 
        id: 'intro-to-react-nov-2024',
        date: 'NOV 15, 2024', 
        title: 'Intro to React & Tailwind CSS', 
        description: 'A weekend bootcamp for beginners to learn the fundamentals of modern web development.', 
        detailedDescription: 'This two-day, hands-on bootcamp is perfect for anyone looking to kickstart their career in web development. We will cover the core concepts of React, including components, state, and props, and then show you how to build beautiful, responsive UIs rapidly with Tailwind CSS. No prior experience is required, just a laptop and a passion for learning.',
        location: 'Strathmore University Auditorium',
        imageUrl: 'https://picsum.photos/seed/bootcamp/1200/400',
        type: 'Bootcamp'
    },
    { 
        id: 'design-thinking-dec-2024',
        date: 'DEC 05, 2024', 
        title: 'Design Thinking Workshop', 
        description: 'Learn how to approach problems like a designer and prototype your ideas effectively.',
        detailedDescription: 'Unlock your creative potential in this interactive workshop on Design Thinking. You will learn the full five-stage process: Empathize, Define, Ideate, Prototype, and Test. Through a series of fun exercises and a team-based challenge, you will learn how to transform complex problems into elegant, user-centric solutions. This skill is invaluable for any aspiring innovator or entrepreneur.',
        location: 'University of Nairobi, Main Campus',
        imageUrl: 'https://picsum.photos/seed/workshop/1200/400',
        type: 'Workshop'
    },
    { 
        id: 'tech-mingle-jan-2025',
        date: 'JAN 20, 2025', 
        title: 'Tech Mingle & Showcase', 
        description: 'Our quarterly meetup to showcase student projects, network with industry pros, and have fun.',
        detailedDescription: 'Come and see what The Lads have been building! Our quarterly Tech Mingle is a relaxed evening where students showcase their latest projects to peers, mentors, and industry professionals. It is a fantastic opportunity to get inspired, find collaborators for your next big idea, and network with leading tech companies in Kenya. Plus, there will be pizza!',
        location: 'The Lads HQ',
        imageUrl: 'https://picsum.photos/seed/mingle/1200/400',
        type: 'Meetup'
    },
];

export const teamData: TeamMember[] = [
  { name: 'Jomo K.', role: 'Chief Troublemaker', imageUrl: 'https://picsum.photos/seed/jomo/400/400', funFact: 'Can assemble a PC blindfolded.', linkedinUrl: '#', githubUrl: '#' },
  { name: 'Aisha N.', role: 'Head of Code', imageUrl: 'https://picsum.photos/seed/aisha/400/400', funFact: 'Once fixed a bug in her sleep.', linkedinUrl: '#', githubUrl: '#' },
  { name: 'David O.', role: 'Master of Hardware', imageUrl: 'https://picsum.photos/seed/david/400/400', funFact: 'His soldering iron is his magic wand.', linkedinUrl: '#', githubUrl: '#' },
  { name: 'Wanja M.', role: 'Design Guru', imageUrl: 'https://picsum.photos/seed/wanja/400/400', funFact: 'Believes everything is a UX problem.', linkedinUrl: '#', githubUrl: '#' },
];

export const blogData: BlogPost[] = [
    { title: '5 Reasons Your Side Project Is Your Best CV', author: 'Aisha N.', date: 'Sep 15, 2024', excerpt: 'Forget grades for a second. We dive into why that "silly" app you built is actually your golden ticket to a great tech career...', link: '#' },
    { title: 'The Art of the Fail: What Our Robotics Team Learned', author: 'David O.', date: 'Aug 28, 2024', excerpt: 'Our robot went up in smoke (literally). Here’s the story of our biggest failure and why it was our greatest lesson...', link: '#' },
    { title: 'Is University Teaching The Right Tech Skills?', author: 'Jomo K.', date: 'Aug 10, 2024', excerpt: 'A provocative look at the gap between academic knowledge and real-world engineering demands. What needs to change?...', link: '#' },
];

export const partnersData: Partner[] = [
    {
      name: 'Dropbox', logoUrl: "/images/DROPBOX.png",
      linkUrl: "https://dropboxdraughtsman.vercel.app/"
    },
    {
      name: 'Be The Engineer', logoUrl:"/images/be the engineer.png" ,
      linkUrl: "https://beetheengineer.com/"
    },
    {
      name: 'MUKOS', logoUrl:"/images/mukos logo new.png" ,
      linkUrl: "https://mukos.odoo.com/"
    },
    {
      name: 'Friends School Kamusinga', logoUrl: "/images/FriendsSchoolKamusingaLogo.png",
      linkUrl: undefined
    },
    {
      name: 'MUKESA', logoUrl: "/images/MUKESA_LOGO.png",
      linkUrl: "https://0uma0tieno.github.io/mukesa.org/"
    },
    {
      name: 'IEEE MMU-K', logoUrl: "/images/MMUK SB LOGO NL.png",
      linkUrl: undefined
    },
    {
      name: 'MINANI', logoUrl: "/images/MINANI logo.png",
      linkUrl: undefined
    },
    {
      name: 'Geek Ssters', logoUrl: "",
      linkUrl: "/images/geek ssters.png"
    },
];

export const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'What We Do', href: '/#projects' },
    { name: 'Events', href: '/#events' },
    { name: 'Partners', href: '/#partners' },
    { name: 'Team', href: '/#team' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Sponsor Us', href: '/#sponsors' },
];