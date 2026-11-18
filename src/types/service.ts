import type { FAQItem } from './site';

export type ServiceIconName =
  | 'MessageSquareText'
  | 'BookOpenCheck'
  | 'Palette'
  | 'BarChart3'
  | 'Globe'
  | 'Smartphone';

export interface ServicePlan {
  id: string;
  name: string;
  priceLabel: string;
  priceAmount: number;
  billingNote?: string;
  highlighted?: boolean;
  summary: string;
  deliverables: string[];
  whatsappMessage: string;
}

export interface ServiceItem {
  slug: string;
  order: number;
  name: string;
  shortName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  mainBenefit: string;
  startingPrice: string;
  iconName: ServiceIconName;
  problemsSolved: string[];
  benefits: string[];
  features: string[];
  included: string[];
  notIncluded: string[];
  clarificationNote?: string;
  practicalExamples?: string[];
  plans: ServicePlan[];
  faqs: FAQItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  whatsappMessage: string;
}
