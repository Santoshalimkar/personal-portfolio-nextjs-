'use client'
import Herosection from "./Components/Herosection";
import Resumesection from "./Components/Resumesection";
import {NextUIProvider} from "@nextui-org/react";
import Project from "./Project/page";
import Contact from "./Contact/page"



export default function Home() {
  return (
    <>
    <NextUIProvider>
    <div className="blurback">
      <Herosection />
      <Resumesection />
      <Project/>
      <Contact/>
      {/* <Footer/> */}
    </div>

     </NextUIProvider>
    </>
  );
}
