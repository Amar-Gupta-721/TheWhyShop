import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
  {
    id: '1',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80',
    price: '$349',
    category: 'Audio',
    buyLink: 'https://amazon.com',
    reviewLink: 'https://youtube.com',
  },
  {
    id: '2',
    name: 'MacBook Pro 16" M3 Max',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
    price: '$3,499',
    category: 'Laptops',
    buyLink: 'https://apple.com',
    reviewLink: 'https://youtube.com',
  },
  {
    id: '3',
    name: 'iPhone 15 Pro Max',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
    price: '$1,199',
    category: 'Phones',
    buyLink: 'https://apple.com',
    reviewLink: 'https://youtube.com',
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24 Ultra',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80',
    price: '$1,299',
    category: 'Phones',
    buyLink: 'https://samsung.com',
    reviewLink: 'https://youtube.com',
  },
  {
    id: '5',
    name: 'Apple Watch Ultra 2',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80',
    price: '$799',
    category: 'Wearables',
    buyLink: 'https://apple.com',
    reviewLink: 'https://youtube.com',
  },
  {
    id: '6',
    name: 'DJI Mini 4 Pro Drone',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
    price: '$759',
    category: 'Drones',
    buyLink: 'https://dji.com',
    reviewLink: 'https://youtube.com',
  },
  {
    id: '7',
    name: 'Sony A7R V Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    price: '$3,898',
    category: 'Cameras',
    buyLink: 'https://sony.com',
    reviewLink: 'https://youtube.com',
  },
  {
    id: '8',
    name: 'Keychron Q1 Pro Keyboard',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80',
    price: '$199',
    category: 'Accessories',
    buyLink: 'https://keychron.com',
    reviewLink: 'https://youtube.com',
  },
];

const categories = ['All', 'Phones', 'Laptops', 'Audio', 'Wearables', 'Cameras', 'Drones', 'Accessories'];

const ProductStore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('products');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">

        {/* Search and filters */}
        <div className={`flex flex-col md:flex-row gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-card pl-12 pr-4 py-4 rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'glass-card text-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-lg text-muted-foreground">
              No products found. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductStore;
