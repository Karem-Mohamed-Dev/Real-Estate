import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const root = e.target.elements;
    const email = root[0].value;
    const password = root[1].value;
    try {
      const res = await fetch(import.meta.env.VITE_BASE_URL + "/auth/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      console.log(data);
      if (!res.ok)
        return setError(data.msg);

      navigate('/');

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='p-5 flex justify-center pt-10'>
      <div className='border rounded p-5 w-full max-w-[550px] shadow'>
        <h1 className='text-center font-semibold text-2xl mb-5'>LogIn</h1>
        {error && <p className='p-2 bg-red-200 text-red-900 border border-red-600 rounded mb-2'>{error}</p>}
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          <label className='flex flex-col gap-2'>
            <span>Email</span>
            <input type="email" className='outline-none p-2 rounded border' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Password</span>
            <input type="password" className='outline-none p-2 rounded border' />
          </label>
          <button type='submit' className='bg-slate-600 text-white p-2 rounded font-medium'>Login</button>
          <p>Don't Have account? <Link className='text-blue-600 font-medium hover:underline' to='/signup'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login