import React from "react";
import Slider from "react-slick";
import "../App.css";
import "../styles/style.css";
import {workItems} from "../data/data";

interface HeaderProps {
  mode: boolean;
}
const Carousel: React.FC<HeaderProps> = ({ mode })=> {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // Optional arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false ,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:max-w-[45rem] lg:mx-auto mt-3">
      <Slider {...settings}>
        {workItems.map((item, index) => (
          <div key={index} className="p-4">
            <div className={`rounded-lg  ${mode?"bg-[#272828] text-[#a6a6a6]":"bg-[#FFF4F4]"}  w-full h-52 py-5 px-3`}>
              <div className="flex items-start gap-5">
                <div className="">
                  {/* Conditionally render either an icon or an image */}
                  {typeof item.icon === "string" ? (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="rounded-t-lg object-cover w-full"
                    />
                  ) : (
                    <div className="w-full  flex">
                      {item.icon} {/* Render icon as JSX */}
                    </div>
                  )}
                </div>
                <div className="">
                  <h3 className={`${mode?"text-white":"text-[#44566c] "} font-medium text-xl mb-2`}>{item.title}</h3>
                  <p className={` ${mode?"text-gray-300":"text-[#44566c] "} text-lg`}>{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
