'use client'
import Image from 'next/image'
import React from 'react'
import pic from "../../public/Pic.png"
import {FiLinkedin} from "react-icons/fi"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineArrowUp} from "react-icons/ai"
import {SiFreelancer} from "react-icons/si"
import {motion} from "framer-motion"
import { useTypewriter } from 'react-simple-typewriter'
import { Link } from '@nextui-org/react'




function Herosection() {
  const [text] = useTypewriter({
    words: ['Developer', 'Professional coder'],
    loop: 0
  })

  const pageup=()=>{
    window.scrollTo(0, 0); 
  }

  return (
    <div className='blurback  bg-[#ecf0f3] h-auto border-b-2 p-2 pb-24  flex flex-col-reverse md:flex sm:flex-col-reverse md:flex-row justify-between z-0'>
        <div className="mt-12 p-2 flex lg:ml-12 md:ml-12 mx-auto sm:ml-12 flex-col items-start gap-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            

            <div>
            <p className='uppercase tracking-widest text-sm font-thin text-[#4d5053]'>
              welcome to my world
            </p>
            </div>
            <div>
              <h2 className='text-3xl md:text-5xl  text-[#1e2125]'>
              Hi, I’m <span className='text-[#ff014f]'>Santosh Alimkar</span> 
              </h2>
              <h2 className='text-2xl md:text-5xl  text-[#ff014f] mt-2'>
              a<span className='text-[#1e2125] text-2xl md:text-4xl ml-4'>{text}</span> 
              </h2>
            </div>
            <div> 
            <p className='md:w-[75%] lg:w-[75%]  font-normal text-sm text-[#3c3e41] mb-4'>
            Im excited about the potential to collaborate on exciting projects. Whether its 
            a dynamic web application, an e-commerce platform, or a custom solution, Im ready to
             bring ideas to life. Lets discuss how I can contribute to your next venture!
            </p>
            </div>
            
            <div className=''> 
             <p className='text-[#4d5053] uppercase tracking-widest text-sm font-thin'>Find with me </p>
                   <div className='flex justify-start items-center  gap-4 mt-12'>

                    <Link href="https://www.linkedin.com/in/santoshalimkar/"><motion.div whileHover={{y:-4}}><FiLinkedin className=' hovericon transition-all duration-700 bg-transparent text-black text-6xl  shadow-md p-3 rounded-md '/></motion.div></Link>
                    <Link href="https://github.com/Santoshalimkar"><motion.div whileHover={{y:-4}}><AiFillGithub className=' hovericon transition-all duration-700 bg-transparent text-black text-6xl  shadow-md p-3 rounded-md '/></motion.div></Link>
                    <Link href="https://www.freelancer.in/u/santoshsa4d"><motion.div whileHover={{y:-4}}><SiFreelancer className=' hovericon transition-all duration-700 bg-transparent text-black text-6xl  shadow-md p-3 rounded-md '/></motion.div></Link>
                   </div>
            </div>
          
          
        </div>





        {/* personal pic  */}

        <div className='z-10 flex  justify-center item-center'>
                <div className='gradient w-80 lg:h-80 md:h-80 sm:h-80 h-80 shadow-md md:mt-28 mt-16 md:mr-16'>

                <div className='relative flex items-center justify-center md:bottom-24 sm:bottom-24  bottom-24 '>
                      <Image className='w-full h-[auto] sm:h-[auto] md:h-[auto] lg:h-[auto]' src={pic} alt='perpic' />
                </div>
                </div>
        </div>



      <div className='fixed bottom-8 right-8 z-50 '
           onClick={pageup}>
         <motion.div initial={{y:0 ,opacity:0}} animate={{y:-4,opacity:1}}><AiOutlineArrowUp className=' hovericon transition-all duration-700 text-red-500  text-4xl font-bold  shadow-lg p-2 rounded-full '/></motion.div>

      </div>

    </div>
   
  )
}

export default Herosection