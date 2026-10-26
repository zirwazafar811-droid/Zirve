import React, { useState } from 'react';
import { Plus, Search, SlidersHorizontal } from 'lucide-react';
import { ArticleCard } from '../components/ArticleCard';
import { useApp } from '../context/AppContext';
import { CATEGORIES_LIST } from '../data/initialData';
import { CategoryType } from '../types';

export const BlogPage: React.FC = () => {
  const { articles, setIsCreatorStudioOpen, searchQuery, setSearchQuery } = useApp();
  const [activeCategory, setActiveCategory] = useState<CategoryType | 'All'>('All');

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-[#E8DFD8] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C7A45]">
            Zirvella Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#252020] tracking-tight mt-1">
            Fashion & Style Articles
          </h1>
          <p className="text-sm text-[#665A54] mt-2 max-w-xl">
            Thoughtful essays, capsule wardrobe blueprints, handbag care guides, and affordable styling formulas curated for women across the US.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCreatorStudioOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#342D2C] hover:bg-[#1E1919] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Write New Article</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E8DFD8] pb-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
              activeCategory === 'All'
                ? 'bg-[#342D2C] text-white'
                : 'bg-white text-[#5D504A] hover:bg-[#F4ECE6] border border-[#E8DFD8]'
            }`}
          >
            All Categories ({articles.length})
          </button>
          {CATEGORIES_LIST.map((cat) => {
            const count = articles.filter((a) => a.category === cat.name).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name as CategoryType)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                  activeCategory === cat.name
                    ? 'bg-[#342D2C] text-white'
                    : 'bg-white text-[#5D504A] hover:bg-[#F4ECE6] border border-[#E8DFD8]'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-[#8C7D77] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-[#DDD0C8] focus:outline-none focus:border-[#C5A059]"
          />
        </div>
      </div>

      {/* Articles Listing */}
      {filteredArticles.length === 0 ? (
        <div className="py-20 text-center bg-white border border-[#E8DFD8] p-8 space-y-4">
          <p className="font-serif text-lg text-[#382F2D]">No fashion articles match your search.</p>
          <p className="text-xs text-[#7B6E68]">
            Try clearing filters or search terms, or publish a new article with your own advice.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#342D2C] text-white text-xs font-semibold uppercase tracking-wider"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};
