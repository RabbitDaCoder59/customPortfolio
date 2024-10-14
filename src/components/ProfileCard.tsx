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
const ProfileCard: React.FC = () => {
  return (
    <div className="w-full lg:block flex justify-center">
      <div className="lg:w-[300px] w-full lg:h-[820px] h-full bg-white flex flex-col items-center rounded-2xl py-9 px-5">
        <div className="w-full flex justify-center items-center mb-10">
          <div className="flex flex-col items-center">
            <img
              src={"https://fakeimg.pl/250x250?text=250x250&font=noto"}
              className="w-[210px] h-[210px] rounded-2xl "
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="">Edeh chinedu</h1>
              <div className="w-full max-w-[147px] px-4 py-1 bg-[#eee] text-center rounded-sm ">
                Web Developer
              </div>

              <div className="flex gap-3 mt-3">
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#eee] rounded-md">
                  <FaFacebookF className="text-2xl text-[#1773EA] " />
                </div>
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#eee] rounded-md">
                  <FaXTwitter className="text-2xl text-[#1c9cea] " />
                </div>
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#eee] rounded-md">
                  <FaInstagram className="text-2xl text-[#E12A72] " />
                </div>
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#eee] rounded-md">
                  <FaLinkedinIn className="text-2xl text-[#144679] " />
                </div>
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#eee] rounded-md">
                  <FaGithub className="text-2xl " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* profile deatils */}
        <div className="w-full flex justify-center items-center bg-[#eee] py-4 px-4 rounded-2xl  ">
          <div className="flex flex-col  w-full h-[305px] ">
            <div className=" flex items-center gap-2 py-3 border-b border-[#9c9b9b]">
              <div className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                <FaMobileScreenButton className="text-2xl text-[#E93B81] " />
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-[.8em] text-[#44566c]">Phone</span>
                <span className="text-[.9em]">+2348037020923</span>
              </div>
            </div>
            <div className=" flex items-center gap-2 py-4 border-b border-[#9c9b9b]">
              <div className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                <TfiEmail className="text-xl text-[#6AB5B9] " />
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-[.8em] text-[#44566c]">Email</span>
                <span className="text-[.9em]">edehchinedu59@gmail.com</span>
              </div>
            </div>
            <div className=" flex items-center gap-2 py-4 border-b border-[#9c9b9b]">
              <div className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                <FaMapMarkerAlt className="text-2xl text-[#FD7590] " />
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-[.8em] text-[#44566c]">Location</span>
                <span className="text-[.9em]">Enugu Nigeria</span>
              </div>
            </div>
            <div className=" flex items-center gap-2 py-4">
              <div className="bg-white w-[40px] h-[40px] rounded-md flex justify-center items-center">
                <FaCalendarAlt className="text-2xl text-[#C17CEB] " />
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-[.8em] text-[#44566c]">Birthday</span>
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
