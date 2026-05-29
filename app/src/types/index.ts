export interface ServiceData {
  id: string;
  icon: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  benefitsAr: string[];
  benefitsEn: string[];
  body?: import('./index').ArticleBodySection[];
}

export interface TestimonialData {
  id: number;
  rating: number;
  quoteAr: string;
  quoteEn: string;
  nameAr: string;
  nameEn: string;
  age: string;
  caseAr: string;
  caseEn: string;
  avatar: string;
}

export interface ArticleData {
  id: number;
  slug: string;
  categoryAr: string;
  categoryEn: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  image: string;
  readTime: number;
  date: string;
  featured?: boolean;
  body?: ArticleBodySection[];
}

export interface ArticleBodySection {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'blockquote';
  contentAr: string;
  contentEn: string;
  items?: { contentAr: string; contentEn: string }[];
}

export interface StatData {
  id: number;
  icon: string;
  value: number;
  suffix: string;
  labelAr: string;
  labelEn: string;
}

export interface BookingFormState {
  name: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}
