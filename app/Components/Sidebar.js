"use client";
import { ImMenu } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";







export const ToggleSidebar = () => {
  const [toggle, setToggle] = useState(false);
  return { toggle, setToggle };
};

export const Menuicon = ({ toggle, setToggle }) => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.blurback');
    const activeClass = 'active';
    sidebar.classList.toggle(activeClass);
    setToggle(!toggle);
  };

  return <ImMenu onClick={toggleSidebar} />;
};

// Closeicon component





export const Closeicon = ({ toggle, setToggle }) => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.blurback');
    sidebar.classList.remove('active');

    setToggle(!toggle);
  };

  return (
    <AiFillCloseCircle className="mt-2 text-2xl cursor-pointer" onClick={toggleSidebar} />
  );
};

export const Navlink = ({ toggle, setToggle  }) => {
    const pathname=usePathname()

    const toggleSidebar1 = () => {
      const sidebar = document.querySelector('.blurback');
    sidebar.classList.remove('active');
        setToggle(!toggle);
      };
    const style={
        navlink:' hover:no-underline   text-center uppercase text-gray-500  cursor-pointer hover:bg-[#ff014f] hover:w-full  p-2 rounded-md hover:text-white transition-colors duration-500 font-semibold text-[0.7rem',
        activenav:"hover:text-white hover:no-underline text-center bg-[#ff014f] text-white w-full rounded-md uppercase  cursor-pointer  transition-colors duration-500 font-semibold p-2 text-[0.7rem"

      }
  return (
    <div className="absolute z-10  ">
      <ul className=" absolute flex flex-col gap-6 pl-0 mt-12 mx-2 w-40 ">
      <Link href="/" onClick={toggleSidebar1}  className={pathname === '/' ? `${style.activenav}` : `${style.navlink}`}>Home
            </Link>
            <Link  href="/About" onClick={toggleSidebar1}  className={pathname=='/About'  ? `${style.activenav}` : `${style.navlink}`}>resume
            </Link>
            <Link href="/Project" onClick={toggleSidebar1}  className={pathname === '/Project' ? `${style.activenav}` : `${style.navlink}`}>project
            </Link>
            <Link href="/Contact" onClick={toggleSidebar1}  className={pathname === '/Contact' ? `${style.activenav}` : `${style.navlink}`}>contact
            </Link> 
       
      </ul>
    </div>
  );
};
