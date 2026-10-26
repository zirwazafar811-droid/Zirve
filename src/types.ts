export type CategoryType =
  | "Women's Clothing"
  | "Outfit Ideas"
  | "Handbags"
  | "Shoes"
  | "Jewelry and Accessories"
  | "Seasonal Fashion"
  | "Fashion Gift Guides";

export interface CategoryInfo {
  id: string;
  name: CategoryType;
  slug: string;
  description: string;
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  retailer: string;
  price: number;
  originalPrice?: number;
  affiliateUrl: string;
  imageUrl: string;
  description: string;
  isSample: boolean;
  isFeatured?: boolean;
  tags: string[];
  stylingNote?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: CategoryType;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  coverImage: string;
  isFeatured?: boolean;
  tags: string[];
  body: string; // Markdown or rich structured text
  linkedProductIds?: string[];
}

export interface OutfitLook {
  id: string;
  title: string;
  occasion: string;
  season: string;
  description: string;
  imageUrl: string;
  productIds: string[];
}

export type PageId =
  | 'home'
  | 'blog'
  | 'article-detail'
  | 'outfit-ideas'
  | 'shop'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'affiliate-disclosure';
