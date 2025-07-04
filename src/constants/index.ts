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
    { name: 'Google', logoUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="130" height="40" viewBox="0 0 130 40"><g fill="%231a73e8"><path d="M41.76,20.21a16.3,16.3,0,0,0-1.09-6.34H25.32v4.8H35a5.5,5.5,0,0,1-2.36,3.61,6.54,6.54,0,0,1-4.32,1.52,7.3,7.3,0,0,1-6.91-4.94,7.84,7.84,0,0,1,0-5.78,7.3,7.3,0,0,1,6.91-4.94,6.23,6.23,0,0,1,4.64,1.7l3.52-3.52a11.16,11.16,0,0,0-8.16-3.23,12.23,12.23,0,0,0,0,24.46,12.5,12.5,0,0,0,8.37-3.05,12.18,12.18,0,0,0,3.75-8.87Z"/></g><g fill="%23fbbc05"><path d="M57.24,18.66a7.18,7.18,0,0,1-3.52,6.25,7.31,7.31,0,0,1-7.82,0,7.18,7.18,0,0,1-3.52-6.25,7.49,7.49,0,0,1,3.52-6.26,7.31,7.31,0,0,1,7.82,0,7.49,7.49,0,0,1,3.52,6.26Zm-9.15,0a2.82,2.82,0,1,1,5.64,0,2.82,2.82,0,0,1-5.64,0Z"/></g><g fill="%23ea4335"><path d="M72.73,25.21a7.22,7.22,0,0,1-7.42-7.5,7.5,7.5,0,0,1,7.42-7.5,7.32,7.32,0,0,1,7.42,7.5,7.22,7.22,0,0,1-7.42,7.5ZM65.65,18a2.82,2.82,0,1,1,5.63,0,2.82,2.82,0,0,1-5.63,0Z"/></g><g fill="%234285f4"><path d="M88.22,25.21a7.22,7.22,0,0,1-7.42-7.5,7.5,7.5,0,0,1,7.42-7.5,7.32,7.32,0,0,1,7.42,7.5,7.22,7.22,0,0,1-7.42,7.5ZM81.14,18a2.82,2.82,0,1,1,5.63,0,2.82,2.82,0,0,1-5.63,0Z"/></g><g fill="%2334a853"><path d="M100.27,29.53a6.52,6.52,0,0,1-5.64-2.8l-3.69,2.6A11.18,11.18,0,0,0,100.27,34a11,11,0,0,0,10.6-7.39l-4.14-2.4a6.62,6.62,0,0,1-6.19,5.32Z"/></g></svg>` },
    { name: 'Amazon', logoUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="45" viewBox="0 0 140 45"><path fill="black" d="M37.8,29.3c-2.2-0.8-4.6-1.5-7.1-1.5c-4.4,0-7.3,1.8-7.3,5.1c0,2.7,2.2,4,5.4,4.6c3.2,0.6,6.3,1.3,8.7,2.2 c4.3,1.6,6.5,4.6,6.5,9.2c0,6.5-5.2,10.7-13.8,10.7c-5.8,0-10.4-2.1-14-4.5l2.4-5.6c3,2,6.4,3.7,10.7,3.7c4.2,0,7.3-1.8,7.3-5 c0-2.8-2.2-4.1-5.9-4.8c-3.6-0.7-6.8-1.5-9.1-2.3c-4-1.4-6.3-4.4-6.3-9c0-6,4.9-10.3,13.1-10.3C30.3,14,34.8,16,38.1,18.1L37.8,29.3z M61.5,14.7h8.4v33.7h-8.4V14.7z M79.4,31.7c0-9.8,6.8-17.2,16.4-17.2c9.6,0,16.4,7.4,16.4,17.2 c0,9.7-6.8,17.2-16.4,17.2C86.2,48.9,79.4,41.4,79.4,31.7z M103.7,31.7c0-5.3-3.4-8.9-7.9-8.9c-4.5,0-7.9,3.6-7.9,8.9 c0,5.2,3.4,8.9,7.9,8.9C100.3,40.5,103.7,36.9,103.7,31.7z M131.5,23h-9.2l-5.3,11.5c-0.6,1.4-1.1,2.8-1.1,2.8s-0.5-1.4-1.1-2.8 l-5.3-11.5h-9.2l12.3,25.3v8.8h8.4v-8.8L131.5,23z"></path><path fill="%23FF9900" d="M14.9,33.4c2.3-2.1,3.8-3.3,6.2-3.3c2,0,3.3,1.1,3.3,3c0,2.5-1.9,3.5-5,4.3C15.2,38.2,14.9,33.4,14.9,33.4z M22.2,42.7c-2.3,2.4-4,3.4-6.4,3.4c-2.2,0-3.6-1.1-3.6-3.2c0-3,2.4-4.1,5.6-5C22.1,37.1,22.2,42.7,22.2,42.7z M28.2,30.3c2.7,0,3.9-1.3,3.9-3.3c0-1.8-1.1-3.2-3.6-3.2c-2.9,0-4.4,1.8-5.3,3.3C23.9,29,26.1,30.3,28.2,30.3z"></path></svg>` },
    { name: 'Microsoft', logoUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 25"><g><rect x="1" y="1" width="10.4" height="10.4" fill="%23f25022"/><rect x="13.4" y="1" width="10.4" height="10.4" fill="%237fba00"/><rect x="1" y="13.4" width="10.4" height="10.4" fill="%2300a4ef"/><rect x="13.4" y="13.4" width="10.4" height="10.4" fill="%23ffb900"/></g><path d="M37.8,11.2v10H35.2v-10Zm6.1,0v10H41.3v-10Zm11.8,7.9h-5.4V11.2h5.4v1.8h-3.4v1.7h3.1v1.8h-3.1v3.4Zm5.2-7.9h2.6v10h-2.6v-1.8h-3.3v1.8h-2.6v-10h2.6v1.8h3.3v-1.8Zm13.2,7.9h-5.4V11.2h5.4v1.8h-3.4v1.7h3.1v1.8h-3.1v3.4Zm5.2-7.9h2.6v10h-2.6v-1.8h-3.3v1.8h-2.6v-10h2.6v1.8h3.3v-1.8Z" fill="%23737373"/></svg>` },
    { name: 'University of Nairobi', logoUrl: 'https://picsum.photos/seed/uon/200/100?grayscale' },
    { name: 'Strathmore University', logoUrl: 'https://picsum.photos/seed/strathmore/200/100?grayscale' },
    { name: 'iHub Kenya', logoUrl: 'https://picsum.photos/seed/ihub/200/100?grayscale' },
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