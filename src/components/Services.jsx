import React from 'react'
import CoffeeOne from "../assets/1.png";
import CoffeeTwo from "../assets/2.png";
import CoffeeThree from "../assets/3.png";
import CoffeeBanner from '../assets/coffee_banner.png'

export default function Services() {
  return (
    <div 
    id='menu'
    className="relative mt-48">
    <img
        src={CoffeeBanner}
        alt="bg coffee"
        className="absolute -top-16 left-0  w-[29%] object-cover z-0"
      />
      <h1 className="text-9xl text-background font-butler font-bold text-center">
        We Provide
        <p className="text-8xl">Quality coffee to deliver</p>
      </h1>
      <p className="my-4 mx-auto text-2xl text-secondary font-butler font-normal text-center  w-5/12">
        Boost your productivity and build your mood with a short break in the
        most comfortable place. Boost your productivity and build your mood
        with a short.
      </p>
      <div className="my-8">
      <div className="flex items-center gap-x-8 mx-auto w-fit ">
        <img
          src={CoffeeOne}
          alt="bg coffee 1"
          className=" w-[400px] h-[500px] object-cover rounded-3xl"
        />

        <img
          src={CoffeeTwo}
          alt="bg coffee 1"
          className=" w-[500px] h-[700px] object-cover rounded-3xl"
        />
        <img
          src={CoffeeThree}
          alt="bg coffee 3"
          className=" w-[400px] h-[500px] object-cover rounded-3xl"
        />
      </div>
     <div className="flex w-fit mx-auto gap-x-4 items-center my-6">
      <span className="rounded-full w-4 h-4 bg-primary"></span>
      <span className="rounded-full w-8 h-8 border-8 border-primary"></span>
      <span className="rounded-full w-4 h-4 bg-primary"></span>
     </div>
      </div>
    </div>
  )
}
