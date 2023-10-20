import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
  <>
  <div className='text-center p-10 md:text-3xl text-xl font-bold  border-2'>
    <h1>WE CARRY A VARIETY OF FASHION </h1>
    <h1>PRODUCTS THAT ARE GOOD FOR</h1>
    <h1>BOTH YOU AND THE PLANET</h1>
    <button className='btn rounded-full border-1 bg-transparent p-4 mt-7'>EXPLORE</button>
  </div>
  <div className='grid  md:grid-cols-3 grid-cols-2 border-2 '>
  <div className="card relative ">
  <Image width={500}  height={300} src="/images/img10.jpeg" alt="Shoes"  />
  <h2 className='absolute bottom-4 left-2 text-slate-200 text-xl font-bold drop-shadow-lg outline-black'>MEN-BAGS</h2>
 
</div>
<div className="card relative border-1-2 ">
  <Image width={500}  height={300} src="/images/img8.jpeg" alt="Shoes"  />
  <h2 className='absolute bottom-4 left-2 text-slate-200 text-xl font-bold drop-shadow-lg outline-black'>MEN-BAGS</h2>
 
</div>
<div className="card relative border-1-2 ">
  <Image width={500}  height={300} src="/images/img7.jpeg" alt="Shoes"  />
  <h2 className='absolute bottom-4 left-2 text-slate-200 text-xl font-bold drop-shadow-lg outline-black'>MEN-BAGS</h2>
 
</div>
<div className="card relative border-1-2 ">
  <Image width={500}  height={300} src="/images/img6.jpeg" alt="Shoes"  />
  <h2 className='absolute bottom-4 left-2 text-slate-200 text-xl font-bold drop-shadow-lg outline-black'>MEN-BAGS</h2>
 
</div>
<div className="card relative border-1-2 ">
  <Image width={500}  height={300} src="/images/img3.jpeg" alt="Shoes"  />
  <h2 className='absolute bottom-4 left-2 text-slate-200 text-xl font-bold drop-shadow-lg outline-black'>MEN-BAGS</h2>
 
</div>

</div>
  </>
  )
}

export default Categories