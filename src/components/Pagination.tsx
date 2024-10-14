import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
  }
  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Determine the range of pages to display
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  // Adjust if the end page exceeds total pages
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [...Array(endPage - startPage + 1).keys()].map(
    (_, i) => startPage + i
  );

  return (
    <div className="flex justify-center items-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 text-sm font-medium rounded-sm flex items-center 
                    ${
                      currentPage === 1
                        ? "text-red-400 cursor-not-allowed"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
      >
        <IoIosArrowRoundBack size={20} />
        Previous
      </button>
      <div className="flex mx-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`mx-1 px-3 py-1 text-sm font-medium rounded-sm 
              ${
                page === currentPage
                  ? "bg-gray-800 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 text-sm font-medium rounded-sm flex items-center 
                    ${
                      currentPage === totalPages
                        ? "text-red-400 cursor-not-allowed"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
      >
        Next
        <IoIosArrowRoundForward size={20} />
      </button>
    </div>
  );
};

export default Pagination;
