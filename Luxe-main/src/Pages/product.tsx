
const Product = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Product</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src=""
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Product Name</h2>
            <p className="text-lg text-gray-700 mb-4">Price: 100 TND</p>
            <p className="text-gray-600 mb-6">
              Description: great
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white shadow-md rounded-md">
              <p>
                <strong>koussay</strong> Great product!
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md">
              <p>
                <strong>faceofwind</strong> Highly recommend!
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Write a Review</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Rating:
                </label>
                <select
                  id="rating"
                  name="rating"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                  Review:
                </label>
                <textarea
                  id="review"
                  name="review"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;