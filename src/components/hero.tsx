import React from 'react';
import { companyInfo } from '../data/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-indigo-600">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white/90 text-sm font-medium tracking-wide">PT Sarana Digital Solusindo</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Building the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-white">Digital Future</span> <br/>
            Together.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-lg leading-relaxed">
            {companyInfo.tagline}. We transform bold ideas into powerful digital realities through innovation, education, and smart solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#work" className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Explore Our Work
            </a>
            <a href="#about" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Who We Are
            </a>
          </div>
        </div>
        
        {/* Hero Visual/Placeholder */}
        <div className="relative hidden md:block animate-fade-in-up delay-200">
          <div className="relative z-10 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            {/* Mock Dashboard UI */}
            <div className="w-full aspect-[4/3] bg-slate-800 rounded-lg overflow-hidden relative">
               <div className="absolute top-0 w-full h-8 bg-slate-700 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="p-6 grid grid-cols-3 gap-4 mt-4">
                 <div className="col-span-2 space-y-3">
                   <div className="h-24 bg-slate-700/50 rounded-md"></div>
                   <div className="h-40 bg-slate-700/50 rounded-md"></div>
                 </div>
                 <div className="space-y-3">
                    <div className="h-16 bg-slate-700/50 rounded-md"></div>
                    <div className="h-16 bg-slate-700/50 rounded-md"></div>
                    <div className="h-28 bg-primary/20 rounded-md border border-primary/30"></div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Floating Element */}
          <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Projects Completed</div>
                <div className="text-lg font-bold text-slate-800">50+ Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 w-full leading-none">
        <svg className="block w-full h-16 md:h-24 text-slate-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
