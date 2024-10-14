import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
interface CardProps {
  card: {
    title: string;
    category: string;
    imgSrc: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="bg-[#ED7777] w-[300px] h-[250px] rounded-lg text-center">
      <img
        src={card.imgSrc}
        alt={card.title}
        className="h-40 w-full object-cover rounded-t-lg"
      />
      <div className="px-2 py-4">
        <div className="flex ic justify-between">
          <div className="">
            <h3 className=" font-bold">{card.title}</h3>
            <p className="text-sm text-white">{card.category}</p>
          </div>
          <div className="flex items-center">
            <div className="bg-white w-10 h-10 rounded-sm flex justify-center items-center relative left-3">
              <FaGithub className="text-3xl" />
            </div>

            <div className="w-[110px]">
              <Link
                style={{ "--clr": "#000" } as React.CSSProperties}
                className="btn-3 "
                to="#"
              >
                Preview
                <span className="button__icon-wrapper">
                  <svg
                    width="10"
                    className="button__icon-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    ></path>
                  </svg>

                  <svg
                    className="button__icon-svg button__icon-svg--copy"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
