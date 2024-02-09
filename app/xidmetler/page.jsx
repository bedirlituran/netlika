"use client";
import React from 'react'
import Xidmet from '../../components/Xidmet'
import Yenicarding from '../../components/Carding'
import { NextSeo } from 'next-seo'
const page = () => {
  return (
    <div className='flex-col justify-around dark:text-black'>
      <NextSeo title="Gammanet tv Xidmətlər" description='Xidmətlərimizlə tanış olun'/>
      <div className='h-screen'><Xidmet/></div>
      <div className='mb-10'><Yenicarding /></div>
      
    </div>
  )
}

export default page
