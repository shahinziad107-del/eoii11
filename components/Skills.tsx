
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I've developed a diverse set of technical skills ranging from core programming languages to IT infrastructure and security fundamentals.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((skill) => (
          <div 
            key={skill.name} 
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-800 dark:text-gray-200">{skill.name}</span>
              <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-2.5">
              <div 
                className="bg-primary-600 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="mt-2 text-xs text-gray-400 uppercase tracking-wider">{skill.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
