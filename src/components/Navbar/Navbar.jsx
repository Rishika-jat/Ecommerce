// // import React from "react";
// // import { NavLink } from "react-router-dom";
// // import lg from "../../assets/lg.jpg";
// // import logo from "../../assets/logo.png";
// // import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
// // const Navbar = () => {
// //   return (
// //     <div className="navbar flex justify-around items-center shadow-lg p-4 bg-white">
// //       <div className="flex items-center justify-center">
// //         <img src={lg} alt="" className="w-10 rotate-180" />
// //         <img src={logo} alt="" />
// //       </div>
// //       <div className="flex gap-3 items-center">
// //         <FaSearch size={20} color="gray" />
// //         <input
// //           type="text"
// //           placeholder="Search"
// //           className=" focus:outline-none border-gray-300 p-2 w-80 md:w-52 rounded-3xl"
// //         />
// //       </div>
// //       <div>
// //         <ul className="list-none flex gap-5">
// //           <NavLink
// //             to="/"
// //             className={({ isActive }) =>
// //               isActive ? "underline text-black font-bold " : "no-underline text-black"
// //             }
// //           >
// //             <li>Home</li>
// //           </NavLink>
// //           <NavLink
// //             to="/shop"
// //             className={({ isActive }) =>
// //               isActive ? "underline text-black font-bold" : "no-underline text-black"
// //             }
// //           >
// //             <li>Shop</li>
// //           </NavLink>
// //           <NavLink
// //             to="/contact"
// //             className={({ isActive }) =>
// //               isActive ? "underline text-black font-bold" : "no-underline text-black"
// //             }
// //           >
// //             {" "}
// //             <li>Contact</li>
// //           </NavLink>
// //           <NavLink to="/cart">
// //             <li className="no-underline text-black">
// //               <FaShoppingCart className="mr-2" />
// //             </li>
// //           </NavLink>

// //           <NavLink to="/wishlist">
// //             <li className="no-underline text-black">
// //               <FaHeart />
// //             </li>
// //           </NavLink>

// // <NavLink to="/MyAccount">
// // <li className="no-underline text-black">
// //             {" "}
// //             <FaUser className="text-black" size={16} />
// //           </li>
// // </NavLink>
        
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import lg from "../../assets/lg.jpg";
// import logo from "../../assets/logo.png";
// import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaBars } from "react-icons/fa";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="navbar flex justify-between items-center shadow-lg p-4 bg-white">
//       <div className="flex items-center">
//         <img src={lg} alt="" className="w-10 rotate-180" />
//         <img src={logo} alt="" />
//       </div>
//       <div className="hidden md:flex gap-3 items-center">
//         <FaSearch size={20} color="gray" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="focus:outline-none border-gray-300 p-2 w-80 md:w-52 rounded-3xl"
//         />
//       </div>
//       <div className="hidden md:flex gap-5">
//         <NavLink to="/" className={({ isActive }) => isActive ? "underline text-black font-bold" : "no-underline text-black"}>
//           <li className=" list-none">Home</li>
//         </NavLink>
//         <NavLink to="/shop" className={({ isActive }) => isActive ? "underline text-black font-bold" : "no-underline text-black"}>
//           <li  className=" list-none">Shop</li>
//         </NavLink>
//         <NavLink to="/contact" className={({ isActive }) => isActive ? "underline text-black font-bold" : "no-underline text-black"}>
//           <li  className=" list-none">Contact</li>
//         </NavLink>
//         <NavLink to="/cart" className="no-underline text-black">
//           <FaShoppingCart className="mr-2" />
//         </NavLink>
//         <NavLink to="/wishlist" className="no-underline text-black">
//           <FaHeart />
//         </NavLink>
//         <NavLink to="/MyAccount" className="no-underline text-black">
//           <FaUser size={16} />
//         </NavLink>
//       </div>
//       <div className="flex md:hidden">
//         <FaBars size={20} onClick={toggleMenu} />
//       </div>
//       {isOpen && (
//         <div className="md:hidden flex flex-col gap-3 mt-4">
//           <FaSearch size={20} color="gray" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="focus:outline-none border-gray-300 p-2 w-full rounded-3xl"
//           />
//           <NavLink to="/" className="no-underline text-black">
//             Home
//           </NavLink>
//           <NavLink to="/shop" className="no-underline text-black">
//             Shop
//           </NavLink>
//           <NavLink to="/contact" className="no-underline text-black">
//             Contact
//           </NavLink>
//           <NavLink to="/cart" className="no-underline text-black">
//             <FaShoppingCart className="mr-2" />
//           </NavLink>
//           <NavLink to="/wishlist" className="no-underline text-black">
//             <FaHeart />
//           </NavLink>
//           <NavLink to="/MyAccount" className="no-underline text-black">
//             <FaUser size={16} />
//           </NavLink>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import lg from "../../assets/lg.jpg";
import logo from "../../assets/logo.png";
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes for close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar flex justify-between items-center shadow-lg p-4 bg-white">
      <div className="flex items-center">
        <img src={lg} alt="" className="w-10 rotate-180" />
        <img src={logo} alt="" />
      </div>
      <div className="hidden md:flex gap-3 items-center">
        <FaSearch size={20} color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none border-gray-300 p-2 w-80 md:w-52 rounded-3xl"
        />
      </div>
      <div className="hidden md:flex gap-5">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline text-black font-bold" : "no-underline text-black"}>
          <li className=" list-none">Home</li>
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "underline text-black font-bold" : "no-underline text-black"}>
          <li className=" list-none">Shop</li>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "underline text-black font-bold" : "no-underline text-black"}>
          <li className=" list-none">Contact</li>
        </NavLink>
        <NavLink to="/cart" className="no-underline text-black">
          <FaShoppingCart className="mr-2" />
        </NavLink>
        <NavLink to="/wishlist" className="no-underline text-black">
          <FaHeart />
        </NavLink>
        <NavLink to="/MyAccount" className="no-underline text-black">
          <FaUser size={16} />
        </NavLink>
      </div>
      <div className="flex md:hidden">
        {isOpen ? (
          <FaTimes size={20} onClick={toggleMenu} />
        ) : (
          <FaBars size={20} onClick={toggleMenu} />
        )}
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-4 absolute top-12 right-0 bg-white p-4 shadow-lg w-full max-w-xs">
          <div className="flex items-center gap-3">
            <FaSearch size={20} color="gray" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none border-gray-300 p-2 w-full rounded-3xl"
            />
          </div>
          <NavLink to="/" className="no-underline text-black">
            Home
          </NavLink>
          <NavLink to="/shop" className="no-underline text-black">
            Shop
          </NavLink>
          <NavLink to="/contact" className="no-underline text-black">
            Contact
          </NavLink>
          <NavLink to="/cart" className="no-underline text-black">
            <FaShoppingCart className="mr-2" />
          </NavLink>
          <NavLink to="/wishlist" className="no-underline text-black">
            <FaHeart />
          </NavLink>
          <NavLink to="/MyAccount" className="no-underline text-black">
            <FaUser size={16} />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
