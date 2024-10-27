import React from "react";
import Heart from "../assets/heart.png";
import CupOne from "../assets/cup 1.png";
import CupTwo from "../assets/cup 2.png";
import CupThree from "../assets/cup 3.png";
import CupFour from "../assets/cup 4.png";

export default function AboutUs() {
  return (
    <div className=" mx-36 mt-36">
      <div className="flex justify-between">
        <img src={Heart} alt="heart coffee" className="w-80" />
        <div>
          <h1 className="text-end text-8xl text-background font-butler font-bold mb-8">
            Our Shop
            <p className="text-end text-7xl"> Our dream gallery</p>
          </h1>
          <p className="text-end ml-auto my-4 text-2xl text-secondary font-butler font-normal  w-5/12">
            Boost your productivity and build your mood with a short break in
            the most comfortable place. Boost your productivity
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-4 my-8">
        <img
          src={CupThree}
          alt="heart coffee"
          className="col-span-2 rounded-3xl w-full  h-[312px]"
        />
             <img
          src={CupFour}
          alt="heart coffee"
          className="col-span-2 row-span-2 rounded-3xl w-full h-[640px]"
        />
         <img
          src={CupOne}
          alt="heart coffee"
          className="rounded-3xl w-full  h-[312px]"
        />
                <img
          src={CupTwo}
          alt="heart coffee"
          className="rounded-3xl w-full h-[312px]"
        />
      </div>
    </div>
  );
}
