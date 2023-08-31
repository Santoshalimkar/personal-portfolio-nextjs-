import React from 'react'
import Cerficatecard from './Cerficatecard'
import {BsBook} from "react-icons/bs"
import {RiJavascriptLine} from "react-icons/ri"
import {FaReact} from "react-icons/fa"
import {BiLogoPython} from "react-icons/bi"
import {BiLogoCss3} from "react-icons/bi"
import {motion} from "framer-motion"
import {AiOutlineArrowRight} from "react-icons/ai"




const Certificate = () => {

   const data=[
    {
      icon:<BsBook/>,
      certificate_name:"Full-Stack Development",
      desc:"Proudly completed the  bootcamp from Times Pro Professional Learning, showcasing a comprehensive mastery of both front-end and back-end web development",
      link:""
   },
    {
      icon:<RiJavascriptLine/>,
      certificate_name:"Javascript",
      desc:"Accomplished the JavaScript certificate from HackerRank, showcasing a proficient understanding of JavaScript programming language",
      link:"https://www.hackerrank.com/certificates/1e68540c9a22"
   },
    {
      icon:<FaReact/>,
      certificate_name:"React JS",
      desc:"Completed the 'React JS' course on SoloLearn, showcasing a foundational understanding of React.js—a powerful JavaScript library for building user interfaces",
      link:"https://www.sololearn.com/certificates/CT-16XKKIWX"
   },
    {
      icon:<BiLogoPython/>,
      certificate_name:"Python Programming",
      desc:"Successfully completed the 'Python Programming' certificate from Ethans Tech, demonstrating a strong proficiency in Python programming language",
      link:"https://drive.google.com/file/d/1HgmFAB2ljuUNU5alPPHbx_wAi_U8Q00v/view"
   },
    {
      icon:<BiLogoCss3/>,
      certificate_name:"CSS",
      desc:"Successfully earned the 'CSS' certificate from HackerRank, showcasing a strong command of Cascading Style Sheets (CSS) for web development",
      link:"https://www.hackerrank.com/certificates/4750995f4e5a"
   },
    {
      icon:<BiLogoPython/>,
      certificate_name:"Python Microsoft",
      desc:"Attained the Python Programming certificate, highlighting my expertise in Python programming endorsed by Microsoft",
      link:"https://www.credly.com/earner/earned/badge/67372692-58aa-408e-8851-ae184bdbc6e6"
   },
  ]


  return (
    <div className='h-auto flex flex-wrap gap-8 justify-center   mt-8 p-12'>
    {data.map((data,index)=>(
          <div className='hovericon bg-[#eef1f4] shadow-lg h-[22rem] w-[22rem] transition-colors duration-400 mb-8 rounded-lg p-4 '>
        <motion.div
          initial={{y:0}}
          whileHover={{y:-20}}
          transition={{duration:0.5}}
        className='flex flex-col justify-evenly gap-6  items-start p-4 '>
          <span className='text-6xl  hovericon'>{data.icon}</span>
          <h4 className='font-semibold text-2xl'>{data.certificate_name}</h4>
          <p className=' font-base text-sm'>{data.desc}</p> 
          <span className='text-2xl'><AiOutlineArrowRight/></span>
        </motion.div>
      </div>  
      ))}

    </div>
  )
}

export default Certificate