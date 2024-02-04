"use client";
import React from 'react'
import Xidmet from '../../components/Xidmet'
import Yenicarding from '../../components/Carding'
import { NextSeo } from 'next-seo'
const page = () => {
  return (
    <div>
      <NextSeo title="Gammanet tv Xidmətlər" description='Xidmətlərimizlə tanış olun'/>
      <Xidmet />
      <Yenicarding />
    </div>
  )
}

export default page
