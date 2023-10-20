import React from 'react'

const Contact = () => {
  return (
   <>
   <div className="p-7 hero min-h-screen bg-base-200">
  <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold py-2">TALK TO US</h1>
      <p className="">We're here to help and answer any quuestions you</p>
      <p className="">might have.We look forward to hearing from you</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="password" placeholder="subject" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Messege</span>
          </label>
         <textarea placeholder='Write something...' name="" id="" cols="30" rows="10" className='input input-bordered'></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send messege</button>
        </div>
      </form>
    </div>
  </div>
</div>
   </>
  )
}

export default Contact