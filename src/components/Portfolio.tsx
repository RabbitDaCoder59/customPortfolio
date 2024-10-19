import React, { useState } from "react";
import Card from "./Card";
import "../App.css";
import { cards } from "../data/data"; // Assuming you have a `data.js` or `data.ts` with cards array

interface PortfolioProps {
  mode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ mode }) => {
  const [filter, setFilter] = useState<string>("All");

  const filteredCards =
    filter === "All" ? cards : cards.filter((card) => card.category === filter);

  return (
    <div className="container mx-auto p-4">
      {/* Filter options */}
      <div className={`flex justify-center space-x-4 mb-8`}>
        {["All", "Mockup", "Graphic Design", "Logo"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`${
              filter === category
                ? "text-red-500 font-semibold"
                : mode
                ? "text-white hover:text-red-500"
                : "text-gray-800 hover:text-red-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 gap-8 place-content-center items-center">
        {filteredCards.map((card) => (
          <Card key={card.id} card={card} mode={mode} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
