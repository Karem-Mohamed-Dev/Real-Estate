import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='p-5 flex justify-center pt-10'>
      <div className='border rounded p-5 w-full max-w-[550px] shadow'>
        <h1 className='text-center font-semibold text-2xl mb-5'>LogIn</h1>
        <form className='flex flex-col gap-4'>
          <label className='flex flex-col gap-2'>
            <span>Email</span>
            <input type="email" className='outline-none p-2 rounded border' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Password</span>
            <input type="password" className='outline-none p-2 rounded border' />
          </label>
          <button className='bg-slate-600 text-white p-2 rounded font-medium'>Login</button>
          <p>Don't Have account? <Link className='text-blue-600 font-medium hover:underline' to='/signup'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login