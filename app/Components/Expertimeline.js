"use client";
import { Timeline } from "rsuite";
import React, { useState } from "react";
import {BsFillCircleFill} from 'react-icons/bs'

const Expertimeline = () => {
    const [hoverStates, setHoverStates] = useState([false, false, false]);

    const handleMouseEnter = (index) => {
      const updatedHoverStates = hoverStates.map((state, i) => (i === index ? true : state));
      setHoverStates(updatedHoverStates);
    };
  
    const handleMouseLeave = (index) => {
      const updatedHoverStates = hoverStates.map((state, i) => (i === index ? false : state));
      setHoverStates(updatedHoverStates);
    };

    const timelineData = [
        {
          title: 'Full Stack development ',
          subtitle: 'Timespro Bootcamp(2022-2023)',
          description: 'Engaging in the Full Stack Web Development program at Timespro Bootcamp from 2022 to 2023 was a transformative experience that propelled my journey into the dynamic world of technology and programming.',
           exp:"9 month  "
        },
        {
          title: 'ATOS Private ltd India',
          subtitle: 'Associate officer (2021-2022)',
          description: 'My role as an Associate Officer at ATOS Private Ltd India, from 2021 to 2022, was a pivotal part of my professional journey, where I contributed to the efficient operations of the company and gained valuable insights into the corporate landscape.',
          exp:"1.5 year exp"

        },
        {
          title: 'Conneqt bussiness solution',
          subtitle: 'Customer excutive (2019-2021)',
          description: 'As a Customer Executive, I was an integral part of the team responsible for providing top-notch customer support to Airtels clientele. This role required me to effectively communicate with customers',
          exp:"1.5 year exp"

        },
      ];
  
  return (
  <div>
     <div className="mb-8">
        <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 text-[#f9004d]">
          2019-2023
        </p>
        <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
          Experience
        </h1>
      </div>
    <Timeline className="custom-timeline">
      {timelineData.map((data, index) => (
        <Timeline.Item key={index} dot={<BsFillCircleFill className={hoverStates[index] ? 'text-red-500  bg-[#d9d9d9] p-1 rounded-full text-lg ' : 'text-white bg-[#d9d9d9] p-1 rounded-full text-lg'} />}>
        <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="gradient2 md:w-[500px] w-[20rem] md:h-auto h-auto p-2 grad shadow-md  rounded-lg transition-colors duration-700 bg-transparent"
          >
           <div>
               <div className=" border-b flex justify-around items-center">
                   <div className="md:p-8 p-4">
                    <h4 className="md:text-2xl text-sm font-semibold capitalize">{data.title}</h4>
                    <p className="text-xs md:text-base">{data.subtitle}</p>
                   </div>
                   <div><button className={hoverStates[index]?"bg-[#fe024e] text-white transition-colors duration-700 h-12 w-24 p-2 rounded-md":"bg-slate-100 h-12 p-2 transition-colors duration-700 shadow-lg w-24 rounded-md text-red-500"}>{data.exp}</button></div>
               </div>
               <div>
                <p className="md:p-8 p-4 font-normal md:text-base text-sm">{data.description}</p>
               </div>
           </div>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
</div>  
  );
};

export default Expertimeline;
