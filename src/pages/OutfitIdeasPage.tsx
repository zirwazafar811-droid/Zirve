import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Tag } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useApp } from '../context/AppContext';

export const OutfitIdeasPage: React.FC = () => {
  const { looks, products, navigateTo } = useApp();
  const [selectedSeason, setSelectedSeason] = useState<string>('All');

  const seasons = ['All', 'Spring / Summer', 'Autumn / Winter', 'Year-Round Staples'];

  const filteredLooks = looks.filter((look) => {
    if (selectedSeason === 'All') return true;
    return look.season.toLowerCase().includes(selectedSeason.toLowerCase().split('/')[0].trim());
  });

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Editorial Header */}
      <div className="border-b border-[#E8DFD8] pb-8 max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C7A45]">
          Style Formulas & Lookbooks
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#252020] tracking-tight mt-1 mb-3">
          Curated Outfit Ideas
        </h1>
        <p className="text-sm text-[#665A54] leading-relaxed">
          Struggling with what to wear? Browse our editor-approved daily outfit combinations. Each look is crafted with versatile staples, thoughtful proportions, and direct links to shop each component.
        </p>
      </div>

      {/* Season Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E8DFD8]">
        <span className="text-xs uppercase font-semibold tracking-wider text-[#8C7D77] mr-2">
          Filter Season:
        </span>
        {seasons.map((season) => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
              selectedSeason === season
                ? 'bg-[#342D2C] text-white'
                : 'bg-white text-[#5D504A] hover:bg-[#F4ECE6] border border-[#E8DFD8]'
            }`}
          >
            {season}
          </button>
        ))}
      </div>

      {/* Lookbooks List */}
      <div className="space-y-20">
        {filteredLooks.map((look, index) => {
          const linkedProducts = look.productIds
            .map((id) => products.find((p) => p.id === id))
            .filter(Boolean);

          return (
            <div
              key={look.id}
              className="bg-white border border-[#E8DFD8] p-6 sm:p-8 lg:p-10 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Visual Look Presentation */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="aspect-[3/4] overflow-hidden bg-[#F0EAE4] border border-[#E0D4CC]">
                    <img
                      src={look.imageUrl}
                      alt={look.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 bg-[#FAF7F5] border border-[#E8DFD8] space-y-1">
                    <span className="text-[10px] uppercase font-semibold text-[#9C7A45] tracking-wider">
                      Stylist Tip
                    </span>
                    <p className="text-xs text-[#5D504A] leading-relaxed">
                      Anchor the look with neutral leather accessories to keep the palette cohesive and polished from morning to evening.
                    </p>
                  </div>
                </div>

                {/* Outfit Breakdown & Shop The Look */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#8C7D77] mb-2 uppercase tracking-wider">
                      <span>Formula #{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span>{look.occasion}</span>
                      <span aria-hidden="true">·</span>
                      <span>{look.season}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl text-[#252020] tracking-tight mb-3">
                      {look.title}
                    </h2>

                    <p className="text-sm text-[#61544F] leading-relaxed">
                      {look.description}
                    </p>
                  </div>

                  {/* Garments in this Look */}
                  <div className="pt-4 border-t border-[#F0E6E0]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs uppercase font-semibold tracking-wider text-[#4A3E39]">
                        Shop The Pieces In This Look ({linkedProducts.length})
                      </h3>
                      <span className="text-[11px] text-[#8C7D77]">
                        Click "View Product" for merchant details
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {linkedProducts.map(
                        (prod) => prod && <ProductCard key={prod.id} product={prod} showCategory={false} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
