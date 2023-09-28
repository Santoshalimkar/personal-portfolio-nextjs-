'use client'
import React from 'react'
import {Spinner} from "@nextui-org/react";



const loading = () => {
  return (
    <div className='h-screen justify-center flex items-center dark:bg-slate-900 bg-[#ecf0f3]'>
            <Spinner size='lg' label="Loading..." color="danger" />
    </div>
 )
}

export default loading