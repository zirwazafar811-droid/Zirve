import React, { useMemo, useState } from 'react';
import {
  ExternalLink,
  Filter,
  Heart,
  Plus,
  Search,
  ShieldCheck,
  Sliders,
  X,
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useApp } from '../context/AppContext';
import { CATEGORIES_LIST } from '../data/initialData';
import { CategoryType } from '../types';

export const ShopPage: React.FC = () => {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    wishlist,
    setIsCreatorStudioOpen,
    navigateTo,
  } = useApp();

  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [selectedRetailer, setSelectedRetailer] = useState<string>('all');
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);

  // Extract unique retailers
  const retailers = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.retailer) set.add(p.retailer);
    });
    return Array.from(set).sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category filter
      if (selectedCategory !== 'All' && prod.category !== selectedCategory) {
        return false;
      }

      // Retailer filter
      if (selectedRetailer !== 'all' && prod.retailer !== selectedRetailer) {
        return false;
      }

      // Wishlist filter
      if (showSavedOnly && !wishlist.includes(prod.id)) {
        return false;
      }

      // Price filter
      if (priceFilter === 'under-100' && prod.price >= 100) return false;
      if (priceFilter === '100-200' && (prod.price < 100 || prod.price > 200)) return false;
      if (priceFilter === '200-plus' && prod.price < 200) return false;

      // Search keyword filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesDesc = prod.description.toLowerCase().includes(q);
        const matchesRetailer = prod.retailer.toLowerCase().includes(q);
        const matchesTags = prod.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesRetailer && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [products, selectedCategory, selectedRetailer, showSavedOnly, priceFilter, searchQuery, wishlist]);

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedRetailer('all');
    setPriceFilter('all');
    setShowSavedOnly(false);
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedRetailer !== 'all' ||
    priceFilter !== 'all' ||
    showSavedOnly ||
    searchQuery.trim() !== '';

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Editorial Header */}
      <div className="border-b border-[#E8DFD8] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C7A45]">
            Curated Directory
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#252020] tracking-tight mt-1 mb-2">
            Shop My Picks
          </h1>
          <p className="text-sm text-[#665A54] max-w-2xl leading-relaxed">
            Every piece featured on Zirvella has been vetted for quality, fit, and timeless aesthetic value. Click "View Product" to shop with partner retailers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCreatorStudioOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#F4ECE6] hover:bg-[#EADED7] text-[#54433D] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#DDD0C8]"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Manage Affiliate Links</span>
          </button>
        </div>
      </div>

      {/* FTC Affiliate Disclosure Banner */}
      <div className="bg-[#FAF3EE] border border-[#ECDCD3] p-4 text-xs text-[#5D504A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
          <p>
            <strong>Affiliate Transparency:</strong> Zirvella partners with trusted fashion retailers. If you click through and purchase an item, we may earn an affiliate commission at zero extra cost to you.
          </p>
        </div>
        <button
          onClick={() => navigateTo('affiliate-disclosure')}
          className="underline text-[#3E3430] hover:text-black font-medium shrink-0 whitespace-nowrap"
        >
          View Full Policy
        </button>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="bg-white border border-[#E8DFD8] p-5 space-y-4">
        {/* Top Filter Row: Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
              selectedCategory === 'All'
                ? 'bg-[#342D2C] text-white'
                : 'bg-[#FAF7F5] text-[#544844] hover:bg-[#EFE6DF]'
            }`}
          >
            All Categories ({products.length})
          </button>
          {CATEGORIES_LIST.map((cat) => {
            const count = products.filter((p) => p.category === cat.name).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name as CategoryType)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  selectedCategory === cat.name
                    ? 'bg-[#342D2C] text-white'
                    : 'bg-[#FAF7F5] text-[#544844] hover:bg-[#EFE6DF]'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Row: Price, Retailer, Wishlist, Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-[#F0E6E0]">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#8C7D77] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, fabric, or brand..."
              className="w-full text-xs pl-8 pr-3 py-2 bg-[#FAF7F5] border border-[#DDD0C8] focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          {/* Retailer Select */}
          <div>
            <select
              value={selectedRetailer}
              onChange={(e) => setSelectedRetailer(e.target.value)}
              className="w-full text-xs px-3 py-2 bg-[#FAF7F5] border border-[#DDD0C8] text-[#4A3E39]"
            >
              <option value="all">All Retailers ({retailers.length})</option>
              {retailers.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Price Select */}
          <div>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full text-xs px-3 py-2 bg-[#FAF7F5] border border-[#DDD0C8] text-[#4A3E39]"
            >
              <option value="all">All Price Ranges</option>
              <option value="under-100">Under $100</option>
              <option value="100-200">$100 – $200</option>
              <option value="200-plus">$200 & Above</option>
            </select>
          </div>

          {/* Wishlist toggle */}
          <div className="flex items-center justify-between sm:justify-start gap-3">
            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors border ${
                showSavedOnly
                  ? 'bg-[#C5A059] text-white border-[#C5A059]'
                  : 'bg-[#FAF7F5] text-[#544844] border-[#DDD0C8] hover:bg-[#EFE6DF]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-white' : ''}`} />
              <span>Saved ({wishlist.length})</span>
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-[#8C7D77] hover:text-[#252020] underline inline-flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-[#7B6E68]">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of {products.length} recommendations
        </span>
        <span className="hidden sm:inline">
          US Pricing & Shipping Standards
        </span>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center bg-white border border-[#E8DFD8] p-8 space-y-4">
          <p className="font-serif text-lg text-[#382F2D]">No products found matching your filters.</p>
          <p className="text-xs text-[#7B6E68]">
            Try relaxing your price range, retailer filter, or search keywords.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 bg-[#342D2C] text-white text-xs font-semibold uppercase tracking-wider"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};
