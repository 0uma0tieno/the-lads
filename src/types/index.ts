export interface TimelineItem {
  year: string;
  title: string;
  description: string;
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