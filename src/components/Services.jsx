import React from 'react'
import CoffeeOne from "../assets/1.png";
import CoffeeTwo from "../assets/2.png";
import CoffeeThree from "../assets/3.png";
import CoffeeBanner from '../assets/coffee_banner.png'

export default function Services() {
  return (
    <div 
    id='menu'
    className="relative mt-[130px] mb-[65px]">
    <img
        src={CoffeeBanner}
        alt="bg coffee"
        className="absolute -top-16 left-0  w-[433px] object-cover z-0"
      />
      <h1 className="text-8xl text-background font-butler font-extrabold text-center">
        We Provide
        <p className="text-[64px]">Quality coffee to deliver</p>
      </h1>
      <p className="my-4 mx-auto text-lg text-secondary font-butler font-normal text-center  w-5/12">
        Boost your productivity and build your mood with a short break in the
        most comfortable place. Boost your productivity and build your mood
        with a short.
      </p>
      <div className="my-8">
      <div className="flex items-center gap-x-8 mx-auto w-fit ">
        <img
          src={CoffeeOne}
          alt="bg coffee 1"
          className=" w-[350px] h-[429px] object-cover rounded-3xl"
        />

        <img
          src={CoffeeTwo}
          alt="bg coffee 1"
          className=" w-[423px] h-[567px] object-cover rounded-3xl"
        />
        <img
          src={CoffeeThree}
          alt="bg coffee 3"
         className=" w-[350px] h-[429px] object-cover rounded-3xl"
        />
      </div>
     <div className="flex w-fit mx-auto gap-x-2 items-center my-6">
      <span className="rounded-full w-3 h-3 bg-primary"></span>
      <span className="rounded-full w-6 h-6 border-[6px] border-primary"></span>
      <span className="rounded-full w-3 h-3 bg-primary"></span>
     </div>
      </div>
    </div>
  )
}
