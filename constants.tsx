
import React from 'react';
import { Project, Skill, NavItem } from './types';

export const USER_CONFIG = {
  name: "John Doe",
  title: "IT & Software Developer",
  aboutShort: "Highly motivated IT professional specializing in secure software development and systems architecture. Passionate about solving complex problems through clean code.",
  aboutLong: "I am a student of Computer Science with a focus on Full Stack Development and Cyber Security. My journey started with C++ and has evolved into building scalable web applications using modern frameworks. I thrive in environments that challenge my technical skills and allow me to learn emerging technologies.",
  email: "hello@johndoe.dev",
  phone: "+1 (555) 000-0000",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  googleDriveLink: "https://drive.google.com/drive/folders/your-folder-id",
  cvDownloadLink: "#", // Replace with actual PDF link
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 90, category: 'Language' },
  { name: "C / C++", level: 85, category: 'Language' },
  { name: "C#", level: 80, category: 'Language' },
  { name: "JavaScript", level: 95, category: 'Language' },
  { name: "IT Fundamentals", level: 95, category: 'Other' },
  { name: "Cyber Security Basics", level: 75, category: 'Other' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Secure Chat Application",
    description: "An end-to-end encrypted messaging platform built with Python and WebSockets, focusing on user privacy and data integrity.",
    technologies: ["Python", "Socket.io", "Cryptography"],
    image: "https://picsum.photos/seed/chat/600/400",
    link: "#"
  },
  {
    id: 2,
    name: "System Health Monitor",
    description: "A C# desktop utility that tracks CPU, RAM, and Network usage in real-time, providing desktop notifications for threshold alerts.",
    technologies: ["C#", ".NET Core", "WinForms"],
    image: "https://picsum.photos/seed/monitor/600/400",
    link: "#"
  },
  {
    id: 3,
    name: "Portfolio Engine",
    description: "A dynamic portfolio generator that allows developers to showcase their work through a clean, automated interface.",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "https://picsum.photos/seed/port/600/400",
    link: "#"
  }
];
