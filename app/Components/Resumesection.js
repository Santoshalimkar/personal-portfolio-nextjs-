"use client";
import React, { useState } from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Certificate from "./Certificate";
import Education from "./Education";

const style = {
  Button2:
    "sm:w-36 lg:w-72 hoverbtn outline-0 font-medium leading-4 text-sm transition-all duration-75 h-16 md:w-48  p-4 m-0 md:bg-gradient-to-r from-[#e5eaee] to-[#eef1f4] box-border ml-0",
  Button3:
    "sm:w-36 lg:w-72 hoverbtn outline-0 font-medium leading-4 text-sm transition-all duration-75 h-16 md:w-48  p-4 m-0  md:bg-gradient-to-r from-[#eef1f4] to-[#f6f8f9] box-border ml-0",
  Button4:
    "sm:w-36 lg:w-72 hoverbtn rounded-r-lg outline-0 font-medium leading-4 text-sm transition-all duration-75 h-16 md:w-48  p-4 m-0  md:bg-gradient-to-r from-[#f6f8f9] to-[#fcfdfd] box-border ml-0",
  active:
    "sm:w-36 lg:w-72 hoverbtn1  outline-0 font-medium leading-4 text-sm transition-all duration-75 h-16 md:w-48  p-4 m-0 md:bg-gradient-to-r from-[#e5eaee] to-[#eef1f4] box-border ml-0",
  notactive:
    "sm:w-36 lg:w-72 hoverbtn rounded-l-lg  outline-0 font-medium leading-4 text-sm transition-all duration-75 h-16 md:w-48  p-4 m-0 md:bg-gradient-to-r from-[#e5eaee] to-[#e5eaee] box-border ml-0",
};

function Resumesection() {
  const [tab, setTab] = useState(1);

  const button1 = () => {
    setTab(1);
  };
  const button2 = () => {
    setTab(2);
  };
  const button3 = () => {
    setTab(3);
  };
  const button4 = () => {
    setTab(4);
  };

  return (
    <div className="bg-[#ecf0f3] h-auto pt-24 ">
      <div className="text-center mx-auto ">
        <p className="uppercase tracking-widest text-xs font-thin mb-4 leading-3 text-[#f9004d]">
          3+ YEARS OF EXPERIENCE
        </p>
        <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
          My Resume
        </h1>
      </div>
      <div className=" flex justify-center mt-8 flex-wrap shadow-md rounded-xl w-[96%] lg:w-[92%]  mx-auto md:bg-gradient-to-r from-[#e5eaee] to-[#fcfdfd] ">
        <button
          onClick={button1}
          className={tab === 1 ? style.active : style.notactive}
        >
          Education
        </button>
        <button
          onClick={button2}
          className={tab === 2 ? style.active : style.Button2}
        >
          Professional Skills
        </button>
        <button
          onClick={button3}
          className={tab === 3 ? style.active : style.Button3}
        >
          Experience
        </button>
        <button
          onClick={button4}
          className={tab === 4 ? style.active : style.Button4}
        >
          Certificate
        </button>
      </div>

      <div>
        {tab === 1 ? <Education /> : ""}
        {tab === 2 ? <Skills /> : ""}
        {tab === 3 ? <Experience /> : ""}
        {tab === 4 ? <Certificate /> : ""}
      </div>
    </div>
  );
}

export default Resumesection;
