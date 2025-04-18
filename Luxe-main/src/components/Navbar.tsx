import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">LUXE</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black" title='Home'><i className="fa-solid fa-house"></i></Link>
            <Link to="product" className="text-gray-700 hover:text-black" title='Shop'><i className="fa-solid fa-cart-shopping"></i></Link>
            <Link to="/contact" className="text-gray-700 hover:text-black" title='Contact'><i className="fa-solid fa-comment"></i></Link>
            <Link to="Signup" className="text-gray-700 hover:text-black" title='User'><i className="fa-solid fa-circle-user"></i></Link>
            <Link to="about" className="text-gray-700 hover:text-black" title='About Us'><i className="fa-solid fa-reply"></i></Link>
            <Link to="/cart">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingBag className="h-6 w-6" />
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;