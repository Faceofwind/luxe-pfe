

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About LUXE</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2024, LUXE is more than just a clothing brand. We're a statement of style,
              quality, and sustainability. Our commitment to exceptional craftsmanship and 
              innovative design has made us a leader in premium fashion.
            </p>
            <p className="text-gray-600 mb-8">
              Every piece in our collection is carefully crafted using the finest materials,
              ensuring both comfort and durability. We believe in sustainable fashion and
              ethical manufacturing practices.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3"
              alt="About LUXE"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;