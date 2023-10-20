import Image from 'next/image'
import React from 'react'

const Products = () => {
  return (
    <>
    <div className='flex justify-between p-10'>
      <h1 className='font-bold text-3xl'>NEW RELEASE</h1>
      <button className='btn rounded-full border-2 border-red-400'>VIEW MORE</button>
    </div>
  <div className="grid gap-3 md:grid-cols-3 grid-cols-1 ">
    <div className="card border-2  ">
<Image width={500}  height={300} src="/images/img1.jpeg" alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">KES 20,000</div>
    </h2>
   
    <div className="card-actions justify-end">
     
      <div className="badge badge-outline">Add to cart</div>
    </div>
  </div>
</div>
<div className="card border-2  ">
<Image width={500}  height={300} src="/images/img10.jpeg" alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">KES 20,000</div>
    </h2>
   
    <div className="card-actions justify-end">
     
      <div className="badge badge-outline">Add to cart</div>
    </div>
  </div>
</div>
<div className="card border-2  ">
<Image width={500}  height={300} src="/images/img2.jpeg" alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">KES 20,000</div>
    </h2>
   
    <div className="card-actions justify-end">
     
      <div className="badge badge-outline">Add to cart</div>
    </div>
  </div>
</div>
  </div>
    </>
  )
}

export default Products