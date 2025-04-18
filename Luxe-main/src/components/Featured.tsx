import  { useEffect, useRef, useState } from 'react';
import { ShoppingBag, Heart, Star } from 'lucide-react';

const Featured = () => {
  const productsRef = useRef<HTMLDivElement>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'rotate-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const products = productsRef.current?.children;
    if (products) {
      Array.from(products).forEach((product, index) => {
        product.classList.add(
          'opacity-0',
          'translate-y-10',
          index % 2 === 0 ? 'rotate-3' : '-rotate-3',
          'transition-all',
          'duration-1000'
        );
        observer.observe(product);
      });
    }

    return () => observer.disconnect();
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Leather Jacket',
      price: '$299',
      originalPrice: '$399',
      rating: 4.8,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3',
      colors: ['Black', 'Brown', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Designer Dress',
      price: '$199',
      originalPrice: '$249',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3',
      colors: ['Red', 'Blue', 'Black'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 3,
      name: 'Casual Suit',
      price: '$399',
      originalPrice: '$499',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3',
      colors: ['Gray', 'Navy', 'Black'],
      sizes: ['S', 'M', 'L', 'XL']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium fashion pieces, designed for those who appreciate quality and style.
          </p>
        </div>
        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-80 object-cover transition-all duration-700 ${
                    hoveredProduct === product.id ? 'scale-110 blur-sm' : ''
                  }`}
                />
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-500 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white text-black px-6 py-2 rounded-full transform hover:scale-110 transition-transform">
                    Quick View
                  </button>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
                  <Heart className={`h-5 w-5 transition-colors duration-300 ${
                    hoveredProduct === product.id ? 'text-red-500 fill-red-500' : 'text-gray-600'
                  }`} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-sm text-green-600 font-medium">
                    Save {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}%
                  </span>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Available Colors:</div>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <span 
                        key={color} 
                        className="text-sm bg-gray-100 px-3 py-1 rounded-full transform hover:scale-110 transition-transform cursor-pointer hover:bg-gray-200"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Sizes:</div>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <span 
                        key={size} 
                        className="text-sm border border-gray-200 px-3 py-1 rounded-md hover:border-black cursor-pointer transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="relative w-full bg-black text-white py-3 rounded-md overflow-hidden group">
                  <div className="absolute inset-0 bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;