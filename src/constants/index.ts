import type { Project, Event, TeamMember, BlogPost, Partner, SponsorshipTier } from '../types';

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
   { 
    name: 'Ruud O.', 
    role: 'Chairperson', 
    imageUrl: '/images/Ruud.jpg', 
    linkedinUrl: 'https://www.linkedin.com/in/ruudouma/', 
    githubUrl: 'https://github.com/0uma0tieno' 
  },
  { 
    name: 'Bornface O.', 
    role: 'Lead Coordinator', 
    imageUrl: '/images/bonny.jpg', 
    linkedinUrl: 'https://www.linkedin.com/in/bornface-o-oduor-4478161bb/?originalSubdomain=ke', 
    githubUrl: '#' 
  },
  { 
    name: 'Emmanuel O.', 
    role: 'Events Coordinator', 
    imageUrl: '/images/Manuh.jpg', 
    linkedinUrl: '#', 
    githubUrl: '#' 
  },
  { 
    name: 'MarkRichard W.', 
    role: 'Industry Liaison', 
    imageUrl: '/images/mark.png', 
    linkedinUrl: '#', 
    githubUrl: '#' 
  },
  { 
    name: 'Trevor M.', 
    role: 'Publicity Lead', 
    imageUrl: '/images/trevor.jpg', 
    linkedinUrl: '#', 
    githubUrl: '#' 
  },
  { 
    name: 'John O.', 
    role: 'Head of Logistics', 
    imageUrl: 'https://picsum.photos/seed/titus/400/400', 
    linkedinUrl: '#', 
    githubUrl: '#' 
  },
  { 
    name: 'Spencer S.', 
    role: 'Managing Director', 
    imageUrl: 'https://picsum.photos/seed/mike/400/400', 
    linkedinUrl: '#', 
    githubUrl: '#' 
  },
  { 
    name: 'Leon A.', 
    role: 'Treasurer', 
    imageUrl: 'https://picsum.photos/seed/njeri/400/400', 
    linkedinUrl: '#', 
    githubUrl: '#' 
  },
  { 
    name: 'Derrick T.', 
    role: 'Webmaster', 
    imageUrl: '/images/derrick.jpg', 
    linkedinUrl: '#', 
    githubUrl: '#' 
  },
  
];

export const blogData: BlogPost[] = [
    {
    id: 'engineering-bootcamps',
    title: 'What We Learned From Our STEM Outreach to Lorngosua',
    author: 'Ruud O.',
    date: 'Apr 2, 2025',
    excerpt: 'We took engineering to the edge of Kajiado. Here’s what the kids taught us about innovation, creativity — and grit.',
    details: 'Our recent outreach to Lorngosua Primary School was a humbling experience. We introduced basic electronics and coding to students who had never seen a circuit board before. Their enthusiasm and creativity reminded us why we started this journey in the first place.',
    link: '#'
  },
  {
    id: 'pcb-design-training',
    title: 'Designing PCBs from Scratch: Lessons from Our First Training',
    author: 'Bornface O.',
    date: 'Jun 8, 2025',
    excerpt: 'Before the soldering iron, there’s the blueprint. Our hands-on PCB design session turned sketches into real circuits.',
    details: 'Our first PCB design training was a success! Participants learned how to take their ideas from paper to prototype using KiCad. We covered everything from schematic capture to board layout, and even exported Gerber files for manufacturing. The excitement of seeing their designs come to life was priceless.',
    link: '#'
  },
  {
    id: 'stem-competition',
    title: 'How We Pulled Off a STEM Competition With 5 Schools and No Budget',
    author: 'John O.',
    date: 'Jul 1, 2025',
    excerpt: 'Logistics were wild, the kits almost didn’t arrive, and the judging was tense. But what a win for STEM in schools.',
    details: 'Organizing a STEM competition with no budget was a challenge, but we pulled it off! With support from local schools and volunteers, we created an event that showcased student innovation. Teams competed in challenges ranging from robotics to coding, and the energy was electric. It was a testament to what can be achieved with passion and community support.',
    link: '#'
  },
  {
    id: 'tripartite-attachment-program',
    title: 'From Class to Industry: Why Our Attachment Program Matters',
    author: 'MarkRichard W.',
    date: 'July 8, 2025',
    excerpt: 'We partnered with three companies to get MMU and JKUAT students into real engineering environments. Here’s what we learned.',
    details: 'Our attachment program connects students with industry leaders to gain real-world experience. By partnering with three companies, we provided students from Multimedia University and JKUAT with opportunities to work on live projects in electrical panel design and automation. The feedback has been overwhelmingly positive, with students reporting increased confidence and practical skills.',
    link: '#'
  },
  {
    id: 'eplan-training',
    title: 'EPLAN Training: Bridging the Gap Between Lab Work and Industry',
    author: 'Emmanuel O.',
    date: 'May 24, 2025',
    excerpt: 'Control panels, wiring diagrams, and real-world simulation. EPLAN turned out to be more than software — it was perspective.',
    details: 'Our EPLAN training session was a game-changer for students looking to enter the industrial automation field. Participants learned how to create professional-grade wiring diagrams and control panel layouts, gaining skills that are highly sought after in the job market. The hands-on approach made complex concepts accessible and engaging.',
    link: '#'
  }
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

export const sponsorshipTiers: SponsorshipTier[] = [
    {
        name: 'Community Partner',
        level: 'Starting from $1,000',
        description: 'Ideal for companies who want to support the tech community and increase their brand awareness.',
        benefits: [
            'Logo placement on our website',
            'Social media shout-out across all platforms',
            'Mention in our monthly newsletter',
            'Tickets to our quarterly Tech Mingle event',
        ],
    },
    {
        name: 'Innovation Partner',
        level: 'Starting from $5,000',
        description: 'A great fit for businesses looking to engage directly with emerging tech talent.',
        highlight: true,
        benefits: [
            'All benefits of Community Partner',
            'Logo placement on event banners & materials',
            'Opportunity to send mentors to our bootcamps',
            'Option to host a branded workshop',
            'Early access to our student project showcase',
        ],
    },
    {
        name: 'Visionary Partner',
        level: 'Contact for details',
        description: 'For organizations committed to shaping the future of African tech at the highest level.',
        benefits: [
            'All benefits of Innovation Partner',
            'Naming rights for a flagship bootcamp or hackathon',
            'A keynote slot at a major event',
            'Direct recruitment pipeline from our top graduates',
            'Co-branded content (blog posts, case studies)',
        ],
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