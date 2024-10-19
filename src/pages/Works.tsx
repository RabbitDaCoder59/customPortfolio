import React from "react";
import Heading from "../components/Heading";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

interface HeaderProps {
  mode: boolean;
}
const Works: React.FC<HeaderProps> = ({ mode }) => {
  return (
    <div
      className={`lg:w-[800px] w-full h-full ${
        mode ? "bg-black text-white" : "bg-white "
      } mt-8 rounded-xl  font-poppins`}
    >
      <div className="lg:py-14 lg:px-10 px-2 py-7">
        <Heading text="Works" />

        <Portfolio mode={mode} />
      </div>
      <Footer mode={mode} />
    </div>
  );
};

export default Works;
