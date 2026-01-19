import React from 'react';
import HeroVideo from '../components/HeroVideo';

const Manufacturing = () => {
  return (
    <div>
      <HeroVideo 
        title="Manufacturing Excellence" 
        subtitle="Where Excellence is Crafted into Every Stitch"
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-manufacturing-factory-workers-1647-large.mp4"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            
            {/* Mission */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Excellence Mission:</h2>
                    <p className="text-gray-600 mb-4 font-bold">Defining Manufacturing Excellence:</p>
                    <ul className="space-y-4 text-gray-600 text-sm">
                        <li><strong>Precision, Safety, Empowerment:</strong> Quality is a core value, backed by advanced testing, skilled QC teams.</li>
                        <li><strong>Efficient and Safe Processes:</strong> Innovation in Motion. Efficiency and safety prioritized through streamlined methods.</li>
                        <li><strong>Empowered and Capable Teams:</strong> The Heartbeat of Excellence. Skilled teams drive improvement.</li>
                        <li><strong>Flexibility:</strong> Competitive Price, Competitive Quality, Order Quantity.</li>
                    </ul>
                </div>
                <div className="grid grid-rows-2 gap-4">
                    <img src="https://picsum.photos/id/1083/600/300" className="rounded shadow w-full h-full object-cover" alt="Factory 1" />
                    <img src="https://picsum.photos/id/1081/600/300" className="rounded shadow w-full h-full object-cover" alt="Factory 2" />
                </div>
            </div>

            {/* Services */}
            <h2 className="text-4xl font-serif font-bold text-brand-blue text-center mb-16 uppercase">Manufacturing Services:</h2>
            
            {[
                { title: 'Fabric R&D and Innovation', subtitle: '"Ahead of the Curve"', img: 'https://picsum.photos/id/225/800/400' },
                { title: 'Fitting / Garment Technical Support', subtitle: 'Redefining Comfort, Style and Functionality', img: 'https://picsum.photos/id/447/800/400' },
                { title: 'Production Control', subtitle: 'Streamlining Operations, Ensuring Quality', img: 'https://picsum.photos/id/3/800/400' }
            ].map((srv, i) => (
                <div key={i} className="mb-20">
                    <h3 className="text-2xl font-bold text-brand-navy mb-2">{srv.title}</h3>
                    <p className="text-gray-500 italic mb-6">{srv.subtitle}</p>
                    <img src={srv.img} alt={srv.title} className="w-full rounded-lg shadow-lg" />
                </div>
            ))}

            {/* Quality Philosophy */}
            <div className="bg-gray-50 p-12 rounded-xl mb-20">
                <h3 className="text-3xl font-bold text-brand-navy mb-8">Quality Philosophy</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {['Dependable Products', 'More Than a Garment', 'Precision at Every Stage', 'Integrated Quality Systems', 'Proactive Prevention', 'Rigorous Inspections'].map(q => (
                        <div key={q} className="bg-white p-6 rounded shadow border-l-4 border-brand-green">
                            <h4 className="font-bold text-lg mb-2">{q}</h4>
                            <p className="text-xs text-gray-500">Ensuring excellence in every aspect of production.</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fair Traceability */}
            <div className="text-center bg-brand-light p-12 rounded-xl">
                 <h2 className="text-3xl font-bold text-brand-navy mb-4">Fair Traceability</h2>
                 <p className="text-brand-green font-bold mb-6">"Trace The Journey, Trust the Process"</p>
                 <p className="text-gray-600 max-w-2xl mx-auto">
                     Fair traceability is prioritized through transparent, real-time updates shared with customers at every stage of the product's journey—from the sourcing of raw materials to the final moments of manufacturing.
                 </p>
            </div>

        </div>
      </section>
    </div>
  );
};

export default Manufacturing;