import React from 'react';
import { ArrowLeft, CheckCircle2, DollarSign, ExternalLink, HelpCircle, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AffiliateDisclosurePage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E8DFD8] pb-6 flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C7A45]">
            Federal Trade Commission (FTC) Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#252020] tracking-tight mt-1">
            Affiliate Disclosure & Transparency Policy
          </h1>
          <p className="text-xs text-[#8C7D77] mt-1">
            In compliance with FTC 16 CFR Part 255 Guides Concerning the Use of Endorsements and Testimonials in Advertising
          </p>
        </div>
        <button
          onClick={() => navigateTo('home')}
          className="text-xs font-semibold uppercase tracking-wider text-[#5D504A] hover:text-[#252020] inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-8 text-sm text-[#4A3E39] leading-relaxed">
        {/* Prominent High-Level Statement */}
        <div className="p-6 bg-[#FAF3EE] border border-[#ECDCD3] space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h2 className="font-serif text-lg text-[#252020] font-semibold">
              The Short & Simple Version
            </h2>
          </div>
          <p className="text-xs text-[#5D504A] leading-relaxed">
            Zirvella is an independent fashion blog and editorial shopping directory. Many of the links on our site (including product cards, "View Product" buttons, and styled lookbooks) are <strong>affiliate links</strong>. If you click on one of these links and make a purchase from the retailer, we may receive a small referral commission. <strong>This occurs at absolutely NO extra cost to you.</strong> The price you pay is identical to visiting the store directly.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-[#252020]">1. What is an Affiliate Link?</h3>
          <p>
            An affiliate link is a specialized tracking URL provided by our retail partners and affiliate networks (such as LTK / rewardStyle, ShopStyle Collective, Amazon Associates, ShareASale, and Rakuten). When you click an affiliate link on Zirvella, a secure tracking cookie records that you discovered the item through our curation.
          </p>
          <p>
            These commissions support our daily work: purchasing items for real-world fit and fabric testing, paying our contributing writers and photographers, and maintaining this website free of intrusive third-party banner ads.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-[#252020]">2. Editorial Independence & Honest Curation</h3>
          <p>
            Our readers' trust is our most valuable asset. We adhere to strict editorial ethics:
          </p>
          <ul className="space-y-2 pt-1 pl-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>We never endorse or feature clothing, shoes, or handbags solely because of high affiliate commission rates.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>If an item is poorly constructed, fits uncomfortably, or lacks longevity, we will not recommend it.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>We never invent fake discount percentages, fabricated review ratings, or false stock scarcity.</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-[#252020]">3. Amazon Associates Statement</h3>
          <p>
            Zirvella is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-[#252020]">4. Pricing & Merchant Availability</h3>
          <p>
            Prices and availability for products featured on Zirvella are accurate as of the time of publication and are presented in USD. However, independent retailers (e.g. Nordstrom, Reformation, Quince, Mango, etc.) frequently adjust pricing, launch seasonal sales, or discontinue colorways at their discretion.
          </p>
          <p>
            Please confirm final price, return policies, shipping fees, and sizing charts directly on the retailer's official checkout page before completing any order.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-[#252020]">5. Questions & Feedback</h3>
          <p>
            If you have questions regarding any product recommendation, our affiliate partnerships, or how to set up affiliate links for your own content, please reach out to:
          </p>
          <p className="font-medium text-[#252020]">
            Elena Vance & The Zirvella Team<br />
            Email: <span className="underline">affiliates@zirvella.com</span>
          </p>
        </div>

        <div className="pt-6 border-t border-[#E8DFD8] flex gap-4">
          <button
            onClick={() => navigateTo('shop')}
            className="px-5 py-2.5 bg-[#342D2C] hover:bg-[#1E1919] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Explore Recommended Products
          </button>
          <button
            onClick={() => navigateTo('blog')}
            className="px-5 py-2.5 bg-white border border-[#DDD0C8] hover:border-[#342D2C] text-[#342D2C] text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Read Fashion Guides
          </button>
        </div>
      </div>
    </div>
  );
};
