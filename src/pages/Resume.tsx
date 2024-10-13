import React from "react";
import Heading from "../components/Heading";
import { FaSchool, FaBriefcase } from "react-icons/fa";
import SkillsAndKnowledge from "../components/SkillsAndKnowledge";
import Footer from "../components/Footer";
const Resume: React.FC = () => {
  return (
    <div className="lg:w-[800px] w-full h-full bg-white mt-8 rounded-xl  font-poppins">
      <div className="lg:py-14 lg:px-10 py-6 px-4">
        <Heading text="Resume" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row items-start lg:gap-16 lg:mt-16 gap-5 mt-7 ">
            <div className="">
              <div className="flex gap-3 items-center mb-4">
                <FaSchool className="text-4xl text-[#FA5252] " />{" "}
                <h1 className="text-2xl font-medium">Education</h1>
              </div>
              <div className="bg-[#FFF4F4] px-3 py-4 w-[296px] h-[153px] rounded-lg mb-10 shadow-md">
                <p className="text-sm text-[#44566c] mb-2">2021-2023</p>
                <h3 className="font-semibold text-xl text-[#212529] mb-1">
                  Ph.D in Horribleness -
                </h3>
                <h4 className="text-xl text-[#44566c] mb-2">University</h4>
                <p className="text-[#44566c] text-base">Los Angeles, CA</p>
              </div>
              <div className="bg-[#FFF4F4] px-3 py-4 w-[296px] h-[153px] rounded-lg mb-10 shadow-md">
                <p className="text-sm text-[#44566c] mb-2">2017-2021</p>
                <h3 className="font-semibold text-xl text-[#212529] mb-1">
                  Computer Science -
                </h3>
                <h4 className="text-xl text-[#44566c] mb-2">Imperialize</h4>
                <p className="text-[#44566c] text-base">Los Angeles, CA</p>
              </div>
              <div className="bg-[#FFF4F4] px-3 py-4 w-[296px] h-[153px] rounded-lg mb-10 shadow-md">
                <p className="text-sm text-[#44566c] mb-2">2015-2017</p>
                <h3 className="font-semibold text-xl text-[#212529] mb-1">
                  Graphic Designer -
                </h3>
                <h4 className="text-xl text-[#44566c] mb-2">Web Graphy,</h4>
                <p className="text-[#44566c] text-base">Los Angeles, CA</p>
              </div>
            </div>
            <div className="">
              <div className="flex gap-3 items-center mb-4">
                <FaBriefcase className="text-4xl text-[#FA5252] " />{" "}
                <h1 className="text-2xl font-medium">Experience</h1>
              </div>
              <div className="bg-[#EEF5FA] p-4 rounded-lg w-[296px] h-[126px] mb-10 shadow-md">
                <p className="text-sm text-[#44566c]">2019 - Present</p>
                <h3 className="font-semibold text-xl text-[#212529]">
                  Sr. Software Tester
                </h3>
                <p className="text-[#44566c] text-base">Google Inc.</p>
              </div>
              <div className="bg-[#EEF5FA] p-4 rounded-lg w-[296px] h-[126px] mb-10 shadow-md">
                <p className="text-sm text-[#44566c]">2015-2017</p>
                <h3 className="font-semibold text-xl text-[#212529]">
                  Cr. Web Developer
                </h3>
                <p className="text-[#44566c] text-base">ib-themes ltd.</p>
              </div>
              <div className="bg-[#EEF5FA] p-4 rounded-lg w-[296px] h-[126px] mb-10 shadow-md">
                <p className="text-sm text-[#44566c]">2014 - 2015</p>
                <h3 className="font-semibold text-xl text-[#212529]">
                  Jr. Web Developer
                </h3>
                <p className="text-[#44566c] text-base">Creative Gigs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[367px] px-10 py-4 bg-[#F8FBFB] ">
        <SkillsAndKnowledge />
      </div>
      <Footer/>
    </div>
  );
};

export default Resume;
