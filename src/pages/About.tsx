import React from "react";
import Heading from "../components/Heading";
import Carousel from "../components/Carousel";
import Slider from "react-slick";
import "../App.css";
import "../styles/style.css";
import { Clients } from "../data/data";
import Footer from "../components/Footer";


interface HeaderProps {
  mode: boolean;
}
const About: React.FC<HeaderProps> = ({mode}) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Optional arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className={`lg:w-[800px] w-full h-full ${mode?"bg-black text-white":"bg-white"}  mt-8 rounded-xl  font-poppins`}>
      <div className="lg:py-14 lg:px-10 py-10 px-5">
        <Heading text="About" />
        <div className={`"text-lg  w-[90%] my-5 leading-8 "`}>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs. My aim is to
          bring across your message and identity in the most creative way. I
          created web design for many famous brand companies.
        </div>
        {/* carousel */}
        <div className="">
          <h1 className="lg:text-3xl text-2xl font-medium"> what I do!</h1>

          <div className="">
            <Carousel mode={mode} />
          </div>
        </div>
      </div>
      {/* Clients */}
      <div className={`w-full h-full lg:h-[250px]  ${mode?"bg-[#272828] text-[#a6a6a6]":"bg-[#F8FBFB]"} `}>
        <h1 className="text-3xl font-semibold text-center py-5">Clients</h1>

        <div className="lg:p-4 lg:ml-10 ml-[6.5rem] mt-3">
          <div className="">
            <Slider {...settings}>
              {Clients.map((item, index) => (
                <div key={index} className="p-2">
                  {
                    <div className="w-full">
                      <img src={item.image} alt={item.image} />
                    </div>
                  }
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer mode={mode} />
    </div>
  );
};

export default About;
