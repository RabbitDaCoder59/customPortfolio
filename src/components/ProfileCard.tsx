import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter, FaMobileScreenButton } from "react-icons/fa6";
import profileImg from "../assets/Images/Profile/profile.jpeg"

interface HeaderProps {
  mode: boolean;
}
const ProfileCard: React.FC<HeaderProps> = ({mode}) => {
  return (
    <div className="w-full lg:block flex justify-center">
      <div className={`lg:w-[300px] w-full lg:h-[820px] h-full ${mode?"bg-black text-white":"bg-white "} flex flex-col items-center rounded-2xl py-4 px-5`}>
        <div className="w-full flex justify-center items-center mb-10">
          <div className="flex flex-col items-center">
            <img
              src={profileImg}
              className="w-[210px] h-[210px] rounded-2xl mb-3"
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl font-semibold mb-2">Edeh chinedu</h1>
              <div className={`w-full max-w-[147px] px-4 py-1 ${mode?"bg-[#272828] text-[#a6a6a6]":"bg-[#F3F6F6] "} font-medium text-center rounded-md `}>
                Web Developer
              </div>

              <div className="flex gap-3 mt-3">
                <div className={`socailLinks ${mode?"bg-[#272828] text-[#a6a6a6]":"bg-[#F3F6F6] "}`}>
                  <FaFacebookF className="socailLinksIcon  text-[#1773EA] " />
                </div>
                <div className={`socailLinks ${mode?"bg-[#272828] text-[#a6a6a6]":"bg-[#F3F6F6] "}`}>
                  <FaXTwitter className="socailLinksIcon text-[#1c9cea] " />
                </div>
                <div className={`socailLinks ${mode?"bg-[#272828] text-[#a6a6a6]":"bg-[#F3F6F6] "}`}>
                  <FaInstagram className="socailLinksIcon text-[#E12A72] " />
                </div>
                <div className={`socailLinks ${mode?"bg-[#272828] text-[#a6a6a6]":"bg-[#F3F6F6] "}`}>
                  <FaLinkedinIn className="socailLinksIcon text-[#144679] " />
                </div>
                <div className={`socailLinks ${mode?"bg-[#272828] text-[#a6a6a6]":"bg-[#F3F6F6] "}`}>
                  <FaGithub className="socailLinksIcon " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* profile deatils */}
        <div className={`w-full flex justify-center items-center ${mode?"bg-[#272828] text-white":"bg-[#F3F6F6] "} py-4 px-4 rounded-2xl`}>
          <div className="flex flex-col  w-full h-[305px] ">
            <div className=" flex items-center gap-2 py-3 border-b border-[#9c9b9b]">
              <div className={`${mode?"bg-black text-[#a6a6a6]":"bg-white "} w-[40px] h-[40px] rounded-md flex justify-center items-center`}>
                <FaMobileScreenButton className="text-2xl text-[#E93B81] " />
              </div>
              <div className="flex flex-col justify-start">
                <span     className={`text-[.8em] ${
                    mode
                      ? "bg-[#272828] text-[#a6a6a6]"
                      : "bg-[#F3F6F6] text-[#44566c]"
                  }`}>Phone</span>
                <span className="text-[.9em]">+2348037020923</span>
              </div>
            </div>
            <div className=" flex items-center gap-2 py-4 border-b border-[#9c9b9b]">
              <div className={`${mode?"bg-black text-[#a6a6a6]":"bg-white "} w-[40px] h-[40px] rounded-md flex justify-center items-center`}>
                <TfiEmail className="text-xl text-[#6AB5B9] " />
              </div>
              <div className="flex flex-col justify-start">
                <span     className={`text-[.8em] ${
                    mode
                      ? "bg-[#272828] text-[#a6a6a6]"
                      : "bg-[#F3F6F6] text-[#44566c]"
                  }`}>Email</span>
                <span className="text-[.9em]">edehchinedu59@gmail.com</span>
              </div>
            </div>
            <div className=" flex items-center gap-2 py-4 border-b border-[#9c9b9b]">
              <div className={`${mode?"bg-black text-[#a6a6a6]":"bg-white "} w-[40px] h-[40px] rounded-md flex justify-center items-center`}>
                <FaMapMarkerAlt className="text-2xl text-[#FD7590] " />
              </div>
              <div className="flex flex-col justify-start">
                <span     className={`text-[.8em] ${
                    mode
                      ? "bg-[#272828] text-[#a6a6a6]"
                      : "bg-[#F3F6F6] text-[#44566c]"
                  }`}>Location</span>
                <span className="text-[.9em]">Enugu Nigeria</span>
              </div>
            </div>
            <div className=" flex items-center gap-2 py-4">
              <div className={`${mode?"bg-black text-[#a6a6a6]":"bg-white "} w-[40px] h-[40px] rounded-md flex justify-center items-center`}>
                <FaCalendarAlt className="text-2xl text-[#C17CEB] " />
              </div>
              <div className="flex flex-col justify-start">
                <span     className={`text-[.8em] ${
                    mode
                      ? "bg-[#272828] text-[#a6a6a6]"
                      : "bg-[#F3F6F6] text-[#44566c]"
                  }`}>Birthday</span>
                <span className="text-[.9em]">March 20,2002</span>
              </div>
            </div>
          </div>
        </div>
        <form className="mt-4">
          <button className="cvBtn">
            <FaDownload /> Download CV
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCard;
