import React from 'react';
import { testimonials, partners } from '../data/content';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Trusted By Section */}
        <div className="mb-24 text-center">
           <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {partners.map((partner) => (
               <div key={partner} className="text-xl md:text-2xl font-bold text-slate-400 font-sans hover:text-slate-600 cursor-default select-none">
                 {partner}
               </div>
             ))}
           </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Partners Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             {testimonials.map((t, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                 <svg className="w-10 h-10 text-primary/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
                 <p className="text-slate-600 mb-6 relative z-10 pt-8 italic leading-relaxed">"{t.quote}"</p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                     <img src={`https://placehold.co/100x100/6366f1/FFF?text=${t.name.charAt(0)}`} alt={t.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                     <p className="text-xs text-slate-500">{t.role}</p>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
