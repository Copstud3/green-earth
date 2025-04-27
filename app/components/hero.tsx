import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className='bg-green max-sm:h-[250px] xl:h-[400px] w-full flex relative'>
        <div className='xl:pt-[120px] pt-[80px] pl-3 xl:pl-[160px] flex flex-col'>
        <p className='font-pompiere text-[30px] xl:text-[130px] text-white'>Gardening Enriches Lives</p>
        <p className='text-white font-geist text-[15px] max-sm:w-[250px] xl:text-[30px]'>Nurturing Nature, One Garden at a time.</p>
        </div>
        <Image src="/hero-image.png" alt="hero-image" width={500} height={500} className='absolute w-[200px] xl:w-[700px]  xl:right-0 right-0 xl:top-[-160px]'/>
    </section>
  )
}
