/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import { FaBars, FaTimes, FaUser } from "react-icons/fa";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo / Title */}
//         <h1 className="text-xl font-bold text-gray-800">Recipe Contest</h1>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           <a href="/" className="text-gray-600 hover:text-gray-900 transition">Home</a>
//           <a href="/recipes" className="text-gray-600 hover:text-gray-900 transition">Recipes</a>
//           <a href="/about" className="text-gray-600 hover:text-gray-900 transition">About</a>
//           <a href="/contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
//         </nav>

//         {/* User Profile Section */}
//         <div className="relative">
//           <button
//             className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition"
//             onClick={() => setProfileOpen(!profileOpen)}
//           >
//             <span className="hidden md:block">Hello, User</span>
//             <FaUser className="w-6 h-6" />
//           </button>

//           {/* Profile Dropdown */}
//           {profileOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
//               <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
//               <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
//               <a href="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Logout</a>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <nav className="md:hidden bg-gray-100 py-3">
//           <a href="/" className="block px-6 py-2 text-gray-600 hover:text-gray-900">Home</a>
//           <a href="/recipes" className="block px-6 py-2 text-gray-600 hover:text-gray-900">Recipes</a>
//           <a href="/about" className="block px-6 py-2 text-gray-600 hover:text-gray-900">About</a>
//           <a href="/contact" className="block px-6 py-2 text-gray-600 hover:text-gray-900">Contact</a>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Title */}
        <h1 className="text-3xl font-extrabold tracking-wide">
          🍽️ Recipe Contest
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-lg">
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Recipes
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            Contests
          </a>
          <a href="#" className="hover:text-yellow-300 transition duration-300">
            About
          </a>
        </nav>

        {/* Profile / Menu Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition duration-300">
            Login
          </button>
          <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition duration-300">
            <FaUserCircle className="text-3xl" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-indigo-800 py-4 text-center space-y-4">
          <a
            href="#"
            className="block text-lg text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-lg text-white hover:text-yellow-300 transition duration-300"
          >
            Recipes
          </a>
          <a
            href="#"
            className="block text-lg text-white hover:text-yellow-300 transition duration-300"
          >
            Contests
          </a>
          <a
            href="#"
            className="block text-lg text-white hover:text-yellow-300 transition duration-300"
          >
            About
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
