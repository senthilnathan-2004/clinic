export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  availability: string;
  timing: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}
