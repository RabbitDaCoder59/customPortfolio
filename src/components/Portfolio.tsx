import React, { useState } from "react";
import Card from "./Card";
import "../App.css";
import { cards } from "../data/data";
const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");



  const filteredCards =
    filter === "All"
      ? cards
      : cards.filter((card) => card.category === filter);

  return (
    <div className="container mx-auto p-4">
      {/* Filter options */}
      <div className="flex justify-center space-x-4 mb-8 text-gray-500">
        {["All", "Mockup", "Graphic Design", "Logo"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`${
              filter === category ? "text-red-500 font-semibold" : ""
            } hover:text-red-500`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 gap-8 place-content-center items-center">
        {filteredCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
