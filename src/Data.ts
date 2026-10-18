export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  description: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 45000,
    inStock: true,
    description:
      "Premium over-ear wireless headphones with active noise cancellation, 30-hour battery life, and ultra-soft memory foam ear cushions. Perfect for studio sessions or daily commutes.",
    rating: 4.7,
    reviewCount: 1284,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Fashion",
    price: 32000,
    inStock: false,
    description:
      "Lightweight, responsive running shoes built for long distances. Features energy-return foam midsole, breathable mesh upper, and durable rubber outsole for any terrain.",
    rating: 4.3,
    reviewCount: 876,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 58000,
    inStock: true,
    description:
      "Full-size mechanical keyboard with Cherry MX Blue switches, per-key RGB backlighting, and a solid aluminium frame. Tactile feedback and satisfying clicky sound for typists and gamers.",
    rating: 4.8,
    reviewCount: 2103,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "Leather Backpack",
    category: "Accessories",
    price: 18500,
    inStock: true,
    description:
      "Handcrafted genuine leather backpack with a padded 15-inch laptop compartment, multiple organiser pockets, and adjustable padded shoulder straps. Timeless design meets modern functionality.",
    rating: 4.5,
    reviewCount: 543,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Electronics",
    price: 75000,
    inStock: false,
    description:
      "Advanced smartwatch with health monitoring (ECG, SpO2, stress), GPS, always-on AMOLED display, and 7-day battery life. Compatible with iOS and Android.",
    rating: 4.6,
    reviewCount: 3201,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    badge: "New Arrival",
  },
  {
    id: 6,
    name: "Insulated Water Bottle",
    category: "Lifestyle",
    price: 6500,
    inStock: true,
    description:
      "Double-wall vacuum insulated stainless steel bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free, leak-proof lid, available in 500ml and 1L sizes.",
    rating: 4.4,
    reviewCount: 729,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
  },
  {
    id: 7,
    name: "Mirrorless Camera",
    category: "Electronics",
    price: 320000,
    inStock: true,
    description:
      "24.2 MP APS-C mirrorless camera with real-time Eye AF, 4K 30fps video, 5-axis in-body image stabilisation, and a weather-sealed magnesium alloy body. Ideal for photographers and vloggers.",
    rating: 4.9,
    reviewCount: 987,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
    badge: "Editor's Pick",
  },
  {
    id: 8,
    name: "Yoga Mat",
    category: "Lifestyle",
    price: 9800,
    inStock: true,
    description:
      "6mm thick non-slip yoga mat made from natural rubber. Provides excellent cushioning, grip, and durability. Eco-friendly and free from harmful chemicals. Includes a carrying strap.",
    rating: 4.2,
    reviewCount: 412,
    image: "https://images.unsplash.com/photo-1601925228797-0a842dcc06f5?w=600&q=80",
  },
  {
    id: 9,
    name: "Desk Lamp",
    category: "Home",
    price: 12000,
    inStock: true,
    description:
      "Modern LED desk lamp with 5 colour temperatures, 10 brightness levels, wireless phone charging base, and USB-A charging port. Touch control and memory function included.",
    rating: 4.6,
    reviewCount: 318,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
  },
  {
    id: 10,
    name: "Sunglasses",
    category: "Fashion",
    price: 22000,
    inStock: true,
    description:
      "Polarised UV400 aviator sunglasses with a lightweight titanium frame and scratch-resistant lenses. Includes a hard case and cleaning cloth. Unisex design for all face shapes.",
    rating: 4.1,
    reviewCount: 654,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    badge: "Sale",
  },
  {
    id: 11,
    name: "Portable Speaker",
    category: "Electronics",
    price: 28000,
    inStock: true,
    description:
      "360° surround sound Bluetooth 5.3 speaker with 20-hour playtime, IP67 waterproof rating, and a built-in microphone for hands-free calls. Compact and rugged for any adventure.",
    rating: 4.5,
    reviewCount: 1567,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
  },
  {
    id: 12,
    name: "Coffee Maker",
    category: "Home",
    price: 35000,
    inStock: false,
    description:
      "Programmable 12-cup drip coffee maker with a built-in grinder, adjustable brew strength, keep-warm plate, and 24-hour delay timer. Wake up to freshly ground coffee every morning.",
    rating: 4.3,
    reviewCount: 228,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
];