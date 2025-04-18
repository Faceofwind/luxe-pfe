import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Collection from './components/Collection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './Pages/product';
import Signup from './Pages/Signup';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured />
              <Collection />
            </>
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;