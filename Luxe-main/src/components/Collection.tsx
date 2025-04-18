import  { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Collection = () => {
  const collectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const collections = collectionsRef.current?.children;
    if (collections) {
      collections[0].classList.add('opacity-0', '-translate-x-20', 'transition-all', 'duration-1000');
      collections[1].classList.add('opacity-0', 'translate-x-20', 'transition-all', 'duration-1000');
      Array.from(collections).forEach((collection) => {
        observer.observe(collection);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">New Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest collections, featuring premium materials and timeless designs for both men and women.
          </p>
        </div>
        <div ref={collectionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3"
              alt="Men's Collection"
              className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 transition-all duration-300">
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-yellow-400 text-sm font-medium mb-2">New Arrivals</div>
                <h3 className="text-3xl font-bold mb-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                  Men's Collection
                </h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  Discover our premium selection of men's clothing, from casual wear to formal attire.
                </p>
                <button className="group bg-white text-black px-6 py-3 rounded-md hover:bg-yellow-400 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Shop Collection
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3"
              alt="Women's Collection"
              className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 transition-all duration-300">
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-yellow-400 text-sm font-medium mb-2">New Season</div>
                <h3 className="text-3xl font-bold mb-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                  Women's Collection
                </h3>
                <p className="text-gray-300 mb-6 max-w-md">
                  Explore our curated collection of women's fashion, designed for style and comfort.
                </p>
                <button className="group bg-white text-black px-6 py-3 rounded-md hover:bg-yellow-400 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Shop Collection
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;