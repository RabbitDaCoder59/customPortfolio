import React from 'react';
import { FaRegAddressCard, FaFileAlt, FaBriefcase, FaRegNewspaper, FaRegAddressBook } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); // Get the current URL path

  // Helper function to determine active link
  const isActive = (path: string) => location.pathname === path ? 'active text-white' : 'bg-[#eee] text-[#44566c]';

  return (
    <div className="lg:flex justify-end hidden">
      <div className="h-full min-h-[150px] w-[565px] bg-white rounded-xl px-5 py-3 flex justify-between items-center">
        <Link className={`w-[90px] h-[90px] rounded-2xl py-4 ${isActive('/')}`} to="/">
          <div className="flex flex-col justify-center items-center">
            <FaRegAddressCard className="text-3xl" />
            <div className="font-semibold">About</div>
          </div>
        </Link>
        <Link className={`w-[90px] h-[90px] rounded-2xl py-4 ${isActive('/resume')}`} to="/resume">
          <div className="flex flex-col justify-center items-center">
            <FaFileAlt className="text-3xl" />
            <div className="font-semibold">Resume</div>
          </div>
        </Link>
        <Link className={`w-[90px] h-[90px] rounded-2xl py-4 ${isActive('/work')}`} to="/work">
          <div className="flex flex-col justify-center items-center">
            <FaBriefcase className="text-3xl" />
            <div className="font-semibold">Works</div>
          </div>
        </Link>
        <Link className={`w-[90px] h-[90px] rounded-2xl py-4 ${isActive('/blog')}`} to="/blog">
          <div className="flex flex-col justify-center items-center">
            <FaRegNewspaper className="text-3xl" />
            <div className="font-semibold">Blogs</div>
          </div>
        </Link>
        <Link className={`w-[90px] h-[90px] rounded-2xl py-4 ${isActive('/contact')}`} to="/contact">
          <div className="flex flex-col justify-center items-center">
            <FaRegAddressBook className="text-3xl" />
            <div className="font-semibold">Contact</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
