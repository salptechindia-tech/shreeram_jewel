
import React from 'react';
import { theme } from '../theme';
import { siteConfig } from '../siteConfig';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className={theme.spacing.container}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-brown-600 block mb-4">Our Heritage</span>
            <h1 className={`${theme.fonts.serif} text-5xl md:text-7xl font-bold mb-8`}>30 Years of Pure Trust</h1>
            <div className="w-24 h-px bg-brown-300 mx-auto" />
          </div>

          <div className="prose prose-xl prose-brown mx-auto opacity-80 space-y-12">
            <p className="leading-relaxed first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-brown-900">
              Founded in Coimbatore, Shriraam Jewellery was born from a passion for purity and exceptional craftsmanship. For over three decades, we have been the trusted choice for families who value tradition, transparency, and exquisite detail.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 not-prose py-12">
              <img 
                src="https://images.unsplash.com/photo-1573408302382-993275706013?auto=format&fit=crop&q=80&w=800" 
                alt="Jewellery Craft" 
                className="rounded-lg shadow-2xl rotate-1"
              />
              <div className="flex flex-col justify-center space-y-6">
                <h3 className={`${theme.fonts.serif} text-3xl font-bold text-brown-900`}>A Family Tradition</h3>
                <p className="text-lg opacity-80">
                  Jewellery isn't just an ornament for us; it's a legacy passed through generations. We take pride in serving grandmother, mother, and daughter with equal care and devotion.
                </p>
              </div>
            </div>

            <h2 className={`${theme.fonts.serif} text-4xl font-bold text-center pt-8`}>Why Shriraam?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 not-prose pt-8">
              {[
                { title: "Transparency", desc: "Honest pricing and clear breakdown of gold weight and stone values." },
                { title: "Customization", desc: "Bespoke designs tailored to your vision and heritage." },
                { title: "Expertise", desc: "In-house gemologists and master craftsmen with decades of experience." }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 bg-white border border-brown-50 rounded-xl shadow-sm">
                  <h4 className="font-bold text-lg mb-3 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
