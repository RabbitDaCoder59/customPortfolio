import React from "react";
import Heading from "../components/Heading";
import { FaSchool, FaBriefcase } from "react-icons/fa";
import SkillsAndKnowledge from "../components/SkillsAndKnowledge";
import Footer from "../components/Footer";
import { education, experience } from "../data/data";
interface HeaderProps {
  mode: boolean;
}
const Resume: React.FC<HeaderProps> = ({ mode }) => {
  return (
    <div
      className={`lg:w-[800px] w-full h-full ${
        mode ? "bg-black text-white" : "bg-white "
      } mt-8 rounded-xl  font-poppins`}
    >
      <div className="lg:py-14 lg:px-10 py-6 px-4">
        <Heading text="Resume" />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row items-start lg:gap-16 lg:mt-16 gap-5 mt-7 ">
            <div className="">
              <div className="flex gap-3 items-center mb-4">
                <FaSchool className="text-4xl text-[#FA5252] " />{" "}
                <h1 className="text-2xl font-medium">Education</h1>
              </div>
              {education.map(({ id, date, degree, school, city }) => (
                <div
                  key={id}
                  className={`${
                    mode
                      ? "bg-black border border-gray-300 text-white"
                      : "bg-[#FFF4F4] text-[#44566c] "
                  } px-3 py-4 w-[296px] h-[153px] rounded-lg mb-10 shadow-md`}
                >
                  <p className="text-sm  mb-2">{date}</p>
                  <h3
                    className={`font-semibold text-xl ${
                      mode ? "text-gray-300" : "text-[#212529]"
                    }  mb-1`}
                  >
                    {degree} -
                  </h3>
                  <h4 className="text-xl  mb-2">{school}</h4>
                  <p className=" text-base">{city}</p>
                </div>
              ))}
            </div>
            <div className="">
              <div className="flex gap-3 items-center mb-4">
                <FaBriefcase className="text-4xl text-[#FA5252] " />{" "}
                <h1 className="text-2xl font-medium">Experience</h1>
              </div>
              {experience.map(({ id, job, company, date }) => (
                <div
                  key={id}
                  className={`${
                    mode
                      ? "bg-black border border-gray-300 text-white"
                      : "bg-[#EEF5FA] text-[#44566c]"
                  } p-4 rounded-lg w-[296px] h-[126px] mb-10 shadow-md`}
                >
                  <p className="text-sm ">{date}</p>
                  <h3
                    className={`font-semibold text-xl ${
                      mode ? "text-gray-300" : "text-[#212529]"
                    } `}
                  >
                    {job}
                  </h3>
                  <p className=" text-base">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-[367px] px-10 py-4 ${
          mode ? "bg-black text-white" : "bg-white "
        }`}
      >
        <SkillsAndKnowledge mode={mode} />
      </div>
      <Footer mode={mode} />
    </div>
  );
};

export default Resume;
