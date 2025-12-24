
import React from 'react';
import { USER_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <a href="#" className="text-xl font-bold text-primary-600">
            {USER_CONFIG.name}
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {USER_CONFIG.name}. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#about" className="text-sm hover:text-primary-600 transition-colors">About</a>
          <a href="#projects" className="text-sm hover:text-primary-600 transition-colors">Projects</a>
          <a href="#contact" className="text-sm hover:text-primary-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
