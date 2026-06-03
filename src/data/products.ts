export interface Product {
  id: number;
  name: string;
  category: 'men' | 'women' | 'accessories';
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  sizes: string[];
  colors: string[];
  description: string;
  tag?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton Oversized Tee",
    category: "men",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    description: "Crafted from 100% premium organic cotton, this oversized tee offers a relaxed yet refined silhouette. Perfect for layering or wearing on its own for an effortlessly cool look.",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Tailored Slim-Fit Chinos",
    category: "men",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    rating: 4.3,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Navy", "Olive"],
    description: "These slim-fit chinos are tailored for a modern look. Made from stretch cotton blend for all-day comfort and style."
  },
  {
    id: 3,
    name: "Linen Blend Casual Shirt",
    category: "men",
    price: 1899,
    originalPrice: 2799,
    discount: 32,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sky Blue", "White", "Sage"],
    description: "A breathable linen-cotton blend shirt designed for warm weather. Features a relaxed collar and mother-of-pearl buttons.",
    tag: "New"
  },
  {
    id: 4,
    name: "Classic Denim Jacket",
    category: "men",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Indigo", "Light Wash"],
    description: "A wardrobe essential. This classic denim jacket features a timeless wash and rugged construction that only gets better with age.",
    tag: "Trending"
  },
  {
    id: 5,
    name: "Floral Wrap Midi Dress",
    category: "women",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L"],
    colors: ["Floral Blue", "Rose Pink"],
    description: "An elegant wrap dress in a delicate floral print. Features a flattering V-neckline and adjustable tie waist for a customized fit.",
    tag: "Bestseller"
  },
  {
    id: 6,
    name: "High-Waist Wide Leg Trousers",
    category: "women",
    price: 2299,
    originalPrice: 3299,
    discount: 30,
    rating: 4.4,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Burgundy"],
    description: "Sophisticated wide-leg trousers with a high waist that elongates the silhouette. Made from fluid crepe fabric for elegant drape."
  },
  {
    id: 7,
    name: "Cashmere Blend Knit Sweater",
    category: "women",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    rating: 4.9,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L"],
    colors: ["Camel", "Ivory", "Charcoal"],
    description: "Luxuriously soft cashmere-blend sweater with a relaxed crew neck. Perfect for layering during cooler months.",
    tag: "Premium"
  },
  {
    id: 8,
    name: "Structured Blazer in Neutral",
    category: "women",
    price: 4299,
    originalPrice: 5999,
    discount: 28,
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sand", "Black", "Grey"],
    description: "A beautifully structured blazer that transitions effortlessly from office to evening. Features padded shoulders and a single-button closure.",
    tag: "New"
  },
  {
    id: 9,
    name: "Leather Crossbody Sling Bag",
    category: "accessories",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    rating: 4.5,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Tan", "Black", "Burgundy"],
    description: "Handcrafted from genuine leather, this crossbody bag features an adjustable strap, magnetic closure, and multiple compartments for everyday essentials.",
    tag: "Trending"
  },
  {
    id: 10,
    name: "Minimalist Analog Watch",
    category: "accessories",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Silver", "Rose Gold", "Black"],
    description: "A refined minimalist watch with a Japanese quartz movement, sapphire crystal glass, and genuine Italian leather strap. Water-resistant up to 30 meters."
  },
  {
    id: 11,
    name: "Gold Circle Hoop Earrings",
    category: "accessories",
    price: 1499,
    originalPrice: 2199,
    discount: 32,
    rating: 4.3,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
    description: "Exquisite handmade jewelry that elevates any outfit. These earrings are hypoallergenic and designed for all-day comfort."
  },
  {
    id: 12,
    name: "Classic Aviator Sunglasses",
    category: "accessories",
    price: 2199,
    originalPrice: 2999,
    discount: 27,
    rating: 4.6,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop",
    sizes: ["One Size"],
    colors: ["Gold Frame", "Silver Frame", "Black Frame"],
    description: "Timeless aviator sunglasses with UV400 protection lenses, lightweight metal frame, and adjustable nose pads for a comfortable fit.",
    tag: "Bestseller"
  },
  {
    id: 13,
    name: "Relaxed Fit Hoodie",
    category: "men",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    rating: 4.4,
    reviews: 176,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey Melange", "Forest Green"],
    description: "Ultra-soft cotton-fleece hoodie with a relaxed fit. Features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs."
  },
  {
    id: 14,
    name: "Satin Camisole Top",
    category: "women",
    price: 1599,
    originalPrice: 2299,
    discount: 30,
    rating: 4.5,
    reviews: 83,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L"],
    colors: ["Champagne", "Black", "Dusty Rose"],
    description: "A luxurious satin camisole with delicate lace trim. Perfect for layering under blazers or wearing on its own for evening occasions."
  },
  {
    id: 15,
    name: "Merino Wool Crew Socks",
    category: "accessories",
    price: 599,
    originalPrice: 899,
    discount: 33,
    rating: 4.2,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L"],
    colors: ["Charcoal", "Navy", "Oatmeal"],
    description: "Premium merino wool crew socks that are naturally temperature-regulating, moisture-wicking, and odor-resistant. Ideal for all seasons."
  },
  {
    id: 16,
    name: "Structured Wool Coat",
    category: "women",
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&h=750&fit=crop",
    sizes: ["S", "M", "L"],
    colors: ["Camel", "Black", "Grey"],
    description: "A statement wool coat with clean lines and a structured silhouette. Features a single-breasted button closure, deep pockets, and a notch lapel.",
    tag: "Premium"
  },
];

export const categories = [
  {
    name: "Men",
    slug: "men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=750&fit=crop",
    description: "Refined essentials for the modern man"
  },
  {
    name: "Women",
    slug: "women",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=750&fit=crop",
    description: "Elegant pieces for every occasion"
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
    description: "Curated details that complete the look"
  }
];
