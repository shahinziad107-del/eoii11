
export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Language' | 'Frontend' | 'Backend' | 'Other';
}

export interface NavItem {
  label: string;
  href: string;
}
