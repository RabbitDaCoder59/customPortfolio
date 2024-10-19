import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import "../styles/style.css"


interface HeaderProps {
  mode: boolean;
}
const Contact: React.FC<HeaderProps> = ({mode}) => {
  return (
    <div className={`lg:w-[800px] w-full h-full ${mode?"bg-black text-white":"bg-white "} mt-8 rounded-xl  font-poppins`}>
      <div className="lg:py-8 lg:px-10 px-4 py-3 pt-7">
        <Heading text="Contact" />

        <div className={`h-full rounded-3xl py-12 px-8  ${mode?"bg-black text-white":"bg-[#F8FBFB] "} `}>
          <h1 className="text-3xl">
            I'm always open to discussing produuct design work or partnerships.
          </h1>
          <form className="mt-8">
            <div className="inputs">
              <label className="label text-[#ED7777] " htmlFor="name">Name *</label>
            <input type="text" id="name"  className="input focus:border-[#ED7777] focus-within:border-[#ED7777] focus-visible:border-[#ED7777] "/>
            </div>
            <div className="inputs">
              <label className="label text-[#1A70DD] " htmlFor="email">Email *</label>
            <input type="email" id="email"  className="input focus:border-[#1A70DD] focus-within:border-[#1A70DD] focus-visible:border-[#1A70DD] "/>
            </div>
            <div className="inputs">
              <label className="label text-[#CD65F2] " htmlFor="message">Message *</label>
            <textarea id="message"  className="input focus:border-[#CD65F2] focus-within:border-[#CD65F2] focus-visible:border-[#CD65F2] "></textarea>
            </div>

            <button className="submitBtn ">Submit</button>
          </form>
        </div>
      </div>
      <Footer mode={mode} />
    </div>
  );
};

export default Contact;
