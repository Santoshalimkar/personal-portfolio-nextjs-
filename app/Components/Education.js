import React from 'react'
import Edutimeline from './Edutimeline'
import Expertimeline from './Expertimeline'

const Education = () => {
  return (
    <div className='mt-4 p-8 flex md:flex-row flex-col mx-auto justify-around item center h-auto'>
      <div><Edutimeline/></div>
      <div className='md:mt-0 mt-8'><Expertimeline/></div>
    </div>
  )
}

export default Education