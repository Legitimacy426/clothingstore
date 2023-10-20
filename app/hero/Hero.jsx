import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row typewriter">
    <Image width={400} height={40} src="/images/cryinglogo.jpeg" alt='logo' className="max-w-sm rounded-lg shadow-2xl" />
      <div className='items-center'>
        <h1 className="font-bold md:text-6xl text-3xl">CRYING SATURN</h1>
       <div className=' text-center'>
       <h2 className="mt-2 mb-2 ">A Holy Body from Space</h2>
        <button className="btn w-40 bg-transparent  border-2 border-red-400 rounded-full">SHOP NOW</button>
       </div>
       
      </div>
    </div>
  </div>
  )
}

export default Hero