import React from "react";
import Navbar from "./Navbar/Navbar";
import contact1 from "../assets/contact31.jpg";
import Footer from "./footer/Footer";

const Contact = () => {
  return (
    <div>
 
      <div className="m-10  flex gap-10 bg-orange-0 pb-10 pl-10">
        <div className="mt-10">
          <img src={contact1} alt="" width={750} />
        </div>
        <div className="">
          <h1 className="text-5xl">Contact Us</h1>
          <div className="border-black p-2">
            <form action="" className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="border-0 border-b-2 bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="fullName">Email</label>
                <input
                  type="email"
                  id="fullName"
                  name="fullName"
                  className="border-0 border-b-2 bg-transparent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 ">
                <label htmlFor="fullName">message</label>
                <textarea
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="border-0 border-b-2 bg-transparent focus:outline-none"
                />
              </div>
              <button className="color-blue text-white border-0 w-36 py-3 px-5 font-bold rounded-sm">
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Contact;
