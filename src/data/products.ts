export interface Product {
  id: number;
  name: string;
  category: 'men' | 'accessories';
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

];

export const categories = [
  {
    name: "Men",
    slug: "men",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=750&fit=crop",
    description: "Refined essentials for the modern man"
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
    description: "Curated details that complete the look"
  }
];
