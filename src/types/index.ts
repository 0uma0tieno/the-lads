export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  date: string; // ISO date format
  year: string;
  events: {
    title: string;
    description: string;
    imageUrl?: string;
  }[];
}
  


export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description:string;
  detailedDescription: string;
  keyFeatures?: string[];
  techStack?: string[];
}

export interface Event {
  id: string;
  date: string;
  title:string;
  description: string;
  detailedDescription: string;
  location: string;
  imageUrl: string;
  type: 'Bootcamp' | 'Hackathon' | 'Workshop' | 'Meetup' | 'Outreach' | 'Training' | 'Partnership' | 'Conference' | 'Webinar' | 'Networking' | 'Seminar' | 'Panel Discussion' | 'Community Event';
}

export interface TeamMember {
  funFact: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  details: string;
  author: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface Partner {
  linkUrl: string | undefined;
  name: string;
  logoUrl: string;
}

export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

export interface SponsorshipTier {
  name: string;
  level: string;
  description: string;
  benefits: string[];
  highlight?: boolean;
}

export interface ContentData {
  getInTouch: any;
  siteMetadata: {
    title: string;
    brandName: string;
    brandNameWithPeriod: string;
  };
  
  chatbotSystemInstruction: string;
  hero: {
    line1: string;
    line2: string;
    line3: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
  };
  timelineData: TimelineItem[];
  projects: {
    title: string;
    subtitle: string;
  };
  projectsData: Project[];
  events: {
    title: string;
    subtitle: string;
  };
  eventsData: Event[];
  partners: {
    title: string;
    subtitle: string;
  };
  partnersData: Partner[];
  team: {
    title: string;
    subtitle: string;
  };
  teamData: TeamMember[];
  blog: {
    title: string;
    subtitle: string;
  };
  blogData: BlogPost[];
  sponsors: {
    title: string;
    subtitle: string;
    buttonText: string;
    benefits: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      interests: string[];
      messagePlaceholder: string;
      submitButtonText: string;
    };
  };
  registrationModal: {
    title: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      universityLabel: string;
      submitButtonText: string;
      loadingText: string;
    };
    success: {
      title: string;
      message: string;
      closeButtonText: string;
    };
    error: string;
  };
  footer: {
    description: string;
    navigateTitle: string;
    connectTitle: string;
    contactLinkText: string;
    copyrightText: string;
  };
}