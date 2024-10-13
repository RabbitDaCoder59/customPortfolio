// src/components/Header.tsx
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import {
  FaRegAddressCard,
  FaFileAlt,
  FaBriefcase,
  FaRegNewspaper,
  FaRegAddressBook,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// Define the props interface
interface HeaderProps {
  toggleMode: () => void;
  mode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMode, mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation(); // Get the current URL path

  // Helper function to determine active link
  const isActive = (path: string) =>
    location.pathname === path ? "text-[#fa5252] text-white" : "text-[#44566c]";

  return (
    <header className="relative">
      <nav className="max-w-7xl mx-auto py-4 px-10 sm:px-6 lg:py-12 lg:px-20">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="lg:w-full w-32" />
            <h1 className="text-2xl hidden font-bold">Edeh Chinedu</h1>
          </div>
          {/* Toggle mode and Nav button */}
          <div className="flex items-center lg:gap-0 gap-3">
            <div
              className={`w-12 h-12 rounded-full ${
                mode ? "bg-dark-btn" : "bg-white"
              } flex justify-center items-center hover:bg-[#fa5252]`}
              onClick={toggleMode}
            >
              {mode ? (
                <FaSun className={`text-2xl ${mode ? "text-white" : ""}`} />
              ) : (
                <FaMoon className="text-2xl text-[#44566c] hover:text-white" />
              )}
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#44566c] focus:outline-none focus:ring-2 bg-[#fa5252] w-10 h-10 flex justify-center items-center focus:ring-white rounded-full"
              >
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="w-full max-w-[390px] h-[200px] bg-white absolute z-30 left-3 top-20 rounded-xl px-6 py-5">
          <div className="mb-3" onClick={toggleMenu} >
            <Link
              className={` rounded-2xl flex items-center ${isActive("/")}`}
              to="/"
            >
              <FaRegAddressCard className="text-xl" />
              <div className={`font-semibold text-sm ${isActive("/")}`}>
                About
              </div>
            </Link>
          </div>
          <div className="mb-3" onClick={toggleMenu}>
            <Link
              className={` rounded-2xl flex items-center ${isActive(
                "/resume"
              )}`}
              to="/resume"
            >
              <FaFileAlt className="text-xl" />
              <div className={`font-semibold text-sm ${isActive("/resume")}`}>
                Resume
              </div>
            </Link>
          </div>
          <div className="mb-3" onClick={toggleMenu}>
            <Link
              className={` rounded-2xl flex items-center ${isActive("/work")}`}
              to="/work"
            >
              <FaBriefcase className="text-xl" />
              <div className={`font-semibold text-sm ${isActive("/work")}`}>
                Works
              </div>
            </Link>
          </div>
          <div className="mb-3" onClick={toggleMenu}>
            <Link
              className={` rounded-2xl flex items-center ${isActive("/blog")}`}
              to="/blog"
            >
              <FaRegNewspaper className="text-xl" />
              <div className={`font-semibold text-sm ${isActive("/blog")}`}>
                Blogs
              </div>
            </Link>
          </div>
          <div className="mb-3" onClick={toggleMenu}>
            <Link
              className={` rounded-2xl flex items-center ${isActive(
                "/contact"
              )}`}
              to="/contact"
            >
              <FaRegAddressBook className="text-xl" />
              <div className={`font-semibold text-sm ${isActive("/contact")}`}>
                Contact
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
