import React, { useState, useEffect } from 'react';
import HeroVideo from '../components/HeroVideo';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Award, Leaf, CheckCircle } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1529139574466-a302d27460ae?q=80&w=2000&auto=format&fit=crop"
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1544551763-47a0159f9234?q=80&w=2070&auto=format&fit=crop",
      quote: "Fashion is not static; it's an ever-evolving art form. To stay ahead, we must embrace change and innovation."
    },
    {
      url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop",
      quote: ""
    },
    {
      url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop",
      quote: ""
    },
    {
      url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
      quote: ""
    }
  ];

  const logos = [
    { name: 'RSC', url: 'https://seeklogo.com/images/R/rsc-logo-7B8B1A2A6C-seeklogo.com.png' },
    { name: 'BetterWork', url: 'https://betterwork.org/wp-content/uploads/2016/04/BW-Logo-300x100.png' },
    { name: 'SMETA', url: 'https://www.sedex.com/wp-content/uploads/2021/03/SMETA-Logo-1.png' },
    { name: 'amfori', url: 'https://www.amfori.org/sites/default/files/amfori_logo_blue_rgb.png' },
    { name: 'GOTS', url: 'https://global-standard.org/images/GOTS_Logo_Global_Organic_Textile_Standard.png' },
    { name: 'BCI', url: 'https://bettercotton.org/wp-content/themes/bettercotton/assets/img/bci-logo.png' },
    { name: 'CTPAT', url: 'https://www.cbp.gov/sites/default/files/ctpat-logo.png' },
    { name: 'NIRAPON', url: 'https://nirapon.org/wp-content/uploads/2019/04/Nirapon-Logo-Final-01-300x127.png' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* 
        1. Hero Video Section 
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

      {/* 3. Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#e7f9fd] py-12 px-8 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-brand-light">
                <h3 className="text-5xl md:text-6xl font-bold text-brand-navy mb-4">+5</h3>
                <p className="text-base md:text-lg text-gray-600 uppercase tracking-widest font-bold">Global Presence</p>
            </div>
            <div className="bg-[#e7f9fd] py-12 px-8 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-brand-light">
                <h3 className="text-5xl md:text-6xl font-bold text-brand-navy mb-4">+40</h3>
                <p className="text-base md:text-lg text-gray-600 uppercase tracking-widest font-bold">Staff World Wide</p>
            </div>
            <div className="bg-[#e7f9fd] py-12 px-8 rounded-3xl text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-brand-light">
                <h3 className="text-5xl md:text-6xl font-bold text-brand-navy mb-4">+20</h3>
                <p className="text-base md:text-lg text-gray-600 uppercase tracking-widest font-bold">Recommended</p>
            </div>
        </div>
      </section>

      {/* 4. About Us Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-white">
        <div className="w-full max-w-[90%] mx-auto px-4 flex flex-col gap-20">
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

            <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl shadow-2xl relative group">
                 <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop" alt="CoutureTex Showroom" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]" />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="w-full py-16 border-y border-gray-100 bg-gray-50/50">
                <div className="w-full px-4">
                    <p className="font-serif italic text-brand-navy font-bold text-center leading-normal text-xl md:text-[2.5vw]">
                        "Our commitment to fashion progression spans market intelligence, trend analysis, innovative design and R&D."
                    </p>
                </div>
            </div>

            <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-2xl shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1550614000-4b9519e00315?q=80&w=2340&auto=format&fit=crop" alt="Design Process" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]" />
            </div>

            <div className="w-full text-left">
                <div className="mb-8">
                    <h4 className="font-bold text-black text-xl md:text-2xl mb-4">
                        Trend-Driven, Ethically Sourced, Trusted & Traceable – Your Fashion Manufacturing Partner-
                    </h4>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed font-normal text-justify md:text-left">
                        We collaborate with globally compliant manufacturers to ensure traceability, quality, and process control. Our design studios in London and Dhaka blend Global Creativity with local talent, focusing on R&D, trend-driven products, and iconic licensed characters like Disney and others. Onsite inspections and full logistics support highlight our commitment to responsible, innovative manufacturing.
                    </p>
                </div>
                
                <div className="w-full bg-[#eeffff] py-10 px-4 mb-10">
                    <p className="text-brand-navy font-bold text-lg md:text-2xl text-center font-serif">
                        "Ethical sourcing, sustainability, manufacturing excellence and superior service- delivers added Customer value."
                    </p>
                </div>

                <div className="text-left">
                    <Link to="/about" className="inline-block border border-brand-green px-6 py-2 text-xs font-medium uppercase tracking-wider text-black hover:bg-brand-green hover:text-white transition duration-300 rounded-sm">
                        Explore More
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Fashion Evolution */}
      <section className="py-20 bg-[#e6e6e6]">
        <div className="max-w-[95%] mx-auto px-4">
            <div className="mb-12 text-left w-full">
                 <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-2 font-sans tracking-tight">Fashion Evolution</h2>
                 <p className="text-sm font-bold text-gray-800 italic mb-4">Where Trends Begin — Designing Fashion in Motion... !!</p>
                 <p className="text-base md:text-lg text-gray-600 w-full leading-relaxed text-justify">
                    Embark on the journey of Fashion Evolution — where trendsetting design and cutting-edge technology shape the future of style. At COUTURETEX, fashion speaks the language of shifting identities, where imagination meets science and tradition blends with innovation.
                 </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-5 flex flex-col justify-center">
                     <ul className="space-y-6 text-lg md:text-xl font-bold text-gray-800 mb-20">
                        {[
                            "Bold minds. Breakthrough fashion.",
                            "Timeless style, built for tomorrow.",
                            "Where ethics dress like elegance.",
                            "Next-gen materials. Zero waste. Pure impact.",
                            "Evolution isn't a trend — it's our blueprint."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-3 transform scale-125 text-[#1e3a8a]">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                         <Link to="/market-intel" className="inline-block border-2 border-gray-600 px-8 py-3 text-xs md:text-sm font-bold text-gray-800 hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition uppercase tracking-wider bg-transparent">
                            Explore More
                        </Link>
                    </div>
                </div>

                <div className="lg:col-span-7 w-full h-[500px] md:h-[650px] relative overflow-hidden shadow-2xl rounded-sm">
                     {sliderImages.map((src, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={src} className="w-full h-full object-cover" alt={`Fashion Slide ${index + 1}`} />
                        </div>
                     ))}
                      <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
                          <div className="flex shadow-sm">
                              <div className="bg-[#1e3a8a] w-8 h-8 flex items-center justify-center text-white font-bold text-xs">C</div>
                              <div className="bg-[#4ade80] w-8 h-8 flex items-center justify-center text-white font-bold text-xs">T</div>
                          </div>
                          <span className="font-bold text-[#1e3a8a] text-lg tracking-wide bg-white/80 px-2 py-1">COUTURETEX</span>
                      </div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. Market Intel Design */}
      <section className="py-20 bg-[#f3f4f6]">
          <div className="max-w-[95%] mx-auto px-4">
              <div className="mb-12">
                  <h2 className="text-4xl font-bold text-[#1e3a8a] uppercase tracking-tight mb-1">MARKET INTEL DESIGN</h2>
                  <p className="text-[11px] font-medium text-gray-800 italic mb-10">Crafting the Future of Fashion — Elevating Style, Redefining Elegance...!!</p>
                  
                  <div className="space-y-6">
                      <h3 className="text-lg font-bold text-black leading-tight">Design Innovation, Elevating Creation, Embracing Co-Creation-</h3>
                      <p className="text-sm font-bold text-black italic">This is more than fashion — it's a revolution !!</p>
                      <p className="text-[11px] md:text-[13px] text-gray-600 leading-relaxed text-justify max-w-7xl font-medium">
                          A fearless pursuit of creativity. A commitment to responsible design. A force for global transformation. Whether launching a label or reimagining your brand, COUTURETEX is your visionary partner. Rooted in London and Dhaka, we blend artistry, innovation, and sustainability to redefine fashion. From concept to runway, every stitch reflects purpose where imagination meets intention. At COUTURETEX, co-creation is a shared journey. We partner with brands to merge identity and expertise, creating collections that are authentic, relevant, and future-ready.
                      </p>
                      <p className="text-[11px] md:text-[12px] font-bold italic text-gray-500">"Timeless Design, Future-Ready Fashion, Crafted by COUTURETEX!!</p>
                  </div>
              </div>

              <div className="mt-16">
                  <h2 className="text-4xl font-bold text-[#1e3a8a] mb-1">Design Studio</h2>
                  <p className="text-[11px] font-medium text-gray-800 italic mb-8">Creative Hub where Fashion Inspiration turns in Wearable Art..!!</p>

                  <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
                      <div className="lg:col-span-8">
                          <div className="w-full h-[300px] md:h-[500px] rounded-sm overflow-hidden shadow-sm">
                              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop" alt="Design Studio Showroom" className="w-full h-full object-cover" />
                          </div>
                      </div>
                      <div className="lg:col-span-4">
                          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">London, UK Design Studio:</h3>
                          <div className="space-y-4">
                              <p className="text-[11px] md:text-[12px] text-gray-700 leading-relaxed text-justify font-medium">
                                  The Global Epicenter of Fashion Innovation Based in the heart of the UK, our London studio blends market insight, creative innovation, and cultural fluency to craft timeless, trend-setting collections that embody your brand. Led by UK-born designers with top-brand experience, our team fuses artistic vision with commercial strategy to create striking, sustainable, market-ready collections. At COUTURETEX, we co-create from concept to product—amplifying your brand through purposeful design and innovation.
                              </p>
                              <p className="text-[11px] md:text-[12px] font-bold italic text-black">Let's build the Future of Fashion together!!</p>
                          </div>
                      </div>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
                      <div className="lg:col-span-5">
                          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">Dhaka, Bangladesh Design Studio:</h3>
                          <p className="text-[11px] font-medium text-gray-500 italic mb-4">Where Blending Heritage, Innovation and Global Vision</p>
                          <div className="space-y-4">
                              <p className="text-[11px] md:text-[12px] text-gray-700 leading-relaxed text-justify font-medium">
                                  Nestled in Dhaka's textile hub, our studio fuses generational craft with modern design. Together with our London team, we deliver authentic, scalable fashion that meets global standards.
                              </p>
                              <p className="text-[11px] md:text-[12px] text-gray-700 leading-relaxed text-justify font-medium">
                                  From concept to production, we deliver sustainable, innovative designs with global insight. At COUTURETEX, we create purpose-driven collections that honor artisanship and shape responsible fashion.
                              </p>
                              <p className="text-[11px] md:text-[12px] font-bold italic text-black">Let's shape the future of fashion — From Dhaka to the world!</p>
                          </div>
                      </div>
                      <div className="lg:col-span-7">
                          <div className="w-full h-[300px] md:h-[500px] rounded-sm overflow-hidden shadow-sm">
                              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2340&auto=format&fit=crop" alt="Dhaka Design Studio" className="w-full h-full object-cover" />
                          </div>
                      </div>
                  </div>
              </div>

              <div className="mt-20 pt-10 border-t border-gray-200 text-left">
                  <Link to="/market-intel" className="inline-block border border-brand-green px-6 py-1.5 text-[10px] font-bold text-gray-700 hover:bg-brand-green hover:text-white transition uppercase tracking-widest rounded-sm">
                      EXPLORE MORE
                  </Link>
              </div>
          </div>

          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-auto overflow-y-hidden scrollbar-hide mt-10">
              <div className="flex w-max">
                  {galleryImages.map((item, idx) => (
                      <div key={idx} className="relative w-[100vw] h-[350px] md:h-[500px] flex-shrink-0 group">
                          <img src={item.url} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                          {item.quote && (
                              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 md:p-12">
                                  <h3 className="text-white font-serif text-xl md:text-4xl italic leading-relaxed max-w-4xl">"{item.quote}"</h3>
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 7. Ethical & Responsive Sourcing - Updated to match the requested picture style */}
      <section className="min-h-screen py-24 bg-[#f4fff4]">
          <div className="max-w-[95%] mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="pt-10">
                      <h2 className="text-4xl md:text-6xl font-bold text-[#88c057] mb-8">Ethical & Responsive Sourcing</h2>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify mb-10 font-medium">
                        Though out the Supply Chain, we are dedicated to ensure Ethical and Responsive Sourcing practices to protect the Individual and Environment. We prioritize transparency, fair labor practices, environmental sustainability, and corporate social responsibility, demonstrating our commitment to ethical business practices and the welfare of all stakeholders. We actively collaborate with our manufacturing partners to incorporate green initiatives and sustainability practices, different CSR programs, promoting for the use of organic, eco-friendly, and recycled materials while leveraging our extensive networks across diverse product categories to promote responsible sourcing and production.
                      </p>
                      <Link to="/ethical-sourcing" className="inline-block border border-gray-400 px-6 py-2 text-[10px] font-bold text-black uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all">
                        EXPLORE MORE
                      </Link>
                  </div>
                  <div className="relative pt-6">
                      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm border-4 border-white shadow-sm">
                          <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop" alt="Nature" className="w-full h-full object-cover opacity-80" />
                          <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-2 p-4 md:p-8">
                              {logos.map((logo, i) => (
                                  <div key={i} className="bg-white/90 p-1 flex items-center justify-center shadow-sm">
                                      <span className="text-[10px] font-bold text-gray-500 uppercase">{logo.name}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="mt-6 bg-[#88c057] py-4 px-6 text-center">
                          <p className="text-white font-serif italic text-lg md:text-2xl font-bold">
                            Our partners are compliant with international social and environmental standards to protect both People and the Planet.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;