import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const { navigateTo } = useApp();
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => navigateTo('article-detail', article.id)}
      className={`group cursor-pointer bg-white border border-[#EBE2DC] transition-all duration-300 hover:shadow-md hover:border-[#DAC5BA] flex flex-col ${
        featured ? 'lg:grid lg:grid-cols-12 lg:gap-8' : ''
      }`}
    >
      {/* Cover Image Container */}
      <div
        className={`relative overflow-hidden bg-[#F5EFEA] ${
          featured ? 'lg:col-span-7 aspect-[16/10]' : 'aspect-[16/10] w-full'
        }`}
      >
        {!imageError && article.coverImage ? (
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-[#FAF5F2] to-[#EBE0D7] p-8 text-center">
            <BookOpen className="w-8 h-8 text-[#C5A059] opacity-70" />
          </div>
        )}

        <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold text-[#483E3A] backdrop-blur-xs">
          {article.category}
        </div>
      </div>

      {/* Content Area */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between flex-1 ${
          featured ? 'lg:col-span-5 lg:p-8' : ''
        }`}
      >
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-2 text-xs text-[#8A7D77] mb-2.5">
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Article Title */}
          <h2
            className={`font-serif text-[#252020] group-hover:text-[#8E6D38] transition-colors leading-snug mb-3 ${
              featured ? 'text-2xl sm:text-3xl' : 'text-xl'
            }`}
            style={{ textWrap: 'balance' }}
          >
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-[#665A54] leading-relaxed line-clamp-3 mb-4">
            {article.excerpt}
          </p>
        </div>

        {/* Footer / Read More CTA */}
        <div className="pt-4 border-t border-[#F2EAE5] flex items-center justify-between">
          <div className="text-xs text-[#7B6E68]">
            By <span className="font-semibold text-[#443834]">{article.author}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#342D2C] group-hover:text-[#8E6D38] transition-colors">
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </article>
  );
};
