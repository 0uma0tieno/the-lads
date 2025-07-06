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
    title: 'Web & Graphic Design',
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
    linkedinUrl: 'https://www.linkedin.com/in/markrichard-wahogo-smiek-7b813522a/', 
    githubUrl: 'https://github.com/Mark-Wahogo' 
  },
  { 
    name: 'Trevor M.', 
    role: 'Publicity Lead', 
    imageUrl: '/images/trevor.jpg', 
    linkedinUrl: 'https://www.linkedin.com/in/trevor-momanyi-254-ke/', 
    githubUrl: '#' 
  },
  { 
    name: 'John O.', 
    role: 'Head of Logistics', 
    imageUrl: '/images/Olweny.png', 
    linkedinUrl: 'https://www.linkedin.com/in/john-olweny-855537256/?originalSubdomain=ke', 
    githubUrl: 'https://github.com/gopeanalytics' 
  },
   { 
    name: 'Eugene G.', 
    role: 'Secretary', 
    imageUrl: '/images/gusmao.png', 
    linkedinUrl: 'https://github.com/book-engineer', 
    githubUrl: 'https://github.com/book-engineer' 
  },
  { 
    name: 'Spencer S.', 
    role: 'Managing Director', 
    imageUrl: '/images/Spencer.jpeg', 
    linkedinUrl: 'https://www.linkedin.com/in/spencer-sakwa-021392290/', 
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
    linkedinUrl: 'https://www.linkedin.com/in/derrick-tarus-02b261307/', 
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
    details: `
In April 2024, a team from The Lads journeyed deep into Kajiado County to reach Lorngosua, a remote area with limited access to technology and almost no exposure to STEM education. This outreach wasn’t just about showing off cool gadgets or fancy presentations. It was about bridging a digital divide and sparking imagination where opportunity had been scarce.

We spent the day with students aged 9 to 16, running hands-on sessions covering the basics of electricity, robotics, and simple coding using microcontrollers like Arduino. We were blown away by how quickly the learners adapted, especially when given the chance to build something tangible. One of the highlights was watching a group of students wire up an LED traffic light simulation — their excitement lit up the room.

But perhaps the most powerful moment was when one girl asked, “Can I really build machines that work?” That one question made every mile of travel worth it.

Key takeaways from the Lorngosua outreach:

- Accessibility is everything. Without power, we had to adapt by using solar-charged power banks and offline resources.
- STEM curiosity is universal, it just needs the right spark.
- Exposure transforms mindset. After our session, several students expressed interest in becoming engineers and inventors.

This visit wasn’t the end, it was the beginning. We’re now exploring how to keep supporting Lorngosua through follow-up material, online mentorship, and by collaborating with initiatives like IEEE’s Connecting the Unconnected.

STEM is not a privilege, it’s a right. And we’re on a mission to deliver it, one school at a time.
    `,
    link: '#'
  },
  {
    id: 'pcb-design-training',
    title: 'Designing PCBs from Scratch: Lessons from Our First Training',
    author: 'Bornface O.',
    date: 'Jun 8, 2025',
    excerpt: 'Before the soldering iron, there’s the blueprint. Our hands-on PCB design session turned sketches into real circuits.',
    details: `
As part of our mission to make engineering practical, The Lads organized a PCB design training session that turned theory into real hardware. The goal? Teach students how to go from idea → schematic → printed circuit board, using KiCad and hands-on techniques.

The training started with basic electronic design principles — component symbols, schematic capture, and understanding datasheets. Then, we introduced KiCad, guiding participants step-by-step on how to:

1. Draw their circuits
2. Create netlists and footprints
3. Route traces and design boards
4. Generate Gerber files for manufacturing

The session became a turning point for many students. For the first time, they realized the bridge between classroom circuit diagrams and physical boards they could build or even commercialize.

What made this training unique:

- We emphasized open-source tools like KiCad to eliminate cost barriers.
- Students worked in groups to simulate real-world collaboration.
- Mentors from the PCB industry joined in for Q&A and portfolio advice.

We ended the day with a "PCB Showcase," where every group explained their design logic, trade-offs, and improvements for future iterations. From battery-powered phone chargers to logic puzzles, the creativity was next-level.

PCB design is no longer a niche skill. It’s a gateway to embedded systems, robotics, and hardware entrepreneurship.
    `,
    link: '#'
  },
  {
    id: 'stem-competition',
    title: 'How We Pulled Off a STEM Competition With 5 Schools and No Budget',
    author: 'John O.',
    date: 'Jul 1, 2025',
    excerpt: 'Logistics were wild, the kits almost didn’t arrive, and the judging was tense. But what a win for STEM in schools.',
    details: `
They said it couldn’t be done. But we did it. The Lads organized and executed a full-blown interschool STEM competition — with zero external funding, just pure hustle and collaboration.

Held in Nairobi, the event brought together five private schools to compete in challenges ranging from robot line-following and logic design to engineering quizzes and product pitching.

With limited resources, we improvised:
- We borrowed kits from friends and university labs.
- Volunteers printed rulebooks and certificates using personal printers.
- Judges were drawn from alumni, industry mentors, and university professors.

Each school formed a team of 5, and we judged them on:
- Creativity and originality
- Functionality and execution
- Teamwork and presentation

The energy was electric. Students stayed long after the awards ceremony to network, share tools, and exchange contacts. Some teams even asked to start joint projects afterward.

Our big wins:

- The top teams received internship referrals from our partners.
- The event opened the door for future STEM fairs — this time with sponsors already interested.
- One of the guest schools reached out asking us to run workshops for their staff.

Innovation thrives under constraint — and this competition proved it.
    `,
    link: '#'
  },
  {
    id: 'tripartite-attachment-program',
    title: 'From Class to Industry: Why Our Attachment Program Matters',
    author: 'MarkRichard W.',
    date: 'Jul 8, 2025',
    excerpt: 'We partnered with three companies to get MMU and JKUAT students into real engineering environments. Here’s what we learned.',
    details: `
In a world where job markets demand experience before opportunity, internships and attachments are often the missing link for engineering students. That’s why The Lads made it a priority to do more than teach — we now connect.

Over the past 3 months, we’ve partnered with three engineering firms to provide structured industrial attachments to students from MMU and JKUAT.

These aren’t just casual placements. They’re built around learning paths, real-world challenges, and technical reporting. Students join engineering teams, shadow professionals, and contribute to live projects.

How we did it:
- We surveyed over 60 students on their skill gaps and goals.
- We designed a proposal showing companies the value of mentoring fresh talent.
- We helped students build digital CVs, GitHub profiles, and portfolios.
- We created a shortlisting and recommendation system for both sides.

Why this matters:
- Students gain portfolio-ready experiences to complement their academics.
- Companies get access to energetic, trainable, junior talent.
- It sets a standard for how student-industry collaboration should look.

We're now working to grow this model into an official "Lads Attachment Track" — complete with onboarding, progress tracking, and post-placement mentorship.
    `,
    link: '#'
  },
  {
    id: 'eplan-training',
    title: 'EPLAN Training: Bridging the Gap Between Lab Work and Industry',
    author: 'Emmanuel O.',
    date: 'May 24, 2025',
    excerpt: 'Control panels, wiring diagrams, and real-world simulation. EPLAN turned out to be more than software — it was perspective.',
    details: `
EPLAN is not your average student software — it's an industry-grade electrical design tool used in professional automation, control panel design, and smart factory planning. And yet, we decided to demystify it and bring it to university students in a way that made it both accessible and exciting.

Our EPLAN Training Workshop started with a big question: What happens after you've built a circuit on a breadboard? We introduced the idea of real-world industrial schematics — the kind used in factories, substations, and control systems.

What we covered:
- How to create and manage complex electrical diagrams
- Understanding how EPLAN automates cross-referencing and terminal management
- Wiring cabinet layouts and generating bills of materials (BOM)
- Simulating error-free control logic design before deployment

Students from MMU, JKUAT, and TUK joined in, and many of them had never seen professional-grade software in action. By the end of the day, they were designing 3-phase motor starters, full panel schematics, and organizing outputs with ease.

Impact:
- 85% of attendees had never used EPLAN before — but now include it in their CVs.
- One student received a job interview offer days after showcasing their EPLAN project on LinkedIn.
- We are now partnering with mentors from the automation industry to guide students on EPLAN certification and real projects.

With tools like EPLAN, students no longer just dream about industry — they simulate it, wire it, and design it.
    `,
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