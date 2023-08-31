import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import {RiJavascriptLine} from "react-icons/ri"
import {motion} from "framer-motion"

const Cerficatecard = () => {
  return (
    <div className='hovericon bg-[#eef1f4] shadow-lg h-[24rem] w-[22rem] transition-colors duration-400 mb-8 rounded-lg p-6 '>
    <motion.div
      initial={{y:0}}
      whileHover={{y:-20}}
      transition={{duration:0.5}}
     className='flex flex-col justify-evenly gap-8  items-start p-4 '>
      <span className='text-6xl  hovericon'><RiJavascriptLine/></span>
      <h4 className='font-semibold text-2xl'>Javascript Hackerrank</h4>
      <p className='font-base text-lg  mb-4'>description</p> 
      <span className='text-2xl'><AiOutlineArrowRight/></span>
    </motion.div>
  </div>  )
}

export default Cerficatecard