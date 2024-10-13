import React from "react";

const SkillsAndKnowledge: React.FC = () => {
  const skills = [
    { name: "Web Design", level: "85%", color: "bg-red-500" },
    { name: "Mobile App", level: "55%", color: "bg-purple-500" },
    { name: "Illustrator", level: "65%", color: "bg-blue-500" },
    { name: "Photoshop", level: "72%", color: "bg-pink-500" },
  ];

  const knowledge = [
    "Digital Design",
    "Marketing",
    "Communication",
    "Social Media",
    "Time Management",
    "Flexibility",
    "Print",
  ];

  return (
    <div className="flex justify-between items-start gap-4 lg:gap-10">
      {/* Working Skills Section */}
      <div className="w-1/2">
        <h3 className="font-semibold text-lg mb-4">Working Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between">
              <span className="text-[#44566c] text-sm lg:text-base">{skill.name}</span>
              <span className="text-[#44566c]">{skill.level}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-md mt-2">
              <div
                className={`${skill.color} h-2 rounded-md`}
                style={{ width: skill.level }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Knowledges Section */}
      <div className="w-1/2">
        <h3 className="font-semibold text-lg mb-4">Knowledges</h3>
        <div className="flex flex-wrap gap-2 lg:gap-5">
          {knowledge.map((item, index) => (
            <div
              key={index}
              className="lg:px-5 px-3 py-2 bg-gray-100 text-[#44566c] rounded-lg text-xs lg:text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsAndKnowledge;
