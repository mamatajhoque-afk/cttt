import React from 'react';
import HeroVideo from '../components/HeroVideo';
import { ShieldCheck, Users, Globe, Award, CheckCircle } from 'lucide-react';

const EthicalSourcing = () => {
  return (
    <div>
      <HeroVideo 
        title="Ethical and Responsive Sourcing" 
        subtitle="Where Fashion Meets Integrity"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-tailor-working-with-cloth-4214-large.mp4"
      />
       
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {/* Intro */}
           <div className="text-center mb-20 animate-fade-in-up">
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Integrity in Every Stitch</h2>
               <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
               <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
                   Ethical sourcing is the cornerstone of our responsible business practices. As consumers increasingly demand transparency and accountability, we ensure that every thread in our supply chain is woven with integrity, fairness, and respect.
               </p>
           </div>

           {/* Feature Grid */}
           <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
               <div className="order-2 md:order-1 space-y-8">
                   <div className="border-l-4 border-brand-navy pl-6">
                        <h3 className="text-3xl font-bold text-brand-navy mb-3">Transparency & Traceability</h3>
                        <p className="text-brand-blue font-serif italic text-lg">"From Farm to Fashion"</p>
                   </div>
                   <p className="text-gray-600 leading-relaxed text-justify text-lg">
                       Transparency and Traceability are fundamental principles guiding our operations. We believe in providing full visibility into the journey of each garment, ensuring fair wages, safe working conditions, and environmental stewardship at every step.
                   </p>
                   <ul className="space-y-4">
                        {[
                            'Full Supply Chain Mapping',
                            'Real-time Production Updates',
                            'Worker Welfare Programs',
                            'Strict Code of Conduct'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle className="text-brand-green w-5 h-5" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                   </ul>
               </div>
               <div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                   <img 
                    src="https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=2070&auto=format&fit=crop" 
                    alt="Ethical Manufacturing" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors"></div>
               </div>
           </div>

           {/* Certifications Section */}
           <div className="bg-brand-light rounded-3xl p-10 md:p-16 mb-20 relative overflow-hidden shadow-lg">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="text-center mb-12 relative z-10">
                   <ShieldCheck className="w-16 h-16 text-brand-navy mx-auto mb-6" />
                   <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Supplier Audits & Certifications</h3>
                   <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                       We prioritize ethical practices across our supply chain. Our compliance team conducts thorough audits to ensure every partner meets global standards.
                   </p>
               </div>

               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                   {[
                       { name: 'ZDHC', desc: 'Zero Discharge' },
                       { name: 'Higg Index', desc: 'Sustainability' },
                       { name: 'Better Cotton', desc: 'Responsible Cotton' },
                       { name: 'Better Work', desc: 'Labor Standards' },
                       { name: 'SMETA', desc: 'Ethical Trade' },
                       { name: 'Amfori BSCI', desc: 'Social Compliance' },
                       { name: 'Oeko-Tex', desc: 'Chemical Safety' },
                       { name: 'Disney FAMA', desc: 'Social Responsibility' }
                   ].map((cert, index) => (
                       <div key={index} className="bg-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-48 text-center border border-gray-100">
                           <Award className="w-8 h-8 text-brand-green mx-auto mb-3" />
                           <h4 className="font-bold text-brand-navy text-lg leading-tight mb-1">{cert.name}</h4>
                           <p className="text-xs text-gray-400 uppercase tracking-wide">{cert.desc}</p>
                       </div>
                   ))}
               </div>
           </div>
           
           {/* Image Banner */}
           <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl mt-16">
                <img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=2264&auto=format&fit=crop" className="w-full h-full object-cover" alt="Community" />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="text-white text-3xl md:text-5xl font-serif italic mb-4">"Respect for People, Care for Planet"</h3>
                    <p className="text-white/80 text-lg tracking-wider uppercase">Our Unwavering Promise</p>
                </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default EthicalSourcing;