import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Navbar from "./Navbar/Navbar";
import ProductDetail from "./productDetail";
import Product from "./Product";
import Footer from "./footer/Footer";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category
  const [clickedButton, setClickedButton] = useState(''); // State for tracking clicked button
  const [priceRange, setPriceRange] = useState(100); // State for price range

  const products = useSelector((state) => state.products.products);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setClickedButton(category); // Update the clicked button state
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value); // Update the price range state
  };

  // Filter products based on selected category and price range
  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category.name.toLowerCase() === selectedCategory.toLowerCase())
    .filter(product => product.price <= priceRange);

  return (
    <div>
    
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : (
        <div className="m-10">
          <h1>All Products</h1>
          <div className="top-product flex flex-col justify-center items-center flex-wrap gap-5">
            <div className="flex gap-4 items-center justify-between w-3/4">
              <div className="flex gap-4">
              <button className={`border-blue-300 shadow-lg rounded-2xl px-4 py-2 ${clickedButton === 'All' ? 'bg-blue-500 text-white font-bold' : 'bg-white'}`} onClick={() => handleCategoryClick('All')} > All </button>
                <button 
                  className={`border-blue-300 shadow-lg rounded-2xl px-4 py-2 ${clickedButton === 'Clothes' ? 'color-blue text-white font-bold border-0' : 'bg-white '}`}
                  onClick={() => handleCategoryClick('Clothes')}
                >
                  Clothes
                </button>
                <button 
                  className={`border-blue-300 shadow-lg rounded-2xl px-4 py-2 ${clickedButton === 'Shoes' ? 'color-blue text-white font-bold border-0' : 'bg-white'}`}
                  onClick={() => handleCategoryClick('Shoes')}
                >
                  Shoes
                </button>
                <button 
                  className={`border-blue-300 shadow-lg rounded-2xl px-4 py-2 ${clickedButton === 'Electronics' ? 'color-blue text-white font-bold border-0' : 'bg-white'}`}
                  onClick={() => handleCategoryClick('Electronics')}
                >
                  Electric
                </button>
                <button 
                  className={`border-blue-300 shadow-lg rounded-2xl px-4 py-2 ${clickedButton === 'change title' ? 'color-blue text-white font-bold border-0' : 'bg-white'}`}
                  onClick={() => handleCategoryClick('change title')}
                >
                  Furniture
                </button>
                <button 
                  className={`border-blue-300 shadow-lg rounded-2xl px-4 py-2 ${clickedButton === 'Miscellaneous' ? 'color-blue text-white font-bold border-0' : 'bg-white'}`}
                  onClick={() => handleCategoryClick('Miscellaneous')}
                >
                  Other
                </button>
                <div className="flex items-center justify-center">
                <input 
                  type="range" 
                  id="range" 
                  name="range" 
                  min={0} 
                  max={500} 
                  value={priceRange} 
                  onChange={handlePriceChange} // Handle price range change
                  className="mx-4"
                />
                <span>${priceRange}</span>
                </div>
               
              </div>
            </div>
            <div className="product flex gap-10 flex-wrap w-10/12">
              {filteredProducts && filteredProducts.map((pro) => (
                <Product key={pro.id} product={pro} onClick={() => handleProductClick(pro)} />
              ))}
            </div>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default Shop;


// in all button i have to set the handler function in which whole api call again