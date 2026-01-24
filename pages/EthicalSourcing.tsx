import React, { useState, useEffect, useRef } from 'react';
import { ASSETS } from '../config/assets';

// FadeInSection Component
const FadeInSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
      style={{ transition: 'opacity 0.5s, transform 0.5s' }}
    >
      {children}
    </div>
  );
};

const EthicalSourcing = () => {
  const logos = [
    { name: 'Disney', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/2560px-Disney_wordmark.svg.png' }, // Placeholder for Disney
    { name: 'ZDHC', url: 'https://www.roadmaptozero.com/assets/images/ZDHC-Logo-Horizontal-Black.png' }, // Placeholder
    { name: 'RSC', url: ASSETS.images.logos.rsc },
    { name: 'BetterWork', url: ASSETS.images.logos.betterwork },
    { name: 'SMETA', url: ASSETS.images.logos.smeta },
    { name: 'amfori', url: ASSETS.images.logos.amfori },
    { name: 'GOTS', url: ASSETS.images.logos.gots },
    { name: 'BCI', url: ASSETS.images.logos.bci },
    { name: 'CTPAT', url: ASSETS.images.logos.ctpat },
    { name: 'NIRAPON', url: ASSETS.images.logos.nirapon }
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* 1. Hero Section - Forest Boardwalk */}
      <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-brand-navy">
        <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" 
            alt="Ethical Sourcing Forest Path"
            className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:px-24 lg:py-20">
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 tracking-wide animate-fade-in-up">
                Ethical and Responsive Sourcing
             </h1>
        </div>
      </div>

      {/* 2. Intro Text Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[95%] mx-auto px-4 lg:px-8">
             <FadeInSection>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl font-light text-justify">
                    <p>
                        <span className="font-bold text-black">Ethical sourcing</span> is our corner stone of responsible business practices. As consumers increasingly demand transparency and accountability, fashion brands are recognizing the importance of ensuring that every thread in their supply chain is merged with integrity.
                    </p>
                    <p>
                        At COUTURETEX Sourcing, we are dedicated to ethical and responsive sourcing practices that protect both individuals and the environment.
                    </p>
                </div>
             </FadeInSection>
        </div>
      </section>

      {/* 3. Girl with Flowers Image & Transparency Text */}
      <section className="pb-16 bg-white">
        <div className="max-w-[95%] mx-auto px-4 lg:px-8">
           <FadeInSection>
               <div className="w-full h-[500px] md:h-[700px] rounded-sm overflow-hidden mb-12 shadow-md">
                   <img 
                      src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1976&auto=format&fit=crop" 
                      alt="Girl holding flowers in nature" 
                      className="w-full h-full object-cover object-center"
                   />
               </div>
           </FadeInSection>

           <FadeInSection>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl font-light text-justify">
                    <p>
                        <span className="font-bold text-black">Transparency and traceability</span> are fundamental principles guiding our operations. We believe in providing full visibility into the journey of each garment, from the sourcing of raw materials to the final production stage. This commitment ensures that consumers and buyers can make informed choices, knowing where and how their garments were produced.
                    </p>
                    <p>
                        Our traceability measures ensure accountability across the supply chain, allowing us to quickly address any ethical concerns. With transparency at our core, customers can trust our commitment to sourcing ethically and responsibly. These principles build trust in our brand and enable customers to make sustainable, ethical fashion choices with every purchase.
                    </p>
                </div>
           </FadeInSection>
           
           {/* Protection Icons (Placeholder for the icons in PDF page 1 bottom) */}
           <FadeInSection className="mt-12 flex justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
                <img src="https://cdn-icons-png.flaticon.com/512/2910/2910795.png" alt="Protection" className="h-16 md:h-20 w-auto" />
                <img src="https://cdn-icons-png.flaticon.com/512/1165/1165674.png" alt="Recycle" className="h-16 md:h-20 w-auto" />
                <img src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png" alt="Eco" className="h-16 md:h-20 w-auto" />
           </FadeInSection>
        </div>
      </section>

      {/* 4. Business Ethics Diagram & Hands Sorting */}
      <section className="py-16 bg-white">
          <div className="max-w-[95%] mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <FadeInSection>
                      {/* Business Ethics Diagram Representation */}
                      <div className="bg-white p-4 rounded-sm flex items-center justify-center">
                          <img 
                            src="https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_1280.png" 
                            alt="Business Ethics Diagram" 
                            className="w-full h-auto object-contain max-h-[400px]"
                          />
                      </div>
                  </FadeInSection>
                  <FadeInSection>
                      <div className="h-[400px] overflow-hidden rounded-sm shadow-md">
                          <img 
                            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop" 
                            alt="Hands Checking Clothes" 
                            className="w-full h-full object-cover" 
                          />
                      </div>
                  </FadeInSection>
              </div>
          </div>
      </section>

      {/* 5. Green Banner */}
      <section className="py-12 bg-[#88c057] text-center px-4">
          <FadeInSection>
              <h2 className="text-xl md:text-3xl font-serif font-bold text-white uppercase leading-snug">
                  COUTURETEX Sourcing, Where Fashion Meets Integrity!!<br/>
                  Elevate Your Wardrobe, Elevate Your Values!!
              </h2>
          </FadeInSection>
      </section>

      {/* 6. Fair Labour Practice Section */}
      <section className="py-16 bg-[#e6f4ff]">
          <div className="max-w-[95%] mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <FadeInSection>
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Fair Labour Practice</h3>
                      <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light text-justify mb-4">
                        We stand firmly committed to upholding fair labor practices across our supply chain.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light text-justify">
                        This commitment ensures workers are treated with dignity and respect, receiving fair wages, safe working conditions, and reasonable hours. Through active engagement with our suppliers, we promote fair labor practices and support initiatives that enhance workers' rights and welfare.
                      </p>
                  </FadeInSection>
                  <FadeInSection>
                      <div className="h-[400px] overflow-hidden rounded-sm shadow-xl border-4 border-white">
                          <img 
                            src="https://images.unsplash.com/photo-1565532525700-111162657e28?q=80&w=1974&auto=format&fit=crop" 
                            alt="Factory Workers" 
                            className="w-full h-full object-cover"
                          />
                      </div>
                  </FadeInSection>
              </div>
          </div>
      </section>

      {/* 7. Environmental Concern */}
      <section className="py-16 bg-white">
          <div className="max-w-[95%] mx-auto px-4 lg:px-8">
              <FadeInSection className="mb-12">
                  <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light text-justify">
                      <span className="font-bold text-black">Environmental Concern</span> at Couture Tex Sourcing, we're committed to minimizing our environmental impact by partnering with like-minded collaborators. We prioritize sustainable materials like organic cotton, recycled polyester, and ecofriendly fibers, aiming to reduce energy use, waste, and pollution across our supply chain. With a focus on environmental stewardship, we strive to lead the way toward a more sustainable, eco-conscious fashion industry. Join us in creating a greener tomorrow, one stitch at a time.
                  </p>
              </FadeInSection>
              
              <FadeInSection>
                  <div className="grid md:grid-cols-3 gap-0 items-center bg-gray-50 rounded-sm overflow-hidden shadow-sm border border-gray-100">
                      <div className="md:col-span-1 p-8 flex items-center justify-center bg-white h-full border-r border-gray-100">
                          <img src={ASSETS.logo} alt="CoutureTex Logo" className="w-full max-w-[200px] object-contain" />
                      </div>
                      <div className="md:col-span-2 h-[400px]">
                          <img 
                            src="https://images.unsplash.com/photo-1595166687494-df5a79401b2f?q=80&w=2070&auto=format&fit=crop" 
                            alt="Tailoring Materials" 
                            className="w-full h-full object-cover"
                          />
                      </div>
                  </div>
              </FadeInSection>
          </div>
      </section>

      {/* 8. Supplier Audits and Certifications */}
      <section className="py-20 bg-white">
          <div className="max-w-[95%] mx-auto px-4 lg:px-8">
              <FadeInSection className="mb-12">
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1e3a8a] mb-6">Supplier Audits and Certifications</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-lg md:text-xl font-light text-justify">
                      <p>
                          We prioritize ethical practices and sustainability across our supply chain. Our compliance team conducts thorough audits to ensure suppliers meet our high standards for labor practices, worker safety, and environmental impact. We seek certifications that validate our commitment to ethical sourcing, providing assurance to clients and stakeholders that our products are responsibly sourced with respect for social and environmental values.
                      </p>
                      <p>
                          Our partners are with Social, Technical and Environmental standard and certifications to comply with Word Standard.
                      </p>
                  </div>
              </FadeInSection>

              {/* Logos on Forest Background */}
              <FadeInSection className="relative w-full h-[500px] rounded-sm overflow-hidden shadow-xl mb-16">
                  <img 
                      src="https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Forest Background" 
                      className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 w-full max-w-6xl">
                          {logos.map((logo, index) => (
                              <div key={index} className="bg-white p-3 rounded-sm flex items-center justify-center h-20 md:h-24 shadow-lg hover:scale-105 transition-transform">
                                  <img 
                                    src={logo.url} 
                                    alt={logo.name} 
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = `<span class="text-xs font-bold text-gray-600">${logo.name}</span>`;
                                    }}
                                  />
                              </div>
                          ))}
                      </div>
                  </div>
              </FadeInSection>

              {/* Continuous Improvement */}
              <FadeInSection className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3a8a] mb-6">Continuous Improvement</h2>
                  <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light text-justify">
                      we are committed to proactive sustainability practices. Through ongoing assessments and audits, we monitor our performance, making necessary improvements to minimize our environmental impact. Collaboration is central to our sustainability efforts, as we engage with stakeholders to drive forward sustainable practices collectively. Additionally, we embrace innovation to enhance our sustainability efforts, always seeking new solutions and technologies to advance ethical sourcing and environmental responsibility.
                  </p>
              </FadeInSection>
          </div>
      </section>

      {/* 9. Enquiry Call to Action */}
      <section className="relative h-[600px] w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2059&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
              <FadeInSection>
                  <h2 className="text-white text-3xl md:text-5xl font-serif font-bold mb-6 max-w-4xl leading-tight">
                      Couture Tex Sourcing, Where Fashion Meets Integrity!! Elevate Your Wardrobe, Elevate Your Values!!
                  </h2>
                  <h3 className="text-[#88c057] text-2xl md:text-4xl font-bold mb-10 uppercase tracking-widest">
                      To Enquire with Us
                  </h3>
                  <button onClick={() => window.location.href = 'mailto:info@couturetex.com'} className="border-2 border-white text-white px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#88c057] hover:border-[#88c057] transition-all duration-300">
                      CLICK HERE
                  </button>
              </FadeInSection>
          </div>
      </section>

      {/* 10. Footer Text */}
      <section className="py-12 bg-white text-center">
          <div className="max-w-[95%] mx-auto px-4">
              <FadeInSection>
                  <p className="text-gray-600 text-sm md:text-base font-light">
                      <span className="font-bold text-black">Ethical and responsive sourcing</span> is at the core of Couture Tex Sourcing's mission. With our dedication to transparency, fair practices, sustainability, and adherence to international standards, we surpass ethical expectations. Choosing us means opting for responsible sourcing that values both people and the planet. Together, we pave the way for a future of ethical business practices.
                  </p>
              </FadeInSection>
          </div>
      </section>

    </div>
  );
};

export default EthicalSourcing;