import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'bridal',
    name: 'Bridal Collection',
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f7f2b9b4?w=800&q=80',
    description: 'Timeless pieces for your unforgettable day.'
  },
  {
    id: 'diamond',
    name: 'Diamond Jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a8efd3e33c2?w=800&q=80',
    description: 'Brilliant cuts, unparalleled sparkle.'
  },
  {
    id: 'heritage',
    name: 'Heritage Gold',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    description: 'Traditional craftsmanship passed down generations.'
  },
  {
    id: 'contemporary',
    name: 'Contemporary Wear',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    description: 'Modern elegance for everyday luxury.'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Royal Kundan Choker',
    category: 'Bridal Collection',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1200&q=80',
      'https://images.unsplash.com/photo-1599643478524-fb66f7f2b9b4?w=1200&q=80'
    ],
    description: 'An exquisite piece of heritage art, this choker features uncut diamonds set in 22k gold with emerald drops.',
    details: {
      material: 'Gold & Kundan',
      purity: '22K Gold',
      weight: '85g',
      stones: 'Uncut Diamonds, Emeralds'
    },
    isNew: true
  },
  {
    id: 'p2',
    name: 'Lotus Bloom Diamond Ring',
    category: 'Diamond Jewellery',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1605100804763-247f66126e28?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f66126e28?w=1200&q=80'
    ],
    description: 'Inspired by the sacred lotus, this ring features a brilliant center diamond surrounded by a halo of pavé diamonds.',
    details: {
      material: 'Rose Gold',
      purity: '18K Gold',
      weight: '12g',
      stones: 'VVS1 Diamonds (2.5 Carat Total)'
    }
  },
  {
    id: 'p3',
    name: 'Temple Heritage Bangle',
    category: 'Heritage Gold',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80'
    ],
    description: 'Handcrafted by master artisans, this bangle features intricate goddess motifs in antique gold finish.',
    details: {
      material: 'Antique Gold',
      purity: '22K Gold',
      weight: '45g',
      stones: 'Rubies, Emeralds'
    }
  },
  {
    id: 'p4',
    name: 'Minimalist Pearl Drop Earrings',
    category: 'Contemporary Wear',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80'
    ],
    description: 'A modern take on the classic pearl earring. Perfect for boardroom elegance to evening soirées.',
    details: {
      material: 'White Gold',
      purity: '18K Gold',
      weight: '8g',
      stones: 'South Sea Pearls, Accent Diamonds'
    }
  }
];
