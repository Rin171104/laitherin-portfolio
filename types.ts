import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: LucideIcon;
  category: 'AI/ML' | 'Development' | 'Tools';
}

export interface NavItem {
  label: string;
  href: string;
}