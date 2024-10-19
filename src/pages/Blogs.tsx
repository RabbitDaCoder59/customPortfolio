import React, { useState } from "react";
import Heading from "../components/Heading";
import { blogs } from "../data/data";
import Pagination from "../components/Pagination"; // Import the pagination component
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

interface HeaderProps {
  mode: boolean;
}
const Blogs: React.FC<HeaderProps> = ({ mode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Display 6 blogs per page

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get current blogs based on pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className={`lg:w-[800px] w-full h-full ${
        mode ? "bg-black text-white" : "bg-white "
      } mt-8 rounded-xl font-poppins`}
    >
      <div className="lg:py-14 lg:px-10 px-2 py-7">
        <Heading text="Blogs" />
        <div className="container mx-auto p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {currentBlogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className={`${
                  mode
                    ? "bg-black text-white"
                    : "bg-white shadow-md border border-gray-100"
                } shadow-custom-yelow  rounded-lg  p-4 `}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <p
                    className={`${
                      mode ? " text-white" : " text-gray-500 "
                    } text-sm`}
                  >
                    {blog.date} <span className="mx-2">•</span> {blog.category}
                  </p>
                  <h2 className={`text-xl font-semibold mt-2 ${mode?" text-white hover:text-blue-700":" text-gray-800 "}`}>
                    {blog.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            mode={mode}
          />
        </div>
      </div>
      <Footer mode={mode} />
    </div>
  );
};

export default Blogs;
