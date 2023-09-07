import React from "react";
import Contactside from "../Components/Contactside";
import Contactform from "../Components/Contactform";

const page = () => {
  return (
    <div className="blurback bg-[#ecf0f3] h-auto w-full border-b-2 ">
      <div>
        <div className="text-center mx-auto p-12">
          <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 text-[#f9004d]">
            contact
          </p>
          <h1 className="md:text-4xl text-3xl font-bold text-[#3c3e41] leading-7 tracking-wide">
            Contact with me
          </h1>
        </div>
        <div className="flex flex-col mt-4 md:flex-row sm:flex-col mb-8 md:mr-4 md:p-0 p-4  ">
          <Contactside />
          <Contactform />
        </div>
      </div>
    </div>
  );
};

export default page;
