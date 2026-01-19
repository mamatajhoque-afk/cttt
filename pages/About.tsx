import React from 'react';
import HeroVideo from '../components/HeroVideo';
import { Target, Eye, Heart, BarChart, Users, Globe, Leaf, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Unique Video for About Page: Designer Working */}
      <HeroVideo 
        title="Our Story & Vision" 
        subtitle="Reliable Strategic, Sustainable and Ethical Global Sourcing Partner!!"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-fashion-designer-working-on-a-dress-4197-large.mp4"
      />

      {/* 1. Overview Section */}
      <section id="overview" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Text */}
            <div className="text-center max-w-5xl mx-auto mb-20 animate-fade-in-up">
                <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-8 leading-tight">
                    Welcome to Couture Tex Sourcing Ltd, <br/>Where Fashion Meets Integrity.
                </h2>
                
                <div className="w-24 h-1 bg-brand-green mx-auto mb-10 rounded"></div>

                <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light text-justify md:text-center">
                    We believe that fashion is not just about Clothing; it's an ever-evolving statement, an expression of Identity. Founded in 2024, we blend creativity, sustainability, and rigorous quality assurance. With trusted manufacturing partners, licensed character production, and end-to-end logistics, we deliver superior service and exceptional customer value.
                </p>
            </div>
            
            {/* Expertise & Image Split */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                        alt="Office Interior" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="font-serif text-2xl italic">"Excellence in every detail"</p>
                    </div>
                </div>
                
                <div className="space-y-10">
                    <div>
                        <h3 className="text-3xl font-bold text-brand-navy mb-8 border-l-4 border-brand-green pl-6 uppercase">
                            Our Core Expertise
                        </h3>
                        <ul className="space-y-5">
                            {[
                                'Market Intelligence & Design Support',
                                'R&D & Product Innovation',
                                'Ethical & Responsible Sourcing',
                                'Sustainability & Corporate Responsibility',
                                'Quality Assurance & Manufacturing Excellence',
                                'Diversified Product Management',
                                'Licensed Character Product Sourcing',
                                'End-to-End Global Logistics'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700 text-lg group hover:translate-x-2 transition-transform">
                                    <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center mr-4 group-hover:bg-brand-green group-hover:text-white transition-colors">
                                        <CheckCircle className="w-5 h-5 text-brand-navy group-hover:text-white" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="p-8 bg-brand-light rounded-r-2xl border-l-8 border-brand-blue shadow-lg">
                        <p className="text-brand-navy font-serif italic font-semibold text-xl leading-relaxed">
                            "Elevating Sourcing, Strengthening Partnerships — Together We Achieve More."
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. Design Studio Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center md:text-left">
                <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4 uppercase tracking-wide">Design Studio</h2>
                <p className="text-gray-500 italic text-lg">Where creativity meets commercial viability.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-navy hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-6 h-6 text-brand-blue" />
                            <h3 className="text-2xl font-bold text-brand-navy">
                                London, UK Studio
                            </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            Our London Studio creates elegant, trend-driven collections guided by expert British designers. It is the hub of creativity where global fashion trends are analyzed and translated into wearable art, ensuring your brand stays ahead of the curve.
                        </p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-green hover:shadow-lg transition-shadow">
                         <div className="flex items-center gap-3 mb-4">
                            <Lightbulb className="w-6 h-6 text-brand-green" />
                            <h3 className="text-2xl font-bold text-brand-navy">
                                Dhaka, Bangladesh Studio
                            </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            Our Dhaka studio fuses local craftsmanship with global trends, delivering innovative, high-quality designs. It bridges the gap between traditional artistry and modern manufacturing demands, offering speed and precision.
                        </p>
                    </div>
                    
                    <div className="p-6 border border-dashed border-gray-300 rounded-lg">
                        <h4 className="text-lg font-bold text-brand-navy mb-2">Our Focus</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Sustainable Design', 'Trend Forecasting', 'Fabric Innovation', 'Commercial Ready'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full font-medium">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Images Collage */}
                <div className="grid grid-cols-2 gap-4 h-[600px]">
                     <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop" alt="Design Sketch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <p className="text-white text-lg font-bold">Concept Creation</p>
                        </div>
                     </div>
                     <div className="col-span-1 h-full relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2340&auto=format&fit=crop" alt="Mood Board" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     </div>
                     <div className="col-span-1 h-full relative rounded-xl overflow-hidden shadow-lg group">
                        <img src="https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=2340&auto=format&fit=crop" alt="Fabric Selection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Our People & Presence */}
      <section id="presence" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-serif font-bold text-brand-navy uppercase mb-4">Our Global Presence</h2>
                  <div className="w-16 h-1 bg-brand-green mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
                  <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-bold text-brand-blue italic mb-6">"Our People, Our Strength"</h3>
                      <div className="space-y-6 text-gray-600 leading-relaxed text-justify text-lg">
                          <p>
                              At COUTURETEX, purposeful fashion is driven by passionate people. Our greatest strength is our diverse, globally connected team—innovators who power every stage of the fashion lifecycle.
                          </p>
                          <p>
                              From trend-forward design and ethical sourcing to precision product development, rigorous quality assurance, and seamless logistics, our experts lead with creativity, integrity, and a commitment to sustainability.
                          </p>
                      </div>
                      <div className="mt-8">
                          <button className="px-8 py-3 border-2 border-brand-navy text-brand-navy font-bold hover:bg-brand-navy hover:text-white transition-colors uppercase tracking-wider text-sm">
                              Meet The Team
                          </button>
                      </div>
                  </div>
                  <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                       <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop" alt="Diverse Team" className="w-full h-full object-cover" />
                  </div>
              </div>

              {/* Global Presence Box */}
              <div className="bg-brand-navy text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
                   {/* Background decoration */}
                   <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
                   
                  <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                       <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
                           <img src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=2168&auto=format&fit=crop" alt="Global City" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                       </div>
                       <div>
                           <h3 className="text-3xl font-bold text-white mb-6">Global Reach, Local Expertise</h3>
                           <div className="space-y-6 text-gray-300 leading-relaxed text-justify">
                               <p>
                                   Headquartered in Dhaka, with design studios in Dhaka and London, and sourcing offices in the UK, Germany, Canada, and New Zealand, we fuse global trends with regional expertise to create fashion that resonates locally.
                               </p>
                           </div>
                           
                           <div className="mt-8 flex flex-wrap gap-3">
                               {['UK', 'Germany', 'Canada', 'New Zealand', 'Bangladesh'].map(country => (
                                   <div key={country} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                                       <Globe className="w-4 h-4 text-brand-green" />
                                       <span className="text-sm font-bold">{country}</span>
                                   </div>
                               ))}
                           </div>
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. Mission & Vision */}
      <section id="mission" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-white"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 md:gap-20">
              {/* Mission Card */}
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-brand-green/30 transition-all duration-300 group">
                  <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                          <Target className="w-8 h-8 text-brand-green group-hover:text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-brand-navy">Mission</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg text-justify">
                      To deliver innovative, ethical fashion sourcing with exceptional design, quality, and manufacturing. We prioritize trend-driven creation, sustainability, traceability, and lasting partnerships for mutual success and positive global impact.
                  </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-brand-blue/30 transition-all duration-300 group">
                  <div className="flex items-center gap-5 mb-8">
                       <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                          <Eye className="w-8 h-8 text-brand-blue group-hover:text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-brand-navy">Vision</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg text-justify">
                      COUTURETEX aims to be the global leader in apparel sourcing, setting new standards in design innovation. We strive to promote creativity, sustainability, and traceability, delivering lasting value to our stakeholders and the planet.
                  </p>
              </div>
            </div>
          </div>
      </section>

      {/* 5. Services Grid */}
      <section id="services" className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Our Services</h2>
                  <p className="text-xl text-gray-500 font-light">Comprehensive solutions for the modern fashion industry</p>
              </div>
              
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Market Intel Design', icon: <TrendingUp />, desc: 'Forward-looking trend analysis' },
                        { title: 'Research & Development', icon: <Lightbulb />, desc: 'Innovative material solutions' },
                        { title: 'Product Development', icon: <Target />, desc: 'From concept to sample' },
                        { title: 'Ethical Sourcing', icon: <Heart />, desc: 'Responsible supply chain' },
                        { title: 'Sustainability & CSR', icon: <Leaf />, desc: 'Eco-friendly practices' },
                        { title: 'Manufacturing', icon: <CheckCircle />, desc: 'Precision production' },
                        { title: 'Quality Assurance', icon: <Eye />, desc: 'Zero-tolerance defects' },
                        { title: 'Global Logistics', icon: <Globe />, desc: 'Timely delivery worldwide' }
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                            <div className="mb-6 p-5 bg-gray-50 rounded-full text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                                 {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg leading-tight mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-500">{service.desc}</p>
                        </div>
                    ))}
               </div>
          </div>
      </section>

      {/* 6. Values & Philosophy */}
      <section id="values" className="py-24 bg-brand-navy text-white relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Values & Philosophy</h2>
                  <div className="w-24 h-1 bg-white mx-auto opacity-50 mb-6"></div>
                  <p className="max-w-2xl mx-auto text-gray-300 font-light text-lg">
                      Core principles that guide our interactions, decisions, and future growth.
                  </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                  {[
                      { icon: <Users />, title: 'Customer Centricity', desc: 'Our customers are at the heart of everything we do. We listen, adapt, and deliver.' },
                      { icon: <Heart />, title: 'Integrity', desc: 'We are committed to trust, integrity, and ethics in every interaction.' },
                      { icon: <Eye />, title: 'Transparency', desc: 'We prioritize complete visibility, accountability, and honest communication.' },
                      { icon: <BarChart />, title: 'Value', desc: 'Delivering premium fashion at competitive prices without compromising quality.' },
                      { icon: <CheckCircle />, title: 'Quality', desc: 'We believe that people make the difference. Our team is central to success.' },
                      { icon: <CheckCircle />, title: 'Safety', desc: 'Safety and security are priorities, supported by strict protocols.' },
                      { icon: <Globe />, title: 'Innovation', desc: 'We constantly push boundaries in design, fabric, and process.' },
                      { icon: <Leaf />, title: 'Responsibility', desc: 'We prioritize social responsibility and sustainability through ethical labor.' },
                  ].map((val, i) => (
                      <div key={i} className="flex flex-col items-center text-center group">
                          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 border border-white/20 bg-white/5">
                              {React.cloneElement(val.icon as React.ReactElement, { className: 'w-8 h-8 text-white group-hover:text-brand-navy transition-colors' })}
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-green transition-colors">{val.title}</h3>
                          <p className="text-sm text-gray-400 leading-relaxed font-light">{val.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Footer Quote */}
      <div className="bg-brand-green py-16 text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
             <p className="text-2xl md:text-4xl font-serif italic tracking-wide leading-relaxed">"The Earth does not belong to us,<br/> We belong to the Earth!"</p>
          </div>
      </div>

    </div>
  );
};

export default About;