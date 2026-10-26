import React from 'react';
import { ArrowLeft, Lock, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="border-b border-[#E8DFD8] pb-6 flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#9C7A45]">
            Legal Transparency
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#252020] tracking-tight mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#8C7D77] mt-1">
            Last Updated: October 2026 · Zirvella LLC (United States)
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

      <div className="prose prose-neutral max-w-none text-sm text-[#4A3E39] space-y-6 leading-relaxed">
        <div className="p-4 bg-[#FAF7F5] border border-[#E8DFD8] text-xs text-[#5D504A]">
          <strong>Summary:</strong> Zirvella values your trust. We do not sell your personal data. When you click affiliate links to merchant websites, those merchants use cookies to track referral purchases so we receive commission attribution.
        </div>

        <h2 className="font-serif text-xl text-[#252020] pt-4">1. Information We Collect</h2>
        <p>
          We collect information that you voluntarily provide directly to us—such as when you subscribe to our newsletter, fill out our contact form, or communicate with us. This may include your name and email address.
        </p>

        <h2 className="font-serif text-xl text-[#252020] pt-4">2. Cookies & Affiliate Tracking Technologies</h2>
        <p>
          Zirvella participates in affiliate marketing programs, including but not limited to LTK (rewardStyle), Amazon Associates, ShopStyle Collective, ShareASale, and direct brand affiliate networks.
        </p>
        <p>
          When you click on a product recommendation link or "View Product" button on Zirvella, a small tracking file known as a cookie is placed in your browser by the respective affiliate network or merchant. This cookie assigns a temporary anonymous tracking ID to attribute qualifying purchases you complete on the retailer's website within that merchant's cookie window (typically 24 hours to 30 days).
        </p>
        <p>
          These affiliate cookies do <strong>not</strong> provide Zirvella with access to your credit card number, payment credentials, or personal physical address. You may disable cookies at any time via your browser settings.
        </p>

        <h2 className="font-serif text-xl text-[#252020] pt-4">3. Third-Party Websites & External Merchants</h2>
        <p>
          Our website contains links to third-party retail destinations (such as Nordstrom, Reformation, Quince, Mango, Sézane, etc.). Once you leave Zirvella by clicking an external link, this Privacy Policy no longer applies. We recommend reviewing the individual privacy policies of any third-party websites you visit.
        </p>

        <h2 className="font-serif text-xl text-[#252020] pt-4">4. California Consumer Privacy Act (CCPA / CPRA)</h2>
        <p>
          If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including the right to know what personal information we collect and the right to request deletion of your information. We do not sell personal information or share personal information for cross-context behavioral advertising.
        </p>

        <h2 className="font-serif text-xl text-[#252020] pt-4">5. Children's Privacy (COPPA)</h2>
        <p>
          Zirvella is directed to general audiences aged 18 and older. We do not knowingly collect personal information from children under the age of 13.
        </p>

        <h2 className="font-serif text-xl text-[#252020] pt-4">6. Contacting Us Regarding Privacy</h2>
        <p>
          If you have questions regarding this Privacy Policy or wish to unsubscribe from our newsletter, please contact us at:
        </p>
        <p className="font-medium text-[#252020]">
          Zirvella Editorial Team<br />
          Email: <span className="underline">privacy@zirvella.com</span><br />
          New York, NY 10012
        </p>
      </div>
    </div>
  );
};
