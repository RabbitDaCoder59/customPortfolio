import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaShareAlt,
  FaCopy,
} from "react-icons/fa";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { blogs } from "../data/data"; // Assuming you have your blogs data in a separate file

interface HeaderProps {
  mode: boolean;
}
const BlogDetails: React.FC<HeaderProps> = ({mode})=> {
  const { id } = useParams<{ id: string }>(); // Get the id from the URL
  const blogId = id ? parseInt(id) : null;

  // Find the blog that matches the id
  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) {
    return <p>Blog not found</p>; // Return this if no blog is found
  }

  const shareToWhatsApp = () => {
    // Add functionality to share on WhatsApp
  };

  const shareToFacebook = () => {
    // Add functionality to share on Facebook
  };

  const shareToTwitter = () => {
    // Add functionality to share on Twitter
  };

  const shareBlog = () => {
    // Add functionality to share the blog
  };

  const copyLink = () => {
    // Add functionality to copy the blog link
    navigator.clipboard.writeText(window.location.href);
    alert("Blog link copied to clipboard!");
  };

  return (
    <div className={`lg:w-[800px] w-full h-auto ${
      mode ? "bg-black text-white" : "bg-white "
    } mt-8 rounded-xl font-poppins`}>
      <div className="lg:py-14 py-7 px-4 lg:px-10">
        <Heading text="Blog Details" />

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 mb-6">
          <FaWhatsapp
            className="text-green-500 text-2xl cursor-pointer"
            onClick={shareToWhatsApp}
          />
          <FaFacebook
            className="text-blue-600 text-2xl cursor-pointer"
            onClick={shareToFacebook}
          />
          <FaTwitter
            className="text-blue-400 text-2xl cursor-pointer"
            onClick={shareToTwitter}
          />
          <FaShareAlt
            className="text-gray-600 text-2xl cursor-pointer"
            onClick={shareBlog}
          />
          <FaCopy
            className="text-gray-600 text-2xl cursor-pointer"
            onClick={copyLink}
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-lg mb-6"
        />

        {/* Blog Description */}
        <p className={`text-lg ${
        mode ? "text-white " : "text-gray-900 "
      }leading-relaxed`}>
          {blog.description}
        </p>
      </div>

      <Footer mode={mode} />
    </div>
  );
};

export default BlogDetails;
