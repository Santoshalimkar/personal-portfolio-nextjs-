"use client";
import React from "react";
import Image from "next/image";
import perpic from "../../public/perpic.jpeg";

function Footer() {
  return (
    <div className="bg-[#ecf0f3] dark:bg-slate-900 flex justify-center items-center w-full h-40 gap-4 mx-auto flex-col">
      <div>
        <Image
          className="border-2 bg-slate-300 dark:bg-slate-900  p-1 rounded-full h-14 w-14 "
          src={perpic}
          alt="perpic"
        />
      </div>
      <div>
        <p className="text-sm text-gray-500">
          © 2023.All rights reserved by Santosh Alimkar
        </p>
      </div>
    </div>
  );
}

export default Footer;
