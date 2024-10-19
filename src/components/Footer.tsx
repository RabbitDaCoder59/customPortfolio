import React from "react";

interface HeaderProps {
  mode: boolean;
}
const Footer: React.FC<HeaderProps> = ({ mode }) => {
  return (
    <div
      className={`flex justify-center py-6 ${
        mode ? "bg-black text-white " : "bg-[#F3F6F6] "
      } w-full`}
    >
      <div className="">
        © 2024 All Rights Reserved by{" "}
        <span
          className={`text-[#E5316B] ${
            mode ? "hover:text-[#a6a6a6]" : "hover:text-black"
          } `}
        >
          DroineTech
        </span>
      </div>
    </div>
  );
};

export default Footer;
