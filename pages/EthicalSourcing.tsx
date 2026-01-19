import React from 'react';
import HeroVideo from '../components/HeroVideo';

const EthicalSourcing = () => {
  return (
    <div>
      <HeroVideo 
        title="Ethical and Responsive Sourcing" 
        subtitle="Where Fashion Meets Integrity"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-tailor-working-with-cloth-4214-large.mp4"
      />
       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="mb-16">
               <p className="text-xl text-gray-600 mb-8 max-w-4xl">
                   Ethical sourcing is our corner stone of responsible business practices. As consumers increasingly demand transparency and accountability, fashion brands are recognizing the importance of ensuring that every thread in their supply chain is merged with integrity.
               </p>
               <img src="https://picsum.photos/id/338/1200/500" alt="Nature and Child" className="w-full object-cover rounded-xl shadow-lg" />
           </div>

           <div className="grid md:grid-cols-2 gap-12 mb-20">
               <div>
                   <h3 className="text-2xl font-bold text-brand-navy mb-4">Transparency and Traceability</h3>
                   <p className="text-gray-600 mb-4">Are fundamental principles guiding our operations. We believe in providing full visibility into the journey of each garment.</p>
                   <img src="https://picsum.photos/id/442/600/400" alt="Ethics" className="rounded-lg shadow mt-6" />
               </div>
               <div className="flex items-center">
                   <img src="https://picsum.photos/id/20/600/400" alt="Workspace" className="rounded-lg shadow" />
               </div>
           </div>

           <div className="bg-brand-light p-12 rounded-xl text-center">
               <h3 className="text-2xl font-bold text-brand-navy mb-6">Supplier Audits and Certifications</h3>
               <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                   We prioritize ethical practices and sustainability across our supply chain. Our compliance team conducts thorough audits to ensure suppliers meet our high standards.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                   {['ZDHC', 'Higg', 'BCI', 'BetterWork', 'SMETA', 'Amfori', 'Oeko-Tex', 'Disney'].map(cert => (
                       <div key={cert} className="bg-white p-4 rounded shadow font-bold text-gray-500 w-32 flex items-center justify-center">
                           {cert}
                       </div>
                   ))}
               </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default EthicalSourcing;