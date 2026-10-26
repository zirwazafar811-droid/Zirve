import React, { useState } from 'react';
import {
  AlertCircle,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  HelpCircle,
  Link2,
  Plus,
  RefreshCw,
  ShoppingBag,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES_LIST } from '../data/initialData';
import { Article, CategoryType, Product } from '../types';

export const CreatorStudioModal: React.FC = () => {
  const {
    isCreatorStudioOpen,
    setIsCreatorStudioOpen,
    products,
    updateProduct,
    addProduct,
    deleteProduct,
    articles,
    addArticle,
    deleteArticle,
    editingProduct,
    setEditingProduct,
    resetToDefaults,
    exportDataToJson,
    importDataFromJson,
  } = useApp();

  type TabType = 'affiliate-links' | 'new-article' | 'new-product' | 'export-import' | 'guide';
  const [activeTab, setActiveTab] = useState<TabType>(
    editingProduct ? 'affiliate-links' : 'affiliate-links'
  );

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Article Form State
  const [artTitle, setArtTitle] = useState('');
  const [artCategory, setArtCategory] = useState<CategoryType>("Women's Clothing");
  const [artAuthor, setArtAuthor] = useState('Elena Vance');
  const [artAuthorRole, setArtAuthorRole] = useState('Founder & Senior Stylist');
  const [artReadTime, setArtReadTime] = useState('5 min read');
  const [artExcerpt, setArtExcerpt] = useState('');
  const [artBody, setArtBody] = useState('');
  const [artCoverImage, setArtCoverImage] = useState(
    '/src/assets/images/article_everyday_outfits_1792997119004.jpg'
  );
  const [artSelectedProducts, setArtSelectedProducts] = useState<string[]>([]);

  // New Product Form State
  const [prodName, setProdName] = useState('');
  const [prodCategory, setProdCategory] = useState<CategoryType>("Women's Clothing");
  const [prodRetailer, setProdRetailer] = useState('');
  const [prodPrice, setProdPrice] = useState('');
  const [prodAffiliateUrl, setProdAffiliateUrl] = useState('');
  const [prodImageUrl, setProdImageUrl] = useState(
    '/src/assets/images/product_gold_jewels_1792997120553.jpg'
  );
  const [prodDescription, setProdDescription] = useState('');
  const [prodStylingNote, setProdStylingNote] = useState('');
  const [prodIsSample, setProdIsSample] = useState(false);

  // JSON Import state
  const [jsonInput, setJsonInput] = useState('');

  if (!isCreatorStudioOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!artTitle.trim() || !artExcerpt.trim()) {
      alert('Please provide an article title and excerpt.');
      return;
    }

    addArticle({
      slug: artTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: artTitle,
      category: artCategory,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      readTime: artReadTime,
      author: artAuthor,
      authorRole: artAuthorRole,
      excerpt: artExcerpt,
      coverImage: artCoverImage,
      tags: [artCategory, 'Style Guide', 'Zirvella Edit'],
      body:
        artBody ||
        `# ${artTitle}\n\n${artExcerpt}\n\n### Stylist Perspective\nFashion is the quiet language of how you present yourself to the world. Curating timeless outfits begins with understanding the rhythm of your week.`,
      linkedProductIds: artSelectedProducts,
    });

    // Reset Form
    setArtTitle('');
    setArtExcerpt('');
    setArtBody('');
    setArtSelectedProducts([]);
    showToast('New article published successfully! It is now live on your blog.');
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const priceNum = parseFloat(prodPrice);
    if (!prodName.trim() || isNaN(priceNum) || !prodRetailer.trim()) {
      alert('Please fill out product title, retailer, and valid price.');
      return;
    }

    addProduct({
      name: prodName,
      category: prodCategory,
      retailer: prodRetailer,
      price: priceNum,
      affiliateUrl: prodAffiliateUrl.trim() || '#',
      imageUrl: prodImageUrl,
      description: prodDescription || prodName,
      stylingNote: prodStylingNote,
      isSample: prodIsSample,
      tags: [prodCategory, prodRetailer],
    });

    setProdName('');
    setProdPrice('');
    setProdRetailer('');
    setProdAffiliateUrl('');
    setProdDescription('');
    setProdStylingNote('');
    showToast('Product added to Shop My Picks & affiliate catalog.');
  };

  const handleDownloadJson = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' + encodeURIComponent(exportDataToJson());
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'zirvella-fashion-content.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Content backup exported to zirvella-fashion-content.json');
  };

  const handleImportJson = () => {
    if (!jsonInput.trim()) return;
    const ok = importDataFromJson(jsonInput);
    if (ok) {
      showToast('Successfully imported articles and products!');
      setJsonInput('');
    } else {
      alert('Invalid JSON format. Please verify your backup structure.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-5xl h-[90vh] bg-white border border-[#DDD0C8] shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#FAF7F5] border-b border-[#E8DFD8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
            <div>
              <h2 className="font-serif text-lg text-[#252020] font-semibold">
                Zirvella Creator & Affiliate Studio
              </h2>
              <p className="text-xs text-[#7B6E68]">
                Manage affiliate URLs, create articles, add fashion products & configure legal disclosures.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsCreatorStudioOpen(false);
              setEditingProduct(null);
            }}
            className="p-1.5 text-[#6E615C] hover:text-[#252020] transition-colors"
            aria-label="Close studio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toast Feedback */}
        {toastMessage && (
          <div className="bg-[#E7F3E8] border-b border-[#C3DEC5] px-6 py-2.5 text-xs text-[#2B5E32] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#2E7D32]" />
              <span className="font-medium">{toastMessage}</span>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-xs text-[#2E7D32] hover:underline"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-[#E8DFD8] bg-[#F4ECE6] px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('affiliate-links')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'affiliate-links'
                ? 'border-[#C5A059] text-[#252020] bg-white'
                : 'border-transparent text-[#766964] hover:text-[#252020]'
            }`}
          >
            <Link2 className="w-4 h-4" />
            <span>Affiliate Link Manager ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('new-article')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'new-article'
                ? 'border-[#C5A059] text-[#252020] bg-white'
                : 'border-transparent text-[#766964] hover:text-[#252020]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Write New Article ({articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('new-product')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'new-product'
                ? 'border-[#C5A059] text-[#252020] bg-white'
                : 'border-transparent text-[#766964] hover:text-[#252020]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add Product</span>
          </button>

          <button
            onClick={() => setActiveTab('export-import')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'export-import'
                ? 'border-[#C5A059] text-[#252020] bg-white'
                : 'border-transparent text-[#766964] hover:text-[#252020]'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Backup / Deploy Data</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'guide'
                ? 'border-[#C5A059] text-[#252020] bg-white'
                : 'border-transparent text-[#766964] hover:text-[#252020]'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Affiliate & Free Hosting Guide</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#FCFBF9]">
          {/* TAB 1: AFFILIATE LINK MANAGER */}
          {activeTab === 'affiliate-links' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-[#FAF3EE] border border-[#ECDCD3] p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5D504A] leading-relaxed">
                  <p className="font-semibold text-[#3E3430] mb-1">
                    How Affiliate Links Work on Zirvella:
                  </p>
                  <p>
                    Paste your unique tracking link (from Amazon Associates, LTK / rewardStyle, Shopstyle, ShareASale, etc.) into the "Affiliate URL" box for any product below. When visitors click <strong>"View Product"</strong>, they will be routed through your link with the required <code className="bg-white/80 px-1 py-0.5 font-mono text-[11px]">rel="noopener noreferrer sponsored"</code> attributes.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 bg-white border transition-colors ${
                      editingProduct?.id === item.id
                        ? 'border-[#C5A059] ring-2 ring-[#C5A059]/20'
                        : 'border-[#EAE1DA]'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Product Thumbnail & Basic Info */}
                      <div className="md:col-span-4 flex items-center gap-3">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-14 h-14 object-cover border border-[#EAE1DA] shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="font-serif text-sm text-[#252020] font-medium truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#7B6E68]">
                            {item.retailer} · ${item.price.toFixed(2)}
                          </p>
                          <span
                            className={`text-[10px] uppercase font-semibold tracking-wider ${
                              item.isSample ? 'text-[#8A6F4A]' : 'text-emerald-700'
                            }`}
                          >
                            {item.isSample ? '● Sample Link' : '● Live Affiliate Link'}
                          </span>
                        </div>
                      </div>

                      {/* Inputs: Affiliate URL & Retailer */}
                      <div className="md:col-span-6 space-y-2">
                        <div>
                          <label className="block text-[11px] font-medium text-[#6B5E59] uppercase tracking-wider mb-1">
                            Your Real Affiliate Link:
                          </label>
                          <input
                            type="text"
                            value={item.affiliateUrl}
                            onChange={(e) =>
                              updateProduct({
                                ...item,
                                affiliateUrl: e.target.value,
                                isSample: false, // automatically mark active once customized
                              })
                            }
                            placeholder="https://rstyle.me/... or https://amzn.to/..."
                            className="w-full text-xs font-mono px-3 py-1.5 bg-[#FAF7F5] border border-[#D9C8BE] focus:outline-none focus:border-[#C5A059]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] text-[#7B6E68]">Retailer:</label>
                            <input
                              type="text"
                              value={item.retailer}
                              onChange={(e) => updateProduct({ ...item, retailer: e.target.value })}
                              className="w-full text-xs px-2.5 py-1 bg-[#FAF7F5] border border-[#D9C8BE]"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] text-[#7B6E68]">Price ($):</label>
                            <input
                              type="number"
                              step="0.01"
                              value={item.price}
                              onChange={(e) =>
                                updateProduct({
                                  ...item,
                                  price: parseFloat(e.target.value) || 0,
                                })
                              }
                              className="w-full text-xs px-2.5 py-1 bg-[#FAF7F5] border border-[#D9C8BE]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="md:col-span-2 flex md:flex-col items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            showToast(`Updated affiliate link for "${item.name}"`);
                          }}
                          className="w-full text-center px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#342D2C] text-white hover:bg-[#1E1919]"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => deleteProduct(item.id)}
                          className="p-1.5 text-red-600 hover:text-red-800 transition-colors"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: WRITE NEW ARTICLE */}
          {activeTab === 'new-article' && (
            <form onSubmit={handleCreateArticle} className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-[#FAF3EE] border border-[#ECDCD3] p-4 text-xs text-[#5D504A]">
                <strong>Publishing Articles:</strong> Write your editorial styling advice, choose an elegant image, and attach product recommendations. Your new story appears immediately on the Fashion Blog and Homepage.
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  value={artTitle}
                  onChange={(e) => setArtTitle(e.target.value)}
                  placeholder="e.g. 7 French-Inspired Trench Coats Under $200"
                  className="w-full text-base font-serif px-3.5 py-2.5 bg-white border border-[#D9C8BE] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                    Category *
                  </label>
                  <select
                    value={artCategory}
                    onChange={(e) => setArtCategory(e.target.value as CategoryType)}
                    className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                  >
                    {CATEGORIES_LIST.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                    Read Time
                  </label>
                  <input
                    type="text"
                    value={artReadTime}
                    onChange={(e) => setArtReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={artAuthor}
                    onChange={(e) => setArtAuthor(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                    Author Role / Bio
                  </label>
                  <input
                    type="text"
                    value={artAuthorRole}
                    onChange={(e) => setArtAuthorRole(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                  Featured Cover Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={artCoverImage}
                    onChange={(e) => setArtCoverImage(e.target.value)}
                    placeholder="Image URL or generated asset path"
                    className="w-full text-xs font-mono px-3 py-2 bg-white border border-[#D9C8BE]"
                  />
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-[#7B6E68]">
                  <span>Or quick select preset:</span>
                  <button
                    type="button"
                    onClick={() =>
                      setArtCoverImage('/src/assets/images/article_everyday_outfits_1792997119004.jpg')
                    }
                    className="underline hover:text-[#252020]"
                  >
                    Everyday Outfits
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() =>
                      setArtCoverImage('/src/assets/images/article_luxury_handbags_1792997120247.jpg')
                    }
                    className="underline hover:text-[#252020]"
                  >
                    Handbags
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() =>
                      setArtCoverImage('/src/assets/images/outfit_capsule_collection_1792997120682.jpg')
                    }
                    className="underline hover:text-[#252020]"
                  >
                    Capsule Knitwear
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                  Short Excerpt / Teaser *
                </label>
                <textarea
                  required
                  rows={2}
                  value={artExcerpt}
                  onChange={(e) => setArtExcerpt(e.target.value)}
                  placeholder="A two-sentence summary to intrigue readers on the homepage and blog listing."
                  className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#D9C8BE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                  Full Article Body (Supports Markdown / Styling Sections)
                </label>
                <textarea
                  rows={8}
                  value={artBody}
                  onChange={(e) => setArtBody(e.target.value)}
                  placeholder="Write your article sections here using headings (###), bullet points, and stylist notes..."
                  className="w-full text-xs font-mono px-3.5 py-2.5 bg-white border border-[#D9C8BE]"
                />
              </div>

              {/* Attach Products */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-2">
                  Attach Affiliate Products To "Shop This Story":
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2 border border-[#E8DFD8] bg-white">
                  {products.map((p) => {
                    const isChecked = artSelectedProducts.includes(p.id);
                    return (
                      <label
                        key={p.id}
                        className="flex items-center gap-2 p-1.5 hover:bg-[#FAF7F5] cursor-pointer text-xs"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {
                            if (isChecked) {
                              setArtSelectedProducts((prev) => prev.filter((id) => id !== p.id));
                            } else {
                              setArtSelectedProducts((prev) => [...prev, p.id]);
                            }
                          }}
                        />
                        <span className="truncate">{p.name}</span>
                        <span className="text-[#8A7D78] text-[10px]">(${p.price})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8DFD8]">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#342D2C] hover:bg-[#1E1919] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Publish Article to Zirvella
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: ADD NEW PRODUCT */}
          {activeTab === 'new-product' && (
            <form onSubmit={handleCreateProduct} className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-[#FAF3EE] border border-[#ECDCD3] p-4 text-xs text-[#5D504A]">
                <strong>Add Affiliate Product:</strong> Add any fashion recommendation. Provide the retailer, price, and affiliate URL.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                    Product Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                    placeholder="e.g. Suede Block Heel Ankle Boots"
                    className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                    Category *
                  </label>
                  <select
                    value={prodCategory}
                    onChange={(e) => setProdCategory(e.target.value as CategoryType)}
                    className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                  >
                    {CATEGORIES_LIST.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                    Retailer / Brand *
                  </label>
                  <input
                    type="text"
                    required
                    value={prodRetailer}
                    onChange={(e) => setProdRetailer(e.target.value)}
                    placeholder="e.g. Nordstrom, Reformation, Sézane"
                    className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                    Price in USD ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={prodPrice}
                    onChange={(e) => setProdPrice(e.target.value)}
                    placeholder="128.00"
                    className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                  Affiliate Link (Amazon / LTK / Retailer Link)
                </label>
                <input
                  type="text"
                  value={prodAffiliateUrl}
                  onChange={(e) => setProdAffiliateUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full text-xs font-mono px-3 py-2 bg-white border border-[#D9C8BE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                  Product Image URL
                </label>
                <input
                  type="text"
                  value={prodImageUrl}
                  onChange={(e) => setProdImageUrl(e.target.value)}
                  placeholder="Image URL"
                  className="w-full text-xs font-mono px-3 py-2 bg-white border border-[#D9C8BE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4E423E] mb-1.5">
                  Stylist Recommendation Note
                </label>
                <input
                  type="text"
                  value={prodStylingNote}
                  onChange={(e) => setProdStylingNote(e.target.value)}
                  placeholder="How to wear it, sizing tips, or why you love it..."
                  className="w-full text-xs px-3 py-2 bg-white border border-[#D9C8BE]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="samplePick"
                  checked={prodIsSample}
                  onChange={(e) => setProdIsSample(e.target.checked)}
                />
                <label htmlFor="samplePick" className="text-xs text-[#5D504A]">
                  Mark as sample pick (uncheck if this is already your live affiliate link)
                </label>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#342D2C] hover:bg-[#1E1919] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Add Product to Directory
              </button>
            </form>
          )}

          {/* TAB 4: BACKUP / EXPORT / IMPORT */}
          {activeTab === 'export-import' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-white border border-[#E8DFD8] p-6 space-y-4">
                <h3 className="font-serif text-base text-[#252020] font-semibold">
                  Export Content Backup
                </h3>
                <p className="text-xs text-[#6B5E59] leading-relaxed">
                  Download a JSON file containing all your articles, products, and custom affiliate links. You can keep this as a safe backup or commit it to your code repository.
                </p>
                <button
                  onClick={handleDownloadJson}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#342D2C] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1E1919]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download zirvella-fashion-content.json</span>
                </button>
              </div>

              <div className="bg-white border border-[#E8DFD8] p-6 space-y-4">
                <h3 className="font-serif text-base text-[#252020] font-semibold">
                  Import Content from JSON
                </h3>
                <p className="text-xs text-[#6B5E59]">
                  Paste a JSON backup below to restore or synchronize your articles and products.
                </p>
                <textarea
                  rows={4}
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder='Paste {"articles": [...], "products": [...]}'
                  className="w-full text-xs font-mono p-3 bg-[#FAF7F5] border border-[#D9C8BE]"
                />
                <button
                  onClick={handleImportJson}
                  disabled={!jsonInput.trim()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#A8823B] disabled:opacity-50"
                >
                  <Upload className="w-4 h-4" />
                  <span>Import JSON Data</span>
                </button>
              </div>

              <div className="pt-4 border-t border-[#E8DFD8] flex items-center justify-between">
                <span className="text-xs text-[#8A7D78]">
                  Reset back to factory demo articles and products:
                </span>
                <button
                  onClick={() => {
                    if (
                      confirm(
                        'Are you sure you want to restore the initial demo articles and products?'
                      )
                    ) {
                      resetToDefaults();
                      showToast('Restored default demo articles and products.');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-800"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Initial Demo State</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: HOW-TO GUIDE & FREE HOSTING */}
          {activeTab === 'guide' && (
            <div className="space-y-6 max-w-3xl mx-auto text-xs text-[#524641] leading-relaxed">
              <div className="bg-white border border-[#E8DFD8] p-6 space-y-4">
                <h3 className="font-serif text-base text-[#252020] font-semibold">
                  1. How to Insert Your Own Real Affiliate Links
                </h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Open the <strong>Affiliate Link Manager</strong> tab above.
                  </li>
                  <li>
                    Locate any product (or click the small pencil icon on any product card across the website).
                  </li>
                  <li>
                    Paste your approved affiliate tracking URL (from Amazon Associates, LTK, Shopstyle Collective, or ShareASale).
                  </li>
                  <li>
                    Click <strong>Save</strong>. The button on the website now immediately sends shoppers through your affiliate link with proper <code className="font-mono bg-[#FAF3EE] px-1">rel="sponsored"</code> tags.
                  </li>
                </ol>
              </div>

              <div className="bg-white border border-[#E8DFD8] p-6 space-y-4">
                <h3 className="font-serif text-base text-[#252020] font-semibold">
                  2. Top Fashion Affiliate Networks to Join
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>LTK (formerly rewardStyle):</strong> The gold standard for women's fashion and style bloggers. Supported brands include Nordstrom, Abercrombie, Anthropologie, Mango, and hundreds more.
                  </li>
                  <li>
                    <strong>ShopStyle Collective:</strong> Great for creating shop widgets, text links, and lookbooks.
                  </li>
                  <li>
                    <strong>Amazon Associates / Influencer Program:</strong> Instant approval for budget-friendly fashion, accessories, jewelry, and travel wear.
                  </li>
                  <li>
                    <strong>Rakuten Advertising & CJ Affiliate:</strong> Direct merchant partnerships with luxury department stores and direct-to-consumer labels.
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-[#E8DFD8] p-6 space-y-4">
                <h3 className="font-serif text-base text-[#252020] font-semibold">
                  3. Free Deployment & Hosting Options
                </h3>
                <p>
                  Zirvella is built with pure, modern React + Vite + Tailwind CSS with zero server lock-in or paid API dependencies. You can host it 100% free on:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#FAF7F5] border border-[#EAE1DA]">
                    <strong className="block text-sm text-[#252020] mb-1">Vercel (Free Tier)</strong>
                    <p className="text-[11px] text-[#7B6E68]">
                      Connect your GitHub repository. Build Command: <code className="font-mono text-[#332A26]">npm run build</code>, Output Directory: <code className="font-mono text-[#332A26]">dist</code>. Free SSL & custom domain support.
                    </p>
                  </div>
                  <div className="p-3 bg-[#FAF7F5] border border-[#EAE1DA]">
                    <strong className="block text-sm text-[#252020] mb-1">Netlify (Free Tier)</strong>
                    <p className="text-[11px] text-[#7B6E68]">
                      Drag and drop the <code className="font-mono text-[#332A26]">dist</code> folder or connect Git. Automatic HTTPS and custom domain configuration in minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
