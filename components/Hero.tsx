
import React from 'react';
import { USER_CONFIG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase text-sm mb-4">Welcome to my portfolio</h2>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm <span className="text-primary-600">{USER_CONFIG.name}</span>
          </h1>
          <p className="text-xl text-primary-700 dark:text-primary-300 font-medium mb-4">
            {USER_CONFIG.title}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
            {USER_CONFIG.aboutShort}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </a>
            <a 
              href="#experience" 
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-bold rounded-xl hover:bg-primary-50 dark:hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300"
            >
              View Experience
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-6 opacity-10"></div>
            <div className="absolute inset-0 bg-primary-600 rounded-3xl -rotate-6 opacity-10"></div>
            <img 
              src={`https://picsum.photos/seed/${USER_CONFIG.name}/400/400`} 
              alt="Profile" 
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
