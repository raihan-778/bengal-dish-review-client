import React, { useState, useEffect } from "react";
import "./AnimationNav";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 75) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        isNavbarVisible ? "slideDown" : "slideUp"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-medium text-indigo-600">
            Your App
          </a>
          <div className="hidden md:flex">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
            >
              Home
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
            >
              About
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-indigo-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
