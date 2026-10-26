import React from 'react';
import { ArrowRight, CheckCircle2, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Editorial Lead Section */}
      <section className="text-center space-y-5 max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C7A45]">
          Behind Zirvella
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#252020] tracking-tight leading-tight">
          Curating Modern Elegance for American Women
        </h1>
        <p className="text-base sm:text-lg text-[#61544F] font-normal leading-relaxed">
          Zirvella was founded on a simple conviction: dressing beautifully should bring clarity and joy to your morning routine, not stress or unsustainable spending.
        </p>
      </section>

      {/* Founder & Image Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 aspect-[4/5] overflow-hidden bg-[#E8DFD8] shadow-md border border-[#DDD0C8]">
          <img
            src="/src/assets/images/hero_zirvella_fashion_1792997118313.jpg"
            alt="Elena Vance, Founder of Zirvella"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="md:col-span-6 space-y-5">
          <span className="text-xs uppercase font-semibold text-[#9C7A45] tracking-wider">
            Our Founder's Letter
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#252020] leading-snug">
            "Style is an intimate expression of how you carry yourself through the world."
          </h2>
          <div className="text-sm text-[#5C504A] space-y-4 leading-relaxed">
            <p>
              Hi, I'm Elena Vance. After spending over a decade working in commercial fashion styling and luxury retail in New York, I noticed a widening gap between runway aspirational culture and the practical wardrobe needs of real women.
            </p>
            <p>
              We don't need closets bursting with flimsy micro-trend pieces that fall apart after two washes. We need reliable, beautifully tailored anchors—trousers with movement, coats that insulate with grace, knitwear that feels like a hug, and bags that weather decades of daily life.
            </p>
            <p>
              Zirvella is designed as your digital dressing room: honest reviews, actionable outfit formulas, and curated affiliate shopping links vetted for quality and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Editorial Pillars */}
      <section className="bg-white border border-[#E8DFD8] p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase font-semibold text-[#9C7A45] tracking-wider">
            Our Standard
          </span>
          <h3 className="font-serif text-2xl text-[#252020]">The Zirvella Editorial Pillars</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
              <h4 className="font-serif text-lg text-[#252020] font-medium">1. Natural Fabrics & Longevity</h4>
            </div>
            <p className="text-xs text-[#6B5F5A] leading-relaxed pl-7">
              We prioritize Grade-A cashmere, breathable European linen, silk charmeuse, and vegetable-tanned leather over synthetic polyester fast-fashion that pills and suffocates.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
              <h4 className="font-serif text-lg text-[#252020] font-medium">2. High-Low Balance</h4>
            </div>
            <p className="text-xs text-[#6B5F5A] leading-relaxed pl-7">
              True personal style pairs a $90 direct-to-consumer silk skirt with an investment Italian leather bag. We spotlight pieces across various price tiers without snobbery.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
              <h4 className="font-serif text-lg text-[#252020] font-medium">3. Strict Affiliate Transparency</h4>
            </div>
            <p className="text-xs text-[#6B5F5A] leading-relaxed pl-7">
              We never recommend poor quality items for higher affiliate payouts. Every recommendation is chosen first for its merit, with affiliate links added only if we truly stand behind the merchant.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
              <h4 className="font-serif text-lg text-[#252020] font-medium">4. Daily Practicality for US Women</h4>
            </div>
            <p className="text-xs text-[#6B5F5A] leading-relaxed pl-7">
              From school drop-offs and subway commutes to boardrooms and weekend getaways in New England or California, our outfits are created for active, purposeful lives.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="text-center pt-8 space-y-4">
        <h3 className="font-serif text-2xl text-[#252020]">Ready to Build Your Capsule?</h3>
        <p className="text-xs text-[#7B6E68] max-w-md mx-auto">
          Explore our seasonal outfit formulas or dive into our comprehensive bag styling masterclass.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => navigateTo('shop')}
            className="px-6 py-3 bg-[#342D2C] hover:bg-[#1E1919] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Shop My Picks
          </button>
          <button
            onClick={() => navigateTo('blog')}
            className="px-6 py-3 bg-white border border-[#DDD0C8] hover:border-[#342D2C] text-[#342D2C] text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Read The Blog
          </button>
        </div>
      </section>
    </div>
  );
};
