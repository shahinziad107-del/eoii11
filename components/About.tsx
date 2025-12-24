
import React from 'react';
import { USER_CONFIG } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
              <div className="w-20 h-1.5 bg-primary-600 mt-2 rounded-full"></div>
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>{USER_CONFIG.aboutLong}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                  <h3 className="font-bold text-primary-600 dark:text-primary-400 mb-1">Education</h3>
                  <p className="text-sm">B.S. in Computer Science</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                  <h3 className="font-bold text-primary-600 dark:text-primary-400 mb-1">Focus</h3>
                  <p className="text-sm">IT, Dev, Cyber Security</p>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href={USER_CONFIG.cvDownloadLink}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold hover:underline"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download Full CV (PDF)
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/it1/300/400" alt="Tech 1" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            <img src="https://picsum.photos/seed/it2/300/400" alt="Tech 2" className="rounded-2xl shadow-lg w-full h-64 object-cover translate-y-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
