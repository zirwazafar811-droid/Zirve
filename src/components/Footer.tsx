import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Mail, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES_LIST } from '../data/initialData';
import { CategoryType, PageId } from '../types';

export const Footer: React.FC = () => {
  const { navigateTo, setIsCreatorStudioOpen } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#241F1F] text-[#EDE7E3] pt-16 pb-12 border-t border-[#3A3331]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-serif text-[#F8F4EE] tracking-tight">Zirvella</h2>
            <p className="text-sm text-[#BFB3AD] leading-relaxed max-w-sm">
              An editorial destination celebrating timeless women's fashion, capsule wardrobe formulas, handbag styling, and honest, thoughtfully tested style recommendations.
            </p>
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-[#A89C96]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Editorial Integrity & FTC-Compliant Affiliate Disclosure</span>
              </div>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-xs uppercase font-semibold tracking-wider text-[#DFD6D0] mb-4">
              Explore Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BFB3AD]">
              {CATEGORIES_LIST.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigateTo('shop', undefined, cat.name as CategoryType)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Pages Column */}
          <div>
            <h3 className="text-xs uppercase font-semibold tracking-wider text-[#DFD6D0] mb-4">
              Editorial & Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BFB3AD]">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('blog')}
                  className="hover:text-white transition-colors"
                >
                  Fashion Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('outfit-ideas')}
                  className="hover:text-white transition-colors"
                >
                  Outfit Ideas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('shop')}
                  className="hover:text-white transition-colors"
                >
                  Shop My Picks
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors"
                >
                  About Elena & Zirvella
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Press
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('affiliate-disclosure')}
                  className="hover:text-white transition-colors font-medium text-[#C5A059]"
                >
                  Affiliate Disclosure
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xs uppercase font-semibold tracking-wider text-[#DFD6D0] mb-4">
              The Weekly Edit
            </h3>
            <p className="text-xs text-[#BFB3AD] mb-3 leading-relaxed">
              Curated capsule guides, private sale notifications, and new outfit formulas delivered every Sunday morning.
            </p>
            {subscribed ? (
              <div className="bg-[#382F2D] border border-[#524441] p-3 text-xs text-[#F2DFD8] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>Thank you for subscribing to Zirvella!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#181515] border border-[#3E3634] px-3.5 py-2.5 text-xs text-white placeholder-[#8A7D78] focus:outline-none focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#C5A059] text-[#1E1919] hover:bg-[#D8B466] transition-colors flex items-center justify-center"
                    aria-label="Subscribe to weekly edit"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-[#8A7D78]">
                  Zero spam. Unsubscribe anytime with one click.
                </p>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-[#3A3331]">
              <button
                onClick={() => setIsCreatorStudioOpen(true)}
                className="text-xs text-[#D8B466] hover:text-[#F0CE84] underline transition-colors"
              >
                Website Owner: Open Affiliate & Content Studio
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#38312F] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7E78] gap-4">
          <p>© {new Date().getFullYear()} Zirvella. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Curated with care. Prices & availability subject to change at merchant sites.
          </p>
        </div>
      </div>
    </footer>
  );
};
