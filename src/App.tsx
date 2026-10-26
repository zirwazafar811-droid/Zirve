import React from 'react';
import { CreatorStudioModal } from './components/CreatorStudioModal';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { AppProvider, useApp } from './context/AppContext';
import { AboutPage } from './pages/AboutPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { OutfitIdeasPage } from './pages/OutfitIdeasPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ShopPage } from './pages/ShopPage';

const PageRenderer: React.FC = () => {
  const { currentPage } = useApp();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'blog':
      return <BlogPage />;
    case 'article-detail':
      return <ArticleDetailPage />;
    case 'outfit-ideas':
      return <OutfitIdeasPage />;
    case 'shop':
      return <ShopPage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    case 'privacy':
      return <PrivacyPolicyPage />;
    case 'affiliate-disclosure':
      return <AffiliateDisclosurePage />;
    default:
      return <HomePage />;
  }
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2D2828] font-sans selection:bg-[#F3D5CA] selection:text-[#3B2C28]">
        <Navbar />
        <main className="flex-1">
          <PageRenderer />
        </main>
        <Footer />
        <CreatorStudioModal />
      </div>
    </AppProvider>
  );
}
