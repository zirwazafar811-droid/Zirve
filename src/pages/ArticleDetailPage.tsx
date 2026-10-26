import React from 'react';
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Clock,
  Heart,
  Share2,
  ShieldCheck,
  Tag,
  User,
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useApp } from '../context/AppContext';

export const ArticleDetailPage: React.FC = () => {
  const { selectedArticleId, articles, products, navigateTo } = useApp();

  const article = articles.find((a) => a.id === selectedArticleId) || articles[0];

  if (!article) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="font-serif text-2xl text-[#252020] mb-4">Article Not Found</h2>
        <button
          onClick={() => navigateTo('blog')}
          className="px-4 py-2 bg-[#342D2C] text-white text-xs font-semibold uppercase tracking-wider"
        >
          Return to Blog
        </button>
      </div>
    );
  }

  // Find linked products
  const linkedProducts = (article.linkedProductIds || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="pb-24">
      {/* Top Breadcrumb & Navigation */}
      <div className="border-b border-[#E8DFD8] bg-[#FAF7F5]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigateTo('blog')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5D504A] hover:text-[#252020] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Fashion Blog</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-1.5 text-[#5D504A] hover:text-[#252020] transition-colors"
              title="Share article"
              aria-label="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Article Header Container */}
      <header className="container mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#9C7A45]">
          <span>{article.category}</span>
        </div>

        <h1
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241E1D] leading-[1.2] tracking-tight"
          style={{ textWrap: 'balance' }}
        >
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-[#61544F] font-normal leading-relaxed max-w-2xl mx-auto">
          {article.excerpt}
        </p>

        {/* Author & Meta Row */}
        <div className="pt-4 border-t border-[#E8DFD8] flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#7B6E68]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#EADED7] text-[#4A403C] font-serif font-bold flex items-center justify-center text-xs">
              {article.author.charAt(0)}
            </div>
            <div className="text-left">
              <span className="font-semibold text-[#342D2C] block">{article.author}</span>
              <span className="text-[10px] text-[#8C7D77]">{article.authorRole}</span>
            </div>
          </div>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>
      </header>

      {/* Featured Cover Photography */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 mb-12">
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#E8DFD8] shadow-md border border-[#DDD0C8]">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-8">
        {/* Affiliate Disclosure Box within story */}
        <div className="p-4 bg-[#FAF3EE] border border-[#ECDCD3] text-xs text-[#6B5E59] flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <p>
              <strong>Affiliate Disclosure:</strong> Zirvella features genuine editorial recommendations. Some products recommended in this article contain affiliate links. If you make a purchase through them, we may earn an affiliate commission from our retail partners at absolutely zero extra cost to you.
            </p>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-neutral max-w-none text-base text-[#382F2D] leading-relaxed space-y-6">
          {article.body.split('\n\n').map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('# ')) {
              return null; // Skip main title since it's in the header
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h3
                  key={idx}
                  className="font-serif text-2xl text-[#252020] pt-6 pb-1 border-b border-[#F0E6E0]"
                >
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('> ')) {
              return (
                <blockquote
                  key={idx}
                  className="my-6 p-6 bg-[#FAF7F5] border-l-2 border-[#C5A059] font-serif italic text-lg text-[#3B302C]"
                >
                  {trimmed.replace('> ', '').replace(/"/g, '')}
                </blockquote>
              );
            }
            if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
              const items = trimmed.split('\n').map((li) => li.replace(/^(\*|-)\s+/, ''));
              return (
                <ul key={idx} className="list-disc pl-5 space-y-2 text-[#4A403C]">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\.\s+/.test(trimmed)) {
              const items = trimmed.split('\n').map((li) => li.replace(/^\d+\.\s+/, ''));
              return (
                <ol key={idx} className="list-decimal pl-5 space-y-2 text-[#4A403C]">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              );
            }
            if (trimmed === '---') {
              return <hr key={idx} className="my-8 border-[#E8DFD8]" />;
            }
            return (
              <p key={idx} className="leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-[#E8DFD8] flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#8C7D77] mr-2">
            Topics:
          </span>
          {article.tags.map((t, idx) => (
            <span
              key={idx}
              className="text-xs bg-[#FAF5F1] border border-[#E8DFD8] text-[#544844] px-2.5 py-1"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Shop This Story Section (Affiliate Recommendations) */}
        {linkedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t-2 border-[#E8DFD8] space-y-6">
            <div className="flex items-baseline justify-between border-b border-[#E8DFD8] pb-3">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#9C7A45]">
                  Curated Essentials
                </span>
                <h3 className="font-serif text-2xl text-[#252020]">Shop The Story</h3>
              </div>
              <span className="text-xs text-[#8A7D77]">
                Click "View Product" to shop with partner retailers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {linkedProducts.map(
                (product) => product && <ProductCard key={product.id} product={product} />
              )}
            </div>
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-16 p-6 sm:p-8 bg-[#F8F4EE] border border-[#E8DFD8] flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-full bg-[#E0D3CB] text-[#342D2C] font-serif font-bold text-2xl flex items-center justify-center shrink-0">
            {article.author.charAt(0)}
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-[#252020] font-semibold">
              Written by {article.author}
            </h4>
            <p className="text-xs text-[#9C7A45] font-medium">{article.authorRole}</p>
            <p className="text-xs text-[#6B5F5A] leading-relaxed pt-1">
              Elena Vance is a fashion stylist and editor based in New York. She advocates for capsule wardrobing, affordable quality craftsmanship, and timeless styling tailored to everyday American life.
            </p>
          </div>
        </div>

        {/* Related Stories */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E8DFD8] space-y-6">
            <h3 className="font-serif text-xl text-[#252020]">Continue Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigateTo('article-detail', rel.id)}
                  className="p-4 bg-white border border-[#E8DFD8] hover:border-[#C5A059] cursor-pointer transition-colors"
                >
                  <span className="text-[10px] uppercase font-semibold text-[#9C7A45] tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-base text-[#252020] line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#7B6E68] line-clamp-2">{rel.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
