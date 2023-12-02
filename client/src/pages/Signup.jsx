import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='p-5 flex justify-center pt-10'>
      <div className='border rounded p-5 w-full max-w-[550px] shadow'>
        <h1 className='text-center font-semibold text-2xl mb-5'>Sign Up</h1>
        <form className='flex flex-col gap-4 mb-5'>
          <label className='flex flex-col gap-2'>
            <span>Name</span>
            <input type="text" className='outline-none p-2 rounded border' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Email</span>
            <input type="email" className='outline-none p-2 rounded border' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Password</span>
            <input type="password" className='outline-none p-2 rounded border' />
          </label>
          <button className='bg-slate-600 text-white p-2 rounded font-medium'>Sign Up</button>
          <button className='bg-red-600 text-white p-2 rounded font-medium'>Continue With Google</button>
        </form>
        <p>Have an account? <Link className='text-blue-600 font-medium hover:underline' to='/login'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup