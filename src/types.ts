export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  idealClient: string;
  iconName: string; // Used to dynamic render Lucide icons
}

export interface CaseStudy {
  overview: string;
  problem: string;
  creativeDirection: string;
  moodboardKeywords: string[];
  logoExploration: string;
  finalLogoDescription: string;
  colorPalette: { name: string; hex: string }[];
  typography: { role: string; fontName: string; sample: string }[];
  brandApplications: string[];
  socialMediaMockupUrl: string;
  websiteMockupUrl: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  deliverables: string[];
  resultStatement: string;
  imageUrl: string;
  videoUrl?: string;
  caseStudy: CaseStudy;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  type: 'logo' | 'social' | 'web' | 'packaging' | 'banner';
  before: {
    label: string;
    image: string; // Canvas representation or direct description/graphic
    description: string;
  };
  after: {
    label: string;
    image: string;
    description: string;
  };
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
}
