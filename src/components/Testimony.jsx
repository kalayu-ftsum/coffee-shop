import React from "react";
import Profile from "../assets/Profile.png";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import CoffeeBean from '../assets/coffee_bean.png'

export default function Testimoney() {
  return (
    <div className="mt-[130px] px-[135px] relative">
        <img
        src={CoffeeBean}
        alt="CoffeeBean"
        className="absolute -top-[135px] right-0 w-[423px] h-[433px]"
        />

      <h1 className="text-8xl text-background font-butler font-extrabold mb-8">
        What
        <p className="text-[64px]"> Our customers say</p>
      </h1>
      <div className="pt-4">
        <div className="flex">
        <div className="flex flex-col gap-y-6  p-6 border-8 rounded-3xl bg-bgAccent border-secondary w-[370px] h-[425px]">
          <img 
          className="h-[299px] w-full  border-8 border-secondary rounded-t-xl"
          src={Profile} alt="profile" />
          <div className="mx-auto">
            <h1 className="text-2xl leading-none font-butler font-bold mb-2">MARZANA PAYEL</h1>
                <p className="text-base leading-[140%] font-butler font-normal">UI UX Designer</p>
          </div>
        </div>
        <div className="basis-3/4 relative rounded-r-3xl p-14 bg-background h-fit my-auto">
        <p
        className="font-butler font-normal text-2xl leading-[140%] text-white"
        >
        Boost your productivity and build your mood with a short break in the most comfortable place. Boost your productivity and build your mood with a short.
        </p>
        <div className="flex w-fit mx-auto gap-x-2 items-center">
      <span className="rounded-full w-3 h-3 bg-primary"></span>
      <span className="rounded-full w-6 h-6 border-[6px] border-primary bg-white"></span>
      <span className="rounded-full w-3 h-3 bg-primary"></span>
     <BiSolidQuoteAltRight
      className="text-bgAccent absolute right-14 bottom-[50.5]"
      size={88}
      />
      </div>

        </div>
        </div>
      </div>
    </div>
  );
}
