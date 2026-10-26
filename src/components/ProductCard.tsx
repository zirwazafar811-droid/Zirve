import React, { useState } from 'react';
import { Edit3, ExternalLink, Heart, Sparkles, Tag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, showCategory = true }) => {
  const { wishlist, toggleWishlist, setEditingProduct, setIsCreatorStudioOpen } = useApp();
  const [imageError, setImageError] = useState(false);
  const isWishlisted = wishlist.includes(product.id);

  const handleEditLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setEditingProduct(product);
    setIsCreatorStudioOpen(true);
  };

  const handleAffiliateClick = (e: React.MouseEvent) => {
    // If it's a sample URL, alert the user or open in new tab
    if (product.affiliateUrl.startsWith('#') || product.affiliateUrl.includes('example.com')) {
      e.preventDefault();
      setEditingProduct(product);
      setIsCreatorStudioOpen(true);
    }
  };

  return (
    <div className="group relative flex flex-col bg-white border border-[#EDE4DE] transition-all duration-300 hover:shadow-md hover:border-[#DECBC2]">
      {/* Visual Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F6F1EC]">
        {!imageError && product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF5F2] to-[#EFE6DF]">
            <Tag className="w-8 h-8 text-[#C5A059] mb-2 opacity-60" />
            <span className="text-xs font-serif text-[#4A403C]">{product.name}</span>
          </div>
        )}

        {/* Top Badges / Actions */}
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
          {product.isSample ? (
            <span className="pointer-events-auto text-[10px] uppercase tracking-wider font-semibold bg-[#2E2827]/80 text-[#F9F5F1] px-2 py-0.5 backdrop-blur-xs">
              Sample Pick
            </span>
          ) : (
            <span className="pointer-events-auto text-[10px] uppercase tracking-wider font-semibold bg-[#C5A059] text-white px-2 py-0.5">
              Curated
            </span>
          )}

          <div className="flex items-center gap-1.5 pointer-events-auto">
            {/* Quick Edit Affiliate Link affordance */}
            <button
              onClick={handleEditLink}
              title="Edit affiliate link / price"
              className="p-1.5 bg-white/90 hover:bg-white text-[#574B46] hover:text-[#252020] shadow-xs transition-colors"
              aria-label="Edit affiliate link"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>

            {/* Wishlist toggle */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(product.id);
              }}
              className="p-1.5 bg-white/90 hover:bg-white text-[#574B46] hover:text-[#C5A059] shadow-xs transition-colors"
              aria-label={isWishlisted ? 'Remove from saved' : 'Save to wishlist'}
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  isWishlisted ? 'fill-[#C5A059] text-[#C5A059]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata Row: Retailer & Category */}
          <div className="flex items-center gap-2 text-xs text-[#82746F] mb-1.5 uppercase tracking-wider">
            <span className="font-semibold text-[#544844]">{product.retailer}</span>
            {showCategory && (
              <>
                <span aria-hidden="true">·</span>
                <span className="truncate">{product.category}</span>
              </>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base sm:text-lg text-[#252020] line-clamp-1 group-hover:text-[#8E6D38] transition-colors mb-1.5">
            {product.name}
          </h3>

          {/* Styling Note / Description */}
          <p className="text-xs text-[#6B5F5A] line-clamp-2 leading-relaxed mb-3">
            {product.stylingNote || product.description}
          </p>
        </div>

        <div>
          {/* Price & Affiliate Action */}
          <div className="pt-3 border-t border-[#F0E6E0] flex items-center justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-medium text-base text-[#252020] tabular-nums">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-[#9E908B] line-through tabular-nums">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* "View Product" Button */}
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={handleAffiliateClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#342D2C] hover:bg-[#1E1919] text-[#FAF7F5] transition-colors"
            >
              <span>View Product</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Quiet Affiliate Footnote */}
          <div className="mt-2 text-[10px] text-[#9A8D87] flex items-center justify-between">
            <span>Affiliate Partner</span>
            {product.isSample && (
              <button
                onClick={handleEditLink}
                className="underline hover:text-[#252020] transition-colors"
              >
                Insert Real Link
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
