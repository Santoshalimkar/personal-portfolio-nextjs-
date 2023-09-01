import React from "react";
import Skillsside from "./Skillsside";
import Skillsright from "./Skillsright";

const Skills = () => {
  return (
    <div className="mt-2 gap-8 p-8 flex md:flex-row flex-col mx-auto justify-around item center h-auto">
      <div className="md:w-full md:p-8 p-2">
        <div className="mb-8">
          <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 text-[#f9004d]">
          2019-2023
          </p>
          <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
            Frontend-Skills
          </h1>
        </div>
        <div className=""><Skillsside/></div>
      </div>
      <div className="md:w-full md:p-8 p-2">
        <div className="mb-8">
          <p className="uppercase tracking-widest text-xs font-thin mb-4 leading-3 text-[#f9004d]">
            2019-2023
          </p>
          <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
          Backend-Skills
          </h1>
        </div>
        <div className=""><Skillsright/></div>
      </div>
    </div>
  );
};

export default Skills;
