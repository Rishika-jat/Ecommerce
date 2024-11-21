import React from "react";
import logo from "../assets/logo.png"
import lg from "../assets/lg.jpg"
import pic1 from "../assets/pic-1.jpg";
import pic2 from "../assets/pic-2.jpg";
import pic3 from "../assets/pic-3.jpg";
import pic4 from "../assets/pic-4.jpg";
import pic5 from "../assets/pic-5.jpg";

import product from "../assets/product.webp";
import Navbar from "./Navbar/Navbar";
import {
  
  FaCar,
  FaMoneyBill,
  FaGlobe,
  FaHeadphones,
} from "react-icons/fa";
import Footer from "./footer/Footer";
const Home = () => {
  return (
    <div>
    

      {/* Hero Section start */}
      <div className="hero-section h-screen w-screen bg-no-repeat bg-contain my-2 shadow-xl font-bold text-white flex flex-col gap-36">
        <div className="flex flex-col items-center justify-center mr-56 pt-24 space-y-4">
          <p>NEED IT NOW</p>
          <h1 className="text-6xl">Must-haves</h1>
          <h1 className="text-6xl">for the Season</h1>
          <p className="font-thin">
            Contemporary, minimal and beautiful iconic
          </p>
          <button className="color-blue text-white font-bold border-0 px-5 py-3">
            DISCOVER NOW!
          </button>
        </div>
        <div className="flex ml-3 gap-3">
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
      <div className="top-product mt-64 flex flex-col justify-center items-center">
        <h1>Top Products of This Week</h1>
        <div className="product flex gap-3">
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
              <img src={product} alt="" width={300} />
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
      <div className="feature-section mt-16 ">
        <div className="flex items-center justify-center gap-28">
          <div className="feature flex items-center justify-center gap-7">
            <FaCar size={50} color="brown" />

            <div className="">
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
          <div className="feature flex items-center justify-center gap-7">
            <FaGlobe size={50} color="brown" />

            <div className="space-y-0">
              <h3>Online Support 24/7</h3>
              <p>Dedicated support</p>
            </div>
          </div>
          <div className="feature flex items-center justify-center gap-7">
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
      <div className="insta-section mt-16">
        <div>
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
