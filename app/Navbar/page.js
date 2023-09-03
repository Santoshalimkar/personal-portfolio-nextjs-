"use client";
import Link from "next/link";
import Image from "next/image";
import perpic from "../../public/perpic.jpeg";
import { Menuicon } from "../Components/Sidebar";
import { Closeicon } from "../Components/Sidebar";
import { ToggleSidebar } from "../Components/Sidebar";
import { Navlink } from "../Components/Sidebar";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const { toggle, setToggle } = ToggleSidebar();

  const style = {
    navlink:
      "uppercase hover:no-underline  text-gray-500 cursor-pointer hover:text-gray-300  font-semibold text-[0.8rem]  ",
    activenav:
      "text-red-500 hover:text-red-500 visited:text-red-500 visited:no-underline uppercase hover:no-underline   cursor-pointer   font-semibold text-[0.8rem]",
  };
  return (
    <>
      <div
        className={
          toggle
            ? `sticky top-0 brightness-50 blur-sm`
            : "sticky top-0  z-20   "
        }
      >
        <div className="h-16 w-full  bg-[#ecf0f3] border-2 flex justify-between items-center z-10 ">
          <div>
            <Image
              className="border-2 bg-slate-300  p-1 rounded-full h-14 w-14 "
              src={perpic}
              alt="perpic"
            />
          </div>
          <div>
            <ul className="hidden lg:flex md:flex sm:flex gap-6 p-2">
              <Link
                href="/"
                className={
                  pathname === "/" ? `${style.activenav}` : `${style.navlink}`
                }
              >
                Home
              </Link>
              <Link
                href="/About"
                className={
                  pathname === "/About"
                    ? `${style.activenav}`
                    : `${style.navlink}`
                }
              >
                REsume
              </Link>
              <Link
                href="/Project"
                className={
                  pathname === "/Project"
                    ? `${style.activenav}`
                    : `${style.navlink}`
                }
              >
                project
              </Link>
              <Link
                href="/Contact"
                className={
                  pathname === "/Contact"
                    ? `${style.activenav}`
                    : `${style.navlink}`
                }
              >
                contact
              </Link>
            </ul>
            <div className="flex items-center lg:hidden md:hidden sm:hidden p-3 text-2xl text-[#ff014f]">
              <Menuicon toggle={toggle} setToggle={setToggle} />
            </div>
          </div>
        </div>
      </div>
      {toggle && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }} // Initial x value is set to start offscreen to the right
          animate={{
            x: "50%",
            opacity: [0, 0.3, 1],
            transition: { duration: 0.5, times: [0, 0.5, 1] },
          }} // Animate to slide in from the right up to 20% from the left with fast start and slow end
          exit={{ opacity: [1, 0.3, 0], x: "100%" }}
          className="zindex bg-[#ecf0f3] w-4/5 z-20  top-0 h-screen fixed overflow-y-auto overflow-hidden shadow-md"
        >
          <div className="absolute  w-full flex justify-start p-2 items-end text-[#ff014f] ">
            <Closeicon setToggle={setToggle} toggle={toggle} />
          </div>

          <div className="zindex flex flex-col justify-between ">
            <div>
              <Navlink setToggle={setToggle} toggle={toggle} />
            </div>
            <div className="absolute bottom-12">
              <div className="bg-[#ecf0f3] flex justify-center items-center w-full p-2 h-30 gap-4 mx-auto ">
                <div>
                  <Image
                    className="border-2 bg-slate-300  p-1 rounded-full h-14 w-14 "
                    src={perpic}
                    alt="perpic"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">
                    © 2023.All rights reserved by <br></br> Santosh Alimkar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
