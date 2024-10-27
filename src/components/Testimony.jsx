import React from "react";
import Profile from "../assets/Profile.png";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import CoffeeBean from '../assets/coffee_bean.png'

export default function Testimoney() {
  return (
    <div className="mt-48 px-36 relative">
        <img
        src={CoffeeBean}
        alt="CoffeeBean"
        className="absolute -top-48 right-0 w-1/3 h-[500px]"
        />

      <h1 className="text-8xl text-background font-butler font-bold mb-8">
        What
        <p className="text-7xl"> Our customers say</p>
      </h1>
      <div>
        <div className="flex">
        <div className="basis-1/4 flex flex-col gap-y-6  p-9 border-8 rounded-3xl bg-bgAccent border-secondary w-fit">
          <img 
          className="h-[350px] w-full  border-8 border-secondary rounded-t-xl"
          src={Profile} alt="profile" />
          <div className="mx-auto">
            <h1 className="text-3xl font-butler font-bold mb-2">MARZANA PAYEL</h1>
                <p className="text-2xl font-butler font-normal">UI UX Designer</p>
          </div>
        </div>
        <div className="basis-3/4 relative rounded-r-3xl p-14 bg-background h-fit my-auto">
        <p
        className="font-butler font-normal text-[40px] text-white"
        >
        Boost your productivity and build your mood with a short break in the most comfortable place. Boost your productivity and build your mood with a short.
        </p>
        <div className="flex w-fit mx-auto gap-x-4 items-center">
      <span className="rounded-full w-4 h-4 bg-primary"></span>
      <span className="rounded-full w-8 h-8 border-8 border-primary bg-white"></span>
      <span className="rounded-full w-4 h-4 bg-primary"></span>
     </div>
     <BiSolidQuoteAltRight
      className="text-secondary absolute right-14 bottom-14"
      size={88}
     />

        </div>
        </div>
      </div>
    </div>
  );
}
