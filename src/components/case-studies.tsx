import React from 'react';
import { caseStudies } from '../data/content';

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
           <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Portfolio</span>
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Impactful Transformations</h2>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                  <img 
                    src={`https://placehold.co/800x600/1e293b/FFF?text=${study.client.replace(/ /g, '+')}`} 
                    alt={study.title} 
                    className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                     <p className="font-bold text-slate-800">{study.client}</p>
                     <p className="text-sm text-slate-500">{study.category}</p>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                   <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4 border border-indigo-100">
                     {study.category}
                   </span>
                   <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">{study.title}</h3>
                </div>

                <div className="space-y-6">
                   <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-red-400">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span> The Challenge
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                   </div>
                   
                   <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-green-500"></span> Our Solution
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                   </div>
                </div>

                <div>
                   <h4 className="font-bold text-slate-900 mb-4">Key Results</h4>
                   <ul className="space-y-3">
                     {study.results.map((result, i) => (
                       <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                         <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                         {result}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
