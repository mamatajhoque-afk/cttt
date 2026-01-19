import React from 'react';
import HeroVideo from '../components/HeroVideo';
import { Leaf, Recycle, Heart } from 'lucide-react';

const Sustainability = () => {
  return (
    <div>
      {/* Unique Video: Nature/Forest */}
      <HeroVideo 
        title="Sustainability" 
        subtitle="Revive the Earth, Renew Our Future"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
      />
      
      <section className="min-h-screen flex flex-col justify-center py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
                <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Our Commitment</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Building A Greener Future Together</h2>
                <div className="w-24 h-1 bg-brand-green mx-auto"></div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
                   <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2213&auto=format&fit=crop" 
                    alt="Sustainable Fashion" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-green/20 to-transparent"></div>
               </div>
               <div className="space-y-8">
                   <h3 className="text-2xl font-bold text-brand-navy">Transformative Potential of Sustainable Fashion</h3>
                   <p className="text-lg text-gray-600 leading-relaxed text-justify">
                       We believe in the power of sustainable fashion. Committed to sustainability, our operations focus on positive environmental and social outcomes, from sourcing to manufacturing. We act as stewards of the environment, ensuring that our footprint is one of restoration, not destruction.
                   </p>
                   <div className="bg-[#f0f9f0] p-8 rounded-xl border-l-8 border-brand-green shadow-sm">
                       <div className="flex items-center gap-3 mb-3">
                            <Leaf className="text-brand-green w-6 h-6" />
                            <h3 className="font-bold text-brand-navy text-lg">Environmental Responsibility</h3>
                       </div>
                       <p className="text-gray-700">
                           Our growth strategy revolves around environmental responsibility. We prioritize sourcing eco-friendly, circular, sustainable, and recycled materials to close the loop on fashion waste.
                       </p>
                   </div>
               </div>
           </div>

           <div className="py-16 bg-brand-light rounded-3xl px-8 mb-24 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-32 h-32 bg-brand-green/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
               <div className="relative z-10">
                   <h3 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Partnering for a Sustainable and Greener Future</h3>
                   <div className="grid md:grid-cols-3 gap-8">
                       <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
                               <Leaf className="w-8 h-8" />
                           </div>
                           <h4 className="font-bold text-brand-navy text-xl mb-2">Conscious Fashion</h4>
                           <p className="text-sm text-gray-500 uppercase tracking-wider">Eco-friendly & Green</p>
                       </div>
                       <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                           <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                               <Recycle className="w-8 h-8" />
                           </div>
                           <h4 className="font-bold text-brand-navy text-xl mb-2">Circular Fashion</h4>
                           <p className="text-sm text-gray-500 uppercase tracking-wider">Upcycled & Recyclable</p>
                       </div>
                       <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                           <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-500">
                               <Heart className="w-8 h-8" />
                           </div>
                           <h4 className="font-bold text-brand-navy text-xl mb-2">Sustainable Fashion</h4>
                           <p className="text-sm text-gray-500 uppercase tracking-wider">Vegan & Cruelty-free</p>
                       </div>
                   </div>
               </div>
           </div>

           <div className="text-center">
               <h3 className="text-3xl font-serif font-bold text-brand-navy mb-6">Driving Eco-Friendly Fashion</h3>
               <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop" 
                        alt="Eco Banner" 
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                         <p className="text-white font-serif text-3xl italic">"Preserving nature's beauty for the next generation"</p>
                    </div>
               </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;