
export const siteConfig = {
  businessName: "Shriraam Jewellery",
  tagline: "Legacy of Trust, Crafted for Generations",
  whatsapp: "+919443379960",
  phone: "+919443379960",
  address: "Oppanakara Street / Town Hall, Coimbatore",
  email: "contact@shriraamjewellery.com",
  timings: "10:30 AM - 8:30 PM (Mon - Sat), 11:00 AM - 6:00 PM (Sun)",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.365313175446!2d76.9602!3d10.999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85906f595f03d%3A0xc0688029d91f4b85!2sOppanakara%20St%2C%20Prakasam%2C%20Town%20Hall%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
  
  navCategories: [
    { id: 'gold', name: 'Gold', path: '/category/gold' },
    { id: 'diamond', name: 'Diamond', path: '/category/diamond' },
    { id: 'silver', name: 'Silver Articles', path: '/category/silver' },
    { id: 'bridal', name: 'Bridal Wear', path: '/category/bridal' },
  ],

  categories: [
    {
      id: 'gold',
      name: 'Exquisite Gold',
      description: 'Timeless designs in 22kt and 24kt gold.',
      image: 'public/hero-jewel.jpg',
      subcategories: ['Necklaces', 'Bangles', 'Earrings', 'Rings']
    },
    {
      id: 'diamond',
      name: 'Brilliant Diamonds',
      description: 'Certified diamonds for every special moment.',
      image: 'public/diamond-category.png',
      subcategories: ['Engagement Rings', 'Pendants', 'Nose Pins']
    },
    {
      id: 'silver',
      name: 'Silver Articles',
      description: 'Traditional and contemporary silver collection.',
      image: 'public/silver-category.png',
      subcategories: ['Pooja Items', 'Gift Articles', 'Dinnerware']
    },
    {
      id: 'bridal',
      name: 'Bridal Couture',
      description: 'Comprehensive wedding sets for the modern bride.',
      image: 'public/bridal-category.png',
      subcategories: ['Antique Sets', 'Temple Jewellery', 'Nakshi Designs']
    }
  ],

  products: [
    // ── GOLD ──────────────────────────────────────────────────────────────
    {
      id: 'p1',
      name: 'Vedic Temple Necklace',
      category: 'gold',
      subcategory: 'Necklaces',
      price: 'Price on Inquiry',
      description: 'A masterpiece featuring traditional temple motifs and intricate carving.',
      images: [
        
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'New Arrival'
    },
    {
      id: 'p3',
      name: 'Antique Lakshmi Bangle',
      category: 'gold',
      subcategory: 'Bangles',
      price: 'Price on Inquiry',
      description: 'Handcrafted nakshi bangles with antique finish and ruby stones.',
      images: [
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        
      ],
      tag: 'Craftsman Choice'
    },
    {
      id: 'p6',
      name: 'Peacock Kundan Earrings',
      category: 'gold',
      subcategory: 'Earrings',
      price: 'Price on Inquiry',
      description: 'Intricate peacock-shaped kundan earrings with meenakari enamel work.',
      images: [
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Best Seller'
    },
    {
      id: 'p7',
      name: 'South Indian Waist Chain',
      category: 'gold',
      subcategory: 'Waist Chains',
      price: 'Price on Inquiry',
      description: 'Traditional vaddanam with hand-engraved floral motifs in 22kt gold.',
      images: [
       
        
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Heritage Piece'
    },
    {
      id: 'p8',
      name: 'Classic Gold Mangalsutra',
      category: 'gold',
      subcategory: 'Mangalsutra',
      price: 'Price on Inquiry',
      description: 'Elegant black-bead mangalsutra with a diamond-studded gold pendant.',
      images: [
       
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Auspicious'
    },
    {
      id: 'p9',
      name: 'Rajwada Gold Haath Phool',
      category: 'gold',
      subcategory: 'Hand Harness',
      price: 'Price on Inquiry',
      description: 'Regal hand harness with floral motifs connecting finger rings to the wrist.',
      images: [
      
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'New Arrival'
    },

    // ── DIAMOND ───────────────────────────────────────────────────────────
    {
      id: 'p2',
      name: 'Solitaire Dream Ring',
      category: 'diamond',
      subcategory: 'Engagement Rings',
      price: 'Price on Inquiry',
      description: '1.5ct round cut diamond set in 18kt white gold.',
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
       
        'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800',
       
      ],
      tag: 'Best Seller'
    },
    {
      id: 'p10',
      name: 'Diamond Tennis Bracelet',
      category: 'diamond',
      subcategory: 'Bracelets',
      price: 'Price on Inquiry',
      description: 'Timeless in-line diamond tennis bracelet set in platinum, 3ct total weight.',
      images: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Premium'
    },
    {
      id: 'p11',
      name: 'Pear Drop Diamond Earrings',
      category: 'diamond',
      subcategory: 'Earrings',
      price: 'Price on Inquiry',
      description: 'Pear-shaped GIA certified diamonds suspended in yellow gold prong settings.',
      images: [
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
      
        'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'New Arrival'
    },
    {
      id: 'p12',
      name: 'Eternity Diamond Band',
      category: 'diamond',
      subcategory: 'Wedding Bands',
      price: 'Price on Inquiry',
      description: 'Full eternity band with channel-set round brilliant diamonds in 18kt rose gold.',
      images: [
      
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800',
    
      ],
      tag: 'Best Seller'
    },
    {
      id: 'p13',
      name: 'Floral Diamond Pendant',
      category: 'diamond',
      subcategory: 'Pendants',
      price: 'Price on Inquiry',
      description: 'Seven-stone floral diamond pendant on a delicate white gold chain.',
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
       
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Craftsman Choice'
    },

    // ── SILVER ────────────────────────────────────────────────────────────
    {
      id: 'p4',
      name: 'Traditional Silver Diya',
      category: 'silver',
      subcategory: 'Pooja Items',
      price: 'Price on Inquiry',
      description: 'Pure silver diya with ornate detailing for your prayer room.',
      images: [
     
      
        'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=800',
       
      ],
      tag: 'Auspicious'
    },
    {
      id: 'p14',
      name: 'Oxidised Silver Cuff',
      category: 'silver',
      subcategory: 'Bangles',
      price: 'Price on Inquiry',
      description: 'Broad oxidised silver cuff with tribal motifs and turquoise stone inlay.',
      images: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
   
        
      ],
      tag: 'Craftsman Choice'
    },
    {
      id: 'p15',
      name: 'Sterling Silver Anklet',
      category: 'silver',
      subcategory: 'Anklets',
      price: 'Price on Inquiry',
      description: 'Delicate ghungroo anklet in pure 925 sterling silver, sold as a pair.',
      images: [
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'New Arrival'
    },
    {
      id: 'p16',
      name: 'Silver Filigree Jhumka',
      category: 'silver',
      subcategory: 'Earrings',
      price: 'Price on Inquiry',
      description: 'Lightweight Odisha filigree jhumka with intricate twisted wire craftsmanship.',
      images: [
        'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
       
      ],
      tag: 'Heritage Piece'
    },
    {
      id: 'p17',
      name: 'Pure Silver Ganesha Idol',
      category: 'silver',
      subcategory: 'Pooja Items',
      price: 'Price on Inquiry',
      description: 'Hand-sculpted solid silver Ganesha idol, ideal for gifting and home shrines.',
      images: [
   
  
      ],
      tag: 'Auspicious'
    },

    // ── BRIDAL ────────────────────────────────────────────────────────────
    {
      id: 'p5',
      name: 'Bridal Emerald Choker',
      category: 'bridal',
      subcategory: 'Antique Sets',
      price: 'Price on Inquiry',
      description: 'Luxury emerald and uncut diamond choker set for bridal grandeur.',
      images: [

        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
  
      ],
      tag: 'Premium'
    },
    {
      id: 'p18',
      name: 'Grand Bridal Polki Set',
      category: 'bridal',
      subcategory: 'Full Sets',
      price: 'Price on Inquiry',
      description: 'Heirloom-quality uncut polki necklace, maang tikka, and earring set in 22kt gold.',
      images: [
      
        'https://images.unsplash.com/photo-1609743522653-52354461eb27?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Premium'
    },
    {
      id: 'p19',
      name: 'Ruby Bridal Maang Tikka',
      category: 'bridal',
      subcategory: 'Hair Accessories',
      price: 'Price on Inquiry',
      description: 'Cascading maang tikka with pigeon-blood rubies and rose-cut diamonds.',
      images: [
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
       
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Best Seller'
    },
    {
      id: 'p20',
      name: 'Kundan Bridal Nath',
      category: 'bridal',
      subcategory: 'Nose Rings',
      price: 'Price on Inquiry',
      description: 'Statement bridal nath with pearl drops and white kundan set in gold.',
      images: [
        'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800',
  
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
   
      ],
      tag: 'New Arrival'
    },

    {
      id: 'p22',
      name: 'Jadau Bridal Kamarbandh',
      category: 'bridal',
      subcategory: 'Waist Chains',
      price: 'Price on Inquiry',
      description: 'Jadau-work gold kamarbandh adorned with meenakari panels and pearls.',
      images: [

        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',

        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Heritage Piece'
    },

    // ── PLATINUM ──────────────────────────────────────────────────────────
    {
      id: 'p23',
      name: 'Platinum Love Band',
      category: 'platinum',
      subcategory: 'Couples Bands',
      price: 'Price on Inquiry',
      description: 'Sleek 950 platinum couple bands with subtle grooved finish — timeless and modern.',
      images: [
        'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Best Seller'
    },
    {
      id: 'p24',
      name: 'Platinum Diamond Solitaire',
      category: 'platinum',
      subcategory: 'Engagement Rings',
      price: 'Price on Inquiry',
      description: '2ct oval-cut diamond on a four-prong 950 platinum solitaire setting.',
      images: [
        'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Premium'
    },
    {
      id: 'p25',
      name: 'Platinum Bar Pendant',
      category: 'platinum',
      subcategory: 'Pendants',
      price: 'Price on Inquiry',
      description: 'Minimalist platinum bar pendant with pavé diamond edge on a fine chain.',
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'New Arrival'
    },

    // ── GEMSTONE ──────────────────────────────────────────────────────────
    {
      id: 'p26',
      name: 'Sapphire Cocktail Ring',
      category: 'gemstone',
      subcategory: 'Rings',
      price: 'Price on Inquiry',
      description: 'Oval Ceylon sapphire centre stone surrounded by a double halo of white diamonds.',
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Craftsman Choice'
    },
    {
      id: 'p27',
      name: 'Burmese Ruby Drop Earrings',
      category: 'gemstone',
      subcategory: 'Earrings',
      price: 'Price on Inquiry',
      description: 'Certified Burmese rubies set in 18kt yellow gold with diamond-encrusted tops.',
      images: [
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Premium'
    },
    {
      id: 'p28',
      name: 'Colombian Emerald Necklace',
      category: 'gemstone',
      subcategory: 'Necklaces',
      price: 'Price on Inquiry',
      description: 'Graduated Colombian emerald bead necklace with a diamond and gold clasp.',
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1599643477877-537ef527848f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'Heritage Piece'
    },
    {
      id: 'p29',
      name: 'Amethyst Gold Bracelet',
      category: 'gemstone',
      subcategory: 'Bracelets',
      price: 'Price on Inquiry',
      description: 'Faceted amethyst links alternating with twisted 18kt gold bars.',
      images: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
      ],
      tag: 'New Arrival'
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Lakshmi Narayanan",
      role: "Loyal Customer for 20 Years",
      content: "The most trusted family jeweller in Coimbatore. Their patience and polite staff make every visit a pleasant experience. My family has been buying for two generations.",
      rating: 5
    },
    {
      id: 2,
      name: "Priyanka S.",
      role: "Recent Bride",
      content: "Found my perfect bridal set at Shriraam. They have a wide variety of unique designs you won't find in big commercial chains. The finish is truly premium.",
      rating: 5
    },
    {
      id: 3,
      name: "Suresh Kumar",
      role: "Business Owner",
      content: "Best place for silver articles and investment gold. Transparent pricing and exceptional service. Highly recommended for their trust and quality.",
      rating: 5
    }
  ],

 gallery: [
  {
    src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-2 row-span-2',
    productId: 'p2' // Solitaire Dream Ring
  },
  {
    src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 row-span-1',
    productId: 'p1' // Vedic Temple Necklace
  },
  {
    src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1 row-span-2',
    productId: 'p3' // Antique Lakshmi Bangle
  },
  {
    src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=600',
    span: 'col-span-1 row-span-1',
    productId: 'p4' // Traditional Silver Diya
  }
]

};
