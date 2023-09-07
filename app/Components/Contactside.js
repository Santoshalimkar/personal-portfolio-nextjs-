import Image from "next/image";
import React from "react";
import contact from "../../public/contact1.webp";
import { FiLinkedin } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { SiFreelancer } from "react-icons/si";
import Link from "next/link";

const Contactside = () => {
  return (
    <div className="rounded-lg gradient md:w-[35%] w-full  mx-auto  h-auto shadow-lg border-2 ">
      <div className="m-8 rounded-lg border-2">
        <Image
          className="overflow-hidden rounded-lg hover:scale-105 ease  transition-transform duration-500"
          src={contact}
          alt="image"
        />
      </div>
      <div className="p-4 ml-4">
        <h4 className="text-2xl leading-3 font-semibold mb-5 ">
          Santosh Alimkar
        </h4>
        <p className="text-medium text-[#3c3e41] mb-4">MERN Stack Developer</p>
        <p className="font-normal text-lg text-[#3c3e41] mb-4">
          I am available for freelance work. Connect with me via and call in to
          my account.
        </p>
        <span className="font-normal text-lg text-[#3c3e41] block">
          Phone : 8669186483
        </span>
        <span className="font-normal text-lg text-[#3c3e41] block mb-4">
          Email : santosh.sa4d@gmail.com
        </span>
        <div className="">
          <p className="text-[#4d5053] uppercase tracking-widest text-sm font-medium md:font-thin">
            Find with me{" "}
          </p>
          <div className="flex justify-start items-center  gap-4 mt-8 mb-8">
            <div whileHover={{ y: -4 }}>
              <Link href="https://www.linkedin.com/in/santoshalimkar/">

              <FiLinkedin className=" hovericon transition-all duration-700 bg-transparent text-black text-5xl  shadow-md p-3 rounded-md " />
              </Link>
            </div>
            <div whileHover={{ y: -4 }}>
              <Link href='https://github.com/Santoshalimkar'>

              <AiFillGithub className=" hovericon transition-all duration-700 bg-transparent text-black text-5xl  shadow-md p-3 rounded-md " />
              </Link>
            </div>
            <div whileHover={{ y: -4 }}>
              <Link href='https://www.freelancer.in/u/santoshsa4d'>
              <SiFreelancer className=" hovericon transition-all duration-700 bg-transparent text-black text-5xl  shadow-md p-3 rounded-md " />

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactside;
