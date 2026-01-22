import React from 'react';
import HeroVideo from '../components/HeroVideo';
import { Target, Eye, Heart, BarChart, Users, Globe, Leaf, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* 1. Hero Video Section */}
      <HeroVideo 
        title="Our Story & Vision" 
        subtitle="Reliable Strategic, Sustainable and Ethical Global Sourcing Partner!!"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-fashion-designer-working-on-a-dress-4197-large.mp4"
      />

      {/* 2. Overview Section - Collage Layout */}
      <section id="overview" className="py-24 bg-white overflow-hidden">
        <div className="max-w-[95%] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Text Content */}
                <div className="lg:col-span-5 z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-1 bg-brand-green"></div>
                        <span className="text-brand-navy font-bold tracking-widest uppercase text-sm">Welcome to CoutureTex</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-8 leading-tight">
                        Where Fashion Meets Integrity.
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg text-justify mb-8 font-light border-l-4 border-brand-green pl-6">
                        At Couture Tex Sourcing Ltd, we believe fashion is not just about Clothing, it's an ever evolving statement, an expression of Identity. Founded in 2024, we drive fashion forward through market intelligence, trend analysis, innovative design, ethical sourcing, diverse products, sustainability, and responsible manufacturing. 
                    </p>
                    <div className="bg-brand-light p-8 rounded-tr-[50px] border-l-8 border-brand-blue shadow-lg">
                        <p className="text-brand-navy font-serif italic font-bold text-xl leading-relaxed">
                            "Elevating Sourcing, Strengthening Partnerships — Together We Achieve More."
                        </p>
                    </div>
                </div>

                {/* Collage Images */}
                <div className="lg:col-span-7 relative">
                    <div className="relative h-[600px] w-full">
                        {/* Main Image */}
                        <div className="absolute top-0 right-0 w-[80%] h-[500px] rounded-sm overflow-hidden shadow-2xl z-0">
                            <img 
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                                alt="Office Interior" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        {/* Overlapping Image 1 */}
                        <div className="absolute bottom-0 left-0 w-[50%] h-[350px] rounded-sm overflow-hidden shadow-2xl border-4 border-white z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop" 
                                alt="Showroom" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Box */}
                        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-green/20 -z-10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Mission & Vision - Staggered Blocks */}
      <section id="mission" className="py-24 bg-[#f4fff4]">
        <div className="max-w-[90%] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 relative">
                
                {/* Mission */}
                <div className="bg-white p-12 shadow-xl border-t-8 border-[#88c057] relative">
                    <Target className="w-16 h-16 text-[#88c057] mb-8" />
                    <h2 className="text-4xl font-bold text-brand-navy mb-6">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                        To deliver innovative, ethical fashion sourcing with exceptional design, quality, and manufacturing. We prioritize trend-driven creation, sustainability, traceability, and lasting partnerships for mutual success and positive global impact.
                    </p>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#88c057]/10 -z-10 rounded-full"></div>
                </div>

                {/* Vision */}
                <div className="bg-white p-12 shadow-xl border-t-8 border-brand-blue md:mt-24 relative">
                    <Eye className="w-16 h-16 text-brand-blue mb-8" />
                    <h2 className="text-4xl font-bold text-brand-navy mb-6">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                        COUTURETEX aims to be the global leader in apparel sourcing, setting new standards in design innovation. We strive to promote creativity, sustainability, and traceability, delivering lasting value to our stakeholders and the planet.
                    </p>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-blue/10 -z-10 rounded-full"></div>
                </div>

            </div>
        </div>
      </section>

      {/* 4. Presence Section - Grid Collage */}
      <section id="presence" className="py-24 bg-white">
        <div className="max-w-[95%] mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-serif font-bold text-brand-navy mb-4">GLOBAL PRESENCE</h2>
                <p className="text-gray-400 italic text-xl">"Global Reach, Local Expertise"</p>
                <div className="w-24 h-1 bg-brand-green mx-auto mt-6"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-4 h-[600px]">
                    <div className="rounded-sm overflow-hidden shadow-lg h-full">
                        <img src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=2168&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="London" />
                    </div>
                    <div className="space-y-4 h-full">
                        <div className="h-1/2 rounded-sm overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="Dhaka" />
                        </div>
                        <div className="h-1/2 rounded-sm overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sourcing" />
                        </div>
                    </div>
                </div>
                <div className="bg-brand-navy p-12 text-white rounded-sm shadow-2xl relative overflow-hidden">
                    <Globe className="absolute top-[-20px] right-[-20px] w-64 h-64 text-white/5" />
                    <h3 className="text-3xl font-bold mb-8 relative z-10">Our Strategic Hubs</h3>
                    <div className="space-y-8 relative z-10">
                        <div>
                            <h4 className="text-brand-green font-bold text-xl mb-2">Primary Operations</h4>
                            <p className="text-gray-300">Headquartered in Dhaka, Bangladesh, we utilize the country's immense manufacturing capacity and textile heritage.</p>
                        </div>
                        <div>
                            <h4 className="text-brand-green font-bold text-xl mb-2">Design Hubs</h4>
                            <p className="text-gray-300">Our studios in London, UK and Dhaka blend global fashion trends with regional craftsmanship.</p>
                        </div>
                        <div>
                            <h4 className="text-brand-green font-bold text-xl mb-2">Global Sourcing</h4>
                            <p className="text-gray-300">With dedicated offices in Germany, Canada, New Zealand, and Hong Kong, we ensure diverse and reliable sourcing worldwide.</p>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                        {['UK', 'Germany', 'Canada', 'NZ', 'Bangladesh', 'HK'].map(c => (
                            <span key={c} className="px-4 py-1.5 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5">{c}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Values & Philosophy - Icons Mosaic */}
      <section id="values" className="py-24 bg-[#e7f9fd]">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">VALUES & PHILOSOPHY</h2>
                <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <Users />, title: 'Customer Centricity', desc: 'Listening, adapting, and delivering value.' },
                    { icon: <Heart />, title: 'Integrity', desc: 'Ethics and trust in every interaction.' },
                    { icon: <Eye />, title: 'Transparency', desc: 'Complete visibility and accountability.' },
                    { icon: <BarChart />, title: 'Competitive Value', desc: 'Premium quality at the best price.' },
                    { icon: <CheckCircle />, title: 'Quality Assurance', desc: 'Zero-tolerance for defects.' },
                    { icon: <Shield />, title: 'Safety & Security', desc: 'Strict protocols for every worker.' },
                    { icon: <Lightbulb />, title: 'Innovation', desc: 'Pushing boundaries in design and process.' },
                    { icon: <Leaf />, title: 'Responsibility', desc: 'Prioritizing social and eco-impact.' }
                ].map((val, i) => (
                    <div key={i} className="bg-white p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                            {React.cloneElement(val.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                        </div>
                        <h3 className="text-lg font-bold text-brand-navy mb-3 uppercase tracking-wider">{val.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 6. Footer Quote Banner */}
      <div className="bg-[#88c057] py-24 text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
             <p className="text-3xl md:text-5xl font-serif italic tracking-wide leading-relaxed drop-shadow-lg">
                "Fashion is an ever-evolving statement,<br className="hidden md:block"/> An expression of Identity!"
             </p>
          </div>
      </div>

    </div>
  );
};

const Shield = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
);

export default About;