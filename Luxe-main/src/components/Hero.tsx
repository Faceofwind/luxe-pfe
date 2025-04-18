import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonGroupRef = useRef<HTMLDivElement>(null); 
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ brands: 0, support: 0, customers: 0 });

  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.scrollY;
      const heroImage = document.querySelector('.hero-image') as HTMLElement;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);

    const heading = headingRef.current;
    const text = textRef.current;
    const buttonGroup = buttonGroupRef.current;
    const stats = statsRef.current;

    if (heading && text && buttonGroup && stats) {
      [heading, text, buttonGroup, stats].forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
      });

      const elements = [
        { el: heading, delay: 500 },
        { el: text, delay: 1000 },
        { el: buttonGroup, delay: 1500 },
        { el: stats, delay: 2000 }
      ];

      elements.forEach(({ el, delay }) => {
        setTimeout(() => {
          el.style.transition = 'all 1s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, delay);
      });
    }

    const animateValue = (start: number, end: number, duration: number, key: keyof typeof counters) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setCounters(prev => ({ ...prev, [key]: value }));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    setTimeout(() => {
      animateValue(0, 50, 2000, 'brands');
      animateValue(0, 24, 2000, 'support');
      animateValue(0, 100, 2000, 'customers');
    }, 2000);

    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3"
          alt="Fashion model"
          className="hero-image w-full h-[120%] object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <div className="flex items-center gap-2 mb-4 animate-bounce">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">Premium Quality Fashion</span>
          </div>
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your Style{' '}
            <span className="text-yellow-400 inline-block animate-pulse">Forever</span>
          </h1>
          <p ref={textRef} className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover our latest collection of premium clothing crafted with precision and style for the modern individual.
          </p>
          <div ref={buttonGroupRef} className="flex gap-4">
            <button className="group bg-white text-black px-8 py-3 text-lg font-semibold rounded-md hover:bg-yellow-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:shadow-lg hover:shadow-yellow-400/20">
              Shop Now
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="relative overflow-hidden border-2 border-white text-white px-8 py-3 text-lg font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300 group">
              <span className="relative z-10">View Lookbook</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
          <div ref={statsRef} className="mt-12 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold">{counters.brands}+</div>
              <div className="text-sm text-gray-300">Premium Brands</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold">{counters.support}/7</div>
              <div className="text-sm text-gray-300">Customer Support</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold">{counters.customers}k+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;