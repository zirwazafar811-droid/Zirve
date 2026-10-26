import { Article, CategoryInfo, OutfitLook, Product } from '../types';

export const CATEGORIES_LIST: CategoryInfo[] = [
  {
    id: 'clothing',
    name: "Women's Clothing",
    slug: 'womens-clothing',
    description: 'Timeless staples, tailored essentials, luxury knitwear, and fluid feminine silhouettes.',
    iconName: 'Shirt',
  },
  {
    id: 'outfits',
    name: 'Outfit Ideas',
    slug: 'outfit-ideas',
    description: 'Curated lookbooks, styling formulas, and capsule wardrobe combinations for daily life.',
    iconName: 'Sparkles',
  },
  {
    id: 'handbags',
    name: 'Handbags',
    slug: 'handbags',
    description: 'Structured totes, crossbody flap bags, woven leather, and iconic investment silhouettes.',
    iconName: 'ShoppingBag',
  },
  {
    id: 'shoes',
    name: 'Shoes',
    slug: 'shoes',
    description: 'Comfortable chic loafers, sculpted kitten heels, minimalist sandals, and leather boots.',
    iconName: 'Footprints',
  },
  {
    id: 'jewelry',
    name: 'Jewelry and Accessories',
    slug: 'jewelry-accessories',
    description: '14k solid and vermeil gold chains, ribbed huggie hoops, silk scarves, and classic sunglasses.',
    iconName: 'Gem',
  },
  {
    id: 'seasonal',
    name: 'Seasonal Fashion',
    slug: 'seasonal-fashion',
    description: 'Transition weather layering, breezy summer linens, cozy autumn wools, and resort wear.',
    iconName: 'Calendar',
  },
  {
    id: 'gift-guides',
    name: 'Fashion Gift Guides',
    slug: 'fashion-gift-guides',
    description: 'Thoughtfully curated gift ideas for birthdays, holidays, best friends, and self-pampering.',
    iconName: 'Gift',
  },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Aurelia Structured Leather Shoulder Bag',
    category: 'Handbags',
    retailer: 'Nordstrom',
    price: 395,
    affiliateUrl: 'https://example.com/sample-affiliate/aurelia-handbag',
    imageUrl: '/src/assets/images/article_luxury_handbags_1792997120247.jpg',
    description: 'Italian full-grain calfskin leather with gold-tone padlock hardware and detachable crossbody strap.',
    isSample: true,
    isFeatured: true,
    tags: ['Leather', 'Gold Hardware', 'Workwear', 'Classic'],
    stylingNote: 'Pair with monochrome neutrals to let the warm cognac tan tone take center stage.',
  },
  {
    id: 'prod-2',
    name: 'Pleated High-Waisted Linen Trousers',
    category: "Women's Clothing",
    retailer: 'Reformation',
    price: 178,
    affiliateUrl: 'https://example.com/sample-affiliate/linen-trousers',
    imageUrl: '/src/assets/images/article_everyday_outfits_1792997119004.jpg',
    description: 'Breathable 100% natural linen with deep front pleats, relaxed wide leg, and cuffed hem.',
    isSample: true,
    isFeatured: true,
    tags: ['Linen', 'Wide-Leg', 'Capsule Wardrobe', 'Neutral'],
    stylingNote: 'Tuck in a crisp silk blouse and anchor with leather loafers for an effortlessly tall silhouette.',
  },
  {
    id: 'prod-3',
    name: 'Mongolian Cashmere Ribbed Cardigan',
    category: "Women's Clothing",
    retailer: 'Quince',
    price: 99.9,
    affiliateUrl: 'https://example.com/sample-affiliate/cashmere-cardigan',
    imageUrl: '/src/assets/images/outfit_capsule_collection_1792997120682.jpg',
    description: 'Grade-A 100% cashmere with tactile rib stitching, horn buttons, and relaxed drape in champagne ivory.',
    isSample: true,
    isFeatured: true,
    tags: ['Cashmere', 'Knitwear', 'Quiet Luxury', 'Essential'],
    stylingNote: 'Leave the bottom two buttons open over a silk bias skirt for casual movement.',
  },
  {
    id: 'prod-4',
    name: 'Layered 14K Vermeil Herringbone & Pearl Set',
    category: 'Jewelry and Accessories',
    retailer: 'Mejuri',
    price: 128,
    affiliateUrl: 'https://example.com/sample-affiliate/gold-jewelry-set',
    imageUrl: '/src/assets/images/product_gold_jewels_1792997120553.jpg',
    description: 'Water-resistant 14k gold over recycled sterling silver with genuine freshwater coin pearl pendant.',
    isSample: true,
    isFeatured: true,
    tags: ['14K Gold Vermeil', 'Layering', 'Water-Resistant', 'Everyday'],
    stylingNote: 'The subtle weight keeps the necklace sitting flat against open collars and crewnecks alike.',
  },
  {
    id: 'prod-5',
    name: 'Double-Breasted Parisian Wool Blend Trench',
    category: 'Seasonal Fashion',
    retailer: 'Shopbop',
    price: 248,
    affiliateUrl: 'https://example.com/sample-affiliate/wool-trench',
    imageUrl: '/src/assets/images/hero_zirvella_fashion_1792997118313.jpg',
    description: 'Structured storm-flap outerwear tailored from heavyweight virgin wool blend in warm soft oat.',
    isSample: true,
    isFeatured: true,
    tags: ['Outerwear', 'Tailored', 'Fall/Spring', 'Investment'],
    stylingNote: 'Tie the belt in the back for an open editorial line, or cinch at the waist for high drama.',
  },
  {
    id: 'prod-6',
    name: 'Soft Leather Pointed Slingback Kitten Heels',
    category: 'Shoes',
    retailer: 'Mango',
    price: 89.99,
    affiliateUrl: 'https://example.com/sample-affiliate/slingback-heels',
    imageUrl: '/src/assets/images/hero_zirvella_fashion_1792997118313.jpg',
    description: 'Buttery sheep nappa leather with elastic slingback strap, cushioned insole, and sleek 1.8-inch heel.',
    isSample: true,
    isFeatured: false,
    tags: ['Shoes', 'Kitten Heel', 'Comfortable', 'Workwear'],
    stylingNote: 'The pointed toe elongates the leg line under cropped or puddled trousers without sacrificing comfort.',
  },
  {
    id: 'prod-7',
    name: 'Handcrafted Minimalist Suede Crossbody',
    category: 'Handbags',
    retailer: 'Madewell',
    price: 138,
    affiliateUrl: 'https://example.com/sample-affiliate/suede-crossbody',
    imageUrl: '/src/assets/images/article_luxury_handbags_1792997120247.jpg',
    description: 'Rich suede leather with magnetic foldover closure, brass zipper pocket, and adjustable strap.',
    isSample: true,
    isFeatured: false,
    tags: ['Suede', 'Crossbody', 'Weekend', 'Travel'],
    stylingNote: 'Adds tactile organic texture when worn against smooth cashmere sweaters or trench coats.',
  },
  {
    id: 'prod-8',
    name: 'The French Girl Holiday & Birthday Gift Box',
    category: 'Fashion Gift Guides',
    retailer: 'Sézane',
    price: 145,
    affiliateUrl: 'https://example.com/sample-affiliate/gift-box-deluxe',
    imageUrl: '/src/assets/images/product_gold_jewels_1792997120553.jpg',
    description: 'Curated gift set featuring a silk twill neckerchief, gold hoop earrings, and vegan leather pouch.',
    isSample: true,
    isFeatured: true,
    tags: ['Gift Idea', 'Curated Set', 'Silk', 'Accessories'],
    stylingNote: 'Arrives in signature embossed dustbag and gift ribbon—ideal for stylish hosts and loved ones.',
  },
  {
    id: 'prod-9',
    name: 'Italian Calfskin Penny Loafers',
    category: 'Shoes',
    retailer: 'Everlane',
    price: 168,
    affiliateUrl: 'https://example.com/sample-affiliate/calfskin-loafers',
    imageUrl: '/src/assets/images/article_everyday_outfits_1792997119004.jpg',
    description: 'Vegetable-tanned leather loafer with hand-stitched apron, padded memory foam arch, and stacked leather heel.',
    isSample: true,
    isFeatured: false,
    tags: ['Shoes', 'Loafers', 'Work-to-Weekend', 'Leather'],
    stylingNote: 'Wear bare-ankle in warm seasons, and style with cashmere ankle socks when the temperature drops.',
  },
  {
    id: 'prod-10',
    name: 'Heavyweight Silk Bias-Cut Midi Skirt',
    category: "Women's Clothing",
    retailer: 'Anthropologie',
    price: 130,
    affiliateUrl: 'https://example.com/sample-affiliate/silk-midi-skirt',
    imageUrl: '/src/assets/images/outfit_capsule_collection_1792997120682.jpg',
    description: '19mm silk satin woven on the bias for a graceful fluid drape that skims the hips gently.',
    isSample: true,
    isFeatured: false,
    tags: ['Silk', 'Midi Skirt', 'Feminine', 'Blush'],
    stylingNote: 'Balance the delicate femininity of the silk with chunky ribbed knits or an oversized blazer.',
  },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'affordable-everyday-outfits-under-150',
    title: 'Elevating the Everyday: 5 Timeless Casual Looks Under $150',
    category: "Women's Clothing",
    date: 'October 24, 2026',
    readTime: '6 min read',
    author: 'Elena Vance',
    authorRole: 'Founder & Senior Stylist',
    coverImage: '/src/assets/images/article_everyday_outfits_1792997119004.jpg',
    isFeatured: true,
    tags: ['Everyday Outfits', 'Affordable Luxury', 'Capsule Wardrobe', 'Styling Tips'],
    excerpt:
      'Looking refined every single morning does not require a designer budget. Here is how to create high-low outfits that feel luxurious, comfortable, and timeless.',
    linkedProductIds: ['prod-2', 'prod-3', 'prod-4', 'prod-9'],
    body: `
# Elevating the Everyday: 5 Timeless Casual Looks Under $150

One of the greatest misconceptions in women's fashion is that looking elegant requires thousands of dollars spent on designer labels. The truth known to seasoned stylists is far simpler: **luxury is in the cut, the fabric drape, and the intentional harmony of proportions.**

When your everyday foundation is composed of thoughtful neutrals—soft oat, warm cream, taupe, and deep charcoal—any ensemble instantly looks bespoke.

---

### Look 1: The Tailored Linen & Fine-Gauge Knit
Pairing wide-leg trousers with relaxed tailoring is our favorite styling secret for effortless mornings. Look for breathable linen blends that retain their structure without creasing aggressively.

* **The Anchor:** High-waisted pleated trousers in beige or sand.
* **The Layer:** A lightweight cashmere or fine-merino knit draped casually over the shoulders.
* **The Finish:** Clean leather loafers and a delicate coin pendant necklace.

> *"A great outfit is not about how much you spent; it's about whether your clothes look like they were chosen on purpose."*

---

### Look 2: The Crisp Poplin Shirt & Fluid Bias Skirt
The interplay between structured shirting and fluid satin creates an irresistible tension between menswear-inspired tailoring and feminine elegance.

* Opt for an unbuttoned spread collar with folded cuffs.
* Half-tuck the front into a satin or silk-blend midi skirt.
* Add minimal gold hoops to capture the morning light.

---

### Look 3: The Elevated Denim & Sculpted Trench
Yes, you can wear jeans and still look exceptionally chic. The key is choosing denim without distressing, raw hemlines, or loud whiskering. A clean straight-leg wash in deep indigo or clean off-white serves as an architectural pedestal for outerwear.

### Stylist Golden Rules for Budget-Friendly Sophistication:
1. **Steam Everything:** Wrinkle-free garments look 3x more expensive immediately.
2. **De-Pill Your Knits:** A simple fabric shaver restores sweaters to mint boutique condition.
3. **Monochrome Palette:** Sticking to shades within the same color family (all ecru, all camel, or all navy) creates an elongated, expensive visual line.
4. **Subtle Jewelry Over Bling:** One delicate 14k gold chain and subtle hoops beat loud statement necklaces every time.
    `,
  },
  {
    id: 'art-2',
    slug: 'the-art-of-styling-handbags',
    title: 'The Art of the Investment Bag: How to Style & Pair Handbags for Any Occasion',
    category: 'Handbags',
    date: 'October 18, 2026',
    readTime: '8 min read',
    author: 'Elena Vance',
    authorRole: 'Founder & Senior Stylist',
    coverImage: '/src/assets/images/article_luxury_handbags_1792997120247.jpg',
    isFeatured: true,
    tags: ['Handbags', 'Accessories', 'Investment Pieces', 'Style Guide'],
    excerpt:
      'A handbag is never just an accessory—it is the structural punctuation mark of an outfit. Discover how to match leather tones, proportions, and hardware seamlessly.',
    linkedProductIds: ['prod-1', 'prod-7', 'prod-4'],
    body: `
# The Art of the Investment Bag: How to Style & Pair Handbags for Any Occasion

If footwear sets the cadence of your stride, your handbag establishes the architecture of your silhouette. A structured bag conveys authority and refinement; a soft slouchy hobo exudes bohemian nonchalance.

Understanding how to bridge the gap between utility and aesthetic grandeur is what turns an ordinary outfit into a signature look.

---

### Rule 1: Proportion Dictates Balance
When choosing a bag for your daily itinerary, consider the scale of your clothing:
* **Voluminous Outerwear:** An oversized double-breasted coat requires a structured handbag with crisp edges to provide geometric contrast.
* **Slim-Fit Silhouettes:** A bias-cut slip dress or fitted knit pairs best with a compact shoulder baguette or sleek clutch.
* **Wide-Leg Trousers:** A medium top-handle bag balances the relaxed drape of wide leg bottoms.

---

### Rule 2: Hardware Harmony Without Being Rigid
Gone are the outdated rules dictating that silver watch buckles cannot touch gold bag latches. Modern styling celebrates mixed metals, provided there is intention behind it.

If your handbag features warm brushed gold hardware, complement it with:
* Layered vermeil chain necklaces.
* Warm tortoiseshell sunglasses.
* Neutral leather shoes with matching warm undertones.

---

### The Three Bags Every Woman Needs:
1. **The Workhorse Top-Handle:** Holds a tablet, notebook, and essentials while looking impeccably sharp in client meetings.
2. **The Hands-Free Crossbody:** Light suede or pebbled calfskin for weekend farmers markets, travel, and errands.
3. **The Evening Minimalist Clutch:** Holds keys, lipstick, and card case with zero fuss.

---

### Preserving Your Leather Investments:
Always store handbags in breathable cotton dust bags when not in use. Stuff them lightly with acid-free tissue paper to preserve the gussets, and apply a neutral beeswax leather balm once every autumn to prevent cracking.
    `,
  },
  {
    id: 'art-3',
    slug: 'the-parisian-spring-capsule-wardrobe',
    title: 'The 2026 Parisian Capsule Wardrobe: 10 Pieces, 30 Outfits',
    category: 'Outfit Ideas',
    date: 'October 12, 2026',
    readTime: '7 min read',
    author: 'Camille Moreau',
    authorRole: 'Contributing Fashion Editor',
    coverImage: '/src/assets/images/outfit_capsule_collection_1792997120682.jpg',
    isFeatured: false,
    tags: ['Capsule Wardrobe', 'Parisian Style', 'Minimalism', 'Outfit Formulas'],
    excerpt:
      'Cut through morning decision fatigue with our streamlined Parisian capsule edit. How to combine ten core staples into an endless rotation of effortless ensembles.',
    linkedProductIds: ['prod-3', 'prod-5', 'prod-10', 'prod-6'],
    body: `
# The 2026 Parisian Capsule Wardrobe: 10 Pieces, 30 Outfits

French styling is rarely about chasing transient TikTok micro-trends. Instead, French women cultivate an unmistakable *uniform*—a select handful of impeccably fitting pieces made from organic fabrics that can be mixed and matched with your eyes closed.

### The 10 Essential Pieces:
1. The Virgin Wool Blend Overcoat in Oat
2. The Crisp White Silk Button-Down
3. The Ribbed Cashmere Cardigan
4. High-Waisted Wide-Leg Linen or Wool Trousers
5. A Bias-Cut Satin Midi Skirt
6. Dark Indigo Straight-Leg Raw Denim
7. Pointed Slingback Kitten Heels
8. Italian Leather Penny Loafers
9. A Structured Leather Top-Handle Bag
10. Layered 14k Gold Chain & Hoops

With these ten pieces, you can easily dress for client presentations, Saturday morning espresso runs, gallery vernissages, or long transatlantic flights.
    `,
  },
  {
    id: 'art-4',
    slug: 'the-quiet-luxury-jewelry-guide',
    title: 'The Quiet Luxury Jewelry Edit: Layering Gold with Minimalist Sophistication',
    category: 'Jewelry and Accessories',
    date: 'October 05, 2026',
    readTime: '5 min read',
    author: 'Elena Vance',
    authorRole: 'Founder & Senior Stylist',
    coverImage: '/src/assets/images/product_gold_jewels_1792997120553.jpg',
    isFeatured: false,
    tags: ['Jewelry', 'Gold Vermeil', 'Quiet Luxury', 'Gift Ideas'],
    excerpt:
      'Discover the formula for creating a layered jewelry stack that catches the light without shouting. From chain textures to delicate pearl pendants.',
    linkedProductIds: ['prod-4', 'prod-8'],
    body: `
# The Quiet Luxury Jewelry Edit: Layering Gold with Minimalist Sophistication

Fine jewelry is the most intimate facet of your wardrobe. It touches your bare skin throughout the day, survives swims and showers, and often carries sentimental resonance.

When curating your daily jewelry stack:
* **Anchor with Texture:** Combine one snake or herringbone chain (flat surface reflection) with one textured link chain (box or rope).
* **Vary Neckline Lengths:** A 16-inch choker length pairs harmoniously with an 18-inch or 20-inch pendant drop.
* **Earring Proportions:** If wearing bold ribbed hoop earrings, keep the necklace line minimal to avoid clutter near your jawline.
    `,
  },
];

export const INITIAL_LOOKS: OutfitLook[] = [
  {
    id: 'look-1',
    title: 'The Parisian Avenue Walk',
    occasion: 'City Stroll & Morning Coffee',
    season: 'Autumn / Spring Layering',
    description:
      'A masterclass in tonal cream dressing: tailored trousers, a fluid silk drape blouse, an oat wool overcoat, and a structured tan bag.',
    imageUrl: '/src/assets/images/hero_zirvella_fashion_1792997118313.jpg',
    productIds: ['prod-5', 'prod-2', 'prod-1', 'prod-6'],
  },
  {
    id: 'look-2',
    title: 'Effortless Studio & Coffee Run',
    occasion: 'Weekend Brunch & Creative Work',
    season: 'Year-Round Staples',
    description:
      'Tailored linen trousers grounded by butter-soft penny loafers, a crisp ivory button-down, and a warm cognac leather tote.',
    imageUrl: '/src/assets/images/article_everyday_outfits_1792997119004.jpg',
    productIds: ['prod-2', 'prod-9', 'prod-4', 'prod-7'],
  },
  {
    id: 'look-3',
    title: 'Monochrome Cashmere & Silk Satin',
    occasion: 'Dinner Date & Gallery Opening',
    season: 'Spring / Autumn Evening',
    description:
      'Tactile ribbed cashmere meets the liquid drape of a blush silk satin midi skirt, accented by delicate pointed slingbacks.',
    imageUrl: '/src/assets/images/outfit_capsule_collection_1792997120682.jpg',
    productIds: ['prod-3', 'prod-10', 'prod-1', 'prod-6'],
  },
];
