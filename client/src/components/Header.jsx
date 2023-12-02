import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='bg-slate-100 '>
      <div className='flex justify-between items-center gap-3 max-w-6xl p-3 mx-auto'>
        <Link className='flex justify-center' to='/'><img src={logo} alt="Logo" className='w-[100px]' /></Link>

        <div className="md:hidden cursor-pointer" onClick={() => setShowMenu(true) }>
          <IoMdMenu className='text-2xl' />
        </div>

        {showMenu && <MobileSlider setShowMenu={setShowMenu} />}

        <div className='hidden md:flex justify-center items-center relative'>
          <input type="text" className='p-2 pr-10 rounded outline-none w-[350px]' />
          <IoSearch className='absolute top-1/2 -translate-y-1/2 right-2' />
        </div>
        <div className='hidden md:flex justify-center gap-4 font-medium'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

const MobileSlider = ({setShowMenu}) => {
  const [open,setOpen] = useState(false);

  const closeMenu = () => {
    setShowMenu(false)
  }

  useEffect(() => {
    setTimeout(() => setOpen(true), 0);
  })
  return (
    <>
      <div onClick={closeMenu} className='fixed top-0 right-0 h-screen w-screen bg-[#00000033]'></div>
      <div style={{right: open ? "0%" : "-100%"}} className='h-screen bg-white w-[80%] flex flex-col items-end gap-5 p-5 z-10 fixed top-0 right-0 duration-300'>

        <div onClick={closeMenu} className='bg-slate-100 p-2 rounded w-fit cursor-pointer'>
          <FaXmark />
        </div>

        <div className='relative w-full'>
          <input type="text" className='bg-slate-50 w-full p-2 rounded border outline-none text-left pr-10' />
          <IoSearch className='absolute top-1/2 -translate-y-1/2 right-2' />
        </div>

        <div className='flex flex-col w-full'>
          <Link onClick={closeMenu} className=' p-3 border-b w-full' to='/'>Home</Link>
          <Link onClick={closeMenu} className=' p-3 border-b w-full' to='/about'>About</Link>
          <Link onClick={closeMenu} className=' p-3 border-b w-full' to='/login'>Login</Link>
          <Link onClick={closeMenu} className=' p-3 border-b w-full' to='/signup'>Sign Up</Link>
        </div>

      </div>
    </>
  )
}

export default Header