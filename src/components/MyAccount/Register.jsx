import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import contact from "../../assets/contactimg.jpg";

const Register = () => {
  return (
    <div>
   
      <div className="flex justify-center items-center mt-10  ">
        <div className="w-96 px-10 py-5 pb-10 bg-gray-50">
          <h1>Create an Account</h1>
          <form action="" className=" text-gray-500 flex gap-5 flex-col ">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="h-7 w-72 px-3 py-2 focus:shadow-lg focus:outline-none focus:border-0 text-base font-bold"
                placeholder="Enter first name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="h-7 w-72 px-3 py-2 focus:shadow-lg focus:outline-none focus:border-0 text-base font-bold"
                placeholder="Enter last name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="h-7 w-72 px-3 py-2 focus:shadow-lg focus:outline-none focus:border-0 text-base font-bold"
                placeholder="Enter Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="h-7 w-72 px-3 py-2 focus:shadow-lg focus:outline-none focus:border-0 text-base font-bold"
                placeholder="Enter Password"
              />
            </div>
            <div>
              <button className="color-blue w-80 py-3 text-white border-0 font-bold rounded-sm">
                Create
              </button>
            </div>
          </form>
          <button className="border-0 text-blue-500 bg-white">
            alreay have an account?
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Register;
