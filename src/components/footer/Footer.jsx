import React from 'react';
import { Link } from 'react-router-dom';
import pay1 from "../../assets/payment-1.png";
import pay2 from "../../assets/payment-2.png";
import pay3 from "../../assets/payment-3.png";
import pay4 from "../../assets/payment-4.png";
import pay5 from "../../assets/payment-5.png";
import lg from "../../assets/lg.jpg";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="mt-16 drop-shadow-sm bg-gray-50 pt-10">
      <div className="flex justify-center items-center flex-wrap mb-10 w-full md:flex-wrap gap-24 md:gap-16 border-gray-400 footer-section">
        <div className="w-96 flex flex-col gap-3 footer-text">
          <div className='flex items-center justify-start gap-1'>
            <img src={lg} alt="" className="w-10 rotate-180" />
            <img src={logo} alt="" />
          </div>
          <div>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              exercitationem sed perferendis! Voluptates, iusto atque.
            </p>
          </div>
          <div className="flex gap-3">
            <img src={pay1} alt="" />
            <img src={pay2} alt="" />
            <img src={pay3} alt="" />
            <img src={pay4} alt="" />
            <img src={pay5} alt="" />
          </div>
        </div>
        <div className='footer-section-2'>
          <ul className="list-none flex flex-col gap-2">
            <li className="font-bold">QUICK LINKS</li>
            <li><Link to="/" className="text-black no-underline">Home</Link></li>
            <li><Link to="/shop" className="text-black no-underline">Shop</Link></li>
            <li><Link to="/contact" className="text-black no-underline">Contact</Link></li>
          </ul>
        </div>
        <div className='footer-section-3'>
          <ul className="list-none flex flex-col gap-2">
            <li className="font-bold">ACCOUNT</li>
            <li><Link to="/MyAccount" className="text-black no-underline">My Account</Link></li>
            <li><Link to="/wishlist" className="text-black no-underline">Wishlist</Link></li>
            <li><Link to="/cart" className="text-black no-underline">Add to cart</Link></li>
          </ul>
        </div>
        <div>
          <ul className='list-none flex flex-col gap-2'>
              <li className='font-bold'>CONTACT US</li>
              <li>hr@ashion.com</li>
              <li>+1 625 584 636</li>
              <li>D.No.17, Shriram VijayaPark Duraisamy <br /> Peelamedu Coimbatore TN IN 641004</li>
          </ul>
        </div>
      </div>
      <hr className="w-4/5 text-gray-400" />
      <p className="text-center text-gray-400 pb-10">
        Copyright © 2024 All rights reserved | This template is made with by
        Colorlib
      </p>
    </div>
  );
};

export default Footer;
