import React from "react";
import Card from "../Components/Card";

function Project() {
  return (
    <div className="blurback bg-[#ecf0f3] dark:bg-slate-900 h-auto">
      <div>
        <div className="text-center mx-auto p-12  ">
          <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 text-[#f9004d]">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </p>
          <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
            My Portfolio
          </h1>
        </div>
        <div className="flex flex-wrap md:p-8 p-2 dark:border-none border-b-2 gap-4   mx-auto">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Project;
