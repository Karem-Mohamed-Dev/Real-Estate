import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const root = e.target.elements;
    const name = root[0].value;
    const email = root[1].value;
    const password = root[2].value;
    try {

      if (!email || !name || !password)
        return setError('Enter Non Empty Values');

      if (name.length < 3)
        return setError('Name Cannot Be Less Than 3 Chars');

      if (password.length < 6)
        return setError('Password Must Be More Than 6 Chars');


      const res = await fetch(import.meta.env.VITE_BASE_URL + "/auth/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });



      const data = await res.json();

      if (!res.ok)
        return setError(data.msg);

        navigate('/login');

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='p-5 flex justify-center pt-10'>
      <div className='border rounded p-5 w-full max-w-[550px] shadow'>
        <h1 className='text-center font-semibold text-2xl mb-5'>Sign Up</h1>
        {error && <p className='p-2 bg-red-200 text-red-900 border border-red-600 rounded'>{error}</p>}
        <form onSubmit={submitHandler} className='flex flex-col gap-4 mb-5'>
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