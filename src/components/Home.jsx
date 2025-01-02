import React from "react";

import pic1 from "../assets/pic-1.jpg";
import pic2 from "../assets/pic-2.jpg";
import pic3 from "../assets/pic-3.jpg";
import pic4 from "../assets/pic-4.jpg";
import pic5 from "../assets/pic-5.jpg";

import product from "../assets/product.webp";
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.jpg"
import product5 from "../assets/product5.jpg"
import product6 from "../assets/product6.jpg"

import { useNavigate } from 'react-router-dom';
import {
  
  FaCar,
  FaMoneyBill,
  FaGlobe,
  FaHeadphones,
} from "react-icons/fa";

const Home = () => {

  const navigate = useNavigate();
   const handleDiscoverNow = () => { navigate('/shop'); };

  return (
    <div>
    

      {/* Hero Section start */}
      <div className="hero-section h-screen w-screen bg-no-repeat bg-contain my-2 shadow-xl font-bold text-white flex flex-col xl:gap-36 md:gap-10">
        <div className="flex flex-col items-center justify-center space-y-0 mr-0 xl:mr-56 2xl:mr-56 lg:mr-56 md:mr-56  xl:pt-24 xl:space-y-4 sm:space-y-0 md:space-y-2 md:pt-10   md:leading-none ">
          <p className="xl-block 2xl:block lg:block md:block">NEED IT NOW</p>
          <h1 className="text-2xl lg:text-3xl md:text-3xl  xl:text-6xl 2xl:text-6xl">Must-haves</h1>
          <h1 className="text-2xl lg:text-3xl md:text-3xl xl:text-6xl 2xl:text-6xl">for the Season</h1>
          <p className="font-thin text-xs">
            Contemporary, minimal and beautiful iconic
          </p>
          <button className="color-blue text-white font-bold border-0 px-5 py-3 align-middle " onClick={handleDiscoverNow}>
            DISCOVER NOW!
          </button>
        </div>
       
        <div className="flex ml-3 gap-3 hero-2">
          <div className="hover-img img1 w-full h-96 bg-contain bg-no-repeat ml-0 flex items-center justify-center hover:scale-95 duration-300">
            <button className="bg-white border-0 py-2 px-7 font-bold text-lg hover-blue">
              New
            </button>
          </div>

          <div className="hover-img img2 w-full bg-contain bg-no-repeat flex items-center justify-center  hover:scale-95 duration-300">
            <button className="bg-white border-0 py-2 px-7 font-bold text-lg hover-blue">
              Trending
            </button>
          </div>

          <div className="hover-img img3 w-full bg-contain bg-no-repeat mr-7 flex items-center justify-center hover:scale-95 duration-300">
            <button className="bg-white border-0 py-2 px-7 font-bold text-lg hover-blue ">
              Sale
            </button>
          </div>
        </div>
      </div>
      {/* Hero Section end  */}

      {/* Top product section start */}
      <div className="top-product xl:mt-64 md:mt-0 flex flex-col justify-center items-center">
        <h1>Top Products of This Week</h1>
        <div className="product xl:gap-3 xl:flex justify-center sm:gap-5">
          <div>
            <div>
              <img src={product} alt="" width={300} />
            </div>
            <div className="flex flex-col justify-center items-center space-y-0">
              <p>Button blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>$678</p>
            </div>
          </div>
          <div>
            <div>
              <img src={product2} alt="" width={250}/>
            </div>
            <div className="flex flex-col justify-center items-center space-y-0">
              <p>Button blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>$678</p>
            </div>
          </div>
          <div>
            <div>
              <img src={product3} alt="" width={255} />
            </div>
            <div className="flex flex-col justify-center items-center space-y-0">
              <p>Button blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>$678</p>
            </div>
          </div>
        </div>
        <div className="product xl:flex gap-3 md:hidden ">
          <div>
            <div>
              <img src={product5} alt="" width={300} height={380} />
            </div>
            <div className="flex flex-col justify-center items-center space-y-0">
              <p>Button blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>$678</p>
            </div>
          </div>
          <div>
            <div>
              <img src={product4} alt="" width={310}/>
            </div>
            <div className="flex flex-col justify-center items-center space-y-0">
              <p>Button blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>$678</p>
            </div>
          </div>
          <div>
            <div>
              <img src={product6} alt="" width={300} height={380} className=""/>
            </div>
            <div className="flex flex-col justify-center items-center space-y-0">
              <p>Button blazer</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>$678</p>
            </div>
          </div>
        </div>
        
      </div>
      {/* Top product section end */}

      {/* Feature Section start */}
      <div className="feature-section mt-16">
        <div className="flex flex-wrap items-center justify-center gap-4 xl:flex-nowrap md:flex-wrap w-full  md:justify-center border-gray-400">
          <div className="feature flex items-center justify-center gap-7">
            <FaCar size={50} color="brown" />

            <div className="space-y-0">
              <h3>Free Shipping</h3>
              <p>For all order over $99</p>
            </div>
          </div>
          <div className="feature flex items-center justify-center gap-7">
            <FaMoneyBill size={50} color="brown" />

            <div className="space-y-0">
              <h3>Money Back Guarantee</h3>
              <p>If good have Problems</p>
            </div>
          </div>
          <div className="feature flex items-center justify-center gap-7 ">
            <FaGlobe size={50} color="brown" />

            <div className="space-y-0">
              <h3>Online Support 24/7</h3>
              <p>Dedicated support</p>
            </div>
          </div>
          <div className="feature flex items-center justify-center gap-7 md:mr-8">
            <FaHeadphones size={50} color="brown" />

            <div className="space-y-0">
              <h3>Payment Secure</h3>
              <p>100% secure payment</p>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Section end  */}

      {/* insta section start */}
      
      <div className="insta-section mt-16 flex flex-wrap xl:flex-nowrap justify-center items-center w-full">
  <div className="flex flex-wrap justify-center xl:flex-nowrap gap-2">
    <img src={pic1} alt="" width={254} />
    <img src={pic2} alt="" width={253} />
    <img src={pic3} alt="" width={253} />
    <img src={pic4} alt="" width={253} />
    <img src={pic5} alt="" width={253} />
    <img src={pic1} alt="" width={253} />
  </div>
</div>

      {/* insta section end */}

  
    </div>
  );
};
export default Home;
