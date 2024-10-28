import React from 'react'
import StarOne from '../assets/Star 1.svg'
import StarTwo from '../assets/Star 2.svg'
import FreshCoffee from '../assets/fresh-coffee-steams-wooden-table-close-up-generative-ai 1.png'
export default function ImageBanner() {
  return (
    <div
    className='relative w-full h-[533px] bg-cover flex justify-center flex-col items-center gap-y-10'
    style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 55%) 0%, rgba(0, 0, 0, 0%) 100%) no-repeat , url('${FreshCoffee}') no-repeat`,
        backgroundSize:'cover'
    }}
    >
        <div className='absolute top-8 right-48'>
            <div className='relative'>
            <img src={StarOne} 
            alt="star 1" 
            className="w-[178px] h-[178px]"
            />
            <img src={StarTwo} 
            className='absolute top-0 left-0 w-[178px] h-[178px] scale-110'
            alt="star 1" />
             <h3
            className='font-butler font-black text-4xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 '
            >
            50% 
            <p
            className='font-extrabold text-xl'
            >
         Discount

            </p>
            </h3>

            </div>
           
        </div>
        <h2
        className="font-slash font-thin text-5xl leading-auto text-white "
        >
       Today’s Special
        </h2>
        <h1
        className="font-butler font-bold text-9xl leading-tight text-white "
        >
        Coffee Time
        </h1>
        <button className="h-12 font-butler font-bold text-lg px-6 rounded-lg bg-primary text-white">
        Order now
      </button>
    </div>
  )
}
