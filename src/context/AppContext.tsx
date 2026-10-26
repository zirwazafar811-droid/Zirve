import React, { createContext, useContext, useEffect, useState } from 'react';
import { INITIAL_ARTICLES, INITIAL_LOOKS, INITIAL_PRODUCTS } from '../data/initialData';
import { Article, CategoryType, OutfitLook, PageId, Product } from '../types';

interface AppContextType {
  currentPage: PageId;
  selectedArticleId: string | null;
  selectedCategory: CategoryType | 'All';
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: CategoryType | 'All') => void;
  articles: Article[];
  products: Product[];
  looks: OutfitLook[];
  wishlist: string[];
  isCreatorStudioOpen: boolean;
  setIsCreatorStudioOpen: (open: boolean) => void;
  editingProduct: Product | null;
  setEditingProduct: (p: Product | null) => void;
  navigateTo: (page: PageId, articleId?: string, category?: CategoryType | 'All') => void;
  toggleWishlist: (productId: string) => void;
  updateProduct: (updated: Product) => void;
  addProduct: (product: Omit<Product, 'id'>) => Product;
  deleteProduct: (id: string) => void;
  updateArticle: (updated: Article) => void;
  addArticle: (article: Omit<Article, 'id'>) => Article;
  deleteArticle: (id: string) => void;
  resetToDefaults: () => void;
  exportDataToJson: () => string;
  importDataFromJson: (jsonStr: string) => boolean;
}

const STORAGE_KEYS = {
  ARTICLES: 'zirvella_articles_v1',
  LEGACY_ARTICLES: 'velvetelle_articles_v1',
  PRODUCTS: 'zirvella_products_v1',
  LEGACY_PRODUCTS: 'velvetelle_products_v1',
  WISHLIST: 'zirvella_wishlist_v1',
  LEGACY_WISHLIST: 'velvetelle_wishlist_v1',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreatorStudioOpen, setIsCreatorStudioOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEYS.ARTICLES) ||
        localStorage.getItem(STORAGE_KEYS.LEGACY_ARTICLES);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return INITIAL_ARTICLES;
  });

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEYS.PRODUCTS) ||
        localStorage.getItem(STORAGE_KEYS.LEGACY_PRODUCTS);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return INITIAL_PRODUCTS;
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEYS.WISHLIST) ||
        localStorage.getItem(STORAGE_KEYS.LEGACY_WISHLIST);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return [];
  });

  const [looks] = useState<OutfitLook[]>(INITIAL_LOOKS);

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
    } catch {
      // Ignore storage quota
    }
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    } catch {
      // Ignore
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
    } catch {
      // Ignore
    }
  }, [wishlist]);

  const navigateTo = (page: PageId, articleId?: string, category?: CategoryType | 'All') => {
    setCurrentPage(page);
    if (articleId !== undefined) {
      setSelectedArticleId(articleId);
    }
    if (category !== undefined) {
      setSelectedCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const updateProduct = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const addProduct = (item: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...item,
      id: `prod-${Date.now()}`,
    };
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateArticle = (updated: Article) => {
    setArticles((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
  };

  const addArticle = (item: Omit<Article, 'id'>) => {
    const newArt: Article = {
      ...item,
      id: `art-${Date.now()}`,
      slug: item.slug || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    };
    setArticles((prev) => [newArt, ...prev]);
    return newArt;
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const resetToDefaults = () => {
    setArticles(INITIAL_ARTICLES);
    setProducts(INITIAL_PRODUCTS);
    localStorage.removeItem(STORAGE_KEYS.ARTICLES);
    localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
  };

  const exportDataToJson = () => {
    const bundle = {
      exportedAt: new Date().toISOString(),
      articles,
      products,
    };
    return JSON.stringify(bundle, null, 2);
  };

  const importDataFromJson = (jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed.articles)) {
        setArticles(parsed.articles);
      }
      if (Array.isArray(parsed.products)) {
        setProducts(parsed.products);
      }
      return true;
    } catch (err) {
      console.error('Import failed', err);
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        selectedArticleId,
        selectedCategory,
        searchQuery,
        setSearchQuery,
        setSelectedCategory,
        articles,
        products,
        looks,
        wishlist,
        isCreatorStudioOpen,
        setIsCreatorStudioOpen,
        editingProduct,
        setEditingProduct,
        navigateTo,
        toggleWishlist,
        updateProduct,
        addProduct,
        deleteProduct,
        updateArticle,
        addArticle,
        deleteArticle,
        resetToDefaults,
        exportDataToJson,
        importDataFromJson,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
