import { useEffect, useState } from 'react';

const Cart = () => {
  interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 overflow-y-auto pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                    Remove
                  </button>
                </div>
              ))}
              <div className="flex justify-between items-center border-t pt-4">
                <p className="text-lg font-semibold">Total:</p>
                <p className="text-lg font-bold">
                  ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
              Checkout
            </button>
            <button className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition">
              Continue Shopping
            </button>
            <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;