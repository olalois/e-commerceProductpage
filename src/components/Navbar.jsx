import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useCart } from "../context/CartContext";
import avatar from "../assets/images/avatar.png";
const Navbar = () => {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>

        {/* Logo */}
        <h2 className="text-2xl font-bold font-mono text-black mx-4 md:mx-0">
          Sneakers
        </h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-row gap-8 text-gray-600">
          <li>
            <Link to="/">Collections</Link>
          </li>
          <li>
            <Link to="/">Men</Link>
          </li>
          <li>
            <Link to="/">Women</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>

        {/* Right Side: Cart & Avatar */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <i className="fas fa-shopping-cart text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
          <img
            src= {avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold font-mono text-black">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-4 text-gray-600">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Collections
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
