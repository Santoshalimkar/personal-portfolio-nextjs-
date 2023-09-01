"use client";
import { Timeline } from "rsuite";
import React, { useState } from "react";
import {BsFillCircleFill} from 'react-icons/bs'

const Edutimeline = () => {
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
          title: 'Bsc. Computer science',
          subtitle: 'College of Studies (2016-2019)',
          description: 'During my time pursuing a Bachelor of Science degree in Computer Science at the College of Studies from 2016 to 2019, I embarked on a comprehensive journey of learning and exploration in the world of technology',
          marks:"B+"
        },
        {
          title: 'HSC. higher secoundary',
          subtitle: 'higher education (2014-2016)',
          description: 'During the period of 2014 to 2016, I undertook my Higher Secondary Education, commonly referred to as HSC. This phase marked a crucial juncture in my academic journey, setting the stage for my future pursuits',
          marks:"51%"
        },
        {
          title: 'SSC. secoundary school certificate ',
          subtitle: 'secoundary school (2013-2014)',
          description: 'My Secondary School Certificate (SSC) journey, spanning from 2013 to 2014, marked the foundational phase of my formal education. During these transformative years, I laid the initial stepping stones towards academic excellence and personal growth',
          marks:"75.60%"

        },
      ];
  
  return (
  <div>
     <div className="mb-8">
        <p className="uppercase tracking-widest text-xs font-medium md:font-thin mb-4 leading-3 text-[#f9004d]">
          2014-2019
        </p>
        <h1 className="text-4xl font-bold text-[#3c3e41] leading-7 tracking-wide">
          Education
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
                   <div><button className={hoverStates[index]?"bg-[#fe024e] text-white transition-colors duration-700 h-12 w-24 p-2 rounded-md":"bg-slate-100 h-12 p-2 transition-colors duration-700 shadow-lg w-24 rounded-md text-red-500"}>{data.marks}</button></div>
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

export default Edutimeline;
