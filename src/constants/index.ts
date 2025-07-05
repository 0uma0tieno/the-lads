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
  id: 'mentorship',
  title: 'Mentorship & STEM Outreaches',
  category: 'Community Building',
  imageUrl: '/images/THINTANK BY THE LADS WEBSITE BANNER4.png',
  description: 'A growing community where students support each other, mentor others, and ignite a passion for STEM across schools.',
  detailedDescription: 'Our mentorship arm doesn’t just stop at university — we reach out to younger learners too. We’ve mentored students in various high schools, including Naning’oi Girls (Kajiado), Uthiru Girls, and Riara Springs, through STEM outreach programs. In 2024, we organized a successful STEM competition that brought together several private schools to compete in innovation-based challenges — a celebration of creativity and engineering spirit. Within our club, members also receive ongoing guidance on their personal projects, career growth, and pitch their ideas in a peer-driven innovation space.',
  keyFeatures: [
    'STEM Outreach in Schools ',
    'Host Inter-School STEM Competitions',
    'One-on-One Mentorship & Project Coaching'
  ],
  techStack: ['Slack', 'Notion', 'Trello', 'GitHub', 'Miro']
  }
];

export const eventsData: Event[] = [
  {
    id: 'pcb-design-training',
    date: 'JAN 01, 2025',
    title: 'PCB Design Training',
    description: 'An advanced workshop on printed circuit board (PCB) design using KiCad and prototyping tools.',
    detailedDescription: 'This 6-week workshop equipped participants with skills to design, simulate, and export custom PCBs. Attendees learned schematic design, board layout, and how to prepare Gerber files for manufacturing using KiCad.',
    location: 'Multimedia University',
    imageUrl: '/images/WHAT WEVE BEEN UP TO2.png',
    type: 'Training'
  },  
  {
    id: 'stem-outreach-kikuyu',
    date: 'MAR 10, 2025',
    title: 'STEM Outreach – Kikuyu Boys',
    description: 'Empowering high school students through a one-day interactive engineering experience.',
    detailedDescription: 'In this outreach to Kikuyu Boys High School, our team guided students through practical sessions in electronics and programming, giving them a glimpse of what future careers in STEM could look like.',
    location: 'Kikuyu Boys High School, Kiambu',
    imageUrl: '/images/WHAT WEVE BEEN UP TO.png',
    type: 'Outreach'
  },
  
  {
    id: 'eplan-electrical-training',
    date: 'MAY 20, 2025',
    title: 'EPLAN Electrical Design Training',
    description: 'Hands-on training on industrial electrical design using EPLAN software.',
    detailedDescription: 'Participants learned how to create professional-grade wiring diagrams and control panel layouts using EPLAN. The training was ideal for those looking to enter industrial automation or electrical system design.',
    location: 'Virtual Training',
    imageUrl: '/images/WHAT WEVE BEEN UP TO3.png',
    type: 'Training'
  },
  { 
    id: 'stem outreach Lorngosua',
    date: 'JUN 15, 2025',
    title: 'STEM Outreach – Lorngosua',
    description: 'An outreach event focused on inspiring students in marginalized communities to explore STEM fields.',
    detailedDescription: 'The Lads team visited Lorngosua in Kajiado County for a full-day STEM outreach. We conducted hands-on sessions in basic electronics, coding, and design thinking, aimed at sparking curiosity and interest in engineering among young learners.',
    location: 'Lorngosua Primary, Kajiado County',
    imageUrl: '/images/WHAT WEVE BEEN UP TO4.png',
    type: 'Outreach'
  },
  {
    id: 'TRIPARTITE Attachment Program',
    date: 'JAN 05, 2025',
    title: 'TRIPARTITE Attachment Program',
    description: 'Attachment program for MMU and JKUAT students.',
    detailedDescription: 'In 2025, The Lads secured collaboration with three leading companies to offer structured attachment opportunities. This program provides real-world experience to students from Multimedia University and JKUAT in fields electrical panel design, automation and control.',
    location: 'Multimedia University of Kenya',
    imageUrl: '/images/WHAT WEVE BEEN UP TO5.png',
    type: 'Partnership'
  }
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