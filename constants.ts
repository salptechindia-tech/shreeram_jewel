
import { Product, Category } from './types';

export const theme = {
  colors: {
    bg: 'bg-[#F5F0E6]',
    cardBg: 'bg-white',
    primary: 'text-[#2A1B12]',
    accent: 'text-[#C5A059]',
    accentBg: 'bg-[#2A1B12]',
    accentHover: 'hover:bg-[#3D2B1F]',
    border: 'border-[#E5E1D8]',
    brownLight: 'text-[#C5A059]',
    darkNav: 'bg-[#1A110B]',
    navbarCat: 'text-[#c0c0c0]',
  },
  fonts: {
    serif: 'font-serif',
    sans: 'font-sans',
  },
  spacing: {
    section: 'py-12 md:py-16',
    container: 'max-w-7xl mx-auto px-6 sm:px-8 lg:px-10',
  },
  radius: 'rounded-2xl',
  shadows: 'shadow-xl',
};

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'bridal',
    name: 'Bridal Couture',
    description: 'Comprehensive wedding sets for the modern bride.',
    image: 'https://picsum.photos/seed/bridal/800/600',
    subcategories: ['Antique Sets', 'Temple Jewellery', 'Nakshi Designs']
  },
  {
    id: 'gold',
    name: 'Gold Collection',
    description: 'Timeless pure gold ornaments and modern designs.',
    image: 'https://picsum.photos/seed/gold/800/600',
    subcategories: ['Necklaces', 'Earrings', 'Bangles', 'Rings']
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Vedic Temple Necklace',
    category: 'gold',
    subcategory: 'Necklaces',
    price: 'Price on Inquiry',
    description: 'A masterpiece featuring traditional temple motifs and intricate carving.',
    images: [
      'https://picsum.photos/seed/jewel1/600/800',
      'https://picsum.photos/seed/jewel2/600/800'
    ],
    tag: 'New Arrival'
  },
  {
    id: 'p2',
    name: 'Celestial Diamond Studs',
    category: 'bridal',
    subcategory: 'Earrings',
    price: '₹ 1,45,000',
    description: 'Elegant diamond studs set in 18k white gold for a timeless look.',
    images: ['https://picsum.photos/seed/earrings1/600/800'],
    tag: 'Bestseller'
  }
];
