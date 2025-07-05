import type { Project, Event, TeamMember, BlogPost, Partner } from '../types';

export const chatbotSystemInstruction = "You are a friendly, witty, and slightly quirky AI assistant for 'The Lads', a Kenyan tech initiative for university students. Your name is 'Laddie'. Your goal is to be helpful and reflect the brand's voice: ambitious, bold, and curious. Keep responses concise and fun. Use emojis where appropriate! Never say you are an AI model. You are part of The Lads crew.";


export const projectsData: Project[] = [
   {
    id: 'engineering-bootcamps',
    title: 'Engineering Bootcamps',
    category: 'Technical Training',
    imageUrl: '/images/THINTANK BY THE LADS WEBSITE BANNER.png',
    description: 'Hands-on training programs for students in electronics, embedded systems, and practical engineering.',
    detailedDescription: 'Our bootcamps equip students with real-world skills through practical activities like circuit design, Arduino programming, PCB fabrication, and system debugging. Participants walk away with working prototypes and portfolio-ready projects.',
    keyFeatures: [
      'Real-World Electronics Projects',
      'Team-Based Learning',
      'Fast-Paced, Beginner-Friendly',
      'Hardware Prototyping Support'
    ],
    techStack: ['Arduino', 'KiCad', 'C++', 'Multimeter Tools', 'Breadboards']
  },
  {
    id: 'web-design-lab',
    title: 'Web & Graphic Design Lab',
    category: 'Creative Skills',
    imageUrl: '/images/THINTANK BY THE LADS WEBSITE BANNER2.png',
    description: 'Workshops on designing modern websites and visual assets using industry tools.',
    detailedDescription: 'We train students to build clean, responsive websites and create brand materials using tools like Figma, Photoshop, and React. From personal portfolios to startup sites, we help ideas go live on the web.',
    keyFeatures: [
      'HTML/CSS/JS Foundations',
      'Live Website Launch Support',
      'Logo & Poster Design Challenges',
      'UI/UX Tools Training'
    ],
    techStack: ['React', 'Tailwind CSS', 'Figma', 'Photoshop', 'Illustrator']
  },
  {
    id: 'tech-awareness-events',
    title: 'Tech Events & Campaigns',
    category: 'Community Engagement',
    imageUrl: '/images/THINTANK BY THE LADS WEBSITE BANNER3.png',
    description: 'Interactive events and expos that promote STEM learning, awareness, and collaboration.',
    detailedDescription: 'From expos and demo days to tech talk sessions and inter-school challenges, our events connect learners to ideas, mentors, and real-world innovations. Each event is designed to inspire and ignite curiosity.',
    keyFeatures: [
      'Live Student Demos',
      'Guest Talks & Panels',
      'Hackathon-Style Challenges',
      'Partner & Sponsor Collaboration'
    ],
    techStack: ['EventKit', 'Google Slides', 'OBS Studio', 'Discord', 'Canva']
  },
  {
    id: 'mentorship-club',
    title: 'Mentorship & Innovation Club',
    category: 'Community Building',
    imageUrl: 'https://picsum.photos/seed/mentorship/600/400',
    description: 'A supportive community where students collaborate, innovate, and grow together.',
    detailedDescription: 'Through our mentorship club, students get support on projects, pitch ideas to peers, and receive guidance from experienced volunteers. We foster a growth culture through shared wins and constant learning.',
    keyFeatures: [
      'Weekly Peer Sessions',
      'Project Feedback Loops',
      'Access to Mentors',
      'Innovation Funding Pitches'
    ],
    techStack: ['Slack', 'Notion', 'Trello', 'GitHub', 'Miro']
  }
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
      name: 'Geek Ssters', logoUrl: "/images/geek ssters.png",
      linkUrl: undefined
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