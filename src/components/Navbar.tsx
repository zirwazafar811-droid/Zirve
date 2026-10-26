import React, { useState } from 'react';
import { Bookmark, Heart, Menu, Search, Sliders, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateTo,
    searchQuery,
    setSearchQuery,
    wishlist,
    setIsCreatorStudioOpen,
  } = useApp();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Fashion Blog', page: 'blog' },
    { label: 'Outfit Ideas', page: 'outfit-ideas' },
    { label: 'Shop My Picks', page: 'shop' },
    { label: 'About', page: 'about' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigateTo('shop');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F5]/95 backdrop-blur-md border-b border-[#E8DFD8] transition-colors">
      {/* Editorial Affiliate Disclosure Top Bar */}
      <div className="bg-[#F4ECE6] border-b border-[#EADED7] text-[11px] text-[#6E635F] px-4 py-1.5 flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <p className="tracking-wide">
            <span className="font-semibold text-[#4A403C]">Affiliate Disclosure:</span> Some links are affiliate links. We may earn a commission on qualifying purchases at zero added cost to you.{' '}
            <button
              onClick={() => navigateTo('affiliate-disclosure')}
              className="underline text-[#4A403C] hover:text-[#252020] ml-1 font-medium transition-colors"
            >
              Read full policy
            </button>
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setIsCreatorStudioOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-[#7C5A3E] hover:text-[#523A25] transition-colors"
              title="Edit affiliate links, add articles, or manage products"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Affiliate & Content Studio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => navigateTo('home')}
          className="text-2xl sm:text-3xl font-serif tracking-tight text-[#2D2625] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 text-left"
        >
          Zirvella
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide font-medium text-[#5F5552] uppercase">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => navigateTo(link.page)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'border-[#C5A059] text-[#252020] font-semibold'
                    : 'border-transparent hover:text-[#252020] hover:border-[#D8B466]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Utilities */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Search Toggle */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-[#5F5552] hover:text-[#252020] transition-colors"
            aria-label="Search articles and products"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist Indicator */}
          <button
            onClick={() => navigateTo('shop')}
            className="relative p-2 text-[#5F5552] hover:text-[#252020] transition-colors hidden sm:block"
            title="Saved items"
            aria-label="Saved products"
          >
            <Heart className="w-4 h-4" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#C5A059] text-white text-[9px] font-semibold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => navigateTo('shop')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F5] bg-[#342D2C] hover:bg-[#1E1919] transition-colors rounded-none whitespace-nowrap shrink-0"
          >
            Shop My Picks
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#5F5552] hover:text-[#252020]"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {isSearchOpen && (
        <div className="border-t border-[#E8DFD8] bg-[#F9F5F1] px-4 py-3">
          <form onSubmit={handleSearchSubmit} className="container mx-auto max-w-3xl flex items-center gap-3">
            <Search className="w-4 h-4 text-[#8C807B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, outfit formulas, shoes, handbags, jewelry..."
              className="w-full bg-transparent border-none text-sm text-[#252020] placeholder-[#8C807B] focus:outline-none"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#8C807B] hover:text-[#252020]"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="px-3 py-1.5 text-xs font-medium bg-[#342D2C] text-white whitespace-nowrap"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DFD8] bg-[#FAF7F5] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  navigateTo(link.page);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left text-base font-serif py-1.5 text-[#342D2C] hover:text-[#C5A059] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                navigateTo('affiliate-disclosure');
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-sm py-1 text-[#6E635F] hover:text-[#342D2C]"
            >
              Affiliate Disclosure
            </button>
            <button
              onClick={() => {
                navigateTo('privacy');
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-sm py-1 text-[#6E635F] hover:text-[#342D2C]"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => {
                navigateTo('contact');
                setIsMobileMenuOpen(false);
              }}
              className="text-left text-sm py-1 text-[#6E635F] hover:text-[#342D2C]"
            >
              Contact & Collaborations
            </button>
          </div>

          <div className="pt-4 border-t border-[#E8DFD8] flex flex-col gap-2">
            <button
              onClick={() => {
                setIsCreatorStudioOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-center py-2 text-xs font-medium text-[#7C5A3E] bg-[#F4ECE6] hover:bg-[#EADED7]"
            >
              Open Creator Studio (Edit Links & Articles)
            </button>
            <button
              onClick={() => {
                navigateTo('shop');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#342D2C]"
            >
              Shop My Picks
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
