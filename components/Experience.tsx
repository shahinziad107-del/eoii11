
import React from 'react';
import { USER_CONFIG } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-600 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-primary-500/20">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45L19.45 19H4.55L12 5.45zM11 15v2h2v-2h-2zm0-7v5h2V8h-2z"/></svg>
          </div>

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Full Work Experience & Certifications</h2>
            <p className="text-lg text-primary-100 mb-10 leading-relaxed">
              I maintain a centralized repository of my professional journey, including certificates from various IT institutions, detailed project documentation, and performance reviews.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-primary-700/50 p-4 rounded-2xl">
                <div className="bg-primary-500 p-2 rounded-lg">📄</div>
                <div>
                  <h4 className="font-bold">Certificates</h4>
                  <p className="text-xs text-primary-200">Industry recognized certifications</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-primary-700/50 p-4 rounded-2xl">
                <div className="bg-primary-500 p-2 rounded-lg">📊</div>
                <div>
                  <h4 className="font-bold">Work Samples</h4>
                  <p className="text-xs text-primary-200">Architecture & Code samples</p>
                </div>
              </div>
            </div>

            <a 
              href={USER_CONFIG.googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-extrabold rounded-2xl shadow-lg hover:bg-gray-100 transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7.74 3.522l-.005.01L2.3 12.83a1.536 1.536 0 000 1.537l2.843 4.904a1.536 1.536 0 001.332.77H17.43a1.536 1.536 0 001.332-.77l2.843-4.904a1.536 1.536 0 000-1.537l-5.334-9.236a1.536 1.536 0 00-1.332-.77H9.072a1.536 1.536 0 00-1.332.77l.001.001v-.001zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12.001 2L2.5 18.5h19L12.001 2zm-1.001 13h2v2h-2v-2zm0-7h2v5h-2V8z"/></svg>
              View Full Experience (Google Drive)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
