
import React from 'react';
import { Star, MessageCircle, Quote } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { theme } from '../theme';

const ReviewsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className={theme.spacing.container}>
        <div className="text-center mb-20">
          <h1 className={`${theme.fonts.serif} text-5xl md:text-7xl font-bold mb-4`}>Voices of Trust</h1>
          <p className="text-lg opacity-60">Heartfelt testimonials from our beloved customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.testimonials.map((review) => (
            <div key={review.id} className="p-10 bg-white shadow-xl rounded-2xl relative border border-gray-50">
              <Quote className="absolute top-8 right-8 text-brown-100" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#8B4513" stroke="#8B4513" />
                ))}
              </div>
              <p className="text-xl leading-relaxed mb-8 text-brown-900 font-light italic">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brown-50 rounded-full flex items-center justify-center text-brown-600 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-xs uppercase tracking-wider opacity-60">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto bg-brown-900 text-white p-12 rounded-3xl shadow-2xl">
          <MessageCircle className="mx-auto mb-6 opacity-40" size={40} />
          <h2 className="text-3xl font-serif mb-4">Share Your Experience</h2>
          <p className="opacity-80 mb-8">
            Has your family shopped with us? We'd love to hear your story. Your feedback helps us maintain our legacy of excellence.
          </p>
          <a 
            href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-brown-900 font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
          >
            Send Us Feedback
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
