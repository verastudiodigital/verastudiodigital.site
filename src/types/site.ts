export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  id: 'facebook' | 'tiktok' | 'youtube' | 'instagram' | 'linkedin';
  label: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName:
    | 'Store'
    | 'UtensilsCrossed'
    | 'Scissors'
    | 'Briefcase'
    | 'Truck'
    | 'Sprout'
    | 'Building2';
}

export interface ProblemSolutionItem {
  id: string;
  problem: string;
  impact: string;
  solutionTitle: string;
  solutionSummary: string;
  serviceSlug: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  slogan: string;
  positioning: string;
  description: string;
  url: string;
  locale: string;
  country: string;
  city: string;
  coverage: string;
  ownerName: string;
  logo: {
    horizontal: string;
    square: string;
    alt: string;
  };
  colors: {
    primary: string;
    primaryDark: string;
    background: string;
    surface: string;
    textMain: string;
    textMuted: string;
    border: string;
  };
  contact: {
    whatsappNumber: string;
    whatsappDisplay: string;
    email: string;
  };
  socials: SocialLink[];
  defaultWhatsappMessage: string;
}
