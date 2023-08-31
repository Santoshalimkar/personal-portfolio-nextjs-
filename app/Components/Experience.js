import React from 'react'
import Expertimeline from './Expertimeline'
import Edutimeline from './Edutimeline'

const Experience = () => {
  return (
<div className='mt-4 p-8 flex md:flex-row flex-col mx-auto justify-around item center h-auto'>
      <div><Edutimeline/></div>
      <div className='mt-8'><Expertimeline/></div>
    </div>  )
}

export default Experience