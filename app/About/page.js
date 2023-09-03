import React from "react";
import Edutimeline from "../Components/Edutimeline";
import Expertimeline from "../Components/Expertimeline";

function About() {
  return (
    <div className="blurback bg-[#ecf0f3] h-auto w-full border-b-2 ">
      <div>
        <div className="text-center mx-auto p-12">
          <p className="uppercase tracking-widest text-xs font-thin mb-4 leading-3 text-[#f9004d]">
            3+ YEARS OF EXPERIENCE
          </p>
          <h1 className="md:text-4xl text-3xl font-bold text-[#3c3e41] leading-7 tracking-wide">
            My Resume
          </h1>
        </div>
        <div className="mt-4 p-8 flex lg:flex-row md:flex-col sm:flex-col flex-col md:ml-28 lg:mx-auto mx-auto justify-around item-center h-auto">
          <div>
            <Edutimeline />
          </div>
          <div className="md:mt-8 lg:mt-0 mt-8">
            <Expertimeline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
