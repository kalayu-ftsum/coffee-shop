import React from 'react'
import logo from '../Logo.svg';

export default function Header() {
  return (
    <header className='flex gap-x-10 items-center relative z-10'>
    <img src={logo} className="w-[85.57px] h-[100px]" alt="logo" />   
    <nav className='flex justify-between flex-grow items-center'>
        <ul className='flex gap-x-8 text-white'>
            <li>
                <a href="#"  className='font-butler text-2xl font-normal'>Home</a>
            </li>
            <li>
                <a href="#"  className='font-butler text-2xl font-normal'>About Us</a>
            </li>
            <li>
                <a href="#" className='font-butler text-2xl font-normal'>Menu</a>
            </li>
            <li>
                <a href="#" className='font-butler text-2xl font-normal'>Our Specials</a>
            </li>
        </ul>
        <div className='flex gap-x-4'>
            <button className='font-butler font-bold text-lg px-8 py-4 rounded-lg border border-primary text-primary'>Sign in</button>
            <button className='font-butler font-bold text-lg px-8 py-4 rounded-lg bg-primary text-white'>Sign up</button>

        </div>
    </nav>
     
    </header>
  )
}
