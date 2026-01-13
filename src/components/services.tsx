import React from 'react';
import { brands } from '../data/content';

// Simple icons component
const Icons = ({ name, className }: { name: string, className?: string }) => {
  if (name === 'code') return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
  );
  if (name === 'users') return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
  );
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Ecosystem</h2>
          <p className="text-slate-600 text-lg">
            Sarana Group integrates three powerful pillars to deliver comprehensive digital solutions, from development to talent and logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div key={brand.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <Icons name={brand.icon} className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{brand.name}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {brand.description}
              </p>
              
              <a href="#" className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-primary transition-colors">
                Learn more <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
