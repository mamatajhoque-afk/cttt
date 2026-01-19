import React from 'react';
import HeroVideo from '../components/HeroVideo';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Award, Leaf, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 
        1. Hero Video Section 
        Video: Clothing rack (Retail/Showroom vibe)
      */}
      <HeroVideo 
        title="Committed for Fashion Evolution through..." 
        subtitle="Market Intel Design Support, Product Innovation & Newness, Wide Ranging Versatile Products"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-clothes-on-a-clothing-rack-4217-large.mp4"
      />

      {/* 2. Quote Section */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-[85%] mx-auto text-center px-4 animate-fade-in-up">
          <p className="text-2xl md:text-4xl font-serif italic text-brand-blue font-semibold leading-relaxed">
            "The way to get started is to quit talking and begin doing."
          </p>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-6 mb-4"></div>
          <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm md:text-base">- Walt Disney</p>
        </div>
      </section>

      {/* 3. Stats Section - Much Bigger */}
      <section className="py-20 bg-white">
        <div className="max-w-[90%] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#e7f9fd] py-16 px-10 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-6xl md:text-8xl font-bold text-brand-navy">+5</h3>
                <p className="text-lg md:text-xl text-gray-600 uppercase tracking-widest mt-6 font-bold">Global Presence</p>
            </div>
            <div className="bg-[#e7f9fd] py-16 px-10 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-6xl md:text-8xl font-bold text-brand-navy">+40</h3>
                <p className="text-lg md:text-xl text-gray-600 uppercase tracking-widest mt-6 font-bold">Staff World Wide</p>
            </div>
            <div className="bg-[#e7f9fd] py-16 px-10 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-6xl md:text-8xl font-bold text-brand-navy">+20</h3>
                <p className="text-lg md:text-xl text-gray-600 uppercase tracking-widest mt-6 font-bold">Recommended</p>
            </div>
        </div>
      </section>

      {/* 4. About Us Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[90%] mx-auto px-4 flex flex-col gap-20">
            
            {/* Header and Intro Text - FULL WIDTH */}
            <div className="text-left w-full">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-1 bg-brand-navy"></div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy tracking-tight">ABOUT US</h2>
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-400 italic mb-8 font-light">Who We Are... !!</h3>
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl text-justify font-light border-l-4 border-brand-green pl-6">
                    At Couture Tex Sourcing Ltd, we believe fashion is not just about Clothing, it's an ever evolving statement, an expression of Identity. Culture context of time and place, perception, aspiration, creativity and innovation, value and belief of individual and community. We drive fashion forward through market intelligence, trend analysis, innovative design, ethical sourcing, diverse products, sustainability, and responsible manufacturing. Backed by strong quality assurance, reliable logistics, and exceptional service, we aim to deliver outstanding value to our customers.
                </p>
            </div>

            {/* Image 1: Showroom/Rack */}
            <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl shadow-2xl relative group">
                 <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop" 
                    alt="CoutureTex Showroom" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]" 
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Commitment Quote */}
            <div className="w-full py-16 border-y border-gray-100 bg-gray-50/50">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-2xl md:text-4xl font-serif italic text-brand-navy font-bold text-center leading-relaxed">
                        "Our commitment to fashion progression spans market intelligence, trend analysis, innovative design and R&D."
                    </p>
                </div>
            </div>

            {/* Image 2: Design Desk/Tools */}
            <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1550614000-4b9519e00315?q=80&w=2340&auto=format&fit=crop" 
                    alt="Design Process" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]" 
                 />
            </div>

            {/* Remaining Content - FULL WIDTH */}
            <div className="w-full space-y-16 text-left">
                <div>
                    <h4 className="font-bold text-brand-navy text-2xl md:text-4xl mb-8 leading-tight">
                        Trend-Driven, Ethically Sourced, Trusted & Traceable – <br/><span className="text-brand-blue">Your Fashion Manufacturing Partner.</span>
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify font-light">
                        We collaborate with globally compliant manufacturers to ensure traceability, quality, and process control. Our design studios in London and Dhaka blend Global creativity with local talent, focusing on R&D, trend-driven products, and iconic licensed characters like Disney and others. Onsite inspections and full logistics support highlight our commitment to responsible, innovative manufacturing.
                    </p>
                </div>
                
                <div className="bg-[#eaf2ff] p-12 md:p-20 border-l-[12px] border-brand-blue rounded-r-3xl shadow-lg">
                    <p className="text-brand-navy font-bold text-xl md:text-3xl italic text-center leading-relaxed">
                        "Ethical sourcing, sustainability, manufacturing excellence and superior service- delivers added Customer value."
                    </p>
                </div>

                <div className="pt-8 text-center">
                    <Link to="/about" className="inline-block border-2 border-brand-navy px-12 py-4 text-base md:text-lg font-bold uppercase tracking-[0.2em] hover:bg-brand-navy hover:text-white transition duration-300 transform hover:scale-105 rounded-sm">
                        Explore Our Story
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Fashion Evolution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-navy mb-4">Fashion Evolution</h2>
            <p className="text-xl text-brand-green italic mb-8">Where Trends Begin — Designing Fashion in Motion... !</p>
            <p className="text-base md:text-lg text-gray-500 mb-16 max-w-5xl leading-relaxed">
                Embark on the journey of Fashion Evolution — where trendsetting design and cutting-edge technology shape the future of style. At COUTURETEX, fashion speaks the language of shifting identities, where imagination meets science and tradition blends with innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="bg-white p-12 rounded-2xl shadow-xl h-full flex flex-col justify-center border border-gray-100">
                    <ul className="space-y-6 text-lg md:text-xl font-semibold text-brand-navy">
                        {[
                            "Bold minds. Breakthrough fashion.",
                            "Timeless style, built for tomorrow.",
                            "Where ethics dress like elegance.",
                            "Next-gen materials. Zero waste. Pure impact.",
                            "Evolution isn't a trend — it's our blueprint."
                        ].map((item, i) => (
                            <li key={i} className="flex items-center group">
                                <span className="w-3 h-3 bg-brand-green rounded-full mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                                <span className="group-hover:translate-x-2 transition-transform">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-12">
                        <Link to="/market-intel" className="inline-block border border-gray-400 px-8 py-3 text-sm uppercase tracking-wider hover:bg-brand-navy hover:text-white hover:border-brand-navy transition bg-gray-50">
                            Discover Intelligence
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 h-[600px]">
                     <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover rounded-xl shadow-lg transform translate-y-8" alt="Fashion 1" />
                     <img src="https://images.unsplash.com/photo-1529139574466-a302d27460ae?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover rounded-xl shadow-lg transform -translate-y-8" alt="Fashion 2" />
                </div>
            </div>
        </div>
      </section>

      {/* 6. Market Intel Design */}
      <section className="py-20 bg-white">
          <div className="max-w-[90%] mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy uppercase mb-4">Market Intel Design</h2>
              <div className="w-24 h-1 bg-brand-green mb-6"></div>
              <p className="text-xl text-gray-500 italic mb-16">Crafting the Future of Fashion — Elevating Style, Redefining Elegance... !!</p>

              <div className="grid md:grid-cols-3 gap-12 mb-20">
                   <div className="col-span-1 md:col-span-2 space-y-8">
                       <h3 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight">Design Innovation, Elevating Creation, <br/>Embracing Co-Creation-</h3>
                       <p className="text-xl font-bold text-brand-blue italic">This is more than fashion — it's a revolution !</p>
                       <p className="text-lg text-gray-600 text-justify leading-relaxed">
                           A fearless pursuit of creativity. A commitment to responsible design. A force for global transformation. Whether launching a label or reimagining your brand, COUTURETEX is your visionary partner. Rooted in London and Dhaka, we blend artistry, innovation, and sustainability to redefine fashion. From concept to runway, every stitch reflects purpose where imagination meets intention.
                       </p>
                       <p className="text-lg text-brand-navy font-bold italic border-l-4 border-brand-green pl-4">*Timeless Design, Future-Ready Fashion, Crafted by COUTURETEX!!</p>
                   </div>
                   <div className="col-span-1 h-full">
                       <img src="https://images.unsplash.com/photo-1576188973526-27a3e4c42c96?q=80&w=2340&auto=format&fit=crop" alt="Design" className="w-full h-full object-cover rounded-2xl shadow-xl" />
                   </div>
              </div>

              <div className="space-y-16">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy">Design Studio</h2>
                    <p className="text-lg text-gray-500 italic mt-2">Creative Hub where Fashion Inspiration turns in Wearable Art. !!</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                      <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2340&auto=format&fit=crop" className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow" alt="London Studio" />
                      <div>
                          <h3 className="text-3xl font-bold text-brand-navy mb-4">London, UK Design Studio:</h3>
                          <p className="text-base text-gray-600 text-justify leading-relaxed">
                              The Global Epicenter of Fashion Innovation Based in the heart of the UK, our London studio blends market insight, creative innovation, and cultural fluency to craft timeless, trend-setting collections that embody your brand. Led by UK-born designers with top-brand experience, our team fuses artistic vision with commercial strategy to create striking, sustainable, market-ready collections. <br/><br/><span className="font-bold italic text-brand-navy text-lg">Let's build the Future of Fashion together!!</span>
                          </p>
                      </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                       <div className="order-2 md:order-1">
                          <h3 className="text-3xl font-bold text-brand-navy mb-4">Dhaka, Bangladesh Design Studio:</h3>
                          <h4 className="font-bold text-lg text-brand-green mb-3">Where Blending Heritage, Innovation and Global Vision</h4>
                          <p className="text-base text-gray-600 text-justify leading-relaxed">
                              Nestled in Dhaka's textile hub, our studio fuses generational craft with modern design. Together with our London team, we deliver authentic, scalable fashion that meets global standards. From concept to production, we deliver sustainable, innovative designs with global insight. At COUTURETEX, we create purpose-driven collections that honor artisanship and shape responsible fashion.<br/><br/><span className="font-bold italic text-brand-navy text-lg">Let's shape the future of fashion — From Dhaka to the world!</span>
                          </p>
                      </div>
                      <img src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=2340&auto=format&fit=crop" className="w-full h-[400px] object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow order-1 md:order-2" alt="Dhaka Studio" />
                  </div>

                  <div className="bg-brand-navy p-12 md:p-16 rounded-3xl shadow-2xl text-center">
                      <h3 className="text-3xl font-bold text-white mb-6">Welcome to Our Design Expedition!!</h3>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                          At COUTURETEX, we collaborate with world-class designers to create market-driven fashion that elevates your brand while preserving its unique identity. This is fashion reimagined — where bold creativity meets responsible design to drive meaningful change.
                      </p>
                      <Link to="/market-intel" className="inline-block border-2 border-white px-10 py-3 text-sm uppercase tracking-wider text-white hover:bg-white hover:text-brand-navy transition font-bold">
                          Start The Journey
                      </Link>
                  </div>
              </div>

              {/* Banner Image */}
              <div className="mt-20 relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl group">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" alt="Evolution Banner" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
                      <p className="text-white font-serif text-3xl md:text-5xl italic leading-tight drop-shadow-xl">"Fashion is not static; it's an ever-evolving art form.</p>
                      <p className="text-brand-green font-serif text-2xl md:text-4xl italic leading-tight mt-6 drop-shadow-xl">To stay ahead, we must embrace change and innovation."</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. Ethical & Responsive Sourcing */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-[90%] mx-auto px-4 grid md:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Ethical & Responsive Sourcing</h2>
                  <div className="w-20 h-1 bg-brand-green mb-8"></div>
                  <p className="text-lg text-gray-600 mb-8 text-justify leading-relaxed">
                      Throughout the Supply Chain, we are dedicated to ensuring Ethical and Responsive Sourcing practices to protect the Individual and Environment. We prioritize transparency, fair labor practices, environmental sustainability, and corporate social responsibility, demonstrating our commitment to ethical business practices and the welfare of our workers and the planet.
                  </p>
                  <div>
                    <Link to="/ethical-sourcing" className="inline-block border-2 border-brand-navy px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-brand-navy hover:text-white transition bg-transparent">
                        View Our Standards
                    </Link>
                  </div>
              </div>
              <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1605218427368-35b019b88642?q=80&w=2340&auto=format&fit=crop" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" alt="Ethical Sourcing" />
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;