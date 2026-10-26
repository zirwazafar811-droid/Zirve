import React from 'react';
import { ArrowRight, Check, Heart, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { ProductCard } from '../components/ProductCard';
import { useApp } from '../context/AppContext';
import { CATEGORIES_LIST } from '../data/initialData';
import { CategoryType } from '../types';

export const HomePage: React.FC = () => {
  const { articles, products, looks, navigateTo, setSelectedCategory } = useApp();

  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0];
  const secondaryArticles = articles.filter((a) => a.id !== featuredArticle?.id).slice(0, 3);
  const popularProducts = products.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F6EFEB] border-b border-[#E8DFD8]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9C7A45]">
                <span className="w-6 h-px bg-[#9C7A45]" />
                <span>Zirvella Style Editorial</span>
              </div>

              <h1
                className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#26201F] tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                Discover Your Signature Style
              </h1>

              <p className="text-base sm:text-lg text-[#61544F] font-normal leading-relaxed max-w-xl">
                Elevated women's fashion curated for modern life in the United States. We celebrate timeless silhouettes, capsule wardrobes, and honest recommendations to help you dress with quiet confidence every day.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('shop')}
                  className="px-6 py-3.5 bg-[#342D2C] hover:bg-[#1E1919] text-[#FAF7F5] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Curated Picks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => navigateTo('blog')}
                  className="px-6 py-3.5 bg-white border border-[#DDD0C8] hover:border-[#342D2C] text-[#342D2C] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Read Fashion Guides
                </button>
              </div>

              {/* Adjacency Trust Indicators */}
              <div className="pt-6 border-t border-[#E8DFD8] flex flex-wrap items-center gap-6 text-xs text-[#7B6E68]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>FTC-Compliant Affiliate Links</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Curated for US Retailers</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Fashion Photography */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DFD8] shadow-lg border border-[#DDD0C8]">
                <img
                  src="/src/assets/images/hero_zirvella_fashion_1792997118313.jpg"
                  alt="Elegant woman in cream overcoat walking down sunlit avenue"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 border border-[#EBE2DC]">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#9C7A45] block">
                    Curated Look
                  </span>
                  <p className="font-serif text-sm text-[#252020] font-medium">
                    The Parisian Wool Blend Overcoat & Tailored Linen
                  </p>
                  <button
                    onClick={() => navigateTo('outfit-ideas')}
                    className="mt-1 text-[11px] text-[#544844] hover:text-[#C5A059] font-medium underline"
                  >
                    View Outfit Formula →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Strip */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E8DFD8] pb-4 mb-8 flex items-baseline justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#9C7A45]">
              Browse By Department
            </span>
            <h2 className="font-serif text-2xl text-[#252020] tracking-tight">
              Curated Style Categories
            </h2>
          </div>
          <button
            onClick={() => navigateTo('shop')}
            className="text-xs font-semibold text-[#544844] hover:text-[#9C7A45] transition-colors uppercase tracking-wider hidden sm:inline-flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.name as CategoryType);
                navigateTo('shop', undefined, cat.name as CategoryType);
              }}
              className="p-4 text-center bg-white border border-[#EBE2DC] hover:border-[#C5A059] hover:bg-[#FAF7F5] transition-all group flex flex-col items-center justify-center min-h-[100px]"
            >
              <span className="font-serif text-sm text-[#382F2D] group-hover:text-[#8E6D38] transition-colors leading-snug">
                {cat.name}
              </span>
              <span className="text-[10px] text-[#8F817B] mt-1 group-hover:text-[#524641]">
                Explore →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Fashion Articles */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E8DFD8] pb-4 mb-8 flex items-baseline justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#9C7A45]">
              Editorial Journal
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#252020] tracking-tight">
              Featured Fashion Articles
            </h2>
          </div>
          <button
            onClick={() => navigateTo('blog')}
            className="text-xs font-semibold text-[#544844] hover:text-[#9C7A45] transition-colors uppercase tracking-wider inline-flex items-center gap-1"
          >
            <span>All Articles</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Lead Featured Article */}
        {featuredArticle && (
          <div className="mb-8">
            <ArticleCard article={featuredArticle} featured={true} />
          </div>
        )}

        {/* Secondary Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {secondaryArticles.map((art) => (
            <ArticleCard key={art.id} article={art} />
          ))}
        </div>
      </section>

      {/* Trending Outfit Inspiration (Lookbook) */}
      <section className="bg-[#F8F4EE] py-16 border-y border-[#E8DFD8]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#9C7A45]">
              Daily Lookbook
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#252020] tracking-tight mt-1 mb-3">
              Trending Outfit Inspiration
            </h2>
            <p className="text-sm text-[#665A54] leading-relaxed">
              Effortless styling formulas built from staple wardrobe pieces. Click on any outfit to view individual garments, sizing notes, and affiliate shopping links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {looks.map((look) => (
              <div
                key={look.id}
                onClick={() => navigateTo('outfit-ideas')}
                className="group cursor-pointer bg-white border border-[#EAE1DA] hover:border-[#DECBC2] hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-[#EAE1DA]">
                  <img
                    src={look.imageUrl}
                    alt={look.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#483E3A]">
                    {look.occasion}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#8C7D77] uppercase tracking-wider block mb-1">
                      {look.season}
                    </span>
                    <h3 className="font-serif text-lg text-[#252020] group-hover:text-[#8E6D38] transition-colors mb-2">
                      {look.title}
                    </h3>
                    <p className="text-xs text-[#6B5F5A] line-clamp-2 leading-relaxed">
                      {look.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#F2EAE5] flex items-center justify-between">
                    <span className="text-xs text-[#7B6E68] font-medium">
                      {look.productIds.length} Linked Pieces
                    </span>
                    <span className="text-xs font-semibold text-[#342D2C] group-hover:text-[#8E6D38] inline-flex items-center gap-1 uppercase tracking-wider">
                      <span>Shop Look</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Product Recommendations */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E8DFD8] pb-4 mb-4 flex items-baseline justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#9C7A45]">
              Curated Boutique
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#252020] tracking-tight">
              Popular Product Recommendations
            </h2>
          </div>
          <button
            onClick={() => navigateTo('shop')}
            className="text-xs font-semibold text-[#544844] hover:text-[#9C7A45] transition-colors uppercase tracking-wider inline-flex items-center gap-1"
          >
            <span>Browse All {products.length} Items</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Affiliate Disclosure Notice Box */}
        <div className="mb-8 p-3.5 bg-[#FAF3EE] border border-[#E8DFD8] text-xs text-[#6B5E59] flex items-center justify-between">
          <p>
            <span className="font-semibold text-[#382F2D]">Affiliate Notice:</span> Product links marked below may earn us an affiliate commission when clicked. Prices reflect current retail listing in USD.
          </p>
          <button
            onClick={() => navigateTo('affiliate-disclosure')}
            className="underline text-[#382F2D] hover:text-black font-medium shrink-0 ml-4 hidden sm:block"
          >
            Learn More
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* Editorial Styling Philosophy / Quote Section */}
      <section className="container mx-auto max-w-4xl px-4 text-center space-y-4 pt-8">
        <span className="text-xs uppercase tracking-widest text-[#9C7A45] font-semibold">
          The Zirvella Philosophy
        </span>
        <blockquote className="font-serif text-2xl sm:text-3xl text-[#2A2322] leading-snug italic">
          "Elegance is not about being noticed, it's about being remembered. Real style is finding pieces you adore and wearing them with complete ease."
        </blockquote>
        <p className="text-xs text-[#82746F] tracking-wide uppercase pt-2">
          — Elena Vance, Founder & Stylist
        </p>
      </section>
    </div>
  );
};
